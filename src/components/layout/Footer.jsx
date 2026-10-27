import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stories } from "../../data/stories";

export default function Footer() {
  const dialog = useRef(null);
  const [credits, setCredits] = useState([]);
  const [creditError, setCreditError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/images/credits.json", { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setCredits)
      .catch((e) => {
        if (e.name !== "AbortError") setCreditError(true);
      });
    return () => controller.abort();
  }, []);
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <Link to="/" className="footer-brand">
              MOODBAG<sup>®</sup>
            </Link>
            <p className="footer-slogan">Small bag, Big stories.</p>
            <p className="footer-note">Từ Việt Nam, bằng những câu chuyện.</p>
          </div>
          <nav aria-label="Các câu chuyện">
            <p className="eyebrow">Tiếp tục khám phá</p>
            {stories.map((s) => (
              <Link key={s.slug} to={`/stories/${s.slug}`}>
                {s.title}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </nav>
          <div className="footer-message">
            <span className="small-star">✳</span>
            <p>
              Một chiếc túi nhỏ.
              <br />
              Cả một miền thương.
            </p>
            <a href="#top" className="back-top" aria-label="Về đầu trang">
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MOODBAG. Made with love in Vietnam.
          </span>
          <button onClick={() => dialog.current?.showModal()}>
            Nguồn ảnh & ghi chú thiết kế <ArrowUpRight size={13} />
          </button>
          <span>10°46′ N — 106°41′ E</span>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="credits-dialog"
        aria-labelledby="credits-title"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="dialog-heading">
          <h2 id="credits-title">Những khung hình, những người kể.</h2>
          <button
            autoFocus
            onClick={() => dialog.current.close()}
            aria-label="Đóng nguồn ảnh"
          >
            <X />
          </button>
        </div>
        <p>
          Ảnh được tải từ Wikimedia Commons, chuyển sang WebP và có thể được cắt
          khung, chỉnh màu bằng CSS. Mỗi ảnh giữ giấy phép gốc. Bản phác thảo
          túi do dự án tạo để minh họa ý tưởng, chưa phải ảnh sản phẩm MoodBag
          chính thức.
        </p>
        {creditError && (
          <p>
            Chưa tải được danh sách nguồn. Bạn có thể xem{" "}
            <a href="/images/ATTRIBUTION.md">tệp ghi nguồn ảnh</a>.
          </p>
        )}
        <div className="credit-list">
          {credits.map((c) => (
            <article key={c.image}>
              <a href={c.source} target="_blank" rel="noreferrer">
                {c.title}
                <ArrowUpRight size={15} />
              </a>
              <p>
                {c.author} ·{" "}
                <a href={c.licenseUrl} target="_blank" rel="noreferrer">
                  {c.license}
                </a>
              </p>
            </article>
          ))}
        </div>
      </dialog>
    </>
  );
}
