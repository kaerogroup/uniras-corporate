# UNIRAS Solutions — GA4 conversion intent events

## Status
- Prepared on the four public pages of solutions.uniras.my.
- **No Google Analytics Measurement ID installed yet.** The meta slot is deliberately empty and no analytics library is loaded while empty.
- **No analytics fires unless consent is granted.** The consent banner appears only once a valid Measurement ID is supplied.
- Branch: `solutions-production`; do not merge with corporate `main`.

## Install GA4
Use the actual Measurement ID obtained from Google Analytics > Admin > Data Streams > UNIRAS Solutions Website > Stream details. The stream ID (e.g. 16250537949) or Property ID is NOT a Measurement ID.

Update the single meta element on all four public pages:
`<meta name="uniras-ga4-id" content="G-XXXXXXXXXX"/>`
Replace with the verified ID. Do not use a guessed ID.

Pages:
- `solutions/site/index.html`
- `solutions/site/pemasangan-cold-room/index.html`
- `solutions/site/servis-pembaikan-cold-room/index.html`
- `solutions/site/walk-in-chiller-freezer/index.html`

Shared script: `solutions/site/assets/conversion-tracking.js`.

## Event contract
| GA4 event | Trigger | What it means |
| --- | --- | --- |
| `quote_form_click` | User clicks a link to Jotform RFQ | Form opened/clicked; **not** a submitted lead |
| `whatsapp_enquiry_start` | User opens the WhatsApp detail modal on homepage | Intent only |
| `whatsapp_click` | User clicks a direct wa.me link or submits completed WA-message composer | WhatsApp hand-off; **not** proven sent message |
| `service_navigation_click` | User clicks from homepage to one of the three service landing pages | Content navigation |

Custom parameters include `service_type`, `source_page` and where available `cta_location`, `interaction` or `destination`. Do not send free-text enquiry, customer name, phone, or message contents to analytics.

**Actual RFQ submitted** should only be measured through a verified Jotform submission event, redirect confirmation page, or trusted backend receipt, not `quote_form_click`. WhatsApp messages being sent cannot be inferred from clicking a wa.me link.

## Verification
1. With real ID configured and deployment successful, open page in private browser.
2. Consent banner should be shown. Select Benarkan.
3. Open Google Analytics DebugView / Realtime and validate `page_view`.
4. Click one Jotform CTA, WA button, and service link. Validate custom events and parameters.
5. Deny analytics in a clean private session, and check there are no requests to googletagmanager.com or google-analytics.com triggered by this script.
6. Check mobile scroll, banner position and link navigation. Verify no double events are emitted per click.
7. Check Jotform submissions independently before marking any `generate_lead` conversion.

## Data responsibilities
Before activating analytics, keep the privacy notice accurate and review cookie/consent obligations. Note that third-party widgets/scripts may collect data independently of this custom analytics snippet.
