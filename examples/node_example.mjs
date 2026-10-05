// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-images-scraper').call({
  "queries": [
    "modern kitchen"
  ],
  "maxResultsPerQuery": 100
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.title, item.imageUrl, item.imageWidth, item.pageUrl);
