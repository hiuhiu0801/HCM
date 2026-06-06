import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import {
  Shield,
  Flag,
  Layers,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Map,
  Landmark,
  Factory,
  GraduationCap,
  HeartHandshake,
  Compass,
  Sparkles,
  ArrowRight,
  Quote,
  ExternalLink,
  SunMedium,
  Target,
  Brain,
  Hammer,
  Images,
  MoveHorizontal,
  X,
  Maximize2,
} from "lucide-react";

const session10Tabs = [
  {
    id: "opening",
    number: "10.1",
    shortNumber: "01",
    title: "Mở vấn đề",
    headline: "Thời kỳ quá độ: Cuộc chuyển mình lớn của Việt Nam",
    subtitle:
      "Từ một đất nước nông nghiệp lạc hậu, Việt Nam từng bước xây dựng xã hội mới theo con đường xã hội chủ nghĩa.",
    role: "Giới thiệu vấn đề",
    icon: Map,
    imageHint: "Bản đồ Việt Nam phát sáng, cờ đỏ sao vàng, ánh sáng chuyển mình.",
    gradient: "from-red-950 via-[#130816] to-slate-950",
    accent: "text-yellow-300",
    gallery: [
      {
        type: "compare",
        title: "Từ sản xuất nông nghiệp thủ công đến nông nghiệp hiện đại",
        before: "/images/section10/10_1_1.jpg",
        after: "/images/section10/10_1_2.jpg",
        beforeLabel: "Trước",
        afterLabel: "Sau",
        description:
          "Bên trái: Phụ nữ đội sản xuất Mỹ Lộc, tỉnh Ninh Bình đang cấy lúa năm 1970. Bên phải: Hợp tác xã Dịch vụ Nông nghiệp Xuân Thiện, tỉnh Ninh Bình, canh tác hơn 230 ha lúa chất lượng cao và đã công nghiệp hóa toàn bộ các khâu sản xuất.",
        source: "Ảnh: TTXVN / VNA",
      },
      {
        type: "image",
        title: "Khó khăn sau ngày đất nước thống nhất",
        src: "/images/section10/10_1_3.jpg",
        description:
          "Sau ngày miền Nam được giải phóng và đất nước thống nhất, Việt Nam phải đối mặt với vô vàn khó khăn. Trong ảnh: Nông dân huyện Hương Điền, tỉnh Bình Trị Thiên thực hiện hợp đồng kinh tế hai chiều, vận chuyển thóc đến kho Nhà nước ở thành phố Huế để đổi lấy phân bón, tháng 6 năm 1978.",
        source: "Ảnh: TTXVN / VNA",
      },
      {
        type: "image",
        title: "Ký ức thời kỳ bao cấp",
        src: "/images/section10/10_1_4.jpg",
        description:
          "Những bữa cơm độn sắn, độn khoai đã trở thành ký ức khó quên của thời kỳ bao cấp. Ảnh minh họa: Người dân xếp hàng mua lương thực trong thời bao cấp.",
        source: "Nguồn: TTXVN / VNA",
      },
      {
        type: "image",
        title: "Đổi mới 1986: Bước ngoặt lớn của đất nước",
        src: "/images/section10/10_1_5.jpg",
        description:
          "Đại hội đại biểu toàn quốc lần thứ VI của Đảng năm 1986 đã đề ra đường lối đổi mới toàn diện đất nước, đánh dấu bước ngoặt lớn trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam. Tại Đại hội VI, Đảng xác định nông nghiệp là mặt trận hàng đầu. Sau đó, nhiều cải cách mạnh mẽ được triển khai, tiêu biểu là Nghị quyết 10-NQ/TW ngày 5/4/1988 của Bộ Chính trị, trao quyền tự chủ sản xuất, kinh doanh cho nông dân trên diện tích đất được giao ổn định lâu dài.",
        source: "Ảnh: TTXVN / VNA",
      },
    ],
    content: [
      "Việt Nam bước vào thời kỳ quá độ như một cuộc chuyển mình lớn của dân tộc.",
      "Đây không chỉ là thay đổi về kinh tế, mà là quá trình cải biến toàn diện xã hội cũ thành xã hội mới.",
      "Tư tưởng Hồ Chí Minh nhấn mạnh xây dựng CNXH phải xuất phát từ thực tiễn Việt Nam.",
    ],
    speakerNote:
      "Ở phần mở đầu, mình muốn nhấn mạnh rằng thời kỳ quá độ không phải là một bước nhảy đơn giản. Đây là hành trình Việt Nam chuyển mình từ nền sản xuất lạc hậu sang xây dựng xã hội mới.",
    references: ["hochiminh.vn", "Giáo trình Tư tưởng Hồ Chí Minh"],
  },
  {
    id: "context",
    number: "10.2",
    shortNumber: "02",
    title: "Bối cảnh xuất phát",
    headline: "Từ đô thị cũ, tem phiếu, xe đạp đến đời sống bao cấp",
    subtitle:
      "Những hình ảnh tư liệu cho thấy Việt Nam bước vào thời kỳ quá độ với điểm xuất phát thấp: kinh tế còn khó khăn, hàng hóa khan hiếm, đời sống nhân dân chịu nhiều giới hạn.",
    role: "Giải thích Việt Nam bắt đầu từ đâu",
    icon: Flag,
    image: "/images/section10/10_2_1.jpg",
    imageHint:
      "Tư liệu đô thị, tem phiếu, xe đạp, tàu điện và cửa hàng mậu dịch trong bối cảnh thời bao cấp.",
    gradient: "from-amber-950 via-[#1b1208] to-slate-950",
    accent: "text-amber-300",
    gallery: [
      {
        type: "compare",
        title: "Quảng trường Mê Linh: xưa và nay",
        before: "/images/section10/10_2_1.jpg",
        after: "/images/section10/10_2_2.jpg",
        beforeLabel: "Đầu những năm 1970",
        afterLabel: "Hiện nay",
        description:
          "Ảnh bên trái là Quảng trường Mê Linh nhìn từ trên cao, hướng từ sông Sài Gòn vào trung tâm Sài Gòn đầu những năm 1970, qua ống kính nhiếp ảnh gia Corbis. Bức ảnh ghi lại không gian đô thị ven sông với vòng xoay, bến tàu và tượng Trần Hưng Đạo – một dấu mốc quen thuộc của khu vực. Ảnh bên phải gợi khung cảnh khu vực này trong hiện tại, khi cảnh quan đã thay đổi rõ rệt với nhiều tuyến đường phân nhánh, cao ốc hiện đại và tượng đài Trần Hưng Đạo cũng đã được tu sửa. Cách đặt hai hình ảnh cạnh nhau giúp người xem thấy rõ sự chuyển biến của không gian đô thị qua thời gian.",
        source: "Ảnh xưa: Corbis / Ảnh nay: tư liệu đối chiếu",
      },
      {
        type: "image",
        title: "Bảng tiêu chuẩn tem phiếu thời bao cấp",
        src: "/images/section10/10_2_4.jpg",
        description:
          "Bảng tiêu chuẩn tem phiếu thời bao cấp cho thấy mỗi nhóm cán bộ, công nhân viên được phân loại theo chức vụ, mức lương hoặc tính chất lao động để nhận định mức mua thực phẩm hằng tháng như thịt, cá, nước chấm, đường và bột ngọt. Trong bối cảnh hàng hóa khan hiếm, tiền lương không quyết định người dân muốn mua bao nhiêu cũng được; tem phiếu mới là “quyền được mua”, và mỗi người chỉ được mua trong giới hạn tiêu chuẩn đã phân phối.",
        source: "Tư liệu thời bao cấp",
      },
      {
        type: "image",
        title: "Giấy chứng nhận sở hữu xe đạp năm 1966",
        src: "/images/section10/10_2_5.jpg",
        description:
          "Giấy chứng nhận sở hữu xe đạp do Sở Công an Hà Nội cấp năm 1966 là một minh chứng cho thời kỳ xe đạp từng là tài sản lớn của mỗi gia đình. Khi đời sống còn nhiều khó khăn, xe đạp không chỉ là phương tiện đi lại mà còn phải được đăng ký, có số khung, biển kiểm soát và giấy chứng nhận sở hữu như một tài sản quan trọng.",
        source: "Tư liệu Hà Nội năm 1966",
      },
      {
        type: "image",
        title: "Tàu điện Hà Nội và tiếng chuông leng keng",
        src: "/images/section10/10_2_3_1.jpg",
        description:
          "Tàu điện Hà Nội là hệ thống xe điện đô thị được người Pháp xây dựng từ đầu thế kỷ XX. Hệ thống này bắt đầu vận hành vào khoảng năm 1901 và tồn tại đến năm 1991, tức gần một thế kỷ gắn bó với đời sống người Hà Nội. Theo các tư liệu lịch sử, hệ thống tàu điện Hà Nội cũ từng có nhiều tuyến tỏa ra từ khu vực trung tâm, đặc biệt là quanh Bờ Hồ, đi về các hướng như Yên Phụ, chợ Bưởi, Cầu Giấy, Hà Đông, chợ Mơ và Vọng. Với người Hà Nội xưa, tàu điện không chỉ là phương tiện đi lại, mà còn là một phần của đời sống thường ngày. Người ta đi học, đi làm, đi chợ, đi chơi bằng tàu điện. Những chuyến tàu chậm rãi chạy qua phố, tiếng chuông “leng keng” vang lên mỗi khi tàu vào bến hoặc đi qua đoạn đông người, tạo nên một âm thanh rất riêng của Hà Nội. Nhiều tư liệu gọi tàu điện leng keng là biểu tượng và một phần linh hồn của phố phường Hà Nội xưa. Đến cuối thế kỷ XX, khi đô thị phát triển, phương tiện cá nhân tăng lên và mạng lưới giao thông thay đổi, tàu điện cũ dần không còn phù hợp. Hệ thống này chính thức ngừng hoạt động vào năm 1991. Từ đó, tiếng “leng keng” không còn vang trên phố, nhưng vẫn sống trong ký ức của nhiều thế hệ người Hà Nội.",
        source: "Tư liệu tàu điện Hà Nội",
        detailImages: [
          {
            src: "/images/section10/10_2_3_1.jpg",
            label: "Ảnh 1",
            title: "Tàu điện Hà Nội trong ký ức đô thị",
          },
          {
            src: "/images/section10/10_2_3_2.jpg",
            label: "Ảnh 2",
            title: "Tuyến tàu điện quanh khu vực trung tâm",
          },
          {
            src: "/images/section10/10_2_3_3.jpg",
            label: "Ảnh 3",
            title: "Người dân di chuyển bằng tàu điện",
          },
          {
            src: "/images/section10/10_2_3_4.jpg",
            label: "Ảnh 4",
            title: "Tiếng chuông leng keng trên phố Hà Nội",
          },
          {
            src: "/images/section10/10_2_3_5.jpg",
            label: "Ảnh 5",
            title: "Một biểu tượng của Hà Nội xưa",
          },
        ],
      },
      {
        type: "image",
        title: "Cửa hàng mậu dịch quốc doanh thời bao cấp",
        src: "/images/section10/10_2_6.jpg",
        description:
          "Ảnh chụp cảnh rất đông người tập trung trước một cửa hàng mậu dịch quốc doanh. Đây là nơi Nhà nước tổ chức bán hoặc phân phối hàng hóa thiết yếu trong thời bao cấp. Người dân thường phải xếp hàng, mang theo tem phiếu, sổ mua hàng hoặc tiêu chuẩn phân phối để mua các mặt hàng như gạo, thịt, vải, đường, chất đốt, thực phẩm Tết. Nhiều tư liệu về thời bao cấp mô tả cảnh “xếp hàng mua bia hơi, cầm sổ chờ mua gạo, mua từng cm vải bằng tem phiếu” như một ký ức rất đặc trưng của giai đoạn này. Ở Việt Nam, mậu dịch quốc doanh giữ vai trò rất quan trọng trong thời bao cấp; đây là lực lượng thương nghiệp chủ chốt, được hình thành từ Sở Mậu dịch và phát triển thành mạng lưới công ty, cửa hàng ở nhiều địa phương.",
        source: "Tư liệu thời bao cấp / Tạp chí Công Thương",
      },
    ],
    content: [
      "Việt Nam bước vào thời kỳ quá độ từ một nền kinh tế còn nghèo, cơ sở vật chất thấp và đời sống nhân dân nhiều thiếu thốn.",
      "Thời bao cấp cho thấy rõ tình trạng hàng hóa khan hiếm: tem phiếu, sổ mua hàng và tiêu chuẩn phân phối quyết định khả năng tiếp cận nhu yếu phẩm.",
      "Từ xe đạp, tàu điện, cửa hàng mậu dịch đến không gian đô thị cũ, các hình ảnh này giúp người xem hiểu vì sao quá trình xây dựng CNXH ở Việt Nam phải lâu dài, thận trọng và phù hợp với thực tiễn.",
    ],
    split: {
      leftTitle: "Điểm xuất phát",
      leftItems: [
        "Kinh tế còn khó khăn",
        "Hàng hóa khan hiếm",
        "Đời sống phụ thuộc vào phân phối",
      ],
      rightTitle: "Yêu cầu đặt ra",
      rightItems: [
        "Phát triển sản xuất",
        "Nâng cao đời sống nhân dân",
        "Đổi mới cách tổ chức và quản lý xã hội",
      ],
    },
    speakerNote:
      "Ở phần 10.2, mình dùng các ảnh tư liệu để người nghe thấy rõ điểm xuất phát thấp của Việt Nam. Không chỉ là lý thuyết, những hình ảnh về tem phiếu, xe đạp, tàu điện và cửa hàng mậu dịch cho thấy đời sống lúc đó còn nhiều giới hạn. Vì vậy, xây dựng CNXH ở Việt Nam không thể nóng vội, mà phải xuất phát từ thực tiễn và từng bước cải biến xã hội.",
    references: [
      "Ảnh Corbis",
      "Tư liệu thời bao cấp",
      "Tư liệu tàu điện Hà Nội",
      "Tạp chí Công Thương",
    ],
  },
  {
    id: "nature",
    number: "10.3",
    shortNumber: "03",
    title: "Tủ ký ức lời Bác dặn về thời kỳ quá độ",
    headline: "Lâu dài, khó khăn, phức tạp và cải biến sâu sắc",
    subtitle:
      "Xây dựng xã hội mới không thể nóng vội, chủ quan hoặc duy ý chí.",
    role: "Làm rõ bản chất của thời kỳ quá độ",
    icon: Shield,
    image: "/images/session10/transition-contrast.jpg",
    imageHint: "Một nửa tối là khó khăn, một nửa sáng là phát triển.",
    gradient: "from-slate-950 via-[#101827] to-cyan-950",
    accent: "text-cyan-300",
    quote:
      "Xây dựng chủ nghĩa xã hội là một quá trình lâu dài, khó khăn, phức tạp và sâu sắc.",
    gallery: [
      {
        type: "compare",
        title: "Giữa khó khăn và ánh sáng phát triển",
        before: "/images/session10/10-3-before.jpg",
        after: "/images/session10/10-3-after.jpg",
        beforeLabel: "Khó khăn",
        afterLabel: "Phát triển",
        hint: "Hình ảnh tương phản giúp nhấn mạnh tính lâu dài, phức tạp của thời kỳ quá độ.",
      },
      {
        type: "image",
        title: "Con đường dài",
        src: "/images/session10/10-3-long-road.jpg",
        hint: "Ẩn dụ cho quá trình lâu dài, cần kiên trì và bền bỉ.",
      },
      {
        type: "image",
        title: "Cái cũ và cái mới đan xen",
        src: "/images/session10/10-3-old-new.jpg",
        hint: "Thể hiện sự phức tạp trong quá trình cải biến xã hội.",
      },
      {
        type: "image",
        title: "Ánh sáng chuyển mình",
        src: "/images/session10/10-3-light.jpg",
        hint: "Gợi cảm giác hy vọng, phát triển và hướng tới tương lai.",
      },
    ],

    content: [
      "Thời kỳ quá độ là lâu dài, không thể hoàn thành trong thời gian ngắn.",
      "Khó khăn, phức tạp vì có sự đan xen giữa cái cũ và cái mới.",
      "Là quá trình cải biến sâu sắc trên nhiều mặt của đời sống xã hội.",
      "Không thể nóng vội, chủ quan hoặc duy ý chí.",
    ],
    keywordCards: [
      {
        title: "Lâu dài",
        icon: Target,
        desc: "Cần tích lũy, phát triển từng bước.",
      },
      {
        title: "Khó khăn",
        icon: Shield,
        desc: "Xuất phát điểm thấp, nhiều thử thách.",
      },
      {
        title: "Phức tạp",
        icon: Layers,
        desc: "Cái cũ và cái mới cùng tồn tại.",
      },
      {
        title: "Toàn diện",
        icon: Sparkles,
        desc: "Cải biến chính trị, kinh tế, văn hóa, xã hội.",
      },
    ],

    storyCabinet: [
      {
        id: "duong-kach-menh",
        drawer: "Ngăn 01",
        title: "Đời này chưa xong, đời sau nối tiếp",
        mini: "Con đường cách mạng là hành trình nhiều thế hệ.",
        quote: "Đời này làm chưa xong thì đời sau nối theo làm thì phải xong.",
        source:
          "Câu thường được dẫn khi phân tích tư tưởng Hồ Chí Minh về tính lâu dài, gian khổ của cách mạng; gắn với tinh thần Đường Kách Mệnh.",
        image: "/images/section10/10_3_2.jpg",
        imageCaption:
          "Bìa sách Đường Kách Mệnh, tư liệu cách mạng và hình ảnh các thế hệ nối tiếp nhau.",
        storyTitle: "Một cuộc cách mạng không thể hoàn thành trong một đời người",
        storyBody: [
          "Câu nói này rất phù hợp để làm rõ tính lâu dài của thời kỳ quá độ.",
          "Bác Hồ nhìn cách mạng như một hành trình bền bỉ, có sự tiếp nối giữa nhiều thế hệ.",
          "Vì vậy, xây dựng chủ nghĩa xã hội không thể nóng vội, mà phải kiên trì, có chuẩn bị và có bước đi phù hợp.",
        ],
        artifact: {
          label: "Tác phẩm liên hệ",
          title: "Đường Kách Mệnh",
          desc:
            "Đường Kách Mệnh là tác phẩm tập hợp các bài giảng của Nguyễn Ái Quốc cho lớp huấn luyện ở Quảng Châu, xuất bản năm 1927.",
          bullets: [
            "Năm xuất bản: 1927",
            "Giá trị: chuẩn bị về tư tưởng, tổ chức và đường lối cho cách mạng Việt Nam",
            "Liên hệ 10.3: cách mạng là hành trình lâu dài, cần nhiều thế hệ nối tiếp",
          ],
        },
      },
      {
        id: "trong-nguoi",
        drawer: "Ngăn 02",
        title: "Trồng người trăm năm",
        mini: "Xây xã hội mới trước hết phải xây con người mới.",
        quote:
          "Vì lợi ích mười năm thì phải trồng cây. Vì lợi ích trăm năm thì phải trồng người.",
        source:
          "Bài nói tại lớp học chính trị của giáo viên cấp II, cấp III toàn miền Bắc, ngày 14/9/1958.",
        image: "/images/section10/10-3-1.jpg",
        imageCaption:
          "Hình ảnh lớp học, thế hệ trẻ và những mầm cây gợi ý nghĩa bồi dưỡng con người cho tương lai lâu dài.",
        storyTitle: "Xây xã hội mới không chỉ là dựng công trình, mà là bồi dưỡng con người",
        storyBody: [
          "Bác Hồ nhắc chuyện trồng cây và trồng người để nói rằng muốn đất nước đổi mới thật sự thì phải đầu tư cho con người.",
          "Trong thời kỳ quá độ, xây dựng chủ nghĩa xã hội không chỉ là xây nhà máy, con đường hay công trình.",
          "Quan trọng hơn là xây dựng thế hệ có tri thức, đạo đức, tinh thần trách nhiệm và ý thức cộng đồng.",
        ],
        artifact: {
          label: "Ý nghĩa",
          title: "Vì sao thời kỳ quá độ là lâu dài?",
          desc:
            "Vì xây dựng xã hội mới thực chất là xây dựng cả nền tảng con người cho nhiều thế hệ.",
          bullets: [
            "Lâu dài vì phải bồi dưỡng thế hệ mới",
            "Khó khăn vì phải thay đổi nhận thức và lối sống",
            "Toàn diện vì liên quan giáo dục, văn hóa và đạo đức",
          ],
        },
      },
      {
        id: "sua-xa-hoi-cu",
        drawer: "Ngăn 03",
        title: "Sửa xã hội cũ, xây xã hội mới",
        mini: "Cái cũ và cái mới luôn đan xen, va chạm.",
        quote:
          "Sửa cái xã hội cũ đã mấy ngàn năm làm xã hội mới, ấy là rất khó.",
        source:
          "Câu được dẫn trong các bài phân tích về tư tưởng Hồ Chí Minh khi nói đến tính khó khăn, phức tạp của cách mạng và xây dựng xã hội mới.",
        image: "/images/section10/10_3_3.jpg",
        imageCaption:
          "Hình ảnh đan xen giữa nếp sống cũ và những công trình, lớp học, nhà máy mới đang hình thành.",
        storyTitle: "Vì sao Bác nói xây dựng xã hội mới là rất khó?",
        storyBody: [
          "Trong thời kỳ quá độ, cái cũ chưa thể mất ngay, còn cái mới cũng chưa thể hoàn chỉnh ngay.",
          "Hai mặt ấy cùng tồn tại, va chạm và tạo nên tính phức tạp của quá trình chuyển biến.",
          "Vì vậy, xây dựng xã hội mới không chỉ là thêm cái mới, mà còn là cải biến sâu sắc cách nghĩ, cách sống và cách tổ chức xã hội.",
        ],
        artifact: {
          label: "Liên hệ hình ảnh",
          title: "Cái cũ và cái mới đan xen",
          desc:
            "Có thể dùng ảnh công trường, cầu đường, đường sắt, nhà máy hoặc khu dân cư cũ - mới để thể hiện sự chuyển tiếp không đồng đều.",
          bullets: [
            "Công trường xây dựng thủy điện Hòa Bình",
            "Khôi phục cầu đường sau chiến tranh",
            "Đường sắt Bắc Nam ngày thống nhất",
          ],
        },
      },
      {
        id: "suc-dan",
        drawer: "Ngăn 04",
        title: "Dựa vào sức dân để đi đường dài",
        mini: "Việc khó đến đâu cũng cần lực lượng nhân dân.",
        quote:
          "Có lực lượng dân chúng việc to tát mấy, khó khăn mấy làm cũng được. Không có, thì việc gì làm cũng không xong.",
        source:
          "Câu được nhiều công trình nghiên cứu về tư tưởng Hồ Chí Minh trích dẫn khi phân tích vai trò của nhân dân.",
        image: "/images/section10/10_3_4.jpg",
        imageCaption:
          "Nhân dân lao động, công nhân, nông dân, thanh niên và các thế hệ cùng tham gia xây dựng đất nước.",
        storyTitle: "Không thể đi qua thời kỳ quá độ nếu tách rời nhân dân",
        storyBody: [
          "Nếu thời kỳ quá độ là lâu dài và khó khăn, thì câu hỏi đặt ra là ai sẽ làm nên cuộc chuyển mình ấy.",
          "Trong tư tưởng Hồ Chí Minh, câu trả lời là nhân dân.",
          "Mọi công việc lớn của cách mạng đều phải dựa vào sức dân, khơi dậy sức dân và hướng đến lợi ích của nhân dân.",
        ],
        artifact: {
          label: "Chốt ý",
          title: "Sức dân là lời giải cho hành trình dài",
          desc:
            "Sức dân chính là động lực giúp vượt qua tính lâu dài, khó khăn và phức tạp của thời kỳ quá độ.",
          bullets: [
            "Dân là chủ thể của công cuộc xây dựng",
            "Dân vừa là mục tiêu, vừa là động lực",
            "Không thể duy ý chí nếu xa rời thực tiễn đời sống nhân dân",
          ],
        },
      },
    ],
    speakerNote:
      "Ở phần này, mình nhấn mạnh rằng xây dựng CNXH là một quá trình lâu dài. Vì vậy, nếu nóng vội hoặc duy ý chí thì dễ dẫn đến sai lầm.",
    references: ["Giáo trình Tư tưởng Hồ Chí Minh"],
  },
  {
    id: "missions",
    number: "10.4",
    shortNumber: "04",
    title: "4 nhiệm vụ xây dựng CNXH",
    headline: "Xây dựng xã hội mới phải toàn diện",
    subtitle:
      "Chính trị, kinh tế, văn hóa và xã hội là bốn trụ cột quan trọng của quá trình xây dựng CNXH.",
    role: "Trình bày nội dung trọng tâm cần làm",
    icon: Layers,
    image: "/images/session10/tasks-overview.jpg",
    imageHint: "Ghép hình nhà nước, nhà máy, trường học, cộng đồng nhân dân.",
    gradient: "from-red-950 via-slate-950 to-yellow-950",
    accent: "text-yellow-300",
    gallery: [
      {
        type: "compare",
        title: "Từ xã hội cũ đến bốn trụ cột xây dựng",
        before: "/images/session10/10-4-before.jpg",
        after: "/images/session10/10-4-after.jpg",
        beforeLabel: "Xã hội cũ",
        afterLabel: "Xây dựng mới",
        hint: "So sánh nền tảng cũ với yêu cầu xây dựng toàn diện trên chính trị, kinh tế, văn hóa, xã hội.",
      },
      {
        type: "image",
        title: "Chính trị",
        src: "/images/session10/10_4_1.jpg",
        hint: "Nhấn mạnh nhà nước của dân, do dân, vì dân.",
      },
      {
        type: "image",
        title: "Kinh tế",
        src: "/images/session10/10_4_2.jpg",
        hint: "Thể hiện phát triển lực lượng sản xuất, công nghiệp hóa và hiện đại hóa.",
      },
      {
        type: "image",
        title: "Văn hóa và xã hội",
        src: "/images/session10/10_4_3.jpg",
        hint: "Gợi phát triển giáo dục, con người mới, công bằng xã hội và cộng đồng đoàn kết.",
      },
    ],
    content: [
      "Chính trị: Giữ vững vai trò lãnh đạo của Đảng, xây dựng nhà nước của dân, do dân, vì dân.",
      "Kinh tế: Phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa.",
      "Văn hóa: Xây dựng nền văn hóa mới, phát triển giáo dục, đạo đức và con người mới.",
      "Xã hội: Thực hiện công bằng xã hội, chăm lo đời sống nhân dân.",
    ],
    tasks: [
      {
        title: "Chính trị",
        icon: Landmark,
        image: "/images/section10/10_4_1.jpg",
        desc: "Giữ vững vai trò lãnh đạo của Đảng, xây dựng nhà nước của dân, do dân, vì dân.",
        source: '"Báo cáo về dự thảo Hiến pháp sửa đổi" (1959) và "Thường thức chính trị" (1953).',
        argument: 'Bác nhấn mạnh trong thời kỳ quá độ, phải xây dựng một nhà nước dân chủ nhân dân, dựa trên liên minh công nông, do Đảng của giai cấp công nhân lãnh đạo.',
        quote: "Chế độ ta là chế độ dân chủ, nghĩa là nhân dân làm chủ.",
        imageCaption: "Chủ tịch Hồ Chí Minh trong một lần bỏ phiếu bầu cử đại biểu Quốc hội."
      },
      {
        title: "Kinh tế",
        icon: Factory,
        image: "/images/section10/10_4_2.jpg",
        desc: "Phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa, nâng cao đời sống vật chất.",
        source: "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng (1960).",
        argument: 'Bác khẳng định đặc điểm lớn nhất của ta trong thời kỳ quá độ là "từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa". Do đó, nhiệm vụ quan trọng nhất là phải biến nước ta thành một nước công nghiệp hiện đại, nông nghiệp hiện đại, khoa học tiên tiến.',
        quote: "Tiến thẳng lên chủ nghĩa xã hội không kinh qua giai đoạn phát triển tư bản chủ nghĩa.",
        imageCaption: "Năm 1964, Người về thăm công trường xây dựng khu gang thép Thái Nguyên/ TTXVN 1975."
      },
      {
        title: "Văn hóa",
        icon: GraduationCap,
        image: "/images/section10/10_4_3.jpg",
        desc: "Xây dựng nền văn hóa mới, phát triển giáo dục, đạo đức, con người mới.",
        source: "Bài nói tại Hội nghị bồi dưỡng cán bộ lãnh đạo các cấp toàn miền Bắc (1961).",
        argument: 'Văn hóa phải gắn liền với lao động, sản xuất, và phải "soi đường cho quốc dân đi". Để hoàn thành sứ mệnh đó, yếu tố cốt lõi và đi đầu chính là xây dựng nền tảng con người.',
        quote: "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.",
        imageCaption: "Bác Hồ trong buổi gặp thân mật với các đại biểu học sinh miền Nam tại Phủ chủ tịch năm 1956. (Ảnh tư liệu)"
      },
      {
        title: "Xã hội",
        icon: HeartHandshake,
        image: "/images/section10/10_4_4.jpg",
        desc: "Thực hiện công bằng xã hội, chăm lo đời sống nhân dân, xây dựng cộng đồng đoàn kết.",
        source: "Di chúc (1969).",
        argument: "Bác căn dặn Đảng phải có kế hoạch thật tốt để phát triển kinh tế và văn hóa, nhằm không ngừng nâng cao đời sống của nhân dân. Mọi chính sách phải hướng tới sự công bằng, không để ai bị bỏ lại phía sau.",
        quote: "Đảng cần phải có kế hoạch thật tốt để phát triển kinh tế và vǎn hóa, nhằm không ngừng nâng cao đời sống của nhân dân.",
        imageCaption: "Chủ tịch Hồ Chí Minh thăm Bệnh viện Quân y Hải Phòng (5/1957). Ảnh: TTXVN."
      },
    ],
    speakerNote:
      "Đây là phần trọng tâm. Mình có thể nói rằng xây dựng CNXH không chỉ là phát triển kinh tế, mà còn phải xây dựng chính trị, văn hóa và xã hội một cách đồng bộ.",
    references: ["Giáo trình Tư tưởng Hồ Chí Minh"],
  },
  {
    id: "principles",
    number: "10.5",
    shortNumber: "05",
    title: "4 nguyên tắc xây dựng CNXH",
    headline: "Kiên định mục tiêu, sáng tạo trong cách làm",
    subtitle:
      "Xây dựng CNXH ở Việt Nam cần nền tảng lý luận vững chắc nhưng không được giáo điều.",
    role: "Làm rõ phương pháp xây dựng",
    icon: Compass,
    imageHint: "La bàn tư tưởng, ánh sáng trung tâm, các đường kết nối.",
    gradient: "from-cyan-950 via-slate-950 to-red-950",
    accent: "text-cyan-300",
    content: [
      "Kiên định chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh.",
      "Giữ vững độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      "Sáng tạo, không giáo điều, xuất phát từ thực tiễn Việt Nam.",
      "Xây dựng đi đôi với chống: xây cái mới, chống cái cũ, chống tiêu cực.",
    ],
    principles: [
      {
        title: "Kiên định nền tảng",
        icon: BookOpen,
        image: "/images/section10/10_5_1.jpg",
        desc: "Dựa trên chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.",
        source: "Tác phẩm Đường Kách mệnh (1927) và các bài nói chuyện.",
        argument: "Bác khẳng định chủ nghĩa Lênin là 'cái cẩm nang thần kỳ', là mặt trời soi sáng con đường cách mạng. Phải tuyệt đối trung thành và kiên định với nền tảng tư tưởng này, lấy đó làm kim chỉ nam cho mọi hành động.",
        quote: "Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin.",
        imageCaption: "Đồng chí Nguyễn Ái Quốc (Chủ tịch Hồ Chí Minh) phát biểu tại Đại hội thành lập Đảng Cộng sản Pháp họp ở thành phố Tua. Đồng chí là người Việt Nam đầu tiên trở thành người cộng sản và là một trong những sang lập viên của Đảng Cộng sản Pháp (12/1920). Ảnh tư liệu: TTXVN."
      },
      {
        title: "Độc lập dân tộc",
        icon: Flag,
        image: "/images/section10/10_5_2.jpg",
        desc: "Gắn độc lập dân tộc với chủ nghĩa xã hội.",
        source: "Lời kêu gọi đồng bào và chiến sĩ cả nước (1966).",
        argument: "Độc lập dân tộc là tiền đề, là điều kiện tiên quyết để xây dựng CNXH. Ngược lại, xây dựng CNXH là cơ sở vững chắc để bảo vệ và phát triển nền độc lập dân tộc.",
        quote: "Không có gì quý hơn độc lập, tự do.",
        imageCaption: "Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa, nay là nước CHXHCN Việt Nam. Ảnh: TTXVN."
      },
      {
        title: "Sáng tạo thực tiễn",
        icon: Brain,
        image: "/images/section10/10_5_3.jpg",
        desc: "Không giáo điều, không sao chép máy móc mô hình bên ngoài.",
        source: "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951).",
        argument: "Bác kịch liệt phản đối thói giáo điều, rập khuôn. Mỗi quốc gia có hoàn cảnh lịch sử, địa lý, kinh tế khác nhau. Việt Nam phải tự tìm ra con đường, bước đi và cách làm phù hợp với đặc điểm riêng của mình.",
        quote: "Đảng ta nhờ kết hợp được chân lý phổ biến của chủ nghĩa Mác - Lênin với thực tiễn cách mạng của nước ta, cho nên đã thu được nhiều thắng lợi.",
        imageCaption: "Ảnh Bác Hồ tát nước chống hạn tại Tả Thanh Oai. Ảnh tư liệu."
      },
      {
        title: "Xây đi đôi với chống",
        icon: Hammer,
        image: "/images/section10/10_5_4.jpg",
        desc: "Xây cái mới, chống cái cũ, chống tiêu cực.",
        source: "Bài nói tại Hội nghị cán bộ cao cấp của Đảng và Nhà nước (1962).",
        argument: "Xây dựng CNXH không chỉ là kiến tạo những công trình, những giá trị mới tốt đẹp, mà còn phải đồng thời kiên quyết đấu tranh, loại bỏ những thói hư, tật xấu, tàn dư của xã hội cũ (như tham ô, lãng phí, quan liêu).",
        quote: "Xây dựng chủ nghĩa xã hội là một cuộc đấu tranh... để đánh thắng những thói hư tật xấu, để xây dựng đạo đức mới, lối sống mới.",
        imageCaption: "Chủ tịch Hồ Chí Minh luôn căn dặn cán bộ, đảng viên phải cần, kiệm, liêm, chính."
      },
    ],
    speakerNote:
      "Phần này nên nói rõ sự cân bằng: kiên định mục tiêu nhưng cách làm phải sáng tạo, phù hợp với điều kiện Việt Nam.",
    references: ["Bảo tàng Hồ Chí Minh", "hochiminh.vn"],
  },
  {
    id: "conclusion",
    number: "10.6",
    shortNumber: "06",
    title: "Tổng kết",
    headline: "Không nóng vội. Không giáo điều. Vì nhân dân.",
    subtitle:
      "Tư tưởng Hồ Chí Minh về thời kỳ quá độ giúp ta hiểu rằng xây dựng CNXH ở Việt Nam là một hành trình lâu dài, toàn diện và phải xuất phát từ thực tiễn đất nước.",
    role: "Chốt lại giá trị cốt lõi của toàn bộ Session 10",
    icon: SunMedium,
    image: "/images/section10/10_6_bg.jpg",
    imageHint: "Bình minh trên Việt Nam, ánh sáng mở ra từ quá khứ đến hiện tại.",
    gradient: "from-yellow-950 via-red-950 to-slate-950",
    accent: "text-yellow-300",

    conclusionQuote:
      "Thời kỳ quá độ không phải là một bước nhảy đơn giản, mà là hành trình cải biến toàn diện xã hội cũ thành xã hội mới.",

    content: [
      "Việt Nam đi lên CNXH từ điểm xuất phát thấp, nên quá trình này tất yếu lâu dài, khó khăn và phức tạp.",
      "Xây dựng CNXH phải toàn diện trên chính trị, kinh tế, văn hóa và xã hội.",
      "Con đường ấy phải kiên định mục tiêu, nhưng cách làm phải sáng tạo, không giáo điều và luôn đặt nhân dân ở trung tâm.",
    ],

    finalStatements: [
      {
        title: "Không nóng vội",
        label: "Luận điểm về bước đi",
        desc:
          "Xây dựng CNXH ở Việt Nam là quá trình cải biến sâu sắc một xã hội cũ thành xã hội mới, nên phải có thời gian, có tích lũy và có bước đi phù hợp.",
        quote:
          "“Sửa cái xã hội cũ đã mấy ngàn năm làm xã hội mới, ấy là rất khó.”",
        source:
          "Rút ra từ tư tưởng Hồ Chí Minh về tính lâu dài, khó khăn, phức tạp của thời kỳ quá độ.",
        takeaway:
          "Vì vậy, xây dựng CNXH không thể chủ quan, duy ý chí hay đốt cháy giai đoạn.",
      },
      {
        title: "Không giáo điều",
        label: "Luận điểm về phương pháp",
        desc:
          "Hồ Chí Minh nhấn mạnh phải kiên định nền tảng lý luận, nhưng vận dụng sáng tạo vào hoàn cảnh cụ thể của Việt Nam.",
        quote:
          "“Đảng ta nhờ kết hợp được chân lý phổ biến của chủ nghĩa Mác - Lênin với thực tiễn cách mạng của nước ta, cho nên đã thu được nhiều thắng lợi.”",
        source:
          "Rút ra từ tư tưởng Hồ Chí Minh về kết hợp chủ nghĩa Mác - Lênin với thực tiễn cách mạng Việt Nam.",
        takeaway:
          "Vì vậy, con đường đi lên CNXH ở Việt Nam không phải là sao chép máy móc, mà là tìm bước đi phù hợp với dân tộc mình.",
      },
      {
        title: "Vì nhân dân",
        label: "Luận điểm về mục tiêu",
        desc:
          "Mục tiêu cuối cùng của độc lập dân tộc và CNXH là làm cho nhân dân có cuộc sống tự do, ấm no, hạnh phúc.",
        quote:
          "“Nếu nước độc lập mà dân không được hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”",
        source:
          "Rút ra từ tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với hạnh phúc của nhân dân.",
        takeaway:
          "Vì vậy, nhân dân vừa là mục tiêu, vừa là động lực của toàn bộ sự nghiệp xây dựng CNXH.",
      },
    ],
    closingLine:
      "Thời kỳ quá độ ở Việt Nam vì thế không chỉ là con đường đi lên CNXH, mà là hành trình kiên trì xây dựng một xã hội mới — phù hợp với thực tiễn Việt Nam và vì hạnh phúc của nhân dân.",

    speakerNote:
      "Ở phần tổng kết, mình chốt lại ba ý ngắn gọn: không nóng vội, không giáo điều và vì nhân dân. Đây là ba điểm giúp người nghe nhớ được toàn bộ nội dung Session 10.",
    references: ["Giáo trình Tư tưởng Hồ Chí Minh", "Tư liệu Văn kiện Đảng"],
  },
];

function SourceBadges({ references }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {references.map((source) => (
        <span
          key={source}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/55"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          {source}
        </span>
      ))}
    </div>
  );
}

function SafeImage({ src, alt, className, style }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={className}
      style={style}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

function BeforeAfterSlider({ item, gradient }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX, element) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percent);
  };

  const handlePointerDown = (event) => {
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updatePosition(event.clientX, event.currentTarget);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    updatePosition(event.clientX, event.currentTarget);
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  return (
    <div
      className="relative h-full min-h-[320px] cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] bg-black"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SafeImage
        src={item.after}
        alt={item.afterLabel || "Sau"}
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />

      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30`} />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full w-full">
          <SafeImage
            src={item.before}
            alt={item.beforeLabel || "Trước"}
            className="absolute inset-0 h-full w-full object-cover opacity-95 grayscale"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

      <div
        className="absolute top-0 z-20 h-full w-[3px] bg-yellow-300 shadow-[0_0_28px_rgba(250,204,21,0.95)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-200/70 bg-black/75 text-yellow-100 shadow-2xl backdrop-blur-xl">
          <ChevronLeft className="h-5 w-5" />
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>

      <div className="absolute left-5 top-5 z-30 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur-xl">
        {item.beforeLabel || "Trước"}
      </div>

      <div className="absolute right-5 top-5 z-30 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur-xl">
        {item.afterLabel || "Sau"}
      </div>

      <div className="absolute bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-black/50 px-4 py-2 text-xs font-bold text-yellow-100 backdrop-blur-xl">
        <MoveHorizontal className="h-4 w-4" />
        Kéo để so sánh
      </div>
    </div>
  );
}
function TaskDetailModal({ task, activeTab, onClose }) {
  if (!task) return null;
  const Icon = task.icon;

  // 1. Khai báo logic chung cho TẤT CẢ các ảnh bị cắt đầu (Cả 10.4 và 10.5)
  let customObjectPosition = "center center";
  if (task.title === "Chính trị") customObjectPosition = "center 25%";
  if (task.title === "Độc lập dân tộc") customObjectPosition = "center 20%"; // Bạn chỉnh 10%, 15%, 20% ở đây để test nhé

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-0 right-0 bottom-0 top-[68px] z-[999] bg-black/85 p-4 text-white backdrop-blur-xl md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(250,204,21,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.12),transparent_35%)]" />

        <button
          onClick={onClose}
          className="fixed right-6 top-[86px] z-[10000] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] transition hover:scale-105 hover:bg-red-500"
          aria-label="Đóng"
        >
          <X className="h-6 w-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 grid h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]/80 shadow-2xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Cột trái: Hình ảnh & Chú thích */}
          <div className="relative flex flex-col overflow-hidden bg-black lg:min-h-0">
            <div className="relative flex-1">
              <SafeImage
                src={task.image}
                alt={task.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                style={{
                  // 2. SỬA CHỖ NÀY: Dùng biến customObjectPosition vừa khai báo ở trên, chứ không viết cứng nữa!
                  objectPosition: customObjectPosition
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute left-6 top-6 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-xl">
                <Icon className="h-4 w-4 text-yellow-300" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Trụ cột {task.title}</span>
              </div>
            </div>

            {/* Chú thích ảnh */}
            <div className="relative z-20 border-t border-white/10 bg-black/80 p-5 md:p-6 backdrop-blur-md">
              <p className="text-sm font-semibold leading-relaxed text-white/75 font-sans md:text-base">
                <span className="font-black text-yellow-300 uppercase tracking-widest text-xs mr-2 border border-yellow-300/30 px-2 py-1 rounded-full">Chú thích</span>
                {task.imageCaption}
              </p>
            </div>
          </div>

          {/* Cột phải: Nội dung chi tiết & Luận điểm */}
          <div className="relative flex flex-col justify-center overflow-y-auto border-t border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl lg:border-l lg:border-t-0 md:p-8 xl:p-10">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-cyan-200">
                  <BookOpen className="h-3.5 w-3.5" />
                  Nguồn tài liệu gốc
                </span>
              </div>

              <h4 className="mb-8 border-l-4 border-cyan-400 pl-4 text-xl font-semibold leading-relaxed font-sans text-white/90 md:text-2xl">
                {task.source}
              </h4>

              {/* Quote của Bác */}
              <div className="mb-8 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
                <Quote className="mb-4 h-8 w-8 text-yellow-200" />
                <p className="text-2xl font-bold italic leading-relaxed font-sans text-yellow-50 md:text-3xl tracking-tight">
                  "{task.quote}"
                </p>
              </div>

              {/* Luận điểm giải thích */}
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-white/50">
                  Luận điểm cốt lõi
                </p>
                <p className="text-lg font-medium leading-relaxed font-sans text-white/80 md:text-xl">
                  {task.argument}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
function DetailImagePlaylist({ image, activeTab }) {
  const [detailIndex, setDetailIndex] = useState(0);
  const detailImages = image.detailImages || [];
  const activeDetail = detailImages[detailIndex] || detailImages[0];

  const goDetailPrev = () => {
    setDetailIndex((prev) =>
      prev === 0 ? detailImages.length - 1 : prev - 1
    );
  };

  const goDetailNext = () => {
    setDetailIndex((prev) =>
      prev === detailImages.length - 1 ? 0 : prev + 1
    );
  };

  if (!detailImages.length) {
    return (
      <>
        <SafeImage
          src={image.src}
          alt={image.title}
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-15`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      </>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${image.title}-${detailIndex}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <SafeImage
            src={activeDetail.src}
            alt={activeDetail.title || image.title}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </motion.div>
      </AnimatePresence>

      <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-15`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

      <div className="absolute left-6 right-6 top-6 z-40 flex items-center justify-between gap-3">
        <div className="rounded-full border border-yellow-300/25 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-100 backdrop-blur-xl">
          Bộ ảnh tàu điện Hà Nội
        </div>

        <div className="rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-black text-white/80 backdrop-blur-xl">
          {detailIndex + 1} / {detailImages.length}
        </div>
      </div>

      <div className="absolute bottom-28 left-6 right-6 z-40">
        <p className="max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">
          {activeDetail.title || image.title}
        </p>
        <p className="mt-2 text-sm font-semibold text-white/55 md:text-base">
          Phần nội dung bên phải được giữ nguyên để người xem vừa chuyển ảnh, vừa theo dõi câu chuyện chính.
        </p>
      </div>

      <button
        onClick={goDetailPrev}
        className="absolute left-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-xl transition hover:scale-105 hover:border-yellow-300/60 hover:bg-yellow-300/15"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goDetailNext}
        className="absolute right-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-xl transition hover:scale-105 hover:border-yellow-300/60 hover:bg-yellow-300/15"
        aria-label="Ảnh sau"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-5 left-5 right-5 z-50 rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-2xl">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {detailImages.map((detail, index) => {
            const isActive = detailIndex === index;

            return (
              <button
                key={`${detail.src}-${index}`}
                onClick={() => setDetailIndex(index)}
                className={`group relative h-20 min-w-[145px] overflow-hidden rounded-xl border transition md:h-24 md:min-w-[180px] ${isActive
                  ? "border-yellow-300/80 shadow-[0_0_25px_rgba(250,204,21,0.28)]"
                  : "border-white/10 hover:border-cyan-300/45"
                  }`}
              >
                <SafeImage
                  src={detail.src}
                  alt={detail.title || image.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-2 top-2 rounded-full border border-white/10 bg-black/55 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/70">
                  {detail.label || `Ảnh ${index + 1}`}
                </div>

                <p className="absolute bottom-2 left-2 right-2 line-clamp-1 text-left text-xs font-black text-white">
                  {detail.title || image.title}
                </p>

                {isActive && (
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-yellow-300 to-cyan-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function PrinciplesExperience({ activeTab, activeIndex, goNext, totalTabs }) {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [modalTask, setModalTask] = useState(null);
  const principles = activeTab.principles || [];

  return (
    <>
      <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        {/* TRÁI: 4 Trụ cột tương tác (Expanding Pillars) */}
        <div className="flex h-[450px] w-full flex-col gap-3 lg:h-full lg:flex-row">
          {principles.map((principle, idx) => {
            const isActive = activePrinciple === idx;
            const Icon = principle.icon;

            return (
              <motion.button
                key={principle.title}
                layout
                onClick={() => setActivePrinciple(idx)}
                style={{ flex: isActive ? 4 : 1 }}
                className={`group relative flex overflow-hidden rounded-[2rem] border transition-all duration-500 ease-in-out ${isActive
                  ? "border-cyan-300/50 bg-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.15)] cursor-default"
                  : "border-white/10 bg-black/40 hover:border-cyan-300/30 hover:bg-white/[0.05] cursor-pointer"
                  }`}
              >
                <SafeImage
                  src={principle.image}
                  alt={principle.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isActive
                    ? "opacity-60"
                    : "opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0"
                    }`}
                  style={{
                    // Chỉnh phần trăm ở đây cho ảnh "Độc lập dân tộc" (10_5_2.jpg)
                    // 0% (top), 50% (center), 100% (bottom). Bạn có thể thay đổi số 25% này.
                    objectPosition: principle.title === "Độc lập dân tộc" ? "center 35%" : "center center"
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${isActive
                    ? "from-transparent via-[#050816]/50 to-[#050816]"
                    : "from-transparent to-[#050816]/90"
                    }`}
                />

                {/* Trạng thái thu gọn (Collapsed) */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-row items-center justify-center gap-3 lg:flex-col lg:justify-end lg:pb-8"
                    >
                      <Icon className="h-6 w-6 text-white/40 transition-colors group-hover:text-cyan-200" />
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-cyan-100 lg:rotate-180 lg:[writing-mode:vertical-rl]">
                        {principle.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trạng thái mở rộng (Expanded) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="relative z-10 flex h-full flex-col justify-end p-5 text-left md:p-8"
                    >
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/20 backdrop-blur-xl">
                        <Icon className="h-7 w-7 text-cyan-100" />
                      </div>
                      <h3 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                        {principle.title}
                      </h3>
                      <p className="mt-3 mb-6 text-sm font-medium leading-relaxed text-white/80 md:text-base">
                        {principle.desc}
                      </p>

                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalTask(principle);
                          }}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-200 backdrop-blur-xl transition hover:bg-cyan-300/20 hover:text-cyan-100"
                        >
                          <BookOpen className="h-4 w-4" />
                          Đọc luận điểm của Bác
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* PHẢI: Panel Thông tin */}
        <div className="presentation-panel-scroll relative h-full min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-7 xl:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.06]" />

          <div className="relative z-10 flex min-h-full flex-col">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
                <Compass className={`h-8 w-8 ${activeTab.accent}`} />
              </div>
              <div>
                <p className={`text-sm font-black uppercase tracking-[0.3em] ${activeTab.accent}`}>
                  {activeTab.number}
                </p>
                <h3 className="mt-1 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                  {activeTab.title}
                </h3>
              </div>
            </div>

            <p className="mb-8 text-xl font-semibold leading-relaxed text-white/80 md:text-2xl">
              {activeTab.subtitle}
            </p>

            <div className="mb-8 space-y-3">
              {activeTab.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-black text-black">
                    {index + 1}
                  </div>
                  <p className="text-base font-medium leading-relaxed text-white/80 md:text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <SourceBadges references={activeTab.references || []} />
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/45">
                  {activeIndex + 1} / {totalTabs}
                </span>
                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-200"
                >
                  Tiếp tục
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Popup */}
      {modalTask && (
        <TaskDetailModal
          task={modalTask}
          activeTab={activeTab}
          onClose={() => setModalTask(null)}
        />
      )}
    </>
  );
}
function ImageDetailModal({ image, activeTab, onClose }) {
  if (!image) return null;

  const imageLabel =
    image.type === "compare"
      ? "Before / After"
      : image.detailImages?.length
        ? "Bộ ảnh tư liệu"
        : "Hình ảnh tư liệu";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-0 right-0 bottom-0 top-[68px] z-[999] bg-black/85 p-4 text-white backdrop-blur-xl md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(250,204,21,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.12),transparent_35%)]" />

        <button
          onClick={onClose}
          className="fixed right-6 top-[86px] z-[10000] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] transition hover:scale-105 hover:bg-red-500"
          aria-label="Thoát xem full"
          title="Thoát xem full"
        >
          <X className="h-6 w-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 grid h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]/80 shadow-2xl lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div className="relative min-h-[55vh] overflow-hidden bg-black lg:min-h-0">
            {image.type === "compare" ? (
              <BeforeAfterSlider item={image} gradient={activeTab.gradient} />
            ) : image.detailImages?.length ? (
              <DetailImagePlaylist image={image} activeTab={activeTab} />
            ) : (
              <>
                <SafeImage
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />

                <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-15`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
              </>
            )}

            <div className="absolute left-6 top-6 z-30 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white/75 backdrop-blur-xl">
              {activeTab.number}
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-y-auto border-t border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl lg:border-l lg:border-t-0 md:p-8">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-yellow-300/25 bg-yellow-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                  {imageLabel}
                </span>

                {image.source && (
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/55">
                    {image.source}
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-black leading-tight text-white md:text-5xl">
                {image.title}
              </h3>

              <p className="mt-6 text-lg font-medium leading-relaxed text-white/75 md:text-xl">
                {image.description || image.hint}
              </p>

              {image.detailImages?.length && (
                <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-100">
                    Cách xem
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-white/70">
                    Dùng mũi tên hoặc chọn thumbnail phía dưới ảnh để chuyển qua 5 ảnh tư liệu. Phần nội dung bên phải vẫn được giữ nguyên để câu chuyện không bị ngắt.
                  </p>
                </div>
              )}

              {image.type === "compare" && (
                <div className="mt-6 rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-100">
                    Cách xem
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-white/70">
                    Kéo thanh vàng sang trái hoặc phải để so sánh hình ảnh trước và sau.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/35">
                {activeTab.title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/60">
                {activeTab.subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function GalleryPanel({ activeTab }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const gallery = activeTab.gallery?.length
    ? activeTab.gallery
    : [
      {
        type: "image",
        title: activeTab.title,
        src: activeTab.image,
        description: activeTab.imageHint,
      },
    ];

  const activeImage = gallery[activeImageIndex];

  const openImage = (image, index) => {
    setActiveImageIndex(index);
    setModalImage(image);
  };

  return (
    <>
      <div className="flex h-full min-h-[320px] flex-col gap-3">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab.id}-${activeImageIndex}`}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              {activeImage.type === "compare" ? (
                <div className="relative h-full">
                  <BeforeAfterSlider
                    item={activeImage}
                    gradient={activeTab.gradient}
                  />

                  <button
                    onClick={() => setModalImage(activeImage)}
                    className="absolute right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur-xl transition hover:border-yellow-300/50 hover:bg-yellow-300/15"
                  >
                    <Maximize2 className="h-4 w-4" />
                    Xem full
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setModalImage(activeImage)}
                  className="group relative block h-full min-h-[320px] w-full overflow-hidden rounded-[2rem] bg-black text-left"
                >
                  <SafeImage
                    src={activeImage.src}
                    alt={activeImage.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_25%,rgba(250,204,21,0.14),transparent_30%),radial-gradient(circle_at_80%_65%,rgba(34,211,238,0.10),transparent_35%)]" />

                  <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-6 md:p-8 xl:p-10">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white/75 backdrop-blur-xl">
                        {activeTab.number}
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-bold text-yellow-100 backdrop-blur-xl">
                        <Images className="h-4 w-4" />
                        Ảnh {activeImageIndex + 1} / {gallery.length}
                      </div>
                    </div>

                    <div className="max-w-2xl">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                        <Maximize2 className="h-4 w-4" />
                        Bấm để xem full
                      </div>

                      <h4 className="text-3xl font-black leading-tight text-white md:text-5xl">
                        {activeImage.title}
                      </h4>
                    </div>
                  </div>
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-2xl">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {gallery.map((item, index) => {
              const isActive = activeImageIndex === index;

              return (
                <button
                  key={`${item.title}-${index}`}
                  onClick={() => openImage(item, index)}
                  className={`group relative h-20 min-w-[150px] overflow-hidden rounded-xl border transition md:h-24 md:min-w-[180px] ${isActive
                    ? "border-yellow-300/75 shadow-[0_0_25px_rgba(250,204,21,0.2)]"
                    : "border-white/10 hover:border-cyan-300/45"
                    }`}
                >
                  {item.type === "compare" ? (
                    <div className="absolute inset-0 grid grid-cols-2">
                      <SafeImage
                        src={item.before}
                        alt={item.beforeLabel || "Trước"}
                        className="h-full w-full object-cover opacity-75 grayscale"
                      />
                      <SafeImage
                        src={item.after}
                        alt={item.afterLabel || "Sau"}
                        className="h-full w-full object-cover opacity-75"
                      />
                    </div>
                  ) : (
                    <SafeImage
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-38`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                  <div className="absolute left-2 top-2 rounded-full border border-white/10 bg-black/45 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/65">
                    {item.type === "compare" ? "So sánh" : `Ảnh ${index + 1}`}
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <p className="line-clamp-1 text-xs font-black text-white">
                      {item.type === "compare" ? "Before / After" : item.title}
                    </p>
                  </div>

                  {item.detailImages?.length && (
                    <div className="absolute right-2 top-2 rounded-full border border-cyan-300/20 bg-cyan-300/15 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-100">
                      5 ảnh
                    </div>
                  )}

                  {isActive && (
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-yellow-300 to-cyan-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {modalImage && (
        <ImageDetailModal
          key={modalImage.title}
          image={modalImage}
          activeTab={activeTab}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}

function SplitContext({ split }) {
  if (!split) return null;

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
      <div className="rounded-2xl border border-red-300/20 bg-red-500/10 p-5">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-200">
          {split.leftTitle}
        </p>

        <div className="space-y-3">
          {split.leftItems.map((item) => (
            <div key={item} className="flex items-center gap-3 text-base text-white/75 md:text-lg">
              <span className="h-2 w-2 rounded-full bg-red-300" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <ArrowRight className="h-7 w-7 text-yellow-200" />
      </div>

      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
          {split.rightTitle}
        </p>

        <div className="space-y-3">
          {split.rightItems.map((item) => (
            <div key={item} className="flex items-center gap-3 text-base text-white/75 md:text-lg">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KeywordCards({ cards = [] }) {
  if (!cards.length) return null;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
          >
            <Icon className="mb-3 h-7 w-7 text-cyan-200" />
            <h4 className="text-xl font-black text-white">{card.title}</h4>
            <p className="mt-2 text-base leading-relaxed text-white/65">
              {card.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function TaskImageGrid({ tasks = [] }) {
  if (!tasks.length) return null;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {tasks.map((task, index) => {
        const Icon = task.icon;

        return (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-black"
          >
            <img
              src={task.image}
              alt={task.title}
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 flex h-full min-h-[190px] flex-col justify-end p-5">
              <Icon className="mb-3 h-8 w-8 text-yellow-200" />
              <h4 className="text-2xl font-black text-white">{task.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
                {task.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function PrincipleGrid({ principles = [] }) {
  if (!principles.length) return null;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {principles.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.08] p-5 transition hover:-translate-y-1 hover:border-cyan-200/50"
          >
            <Icon className="mb-3 h-8 w-8 text-cyan-200" />
            <h4 className="text-xl font-black text-white">{item.title}</h4>
            <p className="mt-2 text-base leading-relaxed text-white/70">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ConclusionPanel({ activeTab, activeIndex, goNext, totalTabs }) {
  const statements = activeTab.finalStatements || [];

  return (
    <div className="relative h-full min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
      <SafeImage
        src={activeTab.image}
        alt={activeTab.title}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-75`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(250,204,21,0.24),transparent_34%),radial-gradient(circle_at_85%_82%,rgba(34,211,238,0.14),transparent_34%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

      {/* FIX: cho 10.6 tự scroll nhẹ bên trong, không bị cắt đầu */}
      <div className="presentation-panel-scroll relative z-10 h-full overflow-y-auto px-5 py-6 md:px-8 md:py-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto flex min-h-full max-w-7xl flex-col justify-center"
        >
          {/* Header */}
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-yellow-100 backdrop-blur-xl">
              <SunMedium className="h-4 w-4" />
              {activeTab.number} · Tổng kết
            </div>

            <h3 className="text-3xl font-black uppercase leading-[1.05] text-white md:text-5xl xl:text-6xl">
              {activeTab.headline}
            </h3>

            <p className="mx-auto mt-5 max-w-5xl text-lg font-semibold leading-relaxed text-white/78 md:text-2xl xl:text-[1.7rem]">
              {activeTab.conclusionQuote}
            </p>
          </div>

          {/* 3 ý chốt */}
          <div className="mx-auto mt-8 grid w-full max-w-6xl gap-4 md:grid-cols-3">
            {statements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur-2xl transition hover:-translate-y-1 hover:border-yellow-300/45 hover:bg-yellow-300/[0.08] md:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-300 to-cyan-300" />

                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="inline-flex rounded-full border border-yellow-300/25 bg-yellow-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-100">
                    {item.label}
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-red-500 text-sm font-black text-black shadow-[0_0_22px_rgba(250,204,21,0.22)]">
                    {index + 1}
                  </div>
                </div>

                <h4 className="text-left text-xl font-black uppercase leading-tight text-yellow-50 md:text-2xl">
                  {item.title}
                </h4>

                <p className="mt-3 text-left text-sm font-medium leading-relaxed text-white/72 md:text-base">
                  {item.desc}
                </p>

                <div className="mt-4 rounded-2xl border border-yellow-300/15 bg-black/35 p-4 text-left">
                  <Quote className="mb-2 h-5 w-5 text-yellow-200/80" />
                  <p className="text-sm font-bold italic leading-relaxed text-white/88">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-4 text-left">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-200/85">
                    Căn cứ
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/62">
                    {item.source}
                  </p>
                </div>

                <div className="mt-4 text-left">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow-200/85">
                    Ý nghĩa rút ra
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">
                    {item.takeaway}
                  </p>
                </div>              
                </motion.div>
            ))}
          </div>

          {/* Câu chốt cuối */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-5xl rounded-[1.6rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-5 text-center backdrop-blur-2xl md:p-6"
          >
            <p className="text-lg font-bold leading-relaxed text-cyan-50 md:text-xl xl:text-2xl">
              {activeTab.closingLine}
            </p>
          </motion.div>

          {/* Footer nhỏ để không bị cụt đáy */}
          <div className="mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
            <span>{activeIndex + 1} / {totalTabs}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Session 10 hoàn tất</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
function NatureMemoryExperience({
  activeTab,
  activeIndex,
  goNext,
  totalTabs,
}) {
  const stories = activeTab.storyCabinet || [];
  const [activeStoryId, setActiveStoryId] = useState(stories[0]?.id || null);

  const activeStory =
    stories.find((story) => story.id === activeStoryId) || stories[0];

  if (!stories.length) {
    return (
      <DefaultTabExperience
        activeTab={activeTab}
        activeIndex={activeIndex}
        goNext={goNext}
        totalTabs={totalTabs}
        Icon={activeTab.icon}
      />
    );
  }

  return (
    <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-2xl md:p-6">
        <div className="mb-5">
          <p className={`text-sm font-black uppercase tracking-[0.3em] ${activeTab.accent}`}>
            {activeTab.number}
          </p>

          <h3 className="mt-2 text-3xl font-black leading-tight text-white md:text-5xl">
            Tủ ký ức lời Bác
          </h3>

          <p className="mt-3 text-base leading-relaxed text-white/65 md:text-lg">
            Mở từng ngăn ký ức để xem câu nói, hình ảnh và nghe câu chuyện về
            tính chất lâu dài, khó khăn, phức tạp của thời kỳ quá độ.
          </p>
        </div>

        <div className="space-y-4">
          {stories.map((story, index) => {
            const isActive = story.id === activeStory?.id;

            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryId(story.id)}
                className={`group relative w-full overflow-hidden rounded-[1.5rem] border p-5 text-left transition ${isActive
                  ? "border-yellow-300/60 bg-yellow-300/15 shadow-[0_0_30px_rgba(250,204,21,0.16)]"
                  : "border-white/10 bg-black/25 hover:border-cyan-300/40 hover:bg-white/[0.05]"
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-white/55">
                      {story.drawer || `Ngăn ${index + 1}`}
                    </div>

                    <h4 className="mt-3 text-xl font-black text-white md:text-2xl">
                      {story.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                      {story.mini}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/35 text-sm font-black text-white/75">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="line-clamp-2 text-sm italic leading-relaxed text-yellow-100 md:text-base">
                    “{story.quote}”
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="presentation-panel-scroll relative min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-7 xl:p-8">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.06]" />

        {activeStory && (
          <div className="relative z-10 flex min-h-full flex-col">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black">
              <div className="relative h-[420px] md:h-[560px] xl:h-[640px]">
                <SafeImage
                  src={activeStory.image}
                  alt={activeStory.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />

                <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                  {activeStory.drawer}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl">
                    {activeStory.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
                    {activeStory.imageCaption}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-5">
              <Quote className="mb-3 h-7 w-7 text-yellow-200" />

              <p className="text-2xl font-black italic leading-relaxed text-yellow-50 md:text-3xl">
                “{activeStory.quote}”
              </p>

              <p className="mt-4 text-sm leading-relaxed text-yellow-50/70 md:text-base">
                {activeStory.source}
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <BookOpen className="h-5 w-5 text-cyan-200" />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                    Chuyện kể
                  </p>

                  <h4 className="text-2xl font-black text-white md:text-3xl">
                    {activeStory.storyTitle}
                  </h4>
                </div>
              </div>

              <div className="space-y-4">
                {(activeStory.storyBody || []).map((paragraph, index) => (
                  <motion.div
                    key={`${activeStory.id}-story-${index}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-base leading-relaxed text-white/78 md:text-lg">
                      {paragraph}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {activeStory.artifact && (
              <div className="mt-6 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-300/25 bg-black/20">
                    <ExternalLink className="h-5 w-5 text-yellow-100" />
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-100">
                      {activeStory.artifact.label || "Tư liệu liên hệ"}
                    </p>

                    <h4 className="text-2xl font-black text-white">
                      {activeStory.artifact.title}
                    </h4>
                  </div>
                </div>

                <p className="mt-4 text-base leading-relaxed text-white/78">
                  {activeStory.artifact.desc}
                </p>

                <div className="mt-5 space-y-3">
                  {(activeStory.artifact.bullets || []).map((item, index) => (
                    <div
                      key={`${activeStory.id}-artifact-${index}`}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-300" />
                      <p className="text-sm leading-relaxed text-white/80 md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto pt-6">
              <SourceBadges references={activeTab.references || []} />

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/45">
                  {activeIndex + 1} / {totalTabs}
                </span>

                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-200"
                >
                  Tiếp tục
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function MissionsExperience({ activeTab, activeIndex, goNext, totalTabs }) {
  const [activeMission, setActiveMission] = useState(0);
  const [modalTask, setModalTask] = useState(null); // Quản lý popup chi tiết nhiệm vụ
  const tasks = activeTab.tasks || [];

  return (
    <>
      <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        {/* TRÁI: 4 Trụ cột tương tác (Expanding Pillars) */}
        <div className="flex h-[450px] w-full flex-col gap-3 lg:h-full lg:flex-row">
          {tasks.map((task, idx) => {
            const isActive = activeMission === idx;
            const Icon = task.icon;

            return (
              <motion.button
                key={task.title}
                layout
                onClick={() => setActiveMission(idx)}
                style={{ flex: isActive ? 4 : 1 }}
                className={`group relative flex overflow-hidden rounded-[2rem] border transition-all duration-500 ease-in-out ${isActive
                  ? "border-yellow-300/50 bg-[#050816] shadow-[0_0_30px_rgba(250,204,21,0.15)] cursor-default"
                  : "border-white/10 bg-black/40 hover:border-cyan-300/30 hover:bg-white/[0.05] cursor-pointer"
                  }`}
              >
                <SafeImage
                  src={task.image}
                  alt={task.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isActive
                    ? "opacity-60"
                    : "opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0"
                    }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${isActive
                    ? "from-transparent via-[#050816]/50 to-[#050816]"
                    : "from-transparent to-[#050816]/90"
                    }`}
                />

                {/* Trạng thái thu gọn (Collapsed) */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-row items-center justify-center gap-3 lg:flex-col lg:justify-end lg:pb-8"
                    >
                      <Icon className="h-6 w-6 text-white/40 transition-colors group-hover:text-cyan-200" />
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-cyan-100 lg:rotate-180 lg:[writing-mode:vertical-rl]">
                        {task.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trạng thái mở rộng (Expanded) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="relative z-10 flex h-full flex-col justify-end p-5 text-left md:p-8"
                    >
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-300/30 bg-yellow-300/20 backdrop-blur-xl">
                        <Icon className="h-7 w-7 text-yellow-200" />
                      </div>
                      <h3 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                        {task.title}
                      </h3>
                      <p className="mt-3 mb-6 text-sm font-medium leading-relaxed text-white/80 md:text-base">
                        {task.desc}
                      </p>

                      {/* Nút bấm mở Modal tư liệu chi tiết */}
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Ngăn click lan ra ngoài nút button to
                            setModalTask(task);
                          }}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-200 backdrop-blur-xl transition hover:bg-cyan-300/20 hover:text-cyan-100"
                        >
                          <BookOpen className="h-4 w-4" />
                          Đọc luận điểm của Bác
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* PHẢI: Panel Thông tin & Before/After Slider */}
        <div className="presentation-panel-scroll relative h-full min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-7 xl:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.06]" />

          <div className="relative z-10 flex min-h-full flex-col">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-300/25 bg-yellow-300/10">
                <Layers className={`h-8 w-8 ${activeTab.accent}`} />
              </div>
              <div>
                <p className={`text-sm font-black uppercase tracking-[0.3em] ${activeTab.accent}`}>
                  {activeTab.number}
                </p>
                <h3 className="mt-1 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                  {activeTab.title}
                </h3>
              </div>
            </div>

            <p className="mb-6 text-xl font-semibold leading-relaxed text-white/80 md:text-2xl">
              {activeTab.subtitle}
            </p>



            <div className="mb-8 space-y-3">
              {activeTab.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-red-500 text-sm font-black text-black">
                    {index + 1}
                  </div>
                  <p className="text-base font-medium leading-relaxed text-white/80 md:text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <SourceBadges references={activeTab.references || []} />
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/45">
                  {activeIndex + 1} / {totalTabs}
                </span>
                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-200"
                >
                  Tiếp tục
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Popup (Modal) nếu có task được chọn */}
      {modalTask && (
        <TaskDetailModal
          task={modalTask}
          activeTab={activeTab}
          onClose={() => setModalTask(null)}
        />
      )}
    </>
  );
}
function DefaultTabExperience({
  activeTab,
  activeIndex,
  goNext,
  totalTabs,
  Icon,
}) {
  return (
    <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[1.25fr_0.75fr]">
      <GalleryPanel activeTab={activeTab} />

      <div className="presentation-panel-scroll relative h-full min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-7 xl:p-8">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.06]" />

        <div className="relative z-10 flex min-h-full flex-col">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-300/25 bg-yellow-300/10">
              <Icon className={`h-8 w-8 ${activeTab.accent}`} />
            </div>

            <div>
              <p className={`text-sm font-black uppercase tracking-[0.3em] ${activeTab.accent}`}>
                {activeTab.number}
              </p>

              <h3 className="mt-1 text-4xl font-black leading-tight text-white md:text-5xl xl:text-6xl">
                {activeTab.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-white/45 md:text-base">
                {activeTab.role}
              </p>
            </div>
          </div>

          <p className="mt-5 text-2xl font-semibold leading-relaxed text-white/82 md:text-3xl">
            {activeTab.subtitle}
          </p>

          {activeTab.quote && (
            <div className="mt-6 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-5">
              <Quote className="mb-3 h-7 w-7 text-yellow-200" />
              <p className="text-2xl font-black italic leading-relaxed text-yellow-50 md:text-3xl">
                {activeTab.quote}
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-3">
            {activeTab.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-red-500 text-base font-black text-black">
                  {index + 1}
                </div>

                <p className="text-xl font-medium leading-relaxed text-white/80 md:text-2xl">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <SplitContext split={activeTab.split} />
          <KeywordCards cards={activeTab.keywordCards} />
          <TaskImageGrid tasks={activeTab.tasks} />
          <PrincipleGrid principles={activeTab.principles} />

          <div className="mt-auto pt-2">
            <SourceBadges references={activeTab.references} />

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-white/45">
                {activeIndex + 1} / {totalTabs}
              </span>

              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-200"
              >
                {activeIndex === totalTabs - 1 ? "Quay lại đầu" : "Tiếp tục"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Session10Horizontal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = session10Tabs[activeIndex];
  const Icon = activeTab.icon;

  const progressPercent = useMemo(() => {
    return ((activeIndex + 1) / session10Tabs.length) * 100;
  }, [activeIndex]);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? session10Tabs.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === session10Tabs.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="session10"
      className="relative z-10 min-h-screen overflow-hidden border-t border-white/10 bg-[#050816] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-12%] top-10 h-80 w-80 rounded-full bg-red-600/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />
      </div>

      <div className="relative z-10 flex h-screen w-full flex-col px-5 py-4 md:px-8 xl:px-12">
        <div className="mb-3 flex shrink-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="mb-1 block text-xs font-black uppercase tracking-[0.35em] text-yellow-300">
              Session 10
            </span>

            <h2 className="max-w-6xl text-3xl font-black uppercase leading-[1.05] text-white md:text-5xl xl:text-6xl">
              Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên CNXH
            </h2>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition hover:border-yellow-300/50 hover:bg-yellow-300/15"
              aria-label="Previous tab"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition hover:border-yellow-300/50 hover:bg-yellow-300/15"
              aria-label="Next tab"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mb-4 shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-2 backdrop-blur-2xl">
          <div className="mb-3 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.35 }}
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-300 to-cyan-300"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {session10Tabs.map((tab, index) => {
              const TabIcon = tab.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-w-[150px] items-center gap-2 rounded-xl border px-3 py-2 text-left transition md:min-w-[185px] ${isActive
                    ? "border-yellow-300/50 bg-yellow-300/15"
                    : "border-white/10 bg-black/20 hover:border-cyan-300/35 hover:bg-white/[0.07]"
                    }`}
                >
                  <TabIcon
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-yellow-200" : "text-white/45"
                      }`}
                  />

                  <div>
                    <p
                      className={`text-xs font-black ${isActive ? "text-yellow-200" : "text-white/35"
                        }`}
                    >
                      {tab.number}
                    </p>
                    <p className="line-clamp-1 text-sm font-bold text-white">
                      {tab.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="h-full min-h-0 flex-1"
          >
            {activeTab.id === "nature" ? (
              <NatureMemoryExperience
                activeTab={activeTab}
                activeIndex={activeIndex}
                goNext={goNext}
                totalTabs={session10Tabs.length}
              />
            ) : activeTab.id === "missions" ? (
              <MissionsExperience
                activeTab={activeTab}
                activeIndex={activeIndex}
                goNext={goNext}
                totalTabs={session10Tabs.length}
              />
            ) : activeTab.id === "principles" ? (  /* <--- THÊM ĐIỀU KIỆN NÀY */
              <PrinciplesExperience
                activeTab={activeTab}
                activeIndex={activeIndex}
                goNext={goNext}
                totalTabs={session10Tabs.length}
              />
            ) : activeTab.id === "conclusion" ? (
              <ConclusionPanel
                activeTab={activeTab}
                activeIndex={activeIndex}
                goNext={goNext}
                totalTabs={session10Tabs.length}
              />
            ) : (
              <DefaultTabExperience
                activeTab={activeTab}
                activeIndex={activeIndex}
                goNext={goNext}
                totalTabs={session10Tabs.length}
                Icon={Icon}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} ``