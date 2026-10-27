import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { stories } from "../../data/stories";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const trigger = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="MoodBag — Trang chủ">
        MOOD<span>BAG</span>
        <sup>®</sup>
      </Link>
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        <Link to="/#stories">Những câu chuyện</Link>
        <Link to="/#philosophy">Về MoodBag</Link>
      </nav>
      <Link to="/#collection" className="header-cta">
        Mang văn hóa bên mình <ArrowUpRight size={16} strokeWidth={1.5} />
      </Link>
      <button
        ref={trigger}
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Điều hướng trên điện thoại"
          onClick={(event) => {
            if (event.target.closest("a")) setOpen(false);
          }}
        >
          <Link to="/#stories">
            Những câu chuyện <ArrowUpRight size={20} />
          </Link>
          {stories.map((story) => (
            <Link
              className="mobile-story"
              key={story.slug}
              to={`/stories/${story.slug}`}
            >
              <span>{story.id}</span>
              {story.title}
            </Link>
          ))}
          <Link to="/#philosophy">
            Về MoodBag <ArrowUpRight size={20} />
          </Link>
          <p>Small bag, Big stories.</p>
        </nav>
      )}
    </header>
  );
}
