

// import axios, * as others from "axios";
var axios = require('axios');

var data = JSON.stringify({
    collection: "author",
    database: "e-library",
    dataSource: "Cluster0",
    filter: { author: "Thien Tam Tho Dau" } // retrieve all documents with name = "a"
    // filter: {author: }, // retrieve all documents with name = "a"
});

axios({
    method: "post",
    url: "https://data.mongodb-api.com/app/data-mzkop/endpoint/data/v1/action/find",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "api-key": "cIZ9PvLJh7u1TFwM5TIIUTWXitihYJcz5FZtWrlI5n8uhclsIG7UxbT3Y83zv4Ay",
    },
    data: data,
})
    .then(function (response) {
        response.data.documents.forEach((document) => {
            console.log(JSON.stringify(document));
        });
    })
    .catch(function (error) {
        console.log(error);
    });