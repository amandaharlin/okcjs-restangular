var express = require('express');
var app = express();
var port = 8000;
var _ = require('lodash');



var jobs = [
  {
    "id" : "1234",
    "gemTitle": "Kidney",
    "company" : "Bright Stone",
    "gemDescription": "Some gems have hidden qualities beyond their luster, beyond their gem score... kidney stones are not one of those gems.",
    "gemScore": 1,
    "gemPrice": 110.50,
    "contactName" : "amanda",
    "contactInfo" : "email me plz",
    "reviews": [
    "wud not recommend",
    "the asshat of stones"
    ]
  },
  {
    "id" : "1235",
    "gemTitle": "Bloodstone",
    "company" : "Weird Shit",
    "gemDescription": "Origin of the Bloodstone is unknown, hence its low value. It has a very high gem score and 12 sides, however.",
    "gemScore": 7,
    "gemPrice": 22.90,
    "contactName" : "jesse",
    "contactInfo" : "call me plz",
    "reviews": [
    "ok gem", "smells like..idunno", "better than a kidney stone"
    ]
  },
  {
    "id" : "1236",
    "gemTitle": "Zircon",
    "company" : "Sale Gems",
    "gemDescription": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high gem scoring jewl.",
    "gemScore": 5,
    "gemPrice": 1100,
    "contactName" : "lauren",
    "contactInfo" : "whatevs",
    "reviews": [
    "good gem store"
    ]
  }
]

function getJobs(req, res) {
  res.send(jobs)
}

function getJob(req, res){
  function byId(job){
    if(job.id === req.params.id){
      return job;
    }
  }

  res.send(_.find(jobs, byId));
}

app.get('/jobs', getJobs);
app.get('/jobs/:id', getJob);
app.use(express.static('./app'));
app.listen(port);

console.log('app started on ' + port);
