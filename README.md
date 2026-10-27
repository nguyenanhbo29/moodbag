# MOODBAG — Small bag, Big stories.

Website kể chuyện văn hóa cho thương hiệu túi canvas Việt Nam. Dự án được tạo trực tiếp tại `D:\EXE201`, dùng React, Vite, JavaScript/JSX, Tailwind CSS v4, React Router, Lucide React và Framer Motion. Không có backend, cơ sở dữ liệu hay chức năng thanh toán.

## Khởi chạy

Yêu cầu Node.js `20.19+` hoặc `22.12+` (khuyến nghị Node.js 22 LTS tương thích). Đã kiểm tra với Node.js 22.15.0.

```bash
npm install
npm run dev
```

Mở địa chỉ được Vite in trong terminal, mặc định `http://localhost:5173`.

```bash
npm run check       # kiểm tra dữ liệu, tệp ảnh, biến thể responsive và ghi nguồn
npm run build       # tạo bản production vào dist/
npm run preview     # xem bản production tại localhost:4173
npm run test:e2e    # kiểm tra trình duyệt khi dev server đang chạy
```

Kiểm thử E2E tự tìm Chrome/Edge trên Windows. Trên hệ điều hành khác, đặt `BROWSER_PATH` trỏ tới Chromium hoặc cài Chromium của Playwright (`npx playwright install chromium`). Có thể đặt `PREVIEW_URL` khi kiểm tra server khác. Kết quả JSON và ảnh chụp được lưu tại `test-results/`, không đưa vào mã nguồn.

## Các trang

| URL                           | Nội dung                                                            |
| ----------------------------- | ------------------------------------------------------------------- |
| `/`                           | Trang chủ, năm câu chuyện, triết lý thương hiệu và lời mời khám phá |
| `/stories/cho-ben-thanh`      | Ký ức giao thương và nhịp sống Chợ Bến Thành                        |
| `/stories/nha-tho-duc-ba`     | Di sản kiến trúc và dấu ấn thời gian                                |
| `/stories/bitexco`            | Cảm hứng hoa sen và Sài Gòn hiện đại                                |
| `/stories/xe-may-sai-gon`     | Xe máy và văn hóa đời sống phố thị                                  |
| `/stories/charm-la-sen`       | Hình dáng thực vật, biểu tượng và cảm hứng phụ kiện                 |
| `/404` hoặc URL không tồn tại | Trang báo không tìm thấy và liên kết về trang chủ                   |

Năm đường dẫn câu chuyện ổn định, có thể mở trực tiếp và refresh. Chưa tạo QR sản xuất vì chưa có tên miền.

## Cấu trúc

```text
public/
  images/
    ben-thanh/            # ảnh chợ hiện tại, bên trong và tư liệu
    notre-dame/           # ảnh nhà thờ, tư liệu và buổi tối
    bitexco/              # tháp, toàn cảnh đêm và góc nhìn từ tháp
    motorbike/            # xe máy và đời sống Sài Gòn
    lotus/                # lá sen và nghiên cứu ánh sáng
    moodbag/              # 5 bản minh họa túi SVG tạm
    credits.json          # tác giả, giấy phép, nguồn và thay đổi
    ATTRIBUTION.md        # bảng ghi nguồn có thể đọc độc lập
  _redirects              # SPA fallback cho Netlify/Cloudflare Pages
  favicon.svg
scripts/
  check-assets.mjs
  smoke-test.mjs
  download-images.mjs
  research-images.mjs
  create-product-art.mjs
src/
  components/
    layout/               # Header, Footer và hộp thoại nguồn ảnh
    home/                 # Hero, StoryGallery, BrandPhilosophy
    story/                # các phần tái sử dụng của trang câu chuyện
    ui/                   # Photo, Reveal, StoryCard, Eyebrow, TextLink
  data/stories.js         # toàn bộ nội dung và cấu hình 5 câu chuyện
  pages/                  # HomePage, StoryPage, NotFoundPage
  styles/global.css       # Tailwind, hệ màu và responsive
  App.jsx
  main.jsx
index.html
vite.config.js
vercel.json               # SPA fallback cho Vercel
package.json
package-lock.json
```

## Kết quả xác minh ngày 18/10/2026

- `npm run build`: thành công; thư mục `dist/` khoảng 6,7 MB bao gồm toàn bộ ảnh và ghi nguồn.
- `npm run check`: đủ 5 câu chuyện, 19 tài nguyên ảnh/đồ họa chính, biến thể responsive và ghi công.
- Chrome headless trên **bản production qua Vite preview**: đạt 44 kiểm tra trang/kích thước, gồm 6 trang chính ở 360, 375, 390, 430, 768, 1024, 1440px và 2 đường dẫn 404.
- Mở trực tiếp và reload từng câu chuyện, menu di động, Escape, hộp thoại nguồn ảnh, liên kết đến thiết kế và gợi ý loại trừ trang hiện tại: đạt.
- Không ghi nhận lỗi console JavaScript, ảnh hỏng, thiếu alt hoặc tràn ngang trong các lượt kiểm tra.
- axe chạy bộ quy tắc WCAG 2 A/AA và WCAG 2.1 AA trên trang chủ, 5 trang câu chuyện và 404: không phát hiện vi phạm. Đây là kiểm tra tự động, chưa thay thế đánh giá thủ công toàn diện bằng trình đọc màn hình.
- Đã xem ảnh chụp desktop 1440px và mobile 390px. Báo cáo chi tiết và ảnh chụp nằm trong `test-results/`.

## Thiết kế và tương tác

- Bảng màu giấy ngà, cà phê, đất nung, olive; Playfair Display, Be Vietnam Pro và Caveat qua Google Fonts.
- Hero ảnh lớn, gallery so le, khung hình có tiêu điểm, ảnh tư liệu và timeline ba bước.
- Mẫu `StoryPage` nhận dữ liệu theo slug; từng câu chuyện có ảnh, màu nhấn và nội dung riêng.
- Tiến độ đọc, chuyển cảnh nhẹ, xuất hiện khi cuộn, zoom ảnh khi hover, điều hướng đến thiết kế.
- Bốn câu chuyện gợi ý luôn loại trang đang xem.
- Menu di động, skip link, trạng thái focus, alt ảnh, hộp thoại nguồn ảnh hỗ trợ Escape và giảm chuyển động theo cài đặt thiết bị.
- Dùng `srcSet` 800/1920, WebP, lazy load phần dưới và khung ảnh cố định để hạn chế xê dịch bố cục.

## Ảnh và nội dung

Có **14 ảnh chụp tải cục bộ**, mỗi ảnh có biến thể nhỏ, kèm **5 minh họa SVG** do dự án tạo. Ảnh lấy từ Wikimedia Commons, đã xác minh tải và giải mã được, có giấy phép CC BY, CC BY-SA, CC0 hoặc thuộc phạm vi công cộng. Ghi công và giấy phép nằm trong [ATTRIBUTION.md](public/images/ATTRIBUTION.md), `credits.json` và hộp thoại “Nguồn ảnh & ghi chú thiết kế” ở footer.

Các ảnh địa danh thể hiện đúng Chợ Bến Thành, Nhà thờ Đức Bà Sài Gòn và Bitexco. Ảnh tư liệu chỉ được dùng khi có nguồn; góc nhìn Bitexco năm 2013 được ghi là ảnh đương thời. Ảnh cận lá sen minh họa cấu trúc thực vật; ảnh ánh sáng qua lá được chụp ở Lào và đã ghi địa điểm rõ ràng, không giới thiệu là cảnh Việt Nam.

**Chưa có ảnh sản phẩm chính thức.** Năm túi là bản phác thảo minh họa ý tưởng, có nhãn rõ ràng ngay trên giao diện. Phần kết dùng ảnh đời sống đường phố, chưa có ảnh người mang túi MoodBag thật. Thay `productImage` trong `src/data/stories.js`, ảnh trong `BrandPhilosophy.jsx` và ảnh kết trong `StorySections.jsx` khi có ảnh thương hiệu. Không có đường dẫn mua hàng giả.

Các mốc lịch sử được đối chiếu từ Ban Quản lý Chợ Bến Thành, Tổng Giáo phận Sài Gòn và hồ sơ dự án 260 Architects; liên kết nằm ở cuối từng câu chuyện liên quan. Phần xe máy dùng các thời điểm trong ngày, phần lá sen dùng hành trình sáng tạo, đều không giả làm niên biểu lịch sử. Các câu văn cảm nhận là nội dung biên tập, không gán thành trích dẫn của nhân vật lịch sử.

`download-images.mjs` chỉ cần chạy khi chủ động làm mới bộ ảnh; cài đặt và build bình thường không truy cập Wikimedia. Mạng Wikimedia đôi khi giới hạn tốc độ. Các ảnh đã tải được giữ trong `public/`.

## Triển khai và QR

Chưa xuất bản website hoặc gắn tên miền. Upload nội dung `dist/` lên static host hỗ trợ SPA fallback:

- Netlify / Cloudflare Pages: `_redirects` được Vite sao chép vào `dist/`.
- Vercel: cấu hình `vercel.json`, build `npm run build`, output `dist`.
- Nginx: cấu hình `try_files $uri $uri/ /index.html;`.

Sau khi có tên miền, kiểm tra mở trực tiếp năm đường dẫn trên production rồi mới tạo và in QR. Dev server và `vite preview` đã hỗ trợ fallback; server khác cần cấu hình như trên. Đường dẫn không tồn tại hiển thị giao diện 404 trong SPA, không trả HTTP 404 từ server tĩnh.

Google Fonts cần kết nối mạng; giao diện có font hệ thống dự phòng. Phần ảnh và nội dung không phụ thuộc dịch vụ ảnh bên ngoài lúc chạy. Không có analytics, biểu mẫu gửi dữ liệu hay dịch vụ bên thứ ba ngoài Google Fonts.
