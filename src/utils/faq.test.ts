import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FAQ_ITEMS,
  buildFaqWhatsAppUrl,
  filterFaqItems,
  formatFaqIndex,
} from './faq';

test('filterFaqItems returns all items for "all" and narrows accurately per topic', () => {
  const all = filterFaqItems(FAQ_ITEMS, 'all');
  const production = filterFaqItems(FAQ_ITEMS, 'production');
  const logistics = filterFaqItems(FAQ_ITEMS, 'logistics');
  const payment = filterFaqItems(FAQ_ITEMS, 'payment');

  assert.equal(all.length, FAQ_ITEMS.length);
  assert.ok(production.length >= 2);
  assert.ok(logistics.length >= 2);
  assert.ok(payment.length >= 2);
  assert.equal(production.length + logistics.length + payment.length, all.length);
  assert.ok(production.every((item) => item.category === 'production'));
  assert.ok(logistics.every((item) => item.category === 'logistics'));
  assert.ok(payment.every((item) => item.category === 'payment'));
});

test('formatFaqIndex formats editorial indices cleanly in Bangla and English', () => {
  assert.equal(formatFaqIndex(0, 'en'), '01.');
  assert.equal(formatFaqIndex(7, 'en'), '08.');
  assert.equal(formatFaqIndex(0, 'bn'), '০১.');
  assert.equal(formatFaqIndex(7, 'bn'), '০৮.');
});

test('all FAQ items have non-empty Bangla and English content with zero personal info', () => {
  for (const item of FAQ_ITEMS) {
    assert.ok(item.question.bn.trim().length > 10);
    assert.ok(item.question.en.trim().length > 10);
    assert.ok(item.answer.bn.trim().length > 20);
    assert.ok(item.answer.en.trim().length > 20);
  }
});

test('buildFaqWhatsAppUrl encodes official WhatsApp number and active topic context', () => {
  const urlBn = buildFaqWhatsAppUrl('bn', 'payment');
  const urlEn = buildFaqWhatsAppUrl('en', 'logistics');

  assert.ok(urlBn.startsWith('https://wa.me/8801764713206?text='));
  assert.ok(decodeURIComponent(urlBn).includes('পেমেন্ট ও নিয়ম'));
  assert.ok(urlEn.startsWith('https://wa.me/8801764713206?text='));
  assert.ok(decodeURIComponent(urlEn).includes('Shoot Logistics'));
});
