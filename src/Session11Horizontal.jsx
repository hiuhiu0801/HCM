import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Flag,
    ShieldCheck,
    Globe2,
    Landmark,
    ChevronRight,
} from "lucide-react";

const session11Sections = [
    {
        id: "core-idea",
        type: "content",
        number: "01",
        label: "Tư tưởng cốt lõi",
        title: "Độc Lập Dân Tộc Gắn Liền Với Chủ Nghĩa Xã Hội",
        subtitle: "Sợi chỉ đỏ xuyên suốt trong đường lối cách mạng Việt Nam",
        icon: Flag,
        layout: "contentLarge",
        backgroundImage: "/images/Red.png",
        video: "/videos/session11/independence-bg.mp4",
        accent: "red",
        content: [
            "Độc lập dân tộc là tiền đề, là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội.",
            "Chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho độc lập dân tộc.",
            "Hai yếu tố này gắn bó chặt chẽ, bổ sung và bảo vệ lẫn nhau.",
        ],
        keywords: ["Độc lập", "Chủ quyền", "CNXH", "Sợi chỉ đỏ"],
        quote:
            "Độc lập không chỉ là thoát khỏi áp bức, mà còn là quyền tự quyết con đường phát triển của dân tộc.",
    },
    {
        id: "independence-video",
        type: "videoFocus",
        number: "02",
        label: "Minh họa lịch sử",
        title: "Độc Lập Là Điểm Khởi Đầu",
        subtitle: "Phát triển là cách giữ vững độc lập ấy",
        icon: Landmark,
        layout: "videoLarge",
        backgroundImage: "/images/white.png",
        video: "/videos/session11/independence-video.mp4",
        accent: "amber",
        content: [
            "Một dân tộc chỉ có thể tự lựa chọn tương lai khi có độc lập.",
            "Từ độc lập, nhân dân mới có điều kiện xây dựng cuộc sống tự do, ấm no và hạnh phúc.",
        ],
        keywords: ["Bình minh", "Lá cờ", "Con đường", "Hy vọng"],
        quote: "Độc lập để phát triển. Phát triển để giữ vững độc lập.",
    },
    {
        id: "modern-application",
        type: "content",
        number: "03",
        label: "Vận dụng hiện nay",
        title: "Vận Dụng Trong Giai Đoạn Hiện Nay",
        subtitle: "Hội nhập, phát triển và bảo vệ Tổ quốc",
        icon: Globe2,
        layout: "contentLarge",
        backgroundImage: "/images/green.png",
        video: "/videos/session11/modern-bg.mp4",
        accent: "green",
        content: [
            "Phát huy sức mạnh đại đoàn kết toàn dân tộc.",
            "Kết hợp sức mạnh dân tộc với sức mạnh thời đại.",
            "Chủ động hội nhập quốc tế nhưng vẫn giữ vững độc lập, chủ quyền.",
            "Phát triển đất nước gắn với nâng cao đời sống vật chất và tinh thần của nhân dân.",
        ],
        keywords: ["Đại đoàn kết", "Hội nhập", "Phát triển", "Chủ quyền"],
        quote:
            "Đây không chỉ là bài học lịch sử, mà còn là định hướng phát triển đất nước trong hiện tại và tương lai.",
    },
    {
        id: "modern-video",
        type: "videoFocus",
        number: "04",
        label: "Minh họa hiện đại",
        title: "Chủ Động Hội Nhập",
        subtitle: "Phát triển vì nhân dân, giữ vững vị thế dân tộc",
        icon: ShieldCheck,
        layout: "videoLarge",
        backgroundImage: "/images/blue.png",
        video: "/videos/session11/modern-video.mp4",
        accent: "blue",
        content: [
            "Việt Nam hiện đại cần phát triển kinh tế, khoa học, giáo dục và công nghệ.",
            "Hội nhập quốc tế phải đi cùng bảo vệ chủ quyền và giữ vững bản sắc dân tộc.",
        ],
        keywords: ["Công nghệ", "Thành phố", "Hội nhập", "Tương lai"],
        quote: "Giữ vững độc lập. Chủ động hội nhập. Phát triển vì nhân dân.",
    },
];
const accentStyles = {
    red: {
        text: "text-[#8B0000] dark:text-[#D4AF37]",
        iconBorder: "border-[#8B0000]/25 dark:border-[#D4AF37]/35",
        iconBg: "bg-white/75 dark:bg-black/45",
        iconText: "text-[#8B0000] dark:text-[#D4AF37]",
        bulletBg: "bg-[#8B0000]/10 dark:bg-[#D4AF37]/10",
        bulletBorder: "border-[#8B0000]/20 dark:border-[#D4AF37]/30",
        quoteBg: "bg-[#8B0000]/8 dark:bg-[#D4AF37]/10",
        quoteBorder: "border-[#8B0000] dark:border-[#D4AF37]",
        chipBorder: "border-[#8B0000]/20 dark:border-[#D4AF37]/25",
    },
    amber: {
        text: "text-[#9A5A00] dark:text-[#F2C46D]",
        iconBorder: "border-[#C58A2B]/30 dark:border-[#F2C46D]/35",
        iconBg: "bg-white/75 dark:bg-black/45",
        iconText: "text-[#9A5A00] dark:text-[#F2C46D]",
        bulletBg: "bg-[#C58A2B]/12 dark:bg-[#F2C46D]/10",
        bulletBorder: "border-[#C58A2B]/25 dark:border-[#F2C46D]/30",
        quoteBg: "bg-[#C58A2B]/10 dark:bg-[#F2C46D]/10",
        quoteBorder: "border-[#C58A2B] dark:border-[#F2C46D]",
        chipBorder: "border-[#C58A2B]/25 dark:border-[#F2C46D]/25",
    },
    green: {
        text: "text-[#0F766E] dark:text-[#7DD3C7]",
        iconBorder: "border-[#0F766E]/25 dark:border-[#7DD3C7]/35",
        iconBg: "bg-white/75 dark:bg-black/45",
        iconText: "text-[#0F766E] dark:text-[#7DD3C7]",
        bulletBg: "bg-[#0F766E]/10 dark:bg-[#7DD3C7]/10",
        bulletBorder: "border-[#0F766E]/25 dark:border-[#7DD3C7]/30",
        quoteBg: "bg-[#0F766E]/8 dark:bg-[#7DD3C7]/10",
        quoteBorder: "border-[#0F766E] dark:border-[#7DD3C7]",
        chipBorder: "border-[#0F766E]/20 dark:border-[#7DD3C7]/25",
    },
    blue: {
        text: "text-[#1D4ED8] dark:text-[#93C5FD]",
        iconBorder: "border-[#1D4ED8]/25 dark:border-[#93C5FD]/35",
        iconBg: "bg-white/75 dark:bg-black/45",
        iconText: "text-[#1D4ED8] dark:text-[#93C5FD]",
        bulletBg: "bg-[#1D4ED8]/10 dark:bg-[#93C5FD]/10",
        bulletBorder: "border-[#1D4ED8]/25 dark:border-[#93C5FD]/30",
        quoteBg: "bg-[#1D4ED8]/8 dark:bg-[#93C5FD]/10",
        quoteBorder: "border-[#1D4ED8] dark:border-[#93C5FD]",
        chipBorder: "border-[#1D4ED8]/20 dark:border-[#93C5FD]/25",
    },
};

function getAccent(accent) {
    return accentStyles[accent] || accentStyles.red;
}
function VideoFrame({ src, label }) {
    return (
        <div className="relative rounded-[2rem] overflow-hidden border border-[#8B0000]/20 dark:border-[#D4AF37]/30 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_0_50px_rgba(212,175,55,0.12)]">
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            <div className="absolute left-5 bottom-5 px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-white text-[11px] uppercase tracking-[0.25em]">
                {label}
            </div>
        </div>
    );
}

function SectionPanel({ item, index }) {
    const Icon = item.icon;
    const isVideoLarge = item.layout === "videoLarge";
    const accent = getAccent(item.accent);

    return (
        <article className="relative h-full w-screen shrink-0 overflow-hidden bg-[#050505]">
            {/* Ảnh nền chính của từng section */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${item.backgroundImage}')`,
                }}
            />

            {/* 
                Overlay 1:
                Làm ảnh dịu xuống một chút nhưng vẫn nhìn rõ.
                Opacity này cố tình không quá mạnh để ảnh vẫn có chi tiết.
            */}
            <div className="absolute inset-0 bg-white/42 dark:bg-black/38" />

            {/* 
                Overlay 2:
                Tạo vùng đọc chữ rõ hơn ở phía content.
                Bên trái/sát nội dung sáng hơn ở light mode, tối hơn ở dark mode.
            */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/58 to-white/18 dark:from-black/88 dark:via-black/58 dark:to-black/22" />

            {/* 
                Overlay 3:
                Giữ chiều sâu điện ảnh, tránh ảnh bị phẳng.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/18 dark:from-black/80 dark:via-transparent dark:to-black/30" />

            {/* Soft vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.18)] dark:shadow-[inset_0_0_180px_rgba(0,0,0,0.78)] pointer-events-none" />

            {/* Decorative light */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-white/20 dark:bg-white/5 rounded-full blur-[130px]" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-[150px]" />

            <div className="relative z-10 h-full w-full px-4 md:px-8 lg:px-14 flex items-center">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full ${
                        isVideoLarge
                            ? "lg:grid-cols-[0.9fr_1.1fr]"
                            : "lg:grid-cols-[1.2fr_0.8fr]"
                    }`}
                >
                    {/* CONTENT */}
                    <div className="relative max-w-4xl">
                        <div className="flex items-center gap-4 mb-7">
                            <div
                                className={`w-16 h-16 rounded-2xl border ${accent.iconBorder} ${accent.iconBg} backdrop-blur-md flex items-center justify-center shadow-lg`}
                            >
                                <Icon className={`w-8 h-8 ${accent.iconText}`} />
                            </div>

                            <div>
                                <p className={`${accent.text} text-xs md:text-sm font-bold tracking-[0.35em] uppercase`}>
                                    Session 11 / {item.label}
                                </p>
                                <p className="text-gray-300 dark:text-white/20 font-serif text-4xl font-bold">
                                    {item.number}
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-950 dark:text-white uppercase leading-tight mb-6 drop-shadow-[0_1px_0_rgba(255,255,255,0.3)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                            {item.title}
                        </h2>

                        <p className={`text-lg md:text-2xl ${accent.text} font-serif italic leading-relaxed mb-7 font-semibold`}>
                            {item.subtitle}
                        </p>

                        <div className="space-y-4 mb-7">
                            {item.content.map((text, i) => (
                                <div key={i} className="flex gap-4">
                                    <div
                                        className={`mt-1 w-7 h-7 rounded-full ${accent.bulletBg} border ${accent.bulletBorder} flex items-center justify-center shrink-0 backdrop-blur-sm`}
                                    >
                                        <span className={`text-xs font-bold ${accent.text}`}>
                                            {i + 1}
                                        </span>
                                    </div>

                                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base md:text-lg font-medium drop-shadow-[0_1px_0_rgba(255,255,255,0.2)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mb-7">
                            {item.keywords.map((keyword) => (
                                <span
                                    key={keyword}
                                    className={`px-4 py-2 rounded-full border ${accent.chipBorder} bg-white/68 dark:bg-black/35 backdrop-blur-md text-gray-900 dark:text-white text-sm font-semibold shadow-sm`}
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>

                        <div
                            className={`p-5 rounded-2xl ${accent.quoteBg} border-l-4 ${accent.quoteBorder} bg-white/58 dark:bg-black/35 backdrop-blur-md shadow-sm`}
                        >
                            <p className={`${accent.text} font-serif italic font-bold text-lg leading-relaxed`}>
                                {item.quote}
                            </p>
                        </div>
                    </div>

                    {/* VIDEO FRAME */}
                    <div className={isVideoLarge ? "lg:scale-105" : ""}>
                        <VideoFrame src={item.video} label={item.label} />

                        <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">
                            <span>
                                {index + 1} / {session11Sections.length}
                            </span>

                            <div className="flex items-center gap-2">
                                <span>Cuộn để chuyển ngang</span>
                                <ChevronRight className={`w-4 h-4 ${accent.text}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default function Session11Horizontal() {
  const targetRef = useRef(null);
  const panelCount = session11Sections.length;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  /*
    Keyframe logic:
    0.00 - 0.14: giữ panel 1
    0.14 - 0.26: chuyển panel 1 -> panel 2
    0.26 - 0.40: giữ panel 2
    0.40 - 0.52: chuyển panel 2 -> panel 3
    0.52 - 0.66: giữ panel 3
    0.66 - 0.78: chuyển panel 3 -> panel 4
    0.78 - 1.00: giữ panel 4 thật lâu rồi mới xuống Flipbook
  */
  const x = useTransform(
    scrollYProgress,
    [0, 0.14, 0.26, 0.40, 0.52, 0.66, 0.78, 1],
    ["0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw", "-300vw", "-300vw"]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="session11"
      ref={targetRef}
      className="relative z-10 bg-[#050505]"
      style={{ height: `${panelCount * 160}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">
        {/* pt-20 để né navbar fixed 80px */}
        <div className="h-full pt-20">
          <motion.div
            style={{
              x,
              width: `${panelCount * 100}vw`,
            }}
            className="flex h-[calc(100vh-5rem)]"
          >
            {session11Sections.map((item, index) => (
              <SectionPanel key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="absolute left-1/2 bottom-7 z-30 w-[min(520px,80vw)] -translate-x-1/2">
          <div className="h-1 rounded-full bg-white/15 overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-[#8B0000] to-[#D4AF37]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}