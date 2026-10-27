import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Photo, ScrollCue } from "../ui/Editorial";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <Photo
        src="/images/ben-thanh/market.webp"
        alt="Tháp đồng hồ Chợ Bến Thành giữa nhịp sống Sài Gòn"
        eager
        className="hero-photo"
        position="65% 50%"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <Eyebrow>
          <span className="status-dot" />
          Từ những điều thân thuộc của Việt Nam
        </Eyebrow>
        <h1 id="home-title">
          Việt Nam
          <br />& sự gắn kết
          <br />
          <em>văn hóa.</em>
        </h1>
        <p>
          Chúng tôi là thương hiệu túi canvas Việt Nam, mang những câu chuyện
          văn hóa và nhịp sống phố thị đến gần hơn với đời sống thường ngày.
        </p>
        <a className="light-button" href="#stories">
          Khám phá câu chuyện
          <ArrowUpRight size={19} strokeWidth={1.3} />
        </a>
      </div>
      <div className="hero-bottom">
        <ScrollCue />
        <div className="hero-location">
          <span>CHƯƠNG ĐẦU TIÊN</span>
          <p>Sài Gòn là thương.</p>
        </div>
        <span className="hero-edition">
          01 — 05
          <br />
          <span>MỘT THÀNH PHỐ. NHIỀU CÂU CHUYỆN.</span>
        </span>
      </div>
      <span className="hero-side-note">
        THE EVERYDAY HERITAGE — MOODBAG JOURNAL
      </span>
    </section>
  );
}
