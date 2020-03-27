


<h1 align="center"><strong>Angular library that implement oAuth2.0 out of the box</strong></h1>

<br />

![angular+jwt](https://i.imgur.com/6EnlZHi.png)

<br />
<div align="center"><strong>🚀 It provides an abstract service to be completed by the user.</strong></div>
<div align="center">The interceptor will add auth token to each request and will try to refresh it when it recieve a 401 response. It will enqueue all the request till a valid access token is recieved.</div>

<strong>Npm link : </strong>[https://www.npmjs.com/package/@adev.h/auth-token](https://www.npmjs.com/package/@adev.h/auth-token)

## Features

- **Bearer token refresh**

- **Manage expired bearer token**

- **Renew access token using the refresh token**

 - **Retry feature**
 
  - **Wrap the request dynamically  by access-token (in header)**

## Getting started

```sh
# 1 npm i @adev.h/auth-token
# 2 Make sure you have setted the following data in environment.ts
```
```javascript
export  const environment = {
.
.
api:  "https://api.github.com", // this line
"refreshtoken-endpoint":  "http://localhost:8080/api/refreshToken" // and this line
};
```
```sh
# 3 Import the module in app.module.ts
```
```javascript
import { AuthTokenModule } from  "@adev.h/auth-token";
```
```sh
# 4. In @NgModule -> providers
```
```javascript
providers: [
	.
	.
	.
	{ provide:  "environment", useValue:  environment } // Add this line
]
```
## Contributing

1. Clone it (<https://github.com/abdodeve/angular-auth-token.git>)
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Create a new Pull Request.
