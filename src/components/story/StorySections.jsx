import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Eyebrow, Photo, Reveal, ScrollCue, StoryCard } from "../ui/Editorial";
import { stories } from "../../data/stories";

export function StoryHero({ story }) {
  return (
    <section className={`story-hero story-hero-${story.id}`}>
      <Photo
        src={story.heroImage}
        alt={story.imageAlt}
        eager
        className="hero-photo"
        position={story.focalPoint}
      />
      <div className="hero-shade" />
      <div className="story-hero-top">
        <Link to="/#stories">
          <ArrowLeft size={17} /> Những câu chuyện
        </Link>
        <span>{story.id} / 05</span>
      </div>
      <div className="story-hero-copy">
        <Eyebrow>SAIGON STORIES / {story.category}</Eyebrow>
        <h1>
          {story.heroLines[0]}
          <br />
          <em>{story.heroLines[1]}</em>
        </h1>
        <p>{story.subtitle}</p>
      </div>
      <div className="story-hero-bottom">
        <ScrollCue href="#origin" label="Lật mở câu chuyện" />
        <span>MOODBAG CULTURAL JOURNAL · NO. {story.id}</span>
      </div>
    </section>
  );
}

export function StoryIntroduction({ story }) {
  return (
    <>
      <section className="story-prologue section-pad">
        <Reveal>
          <Eyebrow>Một góc Sài Gòn, một miền ký ức</Eyebrow>
          <p>{story.introduction}</p>
        </Reveal>
        <span className="prologue-mark" aria-hidden="true">
          ✳
        </span>
      </section>
      <section id="origin" className="story-origin section-pad">
        <Reveal className="origin-photo">
          <figure>
            <Photo
              src={story.historyImage}
              alt={story.historyCaption}
              className={["01", "02"].includes(story.id) ? "archive-photo" : ""}
            />
            <figcaption>{story.historyCaption}</figcaption>
          </figure>
          <span className="photo-index">FIG. {story.id} — NHỮNG LỚP KÝ ỨC</span>
        </Reveal>
        <Reveal className="origin-copy">
          <Eyebrow>
            01 / {story.id === "05" ? "Nguồn cảm hứng" : "Câu chuyện bắt đầu"}
          </Eyebrow>
          <h2>{story.historyTitle}</h2>
          {story.historicalBackground.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
      </section>
    </>
  );
}

export function StoryTimeline({ story }) {
  return (
    <section className="story-timeline section-pad">
      <Reveal className="timeline-heading">
        <Eyebrow>02 / {story.timelineLabel}</Eyebrow>
        <h2>
          {["04", "05"].includes(story.id) ? (
            <>
              Theo một nhịp <em>riêng.</em>
            </>
          ) : (
            <>
              Những dấu mốc <em>ở lại.</em>
            </>
          )}
        </h2>
      </Reveal>
      <div className="timeline-grid">
        {story.timeline.map((item, i) => (
          <Reveal key={item.date} className="timeline-item" delay={i * 0.07}>
            <span className="timeline-dot" />
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="timeline-image">
              <Photo
                src={
                  [story.historyImage, story.heroImage, story.lifestyleImage][i]
                }
                alt={`${item.title} — hình ảnh minh họa cho câu chuyện ${story.title}`}
              />
            </div>
          </Reveal>
        ))}
      </div>
      {story.culturalNote && (
        <p className="cultural-note">{story.culturalNote}</p>
      )}
    </section>
  );
}

export function StoryCulture({ story }) {
  return (
    <section className="story-culture">
      <div className="culture-photo">
        <Photo
          src={story.lifestyleImage}
          alt={`Khung hình văn hóa: ${story.title}`}
        />
        <span className="image-overline">THE EVERYDAY HERITAGE</span>
      </div>
      <div className="culture-editorial section-pad">
        <Reveal>
          <Eyebrow>03 / Văn hóa đang sống</Eyebrow>
          <h2>{story.cultureTitle}</h2>
        </Reveal>
        <Reveal className="culture-copy">
          {story.culturalMeaning.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
      <Reveal className="culture-quote">
        <span aria-hidden="true">“</span>
        <p>{story.cultureQuote}</p>
        <span className="eyebrow">GÓC NHÌN MOODBAG</span>
      </Reveal>
    </section>
  );
}

export function StoryDesign({ story }) {
  return (
    <section className="story-design section-pad">
      <Reveal className="design-copy">
        <Eyebrow>04 / Từ văn hóa đến canvas</Eyebrow>
        <h2>
          Khi văn hóa
          <br />
          trở thành <em>thiết kế.</em>
        </h2>
        <p>{story.designInspiration}</p>
        <a className="text-link" href="#product-concept">
          Khám phá thiết kế MoodBag
          <ArrowUpRight size={19} />
        </a>
        <span className="design-footnote">
          Một ý tưởng đang được kể bằng đường nét.
        </span>
      </Reveal>
      <Reveal className="design-visual">
        <figure id="product-concept" tabIndex={-1}>
          <img
            src={story.productImage}
            alt={`Bản phác thảo túi canvas lấy cảm hứng từ ${story.title}; minh họa tạm, chưa phải sản phẩm chính thức`}
            loading="lazy"
          />
          <figcaption>
            BẢN PHÁC THẢO Ý TƯỞNG · CHƯA PHẢI ẢNH SẢN PHẨM CHÍNH THỨC
          </figcaption>
        </figure>
        <span className="design-number">
          NO. {story.id} / THE SAIGON COLLECTION
        </span>
      </Reveal>
    </section>
  );
}

export function StoryClosing({ story }) {
  return (
    <section className="story-closing">
      <Photo
        src="/images/motorbike/daily-life.webp"
        alt="Đời sống đường phố Sài Gòn — bối cảnh cho những hành trình hằng ngày"
      />
      <div className="closing-shade" />
      <Reveal>
        <Eyebrow>Đi qua phố. Mang theo một miền thương.</Eyebrow>
        <h2>
          Mang câu chuyện
          <br />
          <em>cùng bạn.</em>
        </h2>
        <p>{story.closingMessage}</p>
        <span className="closing-slogan">Small bag, Big stories.</span>
      </Reveal>
    </section>
  );
}

export function StorySources({ story }) {
  if (!story.sources.length) return null;
  return (
    <section className="story-sources">
      <details>
        <summary>Nguồn tham khảo nội dung</summary>
        <p>
          Phần cảm nhận và diễn giải thiết kế do MoodBag biên soạn. Mốc lịch sử
          được đối chiếu từ:
        </p>
        {story.sources.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
            <ArrowUpRight size={15} />
          </a>
        ))}
      </details>
    </section>
  );
}

export function RelatedStories({ story }) {
  return (
    <section className="related-stories section-pad">
      <Reveal className="related-heading">
        <div>
          <Eyebrow>Chuyện chưa dừng ở đây</Eyebrow>
          <h2>
            Một góc nhìn <em>khác.</em>
          </h2>
        </div>
        <Link className="text-link" to="/#stories">
          Tất cả câu chuyện
          <ArrowUpRight size={18} />
        </Link>
      </Reveal>
      <div className="related-grid">
        {stories
          .filter((s) => s.id !== story.id)
          .map((s) => (
            <Reveal key={s.id}>
              <StoryCard story={s} compact />
            </Reveal>
          ))}
      </div>
    </section>
  );
}
