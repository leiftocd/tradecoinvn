export default `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    %helmet-head%
  </head>
  <body>
    <div id="root"><!--app-html--></div>
    <script type="module" src="/assets/main.js"></script>
  </body>
</html>
`;