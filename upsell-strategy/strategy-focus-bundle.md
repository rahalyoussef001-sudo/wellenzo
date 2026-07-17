# Monetization & Upsell Strategy — Wellenzo Focus Bundle

This document outlines the complete monetization path and value ladder designed for **Wellenzo** around the main **ADHD Focus Bundle ($47 USD)**.

---

## 1. The Value Ladder (Échelle de Valeur)

```text
[NIVEAU 5: HIGH-TICKET] 1-on-1 Routine Design Coaching ($197 USD)
       ▲
       │ Post-purchase Email Sequence (Day 14)
       │
[NIVEAU 4: UPSELL] Dopamine Mapping Video Masterclass ($97 USD)
       ▲
       │ Post-Purchase 1-Click Offer (Immediate)
       │
[NIVEAU 3: CORE PRODUCT] Wellenzo ADHD Focus Bundle ($47 USD)
       ▲
       │ Checkout Checkout Checkbox
       │
[NIVEAU 2: ORDER BUMP] Workspace Declutter & Binaural Soundscapes ($9 USD)
       ▲
       │ Welcome Drip Funnel (Emails 1-5)
       │
[NIVEAU 1: LEAD MAGNET] The Task Paralysis Survival Guide (Free PDF)
```

### Value Progression Logic:
1. **Free Lead Magnet (Level 1)**: Solves the immediate *firefighter* problem (stuck on the sofa/desk) in 15 minutes.
2. **Order Bump (Level 2)**: Solves a sensory/physical environment problem (noisy workspace, chaotic desk) for a small, friction-free amount.
3. **Core Bundle (Level 3)**: Solves the long-term *architect* problem (permanent structures, Notion dashboard, 60-page clinical playbook).
4. **Upsell (Level 4)**: Solves the customization and execution speed problem (video walkthroughs, personal bio-hacking templates).
5. **High-Ticket (Level 5)**: Solves the human accountability problem (1-on-1 custom routing coaching with Alex).

---

## 2. The Order Bump

**Product**: ADHD Workspace Declutter Pack & loopable Binaural Focus Soundscapes.  
**Price**: $9 USD (One-time payment)  
**Placement**: Checkout screen checkbox just before final Stripe payment.  

### Checkbox HTML & Copy Layout:

```html
<div class="stripe-order-bump" style="
  border: 2px dashed #10B981;
  background: rgba(16, 185, 129, 0.03);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
">
  <input type="checkbox" id="order-bump" name="order-bump" style="margin-top: 4px; cursor: pointer; accent-color: #10B981;">
  <label for="order-bump" style="cursor: pointer; font-family: 'Outfit', sans-serif;">
    <span style="
      background: #10B981;
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      text-transform: uppercase;
      margin-right: 0.5rem;
    ">Special Offer</span>
    <strong style="color: #1A2F25; font-size: 0.95rem;">Yes! Add the Workspace Declutter Checklist &amp; Binaural Soundscapes for only $9</strong>
    <p style="color: #4A5568; font-size: 0.85rem; margin-top: 0.25rem; line-height: 1.4;">
      Get our 10-step sensory workspace checklist and 5 loopable 1-hour Binaural Focus audio tracks (Beta and Alpha waves) specifically designed to lock in neurodivergent focus. (Save 60% off normal price of $24).
    </p>
  </label>
</div>
```

---

## 3. Post-Purchase Upsell (1-Click)

**Product**: The Dopamine Mapping Video Masterclass.  
**Price**: $97 USD (One-time payment)  
**Timing**: Promoted immediately after purchase on an intermediate page before the final Thank You page.  

### Sales Copy for the Upsell Page:

```text
WAIT! YOUR ORDER IS NOT YET COMPLETE.
DO NOT CLOSE THIS PAGE.

"Want Alex to walk you through setting up your dopamine-friendly routines?"

Get the 4-Part Dopamine Mapping Video Masterclass for a one-time price of $97 (Regularly $197).

What you will get:
1. Video Walkthroughs: Watch Alex configure the Notion Dashboard and planner templates step-by-step.
2. The Dopamine Mapping Workshop: Learn how to track your high-energy hours and build a custom sensory menu.
3. Bio-hacking Video Guide: Deep-dive into specific clinical studies and routines.

[ YES! Add the Masterclass to my order ($97) ]
(Billing will update automatically via Stripe 1-Click)

[ No thanks, I'll figure the templates out on my own ]
```

---

## 4. The Downsell Option

**Downsell Product**: The Audio-Only Masterclass + Worksheets.  
**Price**: $47 USD (Save $50)  
**Logic**: Triggered only if the buyer clicks *"No thanks..."* on the $97 Upsell page.

### Sales Copy for the Downsell Page:

```text
"Is $97 a bit much right now?"

Get the Audio-Only Version + All Masterclass Worksheets for just $47 (Save $50).

You get the exact same lessons, clinical stacks, and worksheets in high-quality audio tracks, perfect for listening on your phone during chores or commutes.

[ YES! Give me the Audio + Worksheets for only $47 ]
[ No thanks, take me to my download page ]
```

---

## 5. Séquence Email d'Ascension (High-Ticket)

This sequence is sent to purchasers of the $47 Focus Bundle, 14 days after purchase, to ascend them into Level 5: **1-on-1 Routine Design Coaching ($197 USD)**.

### Email 1: The Personal Check-in (Day 14)
- **Subject**: How is the Quiet Focus planner working for you?
- **From**: alex@wellenzo.com
- **Body**: Check-in on their progress. Ask if they have faced any executive friction. Suggest a personal check-in.
- **CTA**: Soft reply link.

### Email 2: The Calibration Block (Day 17)
- **Subject**: Why templates need personalized calibration
- **Body**: Explain that a Notion template is only 50% of the solution; the other 50% is calibrating it to your daily routine blocks. Offer 1-on-1 audit.
- **CTA**: Booking link to Stripe / Calendar page ($197).

---

## 6. Financial Impact & LTV Calculations

Based on standard digital product benchmarks in the productivity niche:

### Scenario A: Zero Upsell (Baseline)
- Average Cart Value: **$47.00 USD**
- Lifetime Value (LTV): **$47.00 USD**
- Max Customer Acquisition Cost (CAC) for break-even: **$47.00**

### Scenario B: With Value Ladder Configured
- **Core Product**: $47.00 (100% of buyers)
- **Order Bump ($9)**: 30% take rate = **+$2.70** average cart value
- **Post-Purchase Upsell ($97)**: 12% take rate = **+$11.64** average cart value
- **Downsell ($47)**: 8% take rate (from the 88% refusers) = **+$3.30** average cart value
- **High-Ticket Ascension ($197)**: 3% of bundle buyers purchase coaching = **+$5.91** LTV addition

### Final Impact:
- **New Average Cart Value**: **$64.64 USD** (an increase of **+37.5%**)
- **New Lifetime Value (LTV)**: **$70.55 USD** (an increase of **+50.1%**)
- **Acquisition Leverage**: You can now spend up to **$64.60** to acquire one customer at break-even (instead of $47.00), allowing you to outbid competitors in Meta/Instagram ads.
