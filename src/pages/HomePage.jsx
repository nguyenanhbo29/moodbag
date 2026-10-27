import HomeHero from "../components/home/HomeHero";
import StoryGallery from "../components/home/StoryGallery";
import BrandPhilosophy from "../components/home/BrandPhilosophy";
import { Eyebrow, Photo, Reveal, TextLink } from "../components/ui/Editorial";

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <div className="brand-strip">
        <span>THIẾT KẾ TỪ NHỮNG ĐIỀU THÂN THUỘC</span>
        <span className="strip-star">✳</span>
        <span>VĂN HÓA TRONG TỪNG ĐƯỜNG NÉT</span>
        <span className="strip-star">✳</span>
        <span>MANG MỘT CHÚT VIỆT NAM BÊN MÌNH</span>
      </div>
      <StoryGallery />
      <BrandPhilosophy />
      <section className="home-interlude">
        <Photo
          src="/images/motorbike/daily-life.webp"
          alt="Một khoảnh khắc đời sống trên phố Sài Gòn"
        />
        <div className="interlude-shade" />
        <Reveal>
          <Eyebrow>Những điều bình dị, những kết nối dài lâu</Eyebrow>
          <p>
            Thành phố có nhiều lối.
            <br />
            <em>Thương thì chỉ một đường.</em>
          </p>
          <span>SAIGON, WITH LOVE.</span>
        </Reveal>
      </section>
      <section id="collection" className="collection-section section-pad">
        <Reveal>
          <Eyebrow>03 / Mang câu chuyện cùng bạn</Eyebrow>
          <h2>
            Một chiếc túi nhỏ.
            <br />
            <em>Cả một miền thương.</em>
          </h2>
          <p>
            Hành trình khám phá bắt đầu từ một điều bạn thấy thân quen.
            <br />
            Bạn sẽ mang câu chuyện nào cùng mình?
          </p>
          <TextLink to="/stories/cho-ben-thanh">
            Mở câu chuyện đầu tiên
          </TextLink>
          <a href="#stories" className="collection-secondary">
            Xem cả 05 câu chuyện
          </a>
        </Reveal>
        <span className="collection-stamp" aria-hidden="true">
          MADE OF
          <br />
          <em>stories</em>
          <br />
          CARRIED WITH LOVE
        </span>
      </section>
    </main>
  );
}
