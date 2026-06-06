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
        id: "relationship-core",
        type: "content",
        number: "01",
        label: "Luận đề trung tâm",
        title: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        subtitle:
            "Đây là mối quan hệ hai chiều: độc lập là điểm xuất phát, còn CNXH là con đường bảo đảm độc lập bền vững.",
        icon: Flag,
        layout: "contentLarge",
        backgroundImage: "/images/Red.png",
        video: "/videos/DoNat.mp4",
        accent: "red",

        thesis:
            "Trong tư tưởng Hồ Chí Minh, độc lập dân tộc và chủ nghĩa xã hội không tách rời nhau. Độc lập dân tộc mở đường cho nhân dân tự quyết tương lai; còn chủ nghĩa xã hội tạo nền tảng để nền độc lập ấy có nội dung thực chất, bền vững và hướng tới hạnh phúc của nhân dân.",

        argument:
            "Nếu chỉ giành độc lập chính trị mà nhân dân vẫn nghèo đói, không có tự do, dân chủ và đời sống tốt đẹp, thì độc lập chưa đạt đến ý nghĩa đầy đủ. Vì vậy, độc lập dân tộc phải gắn với mục tiêu xây dựng một xã hội mới — nơi nhân dân thực sự làm chủ và được hưởng thành quả phát triển.",

        content: [
            "Độc lập dân tộc là mục tiêu trước hết của cách mạng Việt Nam.",
            "Chủ nghĩa xã hội là phương hướng phát triển sau khi giành độc lập.",
            "Hai yếu tố này gắn bó với nhau: độc lập mở đường cho CNXH, còn CNXH củng cố và bảo vệ độc lập.",
        ],

        quote:
            "Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.",

        quoteSource:
            "Hồ Chí Minh, Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng, đăng Báo Cứu quốc, ngày 17/10/1945.",

        sourceNote:
            "Căn cứ từ mục III chương 3 giáo trình Tư tưởng Hồ Chí Minh và tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội.",

        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục III",
            "Hồ Chí Minh, Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng, 1945",
            "Cổng thông tin Hồ Chí Minh: Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        ],

        keywords: ["Luận đề trung tâm", "Độc lập", "CNXH", "Hạnh phúc nhân dân"],
    },

    {
        id: "independence-premise",
        type: "content",
        number: "02",
        label: "Mục 3.3.1",
        title: "Độc lập dân tộc là cơ sở, tiền đề để tiến lên CNXH",
        subtitle:
            "Không có độc lập dân tộc thì không có quyền tự quyết, không có điều kiện chính trị để xây dựng xã hội mới.",
        icon: Landmark,
        layout: "contentLarge",
        backgroundImage: "/images/white.png",
        video: "/videos/Video2.mp4",
        accent: "amber",

        thesis:
            "Giải phóng dân tộc, giành độc lập là mục tiêu đầu tiên của cách mạng Việt Nam. Đó là điều kiện mở đường để nhân dân có thể lựa chọn con đường phát triển của mình, trong đó mục tiêu tiếp theo là xây dựng chủ nghĩa xã hội.",

        argument:
            "Khi một dân tộc còn bị áp bức, lệ thuộc hoặc mất quyền tự quyết, dân tộc đó không thể chủ động xây dựng chế độ xã hội mới. Vì vậy, độc lập dân tộc là tiền đề chính trị, pháp lý và tinh thần để tiến lên CNXH.",

        content: [
            "Độc lập dân tộc là điều kiện đầu tiên để nhân dân tự quyết con đường phát triển.",
            "Trong Chánh cương vắn tắt năm 1930, Nguyễn Ái Quốc xác định đường lối cách mạng Việt Nam tiến tới xã hội cộng sản.",
            "Độc lập theo Hồ Chí Minh không chỉ là thoát khỏi áp bức bên ngoài, mà còn phải gắn với dân chủ, tự do và đời sống ấm no của nhân dân.",
        ],

        quote:
            "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",

        quoteSource:
            "Chánh cương vắn tắt của Đảng, do Nguyễn Ái Quốc soạn thảo, tháng 2/1930.",

        sourceNote:
            "Luận điểm này chứng minh chiều thứ nhất của mối quan hệ: độc lập dân tộc là cơ sở, tiền đề để đi lên CNXH.",

        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.3.1",
            "Chánh cương vắn tắt của Đảng, 1930",
            "Quân đội nhân dân: Chánh cương đầu tiên của Đảng ta",
        ],

        keywords: ["Tiền đề", "Tự quyết", "Chánh cương 1930", "Giải phóng dân tộc"],
    },

    {
        id: "socialism-guarantee",
        type: "content",
        number: "03",
        label: "Mục 3.3.2",
        title: "CNXH là điều kiện bảo đảm nền độc lập dân tộc vững chắc",
        subtitle:
            "Độc lập chỉ thật sự bền vững khi đất nước có thực lực mạnh và nhân dân được giải phóng khỏi áp bức, bóc lột.",
        icon: ShieldCheck,
        layout: "contentLarge",
        backgroundImage: "/images/green.png",
        video: "/videos/VanDung.mp4",
        accent: "green",

        thesis:
            "Theo tư tưởng Hồ Chí Minh, CNXH không chỉ là mục tiêu sau độc lập, mà còn là điều kiện để bảo vệ độc lập dân tộc một cách triệt để. Một quốc gia độc lập nhưng yếu về kinh tế, chính trị, quốc phòng và đời sống nhân dân thì nền độc lập ấy dễ bị đe dọa.",

        argument:
            "CNXH hướng tới xây dựng thực lực quốc gia trên nhiều mặt: kinh tế phát triển, chính trị ổn định, quốc phòng vững mạnh, xã hội công bằng và nhân dân đoàn kết. Những yếu tố đó tạo thành nền tảng vật chất và tinh thần để bảo vệ độc lập dân tộc lâu dài.",

        content: [
            "CNXH tạo cơ sở để xây dựng một đất nước độc lập, tự chủ và có năng lực tự bảo vệ.",
            "Phát triển kinh tế, chính trị, văn hóa, xã hội và quốc phòng là cách làm cho độc lập có nền tảng bền vững.",
            "Xóa bỏ áp bức, bóc lột và bất công giúp củng cố khối đoàn kết toàn dân — sức mạnh căn bản để giữ nước.",
        ],

        quote:
            "Không có gì quý hơn độc lập, tự do.",

        quoteSource:
            "Hồ Chí Minh, Lời kêu gọi đồng bào và chiến sĩ cả nước, ngày 17/7/1966.",

        sourceNote:
            "Luận điểm này chứng minh chiều thứ hai của mối quan hệ: CNXH là con đường bảo đảm độc lập dân tộc vững chắc.",

        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.3.2",
            "Hồ Chí Minh, Lời kêu gọi đồng bào và chiến sĩ cả nước, 1966",
            "Cổng thông tin Hồ Chí Minh: Chân lý vĩ đại Không có gì quý hơn độc lập, tự do",
        ],

        keywords: ["Bảo đảm độc lập", "Thực lực quốc gia", "Đoàn kết", "Tự do"],
    },

    {
        id: "conditions",
        type: "content",
        number: "04",
        label: "Mục 3.3.3",
        title: "Điều kiện bảo đảm độc lập dân tộc gắn liền với CNXH",
        subtitle:
            "Mối quan hệ giữa độc lập dân tộc và CNXH chỉ trở thành hiện thực khi có lực lượng lãnh đạo, sức mạnh nhân dân và sự kết hợp với thời đại.",
        icon: Globe2,
        layout: "contentLarge",
        backgroundImage: "/images/blue.png",
        video: "/videos/Hiendai1.mp4",
        accent: "blue",

        thesis:
            "Độc lập dân tộc gắn liền với CNXH không tự diễn ra một cách tự nhiên. Để hiện thực hóa con đường đó, cần có những điều kiện bảo đảm: vai trò lãnh đạo của Đảng, khối đại đoàn kết toàn dân tộc và sự đoàn kết quốc tế.",

        argument:
            "Đảng Cộng sản giữ vai trò định hướng đường lối; nhân dân là chủ thể tạo nên sức mạnh bên trong; đoàn kết quốc tế giúp kết hợp sức mạnh dân tộc với sức mạnh thời đại. Ba điều kiện này tạo nên sức mạnh tổng hợp để vừa xây dựng CNXH, vừa bảo vệ độc lập dân tộc.",

        content: [
            "Một là, bảo đảm vai trò lãnh đạo của Đảng Cộng sản Việt Nam.",
            "Hai là, củng cố khối đại đoàn kết toàn dân tộc, lấy liên minh công - nông - trí thức làm nền tảng.",
            "Ba là, đoàn kết với các lực lượng cách mạng và tiến bộ trên thế giới để tạo nên sức mạnh tổng hợp.",
        ],

        quote:
            "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",

        quoteSource:
            "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc, thường được dẫn trong các tài liệu nghiên cứu và giáo trình.",

        sourceNote:
            "Luận điểm này trả lời câu hỏi: muốn giữ vững mối quan hệ giữa độc lập dân tộc và CNXH thì cần những điều kiện nào.",

        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.3.3",
            "Cổng thông tin Hồ Chí Minh: Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
            "Tài liệu về tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc",
        ],

        keywords: ["Đảng lãnh đạo", "Đại đoàn kết", "Liên minh công - nông - trí", "Đoàn kết quốc tế"],
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
function AmbientVideo({ src, label, accent = "red" }) {
    return (
        <div className="pointer-events-none relative h-full min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover opacity-45 saturate-[0.9] contrast-[0.95]"
            />

            {/* Làm video lùi xuống, không tranh nội dung */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/45 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

            {/* Lớp kính nghệ thuật */}
            <div className="absolute inset-5 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-[1px]" />

            {/* Decorative scan line */}
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-y-8 right-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {/* Label nhỏ, không làm người xem chú ý quá */}
            <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45 backdrop-blur-md">
                {label}
            </div>
        </div>
    );
}

function SectionPanel({ item, index }) {
    const Icon = item.icon;
    const accent = getAccent(item.accent);

    return (
        <article className="relative h-full w-screen shrink-0 overflow-hidden bg-black">
            {/* VIDEO FULL SCREEN BACKGROUND */}
            <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
            />

            {/* Ảnh nền chỉ làm fallback rất nhẹ, không đè video */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
                style={{
                    backgroundImage: `url('${item.backgroundImage}')`,
                }}
            />

            {/* Overlay nhẹ để video vẫn rõ */}
            <div className="absolute inset-0 bg-black/18" />

            {/* Chỉ tối nhẹ phía dưới và trên để giữ chất cinematic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/25" />

            {/* Tạo vùng đọc chữ ở giữa modal, không làm tối toàn bộ video quá nhiều */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Vignette nhẹ hơn rất nhiều */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />

            {/* Decorative lights */}
            <div className="absolute left-[-8%] top-[12%] h-80 w-80 rounded-full bg-yellow-300/10 blur-[140px]" />
            <div className="absolute right-[-10%] bottom-[8%] h-96 w-96 rounded-full bg-cyan-300/10 blur-[160px]" />

            {/* Small ambient label - cho biết video chỉ là nền */}
            <div className="absolute left-8 top-8 z-20 hidden rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 backdrop-blur-xl md:block">
                Ambient visual / {item.label}
            </div>

            {/* CONTENT MODAL CENTER */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-8 md:px-8 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 26, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="presentation-panel-scroll relative max-h-[calc(100vh-120px)] w-full max-w-5xl overflow-y-auto rounded-[2.2rem] border border-white/15 bg-black/58 p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-7 lg:p-8"
                >
                    {/* Modal inner glow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 via-yellow-300 to-cyan-300" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${accent.iconBorder} bg-white/10 backdrop-blur-xl`}
                                >
                                    <Icon className={`h-8 w-8 ${accent.iconText}`} />
                                </div>

                                <div>
                                    <p
                                        className={`${accent.text} text-sm font-black uppercase tracking-[0.28em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-base`}
                                    >
                                        Session 11 / {item.label}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-white/35">
                                        Panel {item.number} / {session11Sections.length}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                                Cuộn để chuyển ngang
                            </div>
                        </div>

                        {/* Main title */}
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-black uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
                                {item.title}
                            </h2>

                            <p
                                className={`mt-5 max-w-4xl text-2xl font-serif italic font-black leading-relaxed md:text-3xl lg:text-[2rem] ${accent.text} drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]`}
                            >
                                {item.subtitle}
                            </p>
                        </div>

                        {/* Body content */}
                        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                            {/* LEFT: Luận điểm + nội dung chính */}
                            <div className="space-y-4">
                                <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md">
                                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-yellow-200/80">
                                        Luận điểm chính
                                    </p>
                                    <p className="text-base font-semibold leading-relaxed text-white/85 md:text-lg">
                                        {item.thesis}
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-black/24 p-5 backdrop-blur-md">
                                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200/80">
                                        Giải thích
                                    </p>
                                    <p className="text-sm font-medium leading-relaxed text-white/72 md:text-base">
                                        {item.argument}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {item.content.map((text, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -18 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
                                        >
                                            <div
                                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${accent.bulletBg} border ${accent.bulletBorder}`}
                                            >
                                                <span className={`text-xs font-black ${accent.text}`}>
                                                    {i + 1}
                                                </span>
                                            </div>

                                            <p className="text-sm font-medium leading-relaxed text-white/82 md:text-base">
                                                {text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT: Trích dẫn + nguồn + reference */}
                            <div className="flex flex-col gap-5">
                                <div
                                    className={`rounded-3xl border-l-4 ${accent.quoteBorder} bg-white/[0.07] p-5 backdrop-blur-xl`}
                                >
                                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-white/60 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                                        Trích dẫn liên hệ
                                    </p>                                    
                                    <p
                                        className={`${accent.text} font-serif text-xl font-black italic leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:text-2xl`}
                                    >
                                        “{item.quote}”
                                    </p>
                                    <p className="mt-4 text-xs font-medium leading-relaxed text-white/50">
                                        {item.quoteSource}
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-black/24 p-5 backdrop-blur-md">
                                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-yellow-200/80">
                                        Căn cứ học thuật
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/68">
                                        {item.sourceNote}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                                        Tài liệu tham khảo
                                    </p>

                                    <div className="space-y-2">
                                        {item.references?.map((ref, i) => (
                                            <div
                                                key={i}
                                                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium leading-relaxed text-white/62 backdrop-blur-md"
                                            >
                                                {ref}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                                        Từ khóa ghi nhớ
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {item.keywords.map((keyword) => (
                                            <span
                                                key={keyword}
                                                className={`rounded-full border ${accent.chipBorder} bg-white/[0.07] px-4 py-2 text-sm font-bold text-white/80 backdrop-blur-md`}
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.24em] text-white/35">
                            <span>
                                {index + 1} / {session11Sections.length}
                            </span>

                            <div className="flex items-center gap-2">
                                <span>Tiếp tục</span>
                                <ChevronRight className={`h-4 w-4 ${accent.text}`} />
                            </div>
                        </div>
                    </div>
                </motion.div>
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
            <div className="sticky top-[80px] h-[calc(100vh-80px)] overflow-hidden bg-[#050505]">
                <div className="h-full">
                    <motion.div
                        style={{
                            x,
                            width: `${panelCount * 100}vw`,
                        }}
                        className="flex h-full"
                    >
                        {session11Sections.map((item, index) => (
                            <SectionPanel key={item.id} item={item} index={index} />
                        ))}
                    </motion.div>
                </div>

                <div className="absolute left-1/2 bottom-7 z-30 w-[min(520px,80vw)] -translate-x-1/2">
                    <div className="h-1 overflow-hidden rounded-full bg-white/15">
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