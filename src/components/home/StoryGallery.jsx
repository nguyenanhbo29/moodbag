import { ArrowDownRight } from "lucide-react";
import { stories } from "../../data/stories";
import { Eyebrow, Reveal, StoryCard } from "../ui/Editorial";

export default function StoryGallery() {
  return (
    <section id="stories" className="story-gallery section-pad">
      <Reveal className="section-intro">
        <div>
          <Eyebrow>01 / Những câu chuyện</Eyebrow>
          <h2>
            05 câu chuyện.
            <br />
            Vô vàn <em>kết nối.</em>
          </h2>
        </div>
        <div className="intro-aside">
          <p>
            Trên từng chiếc túi là một góc Việt Nam.
            <br />
            Chạm vào hình ảnh, mở ra câu chuyện.
          </p>
          <span className="gallery-label">
            05 CÂU CHUYỆN TRÊN TỪNG CHIẾC TÚI{" "}
            <ArrowDownRight size={28} strokeWidth={1} />
          </span>
        </div>
      </Reveal>
      <div className="gallery-grid">
        {stories.map((story, i) => (
          <Reveal
            key={story.slug}
            className={`gallery-item gallery-item-${i + 1}`}
            delay={0.06 * (i % 2)}
          >
            <StoryCard story={story} />
          </Reveal>
        ))}
        <Reveal className="gallery-note">
          <span className="note-star">✳</span>
          <p>
            Đi qua phố.
            <br />
            Mang về <em>một câu chuyện.</em>
          </p>
          <span className="eyebrow">A LITTLE BAG. A LOT OF VIETNAM.</span>
        </Reveal>
      </div>
    </section>
  );
}
