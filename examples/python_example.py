# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-images-scraper").call(run_input={
  "queries": [
    "modern kitchen"
  ],
  "maxResultsPerQuery": 100
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("title"), item.get("imageUrl"), item.get("imageWidth"), item.get("pageUrl"))
