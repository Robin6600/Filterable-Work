import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildConsultationWhatsAppUrl,
  createConsultationLeadRecord,
  validateConsultationForm,
} from './consultation';

test('validateConsultationForm rejects empty and malformed inputs with localized messages', () => {
  const emptyEn = validateConsultationForm(
    { name: '', email: '', projectType: '' },
    'en'
  );
  assert.ok(emptyEn.name);
  assert.ok(emptyEn.email);
  assert.ok(emptyEn.projectType);

  const badEmailBn = validateConsultationForm(
    { name: 'আরিফ হোসেন', email: 'not-an-email', projectType: 'monthly-growth' },
    'bn'
  );
  assert.equal(badEmailBn.name, undefined);
  assert.ok(badEmailBn.email);
  assert.equal(badEmailBn.projectType, undefined);
});

test('validateConsultationForm passes clean valid lead submissions', () => {
  const errors = validateConsultationForm(
    { name: 'Tanvir Ahmed', email: 'tanvir@padmagreen.bd', projectType: 'grand-launch' },
    'en'
  );
  assert.deepEqual(errors, {});
});

test('createConsultationLeadRecord normalizes fields and builds prefilled WhatsApp URL', () => {
  const lead = createConsultationLeadRecord(
    {
      name: '  Farhana Yasmin  ',
      email: '  Farhana@Clinic.BD ',
      projectType: 'monthly-growth',
    },
    7
  );

  assert.equal(lead.id, 'GF-1007');
  assert.equal(lead.name, 'Farhana Yasmin');
  assert.equal(lead.email, 'farhana@clinic.bd');

  const urlEn = buildConsultationWhatsAppUrl(lead, 'en');
  assert.ok(urlEn.startsWith('https://wa.me/8801764713206?text='));
  assert.ok(decodeURIComponent(urlEn).includes('GF-1007'));
  assert.ok(decodeURIComponent(urlEn).includes('Monthly Video & Growth Retainer'));

  const urlBn = buildConsultationWhatsAppUrl(lead, 'bn');
  assert.ok(decodeURIComponent(urlBn).includes('মাসিক ভিডিও ও বিজনেস গ্রোথ প্যাকেজ'));
});
