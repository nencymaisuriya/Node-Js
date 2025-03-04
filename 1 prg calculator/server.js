const http = require("http");

const myserver = http.createServer((req, res) => {
  // res.write("<h1>Hello, Welcome to My Server!</h1>");
  // res.end();
  const url = req.url;
  switch (url) {
    case "/":
      res.write(`
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; transition: background 0.5s ease-in-out; }
              h1 { color: blue; }
              a { text-decoration: none; font-weight: bold; color: #007bff; }
              a:hover { color: #0056b3; }
            </style>
          </head>
          <body>
            <h1>Welcome to the Home Page!</h1>
            <p><a href="/about">About</a> | <a href="/contact">Contact</a></p>
          </body>
        </html>
      `);
      break;
    case "/about":
      res.write(`
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; transition: background 0.5s ease-in-out; }
              h1 { color: green; }
              a { text-decoration: none; font-weight: bold; color: #28a745; }
              a:hover { color: #1c7430; }
            </style>
          </head>
          <body>
            <h1>About Page</h1>
            <p>This is the About Page.</p>
            <p><a href="/">Home</a> | <a href="/contact">Contact</a></p>
          </body>
        </html>
      `);
      break;
    case "/contact":
      res.write(`
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; transition: background 0.5s ease-in-out; }
              h1 { color: yellow; }
              a { text-decoration: none; font-weight: bold; color:rgb(175, 240, 25); }
              a:hover { color:rgb(202, 212, 67); }
            </style>
          </head>
          <body>
            <h1>Contact Us</h1>
            <p>This is the Contact Us Page.</p>
            <p><a href="/">Home</a> | <a href="/about">About</a></p>
          </body>
        </html>
      `);
      break;
    default:
      res.write(`
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; transition: background 0.5s ease-in-out; }
              h1 { color: gray; }
              a { text-decoration: none; font-weight: bold; color: #6c757d; }
              a:hover { color: #495057; }
            </style>
          </head>
          <body>
            <h1>404 Page Not Found</h1>
            <p><a href="/">Go Back to Home</a></p>
          </body>
        </html>
      `);
  }
  res.end();
});

myserver.listen(8000, () => {
  console.log(" this is myserver!");
});
