const image = (path) => `/images/${path}.webp`;

export const stories = [
  {
    id: "01",
    slug: "cho-ben-thanh",
    title: "Chợ Bến Thành",
    heroLines: ["Chợ", "Bến Thành."],
    category: "Ký ức giao thương",
    subtitle: "Một biểu tượng, trăm năm nhịp sống Sài Gòn.",
    description:
      "Có những nhịp sống đi qua trăm năm, vẫn thân quen như một lời chào.",
    heroImage: image("ben-thanh/market"),
    historyImage: image("ben-thanh/archive"),
    lifestyleImage: image("ben-thanh/interior"),
    productImage: "/images/moodbag/tote-01.svg",
    accentColor: "#A45136",
    focalPoint: "58% 52%",
    imageAlt: "Mặt tiền vàng và tháp đồng hồ của Chợ Bến Thành, Sài Gòn",
    historyCaption:
      "Đường Phan Bội Châu bên cửa Đông chợ — ảnh tư liệu từ bộ sưu tập Musée du quai Branly, qua Wikimedia Commons.",
    introduction:
      "Giữa một thành phố luôn chuyển động, có một nơi người ta vẫn tìm thấy Sài Gòn bằng cả năm giác quan. Đó là tiếng chào mời, mùi cà phê mới pha và chiếc đồng hồ nhìn xuống những cuộc gặp gỡ.",
    historyTitle: "Từ bến sông đến biểu tượng.",
    historicalBackground: [
      "Câu chuyện Bến Thành bắt đầu từ hoạt động mua bán bên sông Bến Nghé. Vào thế kỷ XIX, ghe thuyền và hàng hóa góp phần tạo nên một không gian giao thương sôi nổi của vùng đất phương Nam.",
      "Qua nhiều lần thay đổi địa điểm và xây dựng lại, chợ hiện nay được hoàn thành năm 1914. Tháp đồng hồ ở cửa Nam dần trở thành một hình ảnh quen thuộc khi người ta nhắc đến Sài Gòn.",
      "Điều làm nên sức sống của ngôi chợ không chỉ nằm ở kiến trúc. Đó còn là những con người mỗi ngày mở sạp, xếp hàng, trao đổi và nối tiếp câu chuyện của một khu chợ giữa lòng thành phố.",
    ],
    timelineLabel: "Dấu mốc thời gian",
    timeline: [
      {
        date: "Thế kỷ XIX",
        title: "Bên dòng Bến Nghé",
        text: "Hoạt động giao thương bên sông gắn với những lớp ký ức đầu tiên của chợ.",
      },
      {
        date: "1914",
        title: "Một dáng hình thân thuộc",
        text: "Ngôi chợ ở vị trí hiện nay hoàn thành và đi vào hoạt động.",
      },
      {
        date: "Hôm nay",
        title: "Câu chuyện tiếp nối",
        text: "Một điểm gặp gỡ của đời sống mua bán, văn hóa và trải nghiệm Sài Gòn.",
      },
    ],
    cultureTitle: "Hơi thở phố thị.",
    culturalMeaning: [
      "Đi một vòng chợ là đi qua những lát cắt rất nhỏ của thành phố: một hàng gia vị, một sạp vải, một bữa ăn vội. Mỗi gian hàng giữ một thói quen, mỗi lời chào mang một sắc giọng.",
      "Bến Thành sống trong ký ức không chỉ bằng vẻ ngoài. Ngôi chợ nhắc chúng ta rằng văn hóa được tạo nên từ những cuộc gặp hằng ngày — bình dị, gần gũi và không ngừng chuyển động.",
    ],
    cultureQuote: "Sài Gòn ở trong từng lời chào.",
    designInspiration:
      "Tháp đồng hồ, mái chợ và những đường nét của mặt tiền gợi nên một ngôn ngữ minh họa mộc mạc. MoodBag muốn lưu lại dáng hình thân thuộc ấy trên nền canvas, để một góc Sài Gòn có thể cùng bạn đi xa.",
    closingMessage:
      "Một sáng đi làm, một chiều ghé chợ, một chuyến đi xa. Mang theo chút rộn ràng thân thuộc — và để câu chuyện Sài Gòn tiếp tục cùng bạn.",
    sources: [
      {
        label: "Ban Quản lý Chợ Bến Thành — Lịch sử hình thành",
        url: "https://benthanhmarket.vn/about/gioi-thieu-ve-cho-ben-thanh.html",
      },
    ],
  },
  {
    id: "02",
    slug: "nha-tho-duc-ba",
    title: "Nhà thờ Đức Bà",
    heroLines: ["Nhà thờ", "Đức Bà."],
    category: "Dấu ấn thời gian",
    subtitle: "Giữa lòng phố vội, một khoảng trời bình yên.",
    description:
      "Những viên gạch đỏ gìn giữ ký ức của một thành phố luôn đổi thay.",
    heroImage: image("notre-dame/cathedral"),
    historyImage: image("notre-dame/archive"),
    lifestyleImage: image("notre-dame/evening"),
    productImage: "/images/moodbag/tote-02.svg",
    accentColor: "#994837",
    focalPoint: "50% 42%",
    imageAlt: "Hai tháp chuông và mặt tiền gạch đỏ Nhà thờ Đức Bà Sài Gòn",
    historyCaption:
      "Bưu ảnh Nhà thờ Đức Bà và người đi lễ — ảnh tư liệu thuộc phạm vi công cộng, qua Wikimedia Commons.",
    introduction:
      "Có những nơi khiến bước chân tự nhiên chậm lại. Giữa những tán cây của trung tâm Sài Gòn, sắc gạch đỏ và hai tháp chuông mở ra một khoảng lặng, nơi thành phố lắng nghe chính mình.",
    historyTitle: "Thời gian nằm trong sắc gạch.",
    historicalBackground: [
      "Nhà thờ được khởi công năm 1877 và khánh thành năm 1880. Công trình mang dấu ấn kiến trúc Pháp thời thuộc địa, kết hợp phong cách Roman cải biên với những yếu tố Gothic.",
      "Mặt tiền gạch đỏ tạo nên một sắc độ đặc biệt giữa trung tâm thành phố. Hai tháp chuông được xây thêm vào năm 1895, góp phần định hình dáng vẻ mà nhiều thế hệ đã ghi nhớ.",
      "Qua những thay đổi của không gian đô thị, nhà thờ vẫn là một địa điểm sinh hoạt tôn giáo và một dấu mốc kiến trúc. Với mỗi người, nơi này có thể gắn với một cuộc hẹn, một chuyến thăm hay một buổi sáng đi ngang.",
    ],
    timelineLabel: "Dấu mốc thời gian",
    timeline: [
      {
        date: "1877",
        title: "Viên đá đầu tiên",
        text: "Công trình nhà thờ bắt đầu được xây dựng tại trung tâm Sài Gòn.",
      },
      {
        date: "1880",
        title: "Một di sản hiện diện",
        text: "Nhà thờ được khánh thành, mở đầu hành trình gắn bó với thành phố.",
      },
      {
        date: "1895",
        title: "Hai tháp chuông",
        text: "Hai tháp chuông được xây thêm, hoàn thiện dáng hình quen thuộc.",
      },
    ],
    cultureTitle: "Một khoảng lặng giữa Sài Gòn.",
    culturalMeaning: [
      "Ở đây, di sản không đứng ngoài cuộc sống. Người đi làm ngang qua, những người bạn hẹn gặp nhau, du khách dừng lại ngước nhìn. Kiến trúc trở thành phông nền cho vô số câu chuyện cá nhân.",
      "Nhìn lại một công trình cũ cũng là cách nhìn kỹ hơn thành phố mình đang sống. Từ một ô cửa đến một hàng gạch, những điều tưởng quen có thể mở ra một sự chú ý rất mới.",
    ],
    cultureQuote: "Có những bình yên mang màu gạch đỏ.",
    designInspiration:
      "Hai tháp chuông, những ô cửa vòm và sắc đỏ ấm là điểm khởi đầu cho bản phác thảo. Đường nét được giản lược để lưu lại tinh thần kiến trúc, như một ký họa nhỏ bạn mang theo mỗi ngày.",
    closingMessage:
      "Giữa lịch trình bận rộn, mong bạn vẫn tìm thấy một khoảng chậm. Một chút bình yên của thành phố, gói ghém trong những điều thân thuộc.",
    sources: [
      {
        label: "Tổng Giáo phận Sài Gòn — Vương cung Thánh đường Đức Bà",
        url: "https://tgpsaigon.net/bai-viet/vuong-cung-thanh-duong-duc-ba-sai-gon-37259",
      },
    ],
  },
  {
    id: "03",
    slug: "bitexco",
    title: "Tháp Bitexco",
    heroLines: ["Tháp", "Bitexco."],
    category: "Khát vọng vươn cao",
    subtitle: "Một dáng sen, một thành phố hướng về ngày mai.",
    description:
      "Từ một búp sen đến đường chân trời đầy khát vọng của Sài Gòn.",
    heroImage: image("bitexco/tower"),
    historyImage: image("bitexco/city-view"),
    lifestyleImage: image("bitexco/skyline"),
    productImage: "/images/moodbag/tote-03.svg",
    accentColor: "#56624B",
    focalPoint: "50% 40%",
    imageAlt:
      "Tháp Bitexco Financial Tower với khối kính cao và đài trực thăng nhô ra",
    historyCaption:
      "Góc nhìn từ tháp Bitexco năm 2013 — ảnh đương thời của Diego Delso, không phải ảnh Sài Gòn cổ.",
    introduction:
      "Khi ngước nhìn đường chân trời Sài Gòn, ta thấy những khát vọng đã thành hình. Giữa những khối nhà, Bitexco hiện lên như một nét vẽ vươn cao mà vẫn giữ một liên tưởng gần gũi: dáng sen.",
    historyTitle: "Dáng sen trên đường chân trời.",
    historicalBackground: [
      "Bitexco Financial Tower là một công trình tiêu biểu cho diện mạo Sài Gòn đầu thế kỷ XXI. Thiết kế của kiến trúc sư Carlos Zapata lấy cảm hứng từ hình dáng hoa sen, chuyển thành một khối kiến trúc vươn lên giữa đô thị.",
      "Hoàn thành năm 2010, tòa tháp đem đến một dấu nhấn mới trên đường chân trời. Những đường cong của mặt đứng tạo cảm giác chuyển động, khác với hình dung quen thuộc về một khối nhà thẳng đứng.",
      "Câu chuyện ở đây không phải là thành phố cũ nhường chỗ cho thành phố mới. Đó là cuộc đối thoại giữa hình ảnh thiên nhiên, công nghệ xây dựng và mong muốn tạo nên một bản sắc đương đại.",
    ],
    timelineLabel: "Từ cảm hứng đến đường chân trời",
    timeline: [
      {
        date: "Cảm hứng",
        title: "Từ hình dáng sen",
        text: "Một hình ảnh thiên nhiên được chuyển hóa thành ý tưởng kiến trúc.",
      },
      {
        date: "2010",
        title: "Dấu nhấn mới",
        text: "Tòa tháp hoàn thành, góp thêm một dáng hình cho Sài Gòn hiện đại.",
      },
      {
        date: "Tiếp nối",
        title: "Nhìn về phía trước",
        text: "Một góc nhìn để nghĩ về sự phát triển và bản sắc của thành phố.",
      },
    ],
    cultureTitle: "Thành phố không ngừng mơ.",
    culturalMeaning: [
      "Khi thành phố lên đèn, những đường nét hiện đại soi xuống dòng sông. Sài Gòn trong khoảnh khắc ấy vừa quen vừa mới: vẫn dòng người, vẫn con nước, nhưng có thêm những khoảng trời khác để ngước nhìn.",
      "Với MoodBag, Bitexco gợi tinh thần dám bước tới. Giữ lấy điều mình thuộc về không có nghĩa là đứng yên; đôi khi, đó chính là điểm tựa để thử một hành trình mới.",
    ],
    cultureQuote: "Mang gốc rễ theo, để vươn xa hơn.",
    designInspiration:
      "Đường cong vươn cao và dáng hình bất đối xứng gợi một bố cục minh họa hiện đại. Bản phác thảo trên canvas đặt nhịp điệu của kiến trúc bên sự mềm mại của chất vải, gửi gắm tinh thần chuyển động.",
    closingMessage:
      "Cho những dự định còn đang viết, cho những con đường chưa đi. Mang theo một chút tinh thần Sài Gòn — cởi mở và luôn sẵn sàng bắt đầu.",
    sources: [
      {
        label: "260 Architects — BITEXCO Financial Tower",
        url: "https://www.260architects.com/bitexco-financial-tower",
      },
    ],
  },
  {
    id: "04",
    slug: "xe-may-sai-gon",
    title: "Xe máy phố thị",
    heroLines: ["Xe máy", "phố thị."],
    category: "Nhịp sống thường ngày",
    subtitle: "Qua con hẻm nhỏ, nghe một thành phố thật gần.",
    description:
      "Những vòng bánh chở theo công việc, cuộc hẹn và cả một đời sống.",
    heroImage: image("motorbike/street"),
    historyImage: image("motorbike/traffic"),
    lifestyleImage: image("motorbike/daily-life"),
    productImage: "/images/moodbag/tote-04.svg",
    accentColor: "#A45136",
    focalPoint: "50% 55%",
    imageAlt: "Người đi xe máy trên đường phố Thành phố Hồ Chí Minh",
    historyCaption:
      "Một lát cắt giao thông tại Thành phố Hồ Chí Minh — ảnh đời sống đương thời của Jorge Láscar.",
    introduction:
      "Một thành phố có thể được nhận ra qua âm thanh. Với Sài Gòn, đó là tiếng xe khởi động đầu ngõ, tiếng chào nhau qua lớp khẩu trang và nhịp bánh xe nối dài những câu chuyện thường ngày.",
    historyTitle: "Những vòng bánh, những cuộc đời.",
    historicalBackground: [
      "Xe máy hiện diện trong nhiều hoạt động thường ngày của người dân đô thị Việt Nam. Ở Sài Gòn, chiếc xe kết nối những con đường lớn với các hẻm nhỏ, đưa người ta tới chỗ làm, lớp học và những cuộc hẹn.",
      "Có chiếc xe chở đồ nghề, có chiếc xe chở một bó hoa, có chiếc xe cùng chủ nhân đi qua nhiều mùa mưa nắng. Giá trị của nó không chỉ ở việc di chuyển, mà còn ở những thói quen và ký ức được tích lũy dọc đường.",
      "Đây là câu chuyện quan sát đời sống, không phải một niên biểu về thời điểm xe máy xuất hiện. Những khung hình ghi lại một nhịp sống cụ thể, không đại diện cho mọi trải nghiệm của người Sài Gòn.",
    ],
    timelineLabel: "Một ngày theo những vòng xe",
    timeline: [
      {
        date: "Sáng sớm",
        title: "Thành phố thức giấc",
        text: "Từ đầu hẻm, những chuyến xe bắt đầu đưa người tới một ngày mới.",
      },
      {
        date: "Giữa ngày",
        title: "Qua từng góc phố",
        text: "Một bữa trưa, một chuyến giao hàng, một cuộc gặp ngắn bên đường.",
      },
      {
        date: "Chiều về",
        title: "Đường quen dẫn lối",
        text: "Những vòng bánh trở về, mang theo câu chuyện của một ngày.",
      },
    ],
    cultureTitle: "Sài Gòn, nhìn từ yên xe.",
    culturalMeaning: [
      "Từ yên xe, thành phố gần đến mức ta nhận ra một quán vừa mở, một hàng cây đang thay lá hay một con hẻm còn đọng mưa. Chuyển động cũng là một cách quan sát, và đường quen vẫn có điều mới.",
      "Tinh thần tự do trong câu chuyện này đến từ khả năng tự chọn lối đi và nhịp điệu của mình. Một vòng xe chậm, một lần dừng đúng lúc cũng có thể làm buổi chiều khác đi.",
    ],
    cultureQuote: "Đường thì quen. Câu chuyện luôn mới.",
    designInspiration:
      "Bánh xe, gương chiếu hậu và những nét cong của một chiếc xe quen thuộc trở thành nhịp điệu trong bản ký họa. Minh họa hướng đến cảm giác nhẹ nhàng, linh hoạt — như một người bạn đồng hành qua phố.",
    closingMessage:
      "Dù hôm nay bạn đi đâu, mong luôn có một điều đáng nhớ dọc đường. Một lời chào, một góc phố hay một câu chuyện nhỏ mang về.",
    sources: [],
    culturalNote:
      "Nội dung là góc nhìn văn hóa và đời sống của MoodBag; các phần trong ngày mang tính kể chuyện, không phải mốc lịch sử.",
  },
  {
    id: "05",
    slug: "charm-la-sen",
    title: "Charm lá sen",
    heroLines: ["Charm", "lá sen."],
    category: "Một khoảng an yên",
    subtitle: "Giữ một chút dịu dàng, giữa những ngày vội vã.",
    description:
      "Một chiếc lá nhỏ. Một lời nhắc về sự bình yên mang theo mỗi ngày.",
    heroImage: image("lotus/leaf"),
    historyImage: image("lotus/light"),
    lifestyleImage: image("lotus/leaf"),
    productImage: "/images/moodbag/tote-05.svg",
    accentColor: "#56624B",
    focalPoint: "50% 50%",
    imageAlt: "Cận cảnh lá sen xanh và những đường gân tỏa từ tâm lá",
    historyCaption:
      "Ánh nắng xuyên qua lá sen, chụp tại Don Det, Lào. Ảnh nghiên cứu hình dáng thực vật, không được giới thiệu là cảnh Việt Nam.",
    introduction:
      "Không cần là một biểu tượng lớn mới có thể gợi nên một câu chuyện. Một chiếc lá, những đường gân rất mảnh và sắc xanh dịu cũng đủ để nhắc ta dành một khoảng nhỏ cho chính mình.",
    historyTitle: "Từ thiên nhiên đến ý nghĩa riêng.",
    historicalBackground: [
      "Hình ảnh sen quen thuộc trong nhiều cách kể về văn hóa Việt, thường gợi liên tưởng đến sự thanh nhã và bình yên. Những ý nghĩa ấy là cách con người cảm nhận và diễn giải một hình ảnh thiên nhiên, không phải một sự kiện có niên đại duy nhất.",
      "Lá sen có một vẻ đẹp riêng: mặt lá rộng, đường gân tỏa ra từ tâm và đường viền mềm. Khi quan sát thật gần, ta thấy cấu trúc tự nhiên vừa có trật tự, vừa không lặp lại một cách máy móc.",
      "Charm lá sen là hướng phát triển phụ kiện của MoodBag từ cảm hứng ấy. Đây là ý tưởng thiết kế đương đại của thương hiệu, không được giới thiệu như một cổ vật hay một mẫu trang sức truyền thống.",
    ],
    timelineLabel: "Hành trình của một cảm hứng",
    timeline: [
      {
        date: "Quan sát",
        title: "Một chiếc lá",
        text: "Bắt đầu từ sắc xanh, đường viền và nhịp tỏa của những gân lá.",
      },
      {
        date: "Cảm nhận",
        title: "Một khoảng bình yên",
        text: "Thiên nhiên gợi nên một cách diễn giải cá nhân về sự dịu dàng.",
      },
      {
        date: "Sáng tạo",
        title: "Một vật nhỏ mang theo",
        text: "Chuyển cảm hứng thành ý tưởng charm gắn với chiếc túi hằng ngày.",
      },
    ],
    cultureTitle: "Bình yên từ những điều nhỏ.",
    culturalMeaning: [
      "Giữa một ngày nhiều âm thanh, đôi khi ta chỉ cần nhìn kỹ một chiếc lá. Những đường gân, vệt nắng và màu xanh không giải quyết mọi bận rộn, nhưng có thể cho ta một khoảnh khắc dừng lại.",
      "Ý nghĩa của một phụ kiện không nhất thiết giống nhau với tất cả mọi người. Với người này là một lời nhắc sống chậm; với người khác là tình yêu dành cho thiên nhiên, hoặc đơn giản là một hình dáng mình yêu thích.",
    ],
    cultureQuote: "Nhẹ một chiếc lá. Dịu một ngày dài.",
    designInspiration:
      "Đường viền lá và gân tỏa là điểm khởi đầu cho charm lá sen. Bản minh họa thử nghiệm đặt chi tiết nhỏ ấy cạnh chiếc túi canvas, để mỗi người có thể tìm thấy một dấu ấn riêng trong món đồ thường dùng.",
    closingMessage:
      "Mang theo một chút dịu dàng, để nhớ rằng bạn có thể đi chậm lại. Câu chuyện đẹp đôi khi bắt đầu bằng một điều rất nhỏ.",
    sources: [],
    culturalNote:
      "Các ý nghĩa về sen ở đây là diễn giải văn hóa và cảm hứng sáng tạo; hành trình thiết kế không phải niên biểu lịch sử. Ảnh thực vật minh họa không gắn với một địa danh Việt Nam cụ thể.",
  },
];

export const getStory = (slug) => stories.find((story) => story.slug === slug);
