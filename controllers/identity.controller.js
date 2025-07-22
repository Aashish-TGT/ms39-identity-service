import { Identity, Consent } from '../db.js';
import { validateIdentity } from '../services/mockIdentity.service.js';

export const bindIdentity = async (req, res) => {
  try {
    const { receiptId, identityType, identityValue, purpose } = req.body;

    if (!receiptId || !identityType || !identityValue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const isValid = await validateIdentity(identityType, identityValue);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid identity format' });
    }

    await Identity.create({ receiptId, identityType, identityValue });
    await Consent.create({ receiptId, identityValue, purpose });

    return res.status(201).json({ msg: '✅ Identity linked and consent saved' });
  } catch (err) {
    console.error('❌ Error in bindIdentity:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getConsent = async (req, res) => {
  try {
    const { receiptId } = req.params;

    if (!receiptId) {
      return res.status(400).json({ error: 'Receipt ID is required' });
    }

    const consents = await Consent.findAll({ where: { receiptId } });
    return res.status(200).json(consents);
  } catch (err) {
    console.error('❌ Error in getConsent:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
