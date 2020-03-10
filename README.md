

<h1 align="center"><strong>Angular library that implement oAuth2.0 out of the box</strong></h1>

<br />

![alt text](https://imgur.com/lIi4YrZ.png)

![https://i.imgur.com/XkDNkYm.png](https://i.imgur.com/XkDNkYm.png)
<br />
<div align="center"><strong>🚀 It provides an abstract service to be completed by the user.</strong></div>
<div align="center">The interceptor will add auth token to each request and will try to refresh it when it recieve a 401 response. It will enqueue all the request till a valid access token is recieved.</div>

## Features

- **Bearer token refresh**

- **Manage expired bearer token**

- **Renew access token using the refresh token**

 - **Retry feature**
 
  - **Wrap the request dynamically  by access-token (in header)**

- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground)
- **Extensible**: Simple and flexible thanks to mongoose models – easy to adjust and extend

- **Configuration**: Preconfigured

- **Architecture**: Component Based Architecture

- **Mongoose**: The elegant mongodb object modeling for node.js

Demonstration of this repo **GraphQL Boilerplate** hosted on live server [graphql-boilerplate](http://graphql.abdelhadidev.com).


## Getting started

```sh
# 1 Rename .env.example as .env 
# 2 Change MONGODB_URI by your DB uri
# 3 Navigate to the folder
cd graphql-boilerplate
# 4.Run 
npm install
# 5.Start server using node src/index.js (runs on http://localhost:4000) and open in GraphQL Playground
```

### Request exampls
#### Query
```sh
# Get all posts with related comments and user
query {
   posts {
      id
      published
      title
      content
      comments {
      	content
      }
      user{
        name
        email
      }
    }
}
```

![https://i.imgur.com/EHamtnI.png](https://i.imgur.com/EHamtnI.png)


#### Mutation
```sh
# Create new post request
mutation{
	createPost(
              user_id: "5e14dc6c5c2cb87b05f9197a"
              title: "Love Node.js"
              content: "Node.js is most powerfull language"
            ){
							       id
              title
              content
            }
}
```

![https://i.imgur.com/yJJLlO1.png](https://i.imgur.com/yJJLlO1.png)

## Documentation

### Commands

* `npm run start` starts GraphQL server on `http://localhost:4000`

### Project structure

![https://i.imgur.com/qvGYgsD.png](https://i.imgur.com/qvGYgsD.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |


## Contributing

1. Clone it (<https://github.com/abdodeve/graphql-boilerplate.git>)
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Create a new Pull Request.
