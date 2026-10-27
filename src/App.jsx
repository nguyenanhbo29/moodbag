import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getStory } from "./data/stories";

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const story = getStory(pathname.split("/").at(-1));
    document.title = story
      ? `${story.title} — MOODBAG Stories`
      : pathname === "/"
        ? "MOODBAG — Small bag, Big stories."
        : "404 — MOODBAG";
    const meta = document.querySelector('meta[name="description"]');
    meta.content = story
      ? story.subtitle
      : "MoodBag — mang những câu chuyện văn hóa Việt Nam vào cuộc sống thường ngày. Khám phá năm câu chuyện Sài Gòn trên từng chiếc túi canvas.";
    const timer = window.setTimeout(() => {
      if (hash)
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }, 30);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Bỏ qua điều hướng
      </a>
      <div id="top" />
      <RouteEffects />
      <Header />
      <motion.div
        key={pathname}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories/:slug" element={<StoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
      <Footer />
    </>
  );
}
