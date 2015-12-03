```
$ docker run -d -p 9200:9200 -p 9300:9300 -v `pwd`/elasticsearch/config:/usr/share/elasticsearch/config --name podcast_elasticsearch elasticsearch
```

Sample data from [Feedwranger Podcast Directory](https://feedwrangler.net/developers/podcasts_directory) [50 most popular podcasts](https://feedwrangler.net/api/v2/podcasts/popular) on 3rd Dec 2015 with rank values manually added.

Adding sample data to elasticsearch:

```
cd elasticsearch
curl -s -XPOST <DOCKER VM IP ADDRESS>:9200/_bulk --data-binary "@popular.json"; echo
```

Make sure [elasticsearch/popular.json](https://github.com/samueljmurray/podcast/blob/master/elasticsearch/popular.json) contains a trailing newline.

To view all top 50 podcasts in elasticsearch:

```
http://<DOCKER VM IP ADDRESS>:9200/popular/_search?size=50
```