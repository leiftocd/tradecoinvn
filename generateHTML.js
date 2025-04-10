const fs = require('fs');
const path = require('path');
const seoData = require('./src/seoData');
const outputDir = path.join(__dirname, 'public');

// Template trả về nội dung HTML
const template = ({ title, description, image, url, redirectUrl }) => `
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <link rel="stylesheet" href="/loading.css" />
    <script>
      setTimeout(() => {
        window.location.href = "${redirectUrl}";
      }, 1500);
    </script>
  </head>
  <body>
    <section class="loading-screen">
      <div>Đang điều hướng đến <strong>${title}</strong></div>
    </section>
  </body>
</html>
`;
// lặp qua các slug để tạo file HTML
Object.entries(seoData).forEach(([slug, data]) => {
  const htmlContent = template({
    title: data.title,
    description: data.description,
    image: data.image || 'https://yourdomain.com/default.jpg',
    url: `https://yourdomain.com/${slug}`,
    redirectUrl: data.url,
  });

  // Ghi file vào thư mục public
  fs.writeFileSync(path.join(outputDir, `${slug}.html`), htmlContent, 'utf8');
  console.log(`✅ Created: ${slug}.html`);
});
