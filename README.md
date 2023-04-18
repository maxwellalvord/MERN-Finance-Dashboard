# ECOM-VISON

### ECOM-VISON is a financial dashboard that takes advantage of large data sets and the Recharts component library to display valuable data. In addition to data visualization, a basic machine learning package (regression.js) used to calculate a profit prediction using the previous years data.
----
## Technology Used
[![My Skills](https://skillicons.dev/icons?i=mongo,express,nodejs,react,vite,typescript,redux,&theme=dark)](https://www.mongodb.com/mern-stack)

## Setup/ Installation
* Clone this repo and open in text editor of choice.
* cd into the each folder named client and server and run `npm install`.
* Visit [MongoDB](https://www.mongodb.com) and create a database and be sure to copy the Mongo url after you create a user and their credentials.
* On the root level of the server folder create a file called .env, inside of the file write 
  <pre>
  MONGO_URL="YOUR-MONGO-URL"
  PORT=1337
  </pre>
* On the root level of the client folder create a file called .env.local, inside of the file write 
  <pre>
  VITE_BASE_URL=http://localhost:1337
  </pre>
* Run `npm run dev` on both folders and open to localhost:5173.
* Optionally you can open the index.js file in the root directory of the server folder and uncomment outline 43 - 46 and save then comment them back out again, this will give your database fake users and posts to populate the application.

## Known Bugs
* In attempting to deploy on multiple platforms, REACT and the REACT-currency have conflicting peer dependencies the prevent build/deployment.

## License
[MIT](https://opensource.org/osd)

Copyright &copy;
2023 Maxwell Alvord

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<br>

## Contact Information
Contact me with questions and bugs at: <br>
[A link to my issues page on GitHub](https://github.com/maxwellalvord/maxwellalvord/issues)<br>
or email me at <a href = "mailto:maxwellalvord@gmail.com">maxwellalvord@gmail.com</a>