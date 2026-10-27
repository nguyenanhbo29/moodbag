import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="not-found">
      <span className="eyebrow">404 / Một lối rẽ khác</span>
      <h1>
        Câu chuyện này
        <br />
        <em>chưa được viết.</em>
      </h1>
      <p>
        Có lẽ bạn đã rẽ vào một con hẻm nhỏ.
        <br />
        Cùng trở lại để tìm một câu chuyện thân quen.
      </p>
      <Link className="text-link" to="/">
        Về trang chủ
        <ArrowUpRight size={20} />
      </Link>
    </main>
  );
}
