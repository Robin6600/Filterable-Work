import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildRoiPlanWhatsAppUrl,
  calculateGrowthProjection,
  ROI_INVESTMENT_TIERS,
} from './roiEstimator';

test('higher monthly investment strictly increases projected reach and inquiries', () => {
  const tiers = ROI_INVESTMENT_TIERS.map((t) =>
    calculateGrowthProjection('showroom-furniture', t.amountBdt, 1, 'en')
  );

  for (let i = 1; i < tiers.length; i++) {
    assert.ok(tiers[i].monthlyReachMinK > tiers[i - 1].monthlyReachMinK);
    assert.ok(tiers[i].monthlyInquiriesMin > tiers[i - 1].monthlyInquiriesMin);
    assert.ok(tiers[i].monthlySavingsBdt < tiers[i - 1].monthlySavingsBdt);
  }
});

test('3-month and 6-month consistency horizons compound reach and inquiry projections', () => {
  const m1 = calculateGrowthProjection('healthcare-education', 25000, 1, 'en');
  const m3 = calculateGrowthProjection('healthcare-education', 25000, 3, 'en');
  const m6 = calculateGrowthProjection('healthcare-education', 25000, 6, 'en');

  assert.ok(m3.monthlyReachMaxK > m1.monthlyReachMaxK);
  assert.ok(m6.monthlyReachMaxK > m3.monthlyReachMaxK);
  assert.ok(m6.monthlyInquiriesMax > m3.monthlyInquiriesMax);
});

test('sector differences reflect high-ticket real estate vs high-volume retail', () => {
  const realEstate = calculateGrowthProjection('real-estate', 25000, 1, 'en');
  const retail = calculateGrowthProjection('retail-fashion', 25000, 1, 'en');

  assert.ok(retail.monthlyInquiriesMin > realEstate.monthlyInquiriesMin);
  assert.ok(realEstate.monthlySavingsBdt === 70000);
});

test('localized output and WhatsApp URL format cleanly in Bangla and English', () => {
  const bnProj = calculateGrowthProjection('real-estate', 40000, 3, 'bn');
  assert.match(bnProj.reachDisplay, /হাজার/);
  assert.match(bnProj.savingsDisplay, /টাকা/);

  const bnUrl = buildRoiPlanWhatsAppUrl(bnProj, 'bn');
  assert.ok(bnUrl.startsWith('https://wa.me/8801764713206?text='));
  assert.match(decodeURIComponent(bnUrl), /মার্কেট ডমিনেন্স/);

  const enProj = calculateGrowthProjection('hospitality-local', 15000, 6, 'en');
  const enUrl = buildRoiPlanWhatsAppUrl(enProj, 'en');
  assert.match(decodeURIComponent(enUrl), /Foundation Growth/);
  assert.match(decodeURIComponent(enUrl), /6-month consistency plan/);
});
