import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TESTIMONIALS,
  formatSlideCounter,
  getNextTestimonialIndex,
  getPrevTestimonialIndex,
} from './testimonials';

test('carousel navigation wraps cleanly in both directions', () => {
  assert.equal(getNextTestimonialIndex(0, 5), 1);
  assert.equal(getNextTestimonialIndex(4, 5), 0);
  assert.equal(getPrevTestimonialIndex(0, 5), 4);
  assert.equal(getPrevTestimonialIndex(2, 5), 1);
});

test('formatSlideCounter formats zero-padded counters in Bangla and English', () => {
  assert.equal(formatSlideCounter(0, 5, 'en'), '01 / 05');
  assert.equal(formatSlideCounter(4, 5, 'en'), '05 / 05');
  assert.equal(formatSlideCounter(0, 5, 'bn'), '০১ / ০৫');
  assert.equal(formatSlideCounter(3, 5, 'bn'), '০৪ / ০৫');
});

test('every testimonial includes complete bilingual client attribution and outcomes', () => {
  assert.ok(TESTIMONIALS.length >= 4);
  for (const item of TESTIMONIALS) {
    assert.ok(item.clientName.bn.trim().length > 2);
    assert.ok(item.clientName.en.trim().length > 2);
    assert.ok(item.role.bn.trim().length > 2);
    assert.ok(item.role.en.trim().length > 2);
    assert.ok(item.businessName.bn.trim().length > 3);
    assert.ok(item.businessName.en.trim().length > 3);
    assert.ok(item.quote.bn.trim().length > 30);
    assert.ok(item.quote.en.trim().length > 30);
    assert.ok(item.impactMetric.bn.trim().length > 4);
    assert.ok(item.impactMetric.en.trim().length > 4);
  }
});
