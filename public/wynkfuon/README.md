# Wynkfuon media guide

## Quyền riêng tư

Mọi ảnh, video và audio được đặt trong thư mục `public/` rồi deploy lên GitHub Pages đều có
khả năng truy cập công khai. Không upload nội dung nhạy cảm. `noindex` chỉ yêu cầu công cụ tìm
kiếm không lập chỉ mục; nó **không phải authentication** và không bảo vệ file khỏi người có URL.

Microsite không có password/PIN vì một màn hình khóa frontend sẽ chỉ mang tính trang trí.

## Thư mục asset

- Ảnh kỷ niệm: `public/wynkfuon/images/memories/`
- Thumbnail video: `public/wynkfuon/images/thumbnails/`
- Ảnh UI và ảnh cuối: `public/wynkfuon/images/ui/`
- Video: `public/wynkfuon/videos/`
- Audio tùy chọn trong tương lai: `public/wynkfuon/audio/`

Khuyến nghị ảnh `.avif` hoặc `.webp`; dùng `.jpg` khi cần tương thích rộng. Video nên là `.mp4`
(H.264/AAC) hoặc `.webm`, đã nén cho web. Thumbnail nên cùng tỷ lệ 16:9 với video. Không cần bắt
đầu đường dẫn bằng `/`; utility `assetPath()` sẽ tự thêm base path của Astro.

## Sửa nội dung

- Thêm/sửa 8 ảnh và metadata: `src/data/wynkfuon/memories.ts`
- Thêm video, caption và thumbnail: `src/data/wynkfuon/videos.ts`
- Sửa release notes: `src/data/wynkfuon/patchNotes.ts`
- Sửa các lý do: `src/data/wynkfuon/loveReasons.ts`
- Sửa lá thư và ảnh/video cuối: `src/data/wynkfuon/finalLetter.ts`

Để cài video, copy file vào `public/wynkfuon/videos/`, rồi thêm trường ví dụ:

```ts
src: 'wynkfuon/videos/two-idiots-in-love.mp4',
poster: 'wynkfuon/images/thumbnails/two-idiots-in-love.webp',
```

Nếu thay media cuối bằng video, đổi `type` thành `'video'` và cập nhật `src`, `alt` trong
`finalLetter.ts`. Video chỉ có controls, không autoplay và dùng `preload="metadata"`.

## Màu và theme

Theme nằm riêng trong `src/styles/wynkfuon.css`. Các biến màu bắt đầu bằng `--wf-` ở đầu file;
thay chúng để đổi palette mà không ảnh hưởng portfolio chính.

## Chạy local

```sh
npm install
npm run dev
```

Mở `http://localhost:4321/wynkfuon/`. Build production bằng `npm run build`, sau đó có thể kiểm
tra output với `npm run preview`.
