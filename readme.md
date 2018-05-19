# graphQL - goodreads
An exercise to practice how to use graphQL to fetch data from a public API.

## Technology/Tools
1) Node.js
2) Express.js
3) graphQL
4) Sublime

## Sample Query
```
query{
  author(id:2222) {
    name
    books {
      title
      isbn
    }
  }
}
```

## Sample Data
```
{
  "data": {
    "author": {
      "name": "David J. Russ",
      "books": [
        {
          "title": "The Complete Maui, Molokai, and Lanai Guidebook: Discovering Hawaii's Valley Isle",
          "isbn": "0916841243"
        },
        {
          "title": "Complete Kauai Guidebook",
          "isbn": "0916841758"
        },
        {
          "title": "The Complete Oahu Guidebook",
          "isbn": "0916841685"
        },
        {
          "title": "The Complete Big Island of Hawaii Guidebook",
          "isbn": "0916841634"
        },
        {
          "title": "The Complete Maui, Molokai and Lanai Guidebook",
          "isbn": "0916841774"
        }
      ]
    }
  }
}
```

### To run on local machine
```
> npm install
> node serve
> go to http://localhost:4000/graphql
> copy and pasta sample query
```

