import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Clock,
  MapPin,
  Info,
  Shield,
  Landmark,
  FileText,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

type TimelineDocument = {
  title: string;
  type: string;
  note: string;
};

type HistoricalEvent = {
  id: number;
  year: string;
  title: string;
  shortTitle: string;
  location: string;
  image: string;
  desc: string;
  quote?: string;
  extended: {
    subtitle: string;
    context: string;
    turningPoint: string;
    significance: string;
    details: string[];
    documents: TimelineDocument[];
    caption: string;
  };
};

const HISTORICAL_JOURNEY: HistoricalEvent[] = [
  {
    id: 1,
    year: "1890",
    title: "Khởi nguồn từ Làng Sen",
    shortTitle: "Khởi nguồn",
    location: "Kim Liên, Nghệ An",
    image: "/images/FT_1.jpg",
    desc: "Nguyễn Sinh Cung sinh ra tại Nghệ An trong một gia đình nhà nho yêu nước. Bối cảnh đất nước mất độc lập, nhân dân sống dưới ách thực dân đã góp phần hình thành trong Người tình yêu quê hương và khát vọng tìm đường cứu nước.",
    quote: "Từ quê hương, một hành trình lớn bắt đầu.",
    extended: {
      subtitle: "Nguồn cội hình thành lý tưởng yêu nước",
      context:
        "Cuối thế kỷ XIX, Việt Nam rơi vào ách thống trị của thực dân Pháp. Nhiều phong trào yêu nước nổ ra nhưng lần lượt gặp khó khăn, đặt ra yêu cầu phải tìm một con đường cứu nước mới.",
      turningPoint:
        "Sinh ra trong một gia đình có truyền thống hiếu học và yêu nước, Nguyễn Sinh Cung sớm tiếp xúc với tinh thần dân tộc, lòng thương dân và ý thức về thân phận mất nước.",
      significance:
        "Mốc 1890 không chỉ là điểm bắt đầu về mặt tiểu sử, mà còn là phần mở đầu cho hành trình hình thành nhân cách, lý tưởng và khát vọng giải phóng dân tộc.",
      details: [
        "Tên khai sinh của Người là Nguyễn Sinh Cung.",
        "Quê hương Kim Liên, Nghệ An là không gian văn hóa quan trọng trong tuổi thơ của Người.",
        "Gia đình và bối cảnh xã hội đương thời góp phần nuôi dưỡng lòng yêu nước.",
        "Đây là giai đoạn đặt nền móng cho tư tưởng và nhân cách Hồ Chí Minh sau này.",
      ],
      documents: [
        {
          title: "Tư liệu về quê hương Kim Liên",
          type: "Di tích lịch sử",
          note: "Dùng để giới thiệu bối cảnh quê hương, gia đình và môi trường hình thành nhân cách ban đầu.",
        },
        {
          title: "Tiểu sử Chủ tịch Hồ Chí Minh giai đoạn 1890–1911",
          type: "Tư liệu tiểu sử",
          note: "Dùng để tóm tắt tuổi thơ, tên gọi, gia đình và những ảnh hưởng ban đầu.",
        },
      ],
      caption: "Làng Sen, Nghệ An — nơi khởi nguồn của hành trình lịch sử.",
    },
  },
  {
    id: 2,
    year: "1911",
    title: "Bước chân rời Tổ quốc",
    shortTitle: "Bến Nhà Rồng",
    location: "Sài Gòn, Việt Nam",
    image: "/images/FT_2.jpg",
    desc: "Ngày 5/6/1911, Nguyễn Tất Thành rời Bến Nhà Rồng trên con tàu Amiral Latouche-Tréville. Đây là bước ngoặt mở đầu hành trình hơn 30 năm bôn ba qua nhiều quốc gia để tìm con đường giải phóng dân tộc Việt Nam.",
    quote: "Ra đi không phải để rời xa Tổ quốc, mà để tìm đường trở về với tự do.",
    extended: {
      subtitle: "Khởi đầu hành trình tìm đường cứu nước",
      context:
        "Đầu thế kỷ XX, các con đường cứu nước cũ gặp nhiều bế tắc. Nguyễn Tất Thành lựa chọn một hướng đi khác: ra nước ngoài để quan sát, học hỏi và tìm hiểu tận gốc sức mạnh của các nước phương Tây.",
      turningPoint:
        "Việc rời Bến Nhà Rồng đánh dấu sự chuyển từ nhận thức yêu nước sang hành động tìm đường cứu nước một cách chủ động và lâu dài.",
      significance:
        "Sự kiện 1911 trở thành biểu tượng của ý chí độc lập, tinh thần dấn thân và khát vọng tìm một con đường mới cho dân tộc Việt Nam.",
      details: [
        "Ngày 5/6/1911, Nguyễn Tất Thành rời Sài Gòn trên tàu Amiral Latouche-Tréville.",
        "Người bắt đầu hành trình làm việc, học hỏi và quan sát xã hội ở nhiều quốc gia.",
        "Mốc này mở ra hơn 30 năm bôn ba tìm đường cứu nước.",
        "Bến Nhà Rồng trở thành biểu tượng của bước ngoặt lịch sử trong cuộc đời Người.",
      ],
      documents: [
        {
          title: "Tư liệu Bến Nhà Rồng và hành trình 1911",
          type: "Tư liệu sự kiện",
          note: "Dùng để trình bày thời điểm, địa điểm và ý nghĩa của cuộc ra đi tìm đường cứu nước.",
        },
        {
          title: "Hành trình 30 năm tìm đường cứu nước",
          type: "Tư liệu tổng hợp",
          note: "Dùng để nối mốc 1911 với toàn bộ tiến trình bôn ba sau đó.",
        },
      ],
      caption: "Bến Nhà Rồng — nơi Nguyễn Tất Thành bắt đầu hành trình tìm đường cứu nước.",
    },
  },
  {
    id: 3,
    year: "1911–1917",
    title: "Nhìn thế giới để hiểu dân tộc",
    shortTitle: "Bôn ba",
    location: "Nhiều châu lục",
    image: "/images/FT_3.jpg",
    desc: "Trong những năm đầu xa Tổ quốc, Nguyễn Tất Thành làm nhiều công việc khác nhau và đi qua nhiều vùng đất. Người trực tiếp chứng kiến đời sống của người lao động, sự bất công trong xã hội tư bản và tình cảnh chung của các dân tộc thuộc địa.",
    quote: "Đi qua thế giới để nhìn rõ hơn nỗi đau của dân tộc mình.",
    extended: {
      subtitle: "Từ trải nghiệm thực tế đến nhận thức thời đại",
      context:
        "Những năm bôn ba ở nước ngoài giúp Nguyễn Tất Thành tiếp xúc trực tiếp với nhiều nền văn hóa, tầng lớp xã hội và phong trào đấu tranh của người lao động.",
      turningPoint:
        "Người nhận ra rằng vấn đề của Việt Nam không tách rời vấn đề chung của các dân tộc thuộc địa và những người bị áp bức trên thế giới.",
      significance:
        "Giai đoạn này mở rộng tầm nhìn quốc tế, giúp Người vượt khỏi lối tư duy cứu nước truyền thống và chuẩn bị cho bước chuyển biến tư tưởng sau này.",
      details: [
        "Người làm nhiều nghề để tự sinh sống và quan sát đời sống xã hội.",
        "Người chứng kiến sự phân hóa giàu nghèo, áp bức và bất công ở nhiều nơi.",
        "Những trải nghiệm thực tế giúp Người hiểu sâu hơn bản chất của chủ nghĩa thực dân.",
        "Đây là giai đoạn tích lũy vốn sống, vốn hiểu biết và nhãn quan quốc tế.",
      ],
      documents: [
        {
          title: "Tư liệu hành trình qua nhiều châu lục",
          type: "Bản đồ hành trình",
          note: "Dùng làm nền cho hiệu ứng bản đồ, đường tàu biển và dấu chân lịch sử.",
        },
        {
          title: "Tư liệu về Nguyễn Tất Thành thời trẻ",
          type: "Chân dung / tư liệu ảnh",
          note: "Dùng để minh họa giai đoạn bôn ba trước khi cái tên Nguyễn Ái Quốc xuất hiện.",
        },
      ],
      caption: "Những năm bôn ba giúp Người nhìn thấy nỗi đau chung của các dân tộc thuộc địa.",
    },
  },
  {
    id: 4,
    year: "1919",
    title: "Tiếng nói Nguyễn Ái Quốc",
    shortTitle: "Versailles",
    location: "Paris, Pháp",
    image: "/images/FT_4.jpg",
    desc: "Năm 1919, Nguyễn Tất Thành lấy tên Nguyễn Ái Quốc và gửi “Yêu sách của nhân dân An Nam” tới Hội nghị Versailles. Dù không được chấp nhận, sự kiện này đánh dấu lần đầu tiếng nói đòi quyền tự do, bình đẳng của người Việt Nam xuất hiện công khai trên trường quốc tế.",
    quote: "Một bản yêu sách nhỏ, một tiếng nói lớn của dân tộc thuộc địa.",
    extended: {
      subtitle: "Từ lòng yêu nước đến hành động chính trị quốc tế",
      context:
        "Sau Chiến tranh thế giới thứ nhất, Hội nghị Versailles được tổ chức để bàn về trật tự thế giới mới. Nguyễn Ái Quốc tận dụng thời điểm này để đưa tiếng nói của nhân dân Việt Nam ra trước dư luận quốc tế.",
      turningPoint:
        "Việc bản yêu sách không được chấp nhận giúp Người nhận ra rằng các dân tộc thuộc địa không thể trông chờ vào sự ban phát tự do từ các nước thực dân.",
      significance:
        "Mốc 1919 đánh dấu sự xuất hiện công khai của tên gọi Nguyễn Ái Quốc và là bước chuyển quan trọng từ tinh thần yêu nước sang hoạt động chính trị có tổ chức.",
      details: [
        "Bản yêu sách gồm các yêu cầu về quyền tự do, dân chủ và bình đẳng.",
        "Tên gọi Nguyễn Ái Quốc xuất hiện công khai trên chính trường quốc tế.",
        "Sự kiện cho thấy vấn đề Việt Nam được đặt trong bối cảnh quốc tế.",
        "Thất bại tại Versailles khiến Người tiếp tục tìm kiếm một con đường cách mạng triệt để hơn.",
      ],
      documents: [
        {
          title: "Bản Yêu sách của nhân dân An Nam",
          type: "Văn kiện lịch sử",
          note: "Tài liệu trung tâm của mốc 1919, nên đặt nổi bật trong modal.",
        },
        {
          title: "Tư liệu Nguyễn Ái Quốc tại Pháp",
          type: "Tư liệu nhân vật",
          note: "Dùng để giải thích sự xuất hiện của tên gọi Nguyễn Ái Quốc.",
        },
      ],
      caption: "Năm 1919, cái tên Nguyễn Ái Quốc xuất hiện trên chính trường quốc tế.",
    },
  },
  {
    id: 5,
    year: "1920",
    title: "Tìm thấy con đường cách mạng",
    shortTitle: "Luận cương",
    location: "Pháp",
    image: "/images/FT_5.jpg",
    desc: "Năm 1920, Nguyễn Ái Quốc tiếp cận Luận cương của Lênin về vấn đề dân tộc và thuộc địa. Từ đây, Người tìm thấy con đường giải phóng dân tộc Việt Nam: độc lập dân tộc gắn liền với cách mạng vô sản.",
    quote: "Từ đây, con đường cứu nước trở nên rõ ràng.",
    extended: {
      subtitle: "Bước ngoặt tư tưởng quyết định",
      context:
        "Sau nhiều năm tìm kiếm, Nguyễn Ái Quốc tiếp cận chủ nghĩa Mác - Lênin và đặc biệt chú ý đến vấn đề dân tộc, thuộc địa trong cách mạng thế giới.",
      turningPoint:
        "Luận cương của Lênin giúp Người tìm thấy lời giải cho câu hỏi: dân tộc thuộc địa muốn được giải phóng phải đi theo con đường nào.",
      significance:
        "Mốc 1920 là bước chuyển từ chủ nghĩa yêu nước đến lập trường cách mạng vô sản, tạo nền tảng tư tưởng cho đường lối giải phóng dân tộc Việt Nam.",
      details: [
        "Nguyễn Ái Quốc tìm thấy trong Luận cương của Lênin câu trả lời cho vấn đề thuộc địa.",
        "Người xác định độc lập dân tộc phải gắn với phong trào cách mạng của thời đại.",
        "Đây là bước ngoặt lớn trong quá trình hình thành tư tưởng Hồ Chí Minh.",
        "Mốc này giải thích vì sao Người lựa chọn con đường cách mạng vô sản.",
      ],
      documents: [
        {
          title: "Luận cương của Lênin về vấn đề dân tộc và thuộc địa",
          type: "Tác phẩm lý luận",
          note: "Tài liệu quan trọng nhất để giải thích chuyển biến tư tưởng năm 1920.",
        },
        {
          title: "Tư liệu Nguyễn Ái Quốc tại Đại hội Tours",
          type: "Sự kiện chính trị",
          note: "Có thể dùng bổ sung nếu muốn trình bày mối liên hệ với phong trào cộng sản Pháp.",
        },
      ],
      caption: "Từ Luận cương của Lênin, Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc.",
    },
  },
  {
    id: 6,
    year: "1930",
    title: "Chuẩn bị lực lượng cách mạng",
    shortTitle: "Thành lập Đảng",
    location: "Hồng Kông",
    image: "/images/FT_6.jpg",
    desc: "Năm 1930, Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam. Sự kiện này tạo ra lực lượng lãnh đạo thống nhất cho cách mạng Việt Nam.",
    quote: "Tư tưởng cách mạng được chuyển hóa thành tổ chức lãnh đạo.",
    extended: {
      subtitle: "Từ con đường tư tưởng đến tổ chức cách mạng",
      context:
        "Cuối thập niên 1920, phong trào cách mạng Việt Nam phát triển nhưng còn phân tán. Yêu cầu đặt ra là cần có một tổ chức lãnh đạo thống nhất.",
      turningPoint:
        "Nguyễn Ái Quốc chủ trì việc hợp nhất các tổ chức cộng sản, tạo nên một chính đảng có đường lối rõ ràng cho cách mạng Việt Nam.",
      significance:
        "Sự ra đời của Đảng Cộng sản Việt Nam đánh dấu bước ngoặt lớn trong lịch sử cách mạng Việt Nam, đưa phong trào yêu nước vào quỹ đạo tổ chức và lãnh đạo thống nhất.",
      details: [
        "Hội nghị hợp nhất các tổ chức cộng sản diễn ra đầu năm 1930.",
        "Nguyễn Ái Quốc giữ vai trò quan trọng trong việc thống nhất đường lối.",
        "Đảng Cộng sản Việt Nam ra đời tạo ra lực lượng lãnh đạo cách mạng.",
        "Mốc này nối trực tiếp từ tư tưởng giải phóng dân tộc đến hành động tổ chức.",
      ],
      documents: [
        {
          title: "Tư liệu Hội nghị thành lập Đảng Cộng sản Việt Nam",
          type: "Văn kiện / sự kiện",
          note: "Dùng để trình bày bối cảnh hợp nhất và vai trò của Nguyễn Ái Quốc.",
        },
        {
          title: "Cương lĩnh chính trị đầu tiên",
          type: "Văn kiện chính trị",
          note: "Có thể đưa vào modal như tài liệu mở rộng cho mốc 1930.",
        },
      ],
      caption: "Năm 1930, cách mạng Việt Nam có một lực lượng lãnh đạo thống nhất.",
    },
  },
  {
    id: 7,
    year: "1941",
    title: "Người trở về",
    shortTitle: "Pác Bó",
    location: "Cao Bằng, Việt Nam",
    image: "/images/FT_7.jpg",
    desc: "Năm 1941, sau nhiều năm hoạt động ở nước ngoài, Nguyễn Ái Quốc trở về Việt Nam, trực tiếp lãnh đạo phong trào cách mạng. Tại Pác Bó, Người cùng Trung ương chuẩn bị đường lối, lực lượng và căn cứ cho cuộc đấu tranh giành độc lập.",
    quote: "Sau ba mươi năm, Người trở về để dẫn đường cho dân tộc.",
    extended: {
      subtitle: "Trở về Tổ quốc, trực tiếp lãnh đạo cách mạng",
      context:
        "Trước biến động của tình hình thế giới và trong nước, yêu cầu giành độc lập dân tộc trở nên cấp thiết. Việc Nguyễn Ái Quốc trở về nước tạo ra bước chuyển quan trọng trong lãnh đạo cách mạng.",
      turningPoint:
        "Tại Pác Bó, Người trực tiếp chỉ đạo phong trào cách mạng, xây dựng căn cứ và chuẩn bị cho cuộc đấu tranh giành chính quyền.",
      significance:
        "Mốc 1941 biến hành trình tìm đường cứu nước thành hành động lãnh đạo trực tiếp trên đất nước Việt Nam, chuẩn bị cho thắng lợi của Cách mạng Tháng Tám.",
      details: [
        "Người trở về Việt Nam sau khoảng 30 năm hoạt động ở nước ngoài.",
        "Pác Bó trở thành địa điểm gắn liền với hoạt động cách mạng của Người.",
        "Đường lối giải phóng dân tộc được đặt lên hàng đầu.",
        "Mốc này tạo tiền đề cho cao trào cách mạng dẫn đến năm 1945.",
      ],
      documents: [
        {
          title: "Tư liệu Di tích Pác Bó",
          type: "Di tích lịch sử",
          note: "Dùng để minh họa không gian Người trở về và trực tiếp lãnh đạo cách mạng.",
        },
        {
          title: "Tư liệu Hội nghị Trung ương 8 năm 1941",
          type: "Sự kiện cách mạng",
          note: "Dùng để giải thích đường lối đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
        },
      ],
      caption: "Pác Bó — nơi Người trở về, trực tiếp lãnh đạo cách mạng Việt Nam.",
    },
  },
  {
    id: 8,
    year: "1945",
    title: "Khai sinh nước Việt Nam mới",
    shortTitle: "Độc lập",
    location: "Quảng trường Ba Đình, Hà Nội",
    image: "/images/FT_8.jpg",
    desc: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa. Đây là kết tinh của hành trình tìm đường cứu nước và đấu tranh giải phóng dân tộc.",
    quote: "Một dân tộc bước vào kỷ nguyên độc lập.",
    extended: {
      subtitle: "Kết tinh của hành trình tìm đường cứu nước",
      context:
        "Sau thắng lợi của Cách mạng Tháng Tám năm 1945, thời khắc lịch sử đã đến để tuyên bố nền độc lập của dân tộc Việt Nam trước quốc dân và thế giới.",
      turningPoint:
        "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập.",
      significance:
        "Sự kiện này khai sinh nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên độc lập, tự do và khẳng định thành quả của hành trình cách mạng lâu dài.",
      details: [
        "Tuyên ngôn Độc lập được đọc tại Quảng trường Ba Đình, Hà Nội.",
        "Sự kiện đánh dấu sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
        "Đây là kết quả của quá trình tìm đường, chuẩn bị lực lượng và lãnh đạo cách mạng.",
        "Ngày 2/9 trở thành Quốc khánh của Việt Nam.",
      ],
      documents: [
        {
          title: "Bản Tuyên ngôn Độc lập năm 1945",
          type: "Văn kiện lịch sử",
          note: "Tài liệu trung tâm của mốc 1945, nên đặt đầu tiên trong modal.",
        },
        {
          title: "Tư liệu Quảng trường Ba Đình ngày 2/9/1945",
          type: "Ảnh / sự kiện",
          note: "Dùng để minh họa không khí lịch sử và thời khắc khai sinh nước Việt Nam mới.",
        },
      ],
      caption: "Ngày 2/9/1945, hành trình tìm đường cứu nước kết tinh trong bản Tuyên ngôn Độc lập.",
    },
  },
];

const CinematicDust = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 45 }).map(() => ({
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[2px] opacity-0"
          initial={{ x: p.x, y: p.y }}
          animate={{
            y: [`${parseFloat(p.y) - 5}%`, `${parseFloat(p.y) + 5}%`],
            x: [`${parseFloat(p.x) - 2}%`, `${parseFloat(p.x) + 2}%`],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  const activeEvent = HISTORICAL_JOURNEY[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? HISTORICAL_JOURNEY.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === HISTORICAL_JOURNEY.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <footer className="relative w-full bg-[#0c0806] text-[#d6c8b8] overflow-hidden selection:bg-[#8B0000] selection:text-[#D4AF37] border-t border-[#D4AF37]/20">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity"
          style={{ backgroundImage: `url('/images/FooterBG.png')` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.28)_0%,rgba(12,8,6,0.96)_78%)]" />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <CinematicDust />

      <div className="container mx-auto px-4 py-28 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <p className="text-[#D4AF37] tracking-[0.42em] text-xs font-bold uppercase mb-4 opacity-90">
            Hành trình từ Nguyễn Tất Thành đến Hồ Chí Minh
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-wide drop-shadow-xl">
            Dấu Chân Lịch Sử
          </h2>

          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mt-8 mb-6" />

          <p className="text-[#a89b8d] font-serif italic text-base md:text-xl leading-relaxed">
            Tám mốc lịch sử như tám dấu chân lớn, kể lại hành trình tìm đường cứu nước,
            hình thành tư tưởng cách mạng và khai sinh một nước Việt Nam độc lập.
          </p>
        </motion.div>

        {/* Main cinematic image slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr] gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <motion.div
              key={`text-${activeEvent.id}`}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#D4AF37] mb-5">
                <Clock className="w-4 h-4" />
                Mốc {activeIndex + 1}/8
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {activeEvent.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-4 text-xs uppercase tracking-widest text-[#a89b8d]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8B0000]" />
                  {activeEvent.year}
                </span>
                <span className="text-[#D4AF37]/40">/</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
                  {activeEvent.location}
                </span>
              </div>

              <Separator className="bg-[#D4AF37]/20 w-20 my-6" />

              <p className="text-[#d6c8b8] text-base md:text-lg leading-relaxed font-sans text-justify">
                {activeEvent.desc}
              </p>

              {activeEvent.quote && (
                <div className="mt-6 border-l-4 border-[#8B0000] pl-5 py-2 bg-[#8B0000]/5">
                  <p className="font-serif italic text-[#D4AF37] text-lg">
                    “{activeEvent.quote}”
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={goPrev}
                  className="w-11 h-11 rounded-full border border-[#D4AF37]/30 bg-black/30 text-[#D4AF37] hover:bg-[#8B0000] hover:text-white hover:border-[#8B0000] transition-all flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goNext}
                  className="w-11 h-11 rounded-full border border-[#D4AF37]/30 bg-black/30 text-[#D4AF37] hover:bg-[#8B0000] hover:text-white hover:border-[#8B0000] transition-all flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setSelectedEvent(activeEvent)}
                  className="ml-2 px-5 py-3 rounded-full bg-[#D4AF37] text-[#140e0c] text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(212,175,55,0.22)]"
                >
                  Mở tài liệu
                </button>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.button
              key={`image-${activeEvent.id}`}
              initial={{ opacity: 0, scale: 0.95, rotateY: 8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedEvent(activeEvent)}
              className="relative group block w-full text-left"
            >
              <div className="relative p-2 md:p-3 bg-[#1a1311] border border-[#D4AF37]/30 shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute inset-0 border-[3px] border-[#0c0806] pointer-events-none z-20 m-1.5" />

                <div className="relative overflow-hidden aspect-[16/10] md:aspect-[4/3]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeEvent.image}
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.55 }}
                      className="absolute inset-0 w-full h-full object-cover sepia-[0.42] grayscale-[0.12] contrast-125 group-hover:sepia-0 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0806] via-[#0c0806]/20 to-transparent opacity-95" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.16),transparent_36%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute left-5 right-5 bottom-5 z-30">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[#D4AF37] font-serif text-4xl md:text-5xl font-bold leading-none">
                          {activeEvent.year}
                        </p>
                        <p className="text-white font-serif text-xl md:text-2xl font-semibold mt-2">
                          {activeEvent.shortTitle}
                        </p>
                      </div>

                      <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/80 border border-white/15 bg-black/35 px-3 py-2 rounded-full">
                        <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                        Click để xem tài liệu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          </div>

          {/* 8 milestone list */}
          <div className="mt-12 md:mt-16">
            <div className="relative">
              <div className="hidden md:block absolute left-0 right-0 top-[34px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 relative z-10">
                {HISTORICAL_JOURNEY.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(index)}
                      className={`group relative text-left rounded-2xl border p-3 md:p-4 transition-all duration-300 ${isActive
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_30px_rgba(212,175,55,0.16)]"
                        : "border-white/10 bg-black/20 hover:border-[#D4AF37]/45 hover:bg-white/[0.04]"
                        }`}
                    >
                      <div
                        className={`mx-auto mb-3 w-4 h-4 rounded-full border transition-all ${isActive
                          ? "bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.9)]"
                          : "bg-[#0c0806] border-[#D4AF37]/35 group-hover:border-[#D4AF37]"
                          }`}
                      />

                      <p
                        className={`text-lg font-serif font-bold ${isActive ? "text-[#D4AF37]" : "text-white"
                          }`}
                      >
                        {item.year}
                      </p>

                      <p className="mt-1 text-xs leading-snug text-[#a89b8d]">
                        {item.shortTitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/5 bg-[#080504] py-8 mt-8 text-center">
        <p className="text-xs text-[#a89b8d]/50 uppercase tracking-widest font-medium">
          © 2026 — Dấu chân lịch sử: Hành trình từ Nguyễn Tất Thành đến Hồ Chí Minh.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-[#0c0806]/85 flex items-center justify-center p-4 md:p-8 lg:p-12"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[96vw] h-[92vh] max-w-[1600px] bg-[#140e0c] border border-[#D4AF37]/30 shadow-[0_0_90px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/55 hover:bg-[#8B0000] text-[#D4AF37] hover:text-white rounded-full transition-colors border border-[#D4AF37]/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left image */}
              <div className="w-full lg:w-[58%] relative h-[42vh] lg:h-full bg-black flex items-center justify-center overflow-hidden">
                <motion.img
                  initial={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 4, ease: "easeOut" }}
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="relative z-10 max-w-full max-h-full object-contain sepia-[0.18] contrast-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#140e0c] opacity-0 lg:opacity-100 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-transparent to-transparent opacity-100 lg:opacity-0 block lg:hidden" />

                <div className="absolute left-5 bottom-5 z-20 rounded-2xl border border-[#D4AF37]/20 bg-black/55 backdrop-blur-md px-5 py-4 max-w-[85%]">
                  <p className="text-[#D4AF37] font-serif text-4xl font-bold leading-none">
                    {selectedEvent.year}
                  </p>

                  <p className="text-white font-serif text-xl font-semibold mt-1">
                    {selectedEvent.shortTitle}
                  </p>

                  <p className="text-[#a89b8d] text-[11px] italic mt-2 leading-relaxed">
                    📸 {selectedEvent.extended.caption}
                  </p>
                </div>
              </div>

              {/* Right content */}
              <div className="w-full lg:w-[42%] h-[50vh] lg:h-full p-6 md:p-9 relative bg-[#140e0c] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B0000] scrollbar-track-transparent">
                <div className="absolute top-0 left-6 md:left-10 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#8B0000]/45 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, x: 22 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.45 }}
                  className="relative pl-6 md:pl-8 space-y-7 text-[#d6c8b8]"
                >
                  <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,1)]" />

                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase font-bold text-[#a89b8d] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#8B0000]" />
                        {selectedEvent.year}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
                        {selectedEvent.location}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide leading-tight">
                      {selectedEvent.title}
                    </h3>

                    <p className="text-[#D4AF37] font-serif italic text-sm mt-2">
                      {selectedEvent.extended.subtitle}
                    </p>
                  </div>

                  <Separator className="bg-[#D4AF37]/20 w-20" />

                  <div className="space-y-6 text-sm md:text-base leading-relaxed">
                    <section>
                      <h4 className="text-[#D4AF37] font-serif font-bold uppercase tracking-wider text-xs flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-[#8B0000]" />
                        Bối cảnh lịch sử
                      </h4>
                      <p className="bg-black/20 p-4 rounded border border-white/5 text-[#c8bcae] text-justify">
                        {selectedEvent.extended.context}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-[#D4AF37] font-serif font-bold uppercase tracking-wider text-xs flex items-center gap-2 mb-2">
                        <Landmark className="w-4 h-4 text-[#8B0000]" />
                        Bước ngoặt
                      </h4>
                      <p className="bg-black/20 p-4 rounded border border-white/5 text-[#c8bcae] text-justify">
                        {selectedEvent.extended.turningPoint}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-[#D4AF37] font-serif font-bold uppercase tracking-wider text-xs flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-[#8B0000]" />
                        Ý nghĩa lịch sử
                      </h4>
                      <div className="border-l-2 border-[#8B0000]/50 pl-4 py-3 bg-[#8B0000]/5">
                        <p className="font-serif italic text-[#e3d5c5] text-justify">
                          {selectedEvent.extended.significance}
                        </p>
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[#D4AF37] font-serif font-bold uppercase tracking-wider text-xs flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-[#8B0000]" />
                        Chi tiết cần nhớ
                      </h4>

                      <ul className="space-y-2">
                        {selectedEvent.extended.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-[#c8bcae] text-sm"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="pt-3 border-t border-white/5">
                      <h4 className="text-[#D4AF37] font-serif font-bold uppercase tracking-wider text-xs flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-[#8B0000]" />
                        Tài liệu trong mốc này
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedEvent.extended.documents.map((doc, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-[#D4AF37]/15 bg-black/25 p-4 hover:border-[#D4AF37]/45 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 rounded-lg bg-[#8B0000]/25 border border-[#8B0000]/35 flex items-center justify-center shrink-0">
                                <FileText className="w-4 h-4 text-[#D4AF37]" />
                              </div>

                              <div>
                                <p className="text-white text-sm font-semibold leading-snug">
                                  {doc.title}
                                </p>
                                <p className="text-[#D4AF37] text-[11px] uppercase tracking-widest mt-1">
                                  {doc.type}
                                </p>
                                <p className="text-[#a89b8d] text-xs leading-relaxed mt-2">
                                  {doc.note}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="pt-4 border-t border-white/5">
                      <p className="font-serif italic text-justify text-sm md:text-base border-l-4 border-[#8B0000] pl-4 text-[#a89b8d]">
                        “{selectedEvent.desc}”
                      </p>
                    </section>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}