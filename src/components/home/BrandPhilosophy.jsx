import { Eyebrow, Reveal, TextLink } from "../ui/Editorial";

export default function BrandPhilosophy() {
  return (
    <section id="philosophy" className="brand-philosophy">
      <Reveal className="philosophy-visual">
        <span className="eyebrow visual-label">THE MOODBAG SPIRIT</span>
        <img
          src="/images/moodbag/tote-01.svg"
          alt="Phác thảo ý tưởng túi canvas với họa tiết Chợ Bến Thành, chưa phải sản phẩm chính thức"
          loading="lazy"
        />
        <span className="product-disclaimer">
          BẢN PHÁC THẢO Ý TƯỞNG · ẢNH SẢN PHẨM SẼ ĐƯỢC CẬP NHẬT
        </span>
      </Reveal>
      <Reveal className="philosophy-copy">
        <Eyebrow>02 / Điều chúng tôi tin</Eyebrow>
        <h2>
          Không chỉ là
          <br />
          một chiếc <em>túi.</em>
        </h2>
        <p>
          Mỗi chiếc túi MoodBag không chỉ là một món phụ kiện, mà còn là cách
          chúng ta mang câu chuyện văn hóa Việt Nam đi khắp mọi nơi.
        </p>
        <p>
          Chúng tôi bắt đầu từ những điều gần gũi: một góc chợ, một mái ngói,
          một vòng xe qua phố. Để văn hóa không chỉ được ngắm nhìn, mà được sống
          cùng mỗi ngày.
        </p>
        <p className="handwritten">Small bag, Big stories.</p>
        <TextLink href="#collection">Cùng mang câu chuyện đi xa</TextLink>
      </Reveal>
    </section>
  );
}
