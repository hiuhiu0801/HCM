import { useMemo, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import {
    Compass,
    Users,
    Network,
    ShieldAlert,
    BookOpen,
    Quote,
    ChevronRight,
    Sparkles,
    Target,
    Eye,
    Scale,
    Landmark,
    ShieldCheck,
    Activity,
    Radio,
    Gavel,
    Layers,
} from "lucide-react";
const SECTION_12_BG = "/images/section12/12_BG.jpg";
const commandModules = [
    {
        id: "orientation",
        number: "12.1",
        short: "01",
        label: "La bàn định hướng",
        academicTitle: "Kiên định mục tiêu và con đường cách mạng",
        title: "Giữ vững ngọn cờ độc lập dân tộc và CNXH",
        subtitle:
            "Vận dụng tư tưởng Hồ Chí Minh trước hết là giữ đúng hướng đi chiến lược của cách mạng Việt Nam.",
        icon: Compass,
        accent: "red",
        mode: "compass",
        cardImage: "/images/section12/12_1.png",
        thesis:
            "Kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội là nền tảng định hướng trong giai đoạn hiện nay. Đây không phải là lựa chọn cảm tính, mà là con đường đã được lịch sử cách mạng Việt Nam kiểm nghiệm.",
        basis:
            "Căn cứ từ mục IV chương 3 giáo trình Tư tưởng Hồ Chí Minh và bài học trong Cương lĩnh của Đảng: phải nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.",
        action:
            "Giữ vững mục tiêu chiến lược, không dao động trước các quan điểm phủ nhận con đường xã hội chủ nghĩa; đồng thời vận dụng sáng tạo vào điều kiện phát triển mới của đất nước.",
        quote: "Nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.",
        quoteSource:
            "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội, bổ sung, phát triển năm 2011.",
        keywords: ["Định hướng", "Cương lĩnh", "Độc lập dân tộc", "CNXH"],
        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.4.1",
            "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH, bổ sung phát triển năm 2011",
            "Văn kiện Đảng về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        ],
        bullets: [
            "Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH.",
            "Xem đây là con đường phù hợp với quy luật phát triển và khát vọng của nhân dân.",
            "Không dao động trước các quan điểm phủ nhận mục tiêu xã hội chủ nghĩa.",
        ],
    },
    {
        id: "democracy",
        number: "12.2",
        short: "02",
        label: "Mạch dân chủ nhân dân",
        academicTitle: "Phát huy sức mạnh dân chủ xã hội chủ nghĩa",
        title: "Để nhân dân thực sự làm chủ, giám sát và thụ hưởng",
        subtitle:
            "Dân chủ không chỉ là khẩu hiệu, mà phải trở thành cơ chế vận hành trong đời sống xã hội.",
        icon: Users,
        accent: "cyan",
        mode: "democracy",
        cardImage: "/images/section12/12_2.png",
        thesis:
            "Dân chủ xã hội chủ nghĩa là bản chất của chế độ. Vận dụng tư tưởng Hồ Chí Minh hiện nay là làm cho quyền làm chủ của nhân dân được thể hiện thực chất trong quản lý xã hội, pháp luật, giám sát và thụ hưởng thành quả phát triển.",
        basis:
            "Căn cứ từ mục 3.4.2 của giáo trình và phương châm: dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.",
        action:
            "Phát huy dân chủ phải đi đôi với hoàn thiện pháp luật, bảo vệ quyền con người, tăng cường kỷ cương và đề cao trách nhiệm công dân.",
        quote: "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.",
        quoteSource:
            "Tinh thần Văn kiện Đại hội XIII của Đảng về phát huy dân chủ xã hội chủ nghĩa.",
        keywords: ["Dân chủ", "Quyền làm chủ", "Pháp luật", "Thụ hưởng"],
        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.4.2",
            "Văn kiện Đại hội XIII của Đảng",
            "Tư tưởng Hồ Chí Minh về dân chủ và quyền làm chủ của nhân dân",
        ],
        bullets: [
            "Phát huy quyền làm chủ của nhân dân trong mọi lĩnh vực.",
            "Thực hiện phương châm dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.",
            "Dân chủ phải gắn với pháp luật, kỷ cương, quyền con người và trách nhiệm công dân.",
        ],
        flow: ["Dân biết", "Dân bàn", "Dân làm", "Dân kiểm tra", "Dân giám sát", "Dân thụ hưởng"],
    },
    {
        id: "political-system",
        number: "12.3",
        short: "03",
        label: "Bộ máy vận hành quốc gia",
        academicTitle: "Củng cố, kiện toàn và phát huy hiệu quả hệ thống chính trị",
        title: "Biến đường lối đúng thành năng lực tổ chức thực hiện",
        subtitle:
            "Một mục tiêu đúng cần một hệ thống chính trị đủ mạnh, đủ trong sạch và đủ gần dân.",
        icon: Network,
        accent: "violet",
        mode: "system",
        cardImage: "/images/section12/12_3.png",
        thesis:
            "Hệ thống chính trị là cơ chế biến tư tưởng, đường lối và mục tiêu phát triển thành hành động cụ thể. Vận dụng tư tưởng Hồ Chí Minh hiện nay đòi hỏi củng cố vai trò lãnh đạo của Đảng, xây dựng Nhà nước của dân, do dân, vì dân và phát huy vai trò của các tổ chức chính trị - xã hội.",
        basis:
            "Căn cứ từ mục 3.4.3 của giáo trình và tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
        action:
            "Nâng cao hiệu lực quản lý nhà nước, phát huy vai trò của Mặt trận Tổ quốc và các đoàn thể, bảo đảm hệ thống chính trị hoạt động vì lợi ích của nhân dân.",
        quote: "Nhà nước ta là nhà nước của nhân dân, do nhân dân, vì nhân dân.",
        quoteSource:
            "Tư tưởng Hồ Chí Minh về Nhà nước dân chủ nhân dân và quyền làm chủ của nhân dân.",
        keywords: ["Đảng lãnh đạo", "Nhà nước", "Mặt trận", "Nhân dân làm chủ"],
        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.4.3",
            "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
            "Tài liệu về xây dựng hệ thống chính trị trong thời kỳ đổi mới",
        ],
        bullets: [
            "Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam.",
            "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
            "Phát huy vai trò của Mặt trận Tổ quốc và các tổ chức chính trị - xã hội.",
        ],
        stack: ["Đảng lãnh đạo", "Nhà nước quản lý", "Mặt trận tập hợp", "Nhân dân làm chủ"],
    },
    {
        id: "self-correction",
        number: "12.4",
        short: "04",
        label: "Hệ miễn dịch chính trị",
        academicTitle: "Đấu tranh chống suy thoái trong nội bộ",
        title: "Tự chỉnh đốn để bảo vệ niềm tin của nhân dân",
        subtitle:
            "Vận dụng tư tưởng Hồ Chí Minh không chỉ là xây cái mới, mà còn phải chống những biểu hiện làm suy yếu hệ thống.",
        icon: ShieldAlert,
        accent: "amber",
        mode: "immune",
        cardImage: "/images/section12/12_4.png",
        thesis:
            "Chống suy thoái trong nội bộ là cơ chế tự bảo vệ của Đảng và hệ thống chính trị. Đây là điều kiện để giữ vững bản chất cách mạng, bảo vệ niềm tin của nhân dân và bảo đảm sự ổn định của chế độ.",
        basis:
            "Căn cứ từ mục 3.4.4 của giáo trình và Nghị quyết Trung ương 4 khóa XII về xây dựng, chỉnh đốn Đảng, ngăn chặn suy thoái, tự diễn biến, tự chuyển hóa.",
        action:
            "Kiên quyết đấu tranh với suy thoái về tư tưởng chính trị, đạo đức, lối sống; ngăn chặn tự diễn biến, tự chuyển hóa; xem xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt.",
        quote: "Xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt.",
        quoteSource:
            "Liên hệ Nghị quyết Trung ương 4 khóa XII về tăng cường xây dựng, chỉnh đốn Đảng.",
        keywords: ["Chỉnh đốn", "Suy thoái", "Tự diễn biến", "Niềm tin nhân dân"],
        references: [
            "Giáo trình Tư tưởng Hồ Chí Minh, Chương 3, Mục 3.4.4",
            "Nghị quyết Trung ương 4 khóa XII, số 04-NQ/TW năm 2016",
            "Tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh",
        ],
        bullets: [
            "Chống suy thoái về tư tưởng chính trị, đạo đức, lối sống.",
            "Ngăn chặn các biểu hiện tự diễn biến, tự chuyển hóa trong nội bộ.",
            "Xem xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt.",
        ],
        scan: [
            { label: "Tư tưởng chính trị", status: "Giữ vững nền tảng", level: "Ổn định" },
            { label: "Đạo đức, lối sống", status: "Cần thường xuyên chỉnh đốn", level: "Theo dõi" },
            { label: "Tự diễn biến", status: "Ngăn chặn từ sớm", level: "Cảnh báo" },
            { label: "Niềm tin nhân dân", status: "Bảo vệ bằng hành động thực chất", level: "Ưu tiên" },
        ],
    },
];

const accentStyles = {
    red: {
        text: "text-red-200",
        strong: "text-red-100",
        glow: "bg-red-500/20",
        border: "border-red-300/25",
        line: "from-red-500 via-yellow-300 to-red-500",
        chip: "border-red-300/20 bg-red-300/10 text-red-100",
    },
    cyan: {
        text: "text-cyan-200",
        strong: "text-cyan-100",
        glow: "bg-cyan-400/20",
        border: "border-cyan-300/25",
        line: "from-cyan-400 via-white to-cyan-400",
        chip: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    },
    violet: {
        text: "text-violet-200",
        strong: "text-violet-100",
        glow: "bg-violet-400/20",
        border: "border-violet-300/25",
        line: "from-violet-400 via-cyan-200 to-violet-400",
        chip: "border-violet-300/20 bg-violet-300/10 text-violet-100",
    },
    amber: {
        text: "text-yellow-200",
        strong: "text-yellow-100",
        glow: "bg-yellow-400/20",
        border: "border-yellow-300/25",
        line: "from-yellow-400 via-red-400 to-yellow-400",
        chip: "border-yellow-300/20 bg-yellow-300/10 text-yellow-100",
    },
};

function getAccent(accent) {
    return accentStyles[accent] || accentStyles.red;
}

function DustLayer() {
    const particles = useMemo(
        () =>
            Array.from({ length: 46 }).map((_, index) => ({
                id: index,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                size: Math.random() * 2.2 + 1,
                delay: Math.random() * 5,
                duration: Math.random() * 10 + 8,
            })),
        []
    );

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute rounded-full bg-yellow-200/60 blur-[1px]"
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [-18, 18, -18],
                        opacity: [0, 0.42, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

function CommandCore({ activeModule }) {
    const accent = getAccent(activeModule.accent);
    const Icon = activeModule.icon;

    return (
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2">
            <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute inset-[8%] rounded-full border border-yellow-300/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute inset-[18%] rounded-full border border-cyan-300/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />

            <div className={`absolute inset-[27%] rounded-full ${accent.glow} blur-3xl`} />

            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-black/55 text-center shadow-[0_0_80px_rgba(250,204,21,0.18)] backdrop-blur-2xl">
                <Icon className={`mb-3 h-9 w-9 ${accent.strong}`} />
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/35">
                    Active module
                </p>
                <p className={`mt-2 px-5 text-sm font-black uppercase leading-tight ${accent.strong}`}>
                    {activeModule.label}
                </p>
            </div>

            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
}

function ModeVisual({ module }) {
    const accent = getAccent(module.accent);

    if (module.mode === "democracy") {
        return (
            <div className="mt-5 rounded-3xl border border-white/10 bg-black/24 p-4">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-white/40">
                    Mạch dân chủ
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    {module.flow.map((item, index) => (
                        <div key={item} className="flex items-center gap-2">
                            <div className={`rounded-full border px-3 py-2 text-xs font-black ${accent.chip}`}>
                                {item}
                            </div>
                            {index < module.flow.length - 1 && (
                                <ChevronRight className="h-4 w-4 text-white/25" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (module.mode === "system") {
        return (
            <div className="mt-5 rounded-3xl border border-white/10 bg-black/24 p-4">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-white/40">
                    Cấu trúc vận hành
                </p>
                <div className="grid gap-3">
                    {module.stack.map((item, index) => (
                        <div
                            key={item}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                        >
                            <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${accent.line}`} />
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm font-black uppercase tracking-[0.12em] text-white/80">
                                    {item}
                                </p>
                                <span className="text-xs font-black text-white/25">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (module.mode === "immune") {
        return (
            <div className="mt-5 rounded-3xl border border-white/10 bg-black/24 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/40">
                        Political scan
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-red-100">
                        <Radio className="h-3 w-3" />
                        Scanning
                    </div>
                </div>

                <div className="grid gap-3">
                    {module.scan.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-black text-white/85">{item.label}</p>
                                    <p className="mt-1 text-xs leading-relaxed text-white/52">
                                        {item.status}
                                    </p>
                                </div>
                                <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${accent.chip}`}>
                                    {item.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-5 rounded-3xl border border-white/10 bg-black/24 p-5">
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-yellow-300/20">
                <motion.div
                    className="absolute inset-4 rounded-full border border-dashed border-yellow-300/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute h-1 w-32 origin-left rounded-full bg-gradient-to-r from-yellow-300 to-red-500"
                    animate={{ rotate: [-18, 8, -18] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ left: "50%", top: "50%" }}
                />
                <Target className="h-12 w-12 text-yellow-200" />
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.24em] text-white/35">
                La bàn chiến lược
            </p>
        </div>
    );
}

function ModuleCard({ module, index, activeIndex, onSelect }) {
    const Icon = module.icon;
    const accent = getAccent(module.accent);
    const distance = index - activeIndex;
    const isActive = distance === 0;

    const x = distance * 300;
    const rotateY = distance * -34;
    const z = isActive ? 80 : -Math.abs(distance) * 130;
    const opacity = Math.abs(distance) > 2 ? 0 : isActive ? 1 : 0.38;
    const scale = isActive ? 1 : 0.82;

    return (
        <motion.button
            type="button"
            onClick={() => onSelect(index)}
            className={`absolute left-1/2 top-1/2 h-[380px] w-[285px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border bg-black/50 p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl transition ${isActive ? `${accent.border}` : "border-white/10"
                }`}
            animate={{
                x,
                z,
                rotateY,
                scale,
                opacity,
            }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
                transformStyle: "preserve-3d",
                pointerEvents: Math.abs(distance) > 2 ? "none" : "auto",
            }}
        >
            {module.cardImage && (
                <img
                    src={module.cardImage}
                    alt={module.label}
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${isActive
                        ? "scale-105 opacity-95 brightness-115 contrast-110 saturate-125"
                        : "opacity-50 brightness-90 contrast-105 saturate-90"
                        }`}
                />
            )}

            <div className={isActive ? "absolute inset-0 bg-black/34" : "absolute inset-0 bg-black/58"} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/24 to-transparent" />
            {/* Accent line + glow */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.line}`} />
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${accent.glow} blur-3xl`} />
            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-13 w-13 items-center justify-center rounded-2xl border ${accent.border} bg-white/[0.06]`}>
                        <Icon className={`h-7 w-7 ${accent.strong}`} />
                    </div>
                    <span className="font-serif text-4xl font-black text-white/15">
                        {module.short}
                    </span>
                </div>

                <p className={`mt-5 text-xs font-black uppercase tracking-[0.24em] ${accent.text}`}>
                    {module.number}
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-white md:text-3xl">
                    {module.label}
                </h3>
                <p className="mt-4 line-clamp-3 text-base font-semibold leading-relaxed text-white/70">
                    {module.academicTitle}
                </p>

                <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                        {module.keywords.slice(0, 2).map((keyword) => (
                            <span
                                key={keyword}
                                className={`rounded-full border px-3 py-1 text-[10px] font-bold ${accent.chip}`}
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.button>
    );
}

function ActiveDetail({ module }) {
    const Icon = module.icon;
    const accent = getAccent(module.accent);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={module.id}
                initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -18, filter: "blur(8px)" }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="presentation-panel-scroll h-full min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-black/58 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-7 xl:p-8"
            >
                {/* TOP IDENTITY */}
                <div className="mb-6 flex items-start gap-4">
                    <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${accent.border} bg-white/[0.06]`}
                    >
                        <Icon className={`h-8 w-8 ${accent.strong}`} />
                    </div>

                    <div>
                        <p className={`text-sm font-black uppercase tracking-[0.3em] ${accent.text}`}>
                            {module.number} / {module.label}
                        </p>

                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                            {module.academicTitle}
                        </p>

                        <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl xl:text-5xl">
                            {module.title}
                        </h2>
                    </div>
                </div>

                {/* SUBTITLE */}
                <p
                    className={`text-xl font-serif italic font-black leading-relaxed md:text-2xl ${accent.text} drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]`}
                >
                    {module.subtitle}
                </p>

                {/* QUOTE nổi bật ngay dưới subtitle */}
                <div className={`mt-6 rounded-3xl border-l-4 ${accent.border} bg-white/[0.06] p-5`}>
                    <Quote className={`mb-3 h-7 w-7 ${accent.strong}`} />

                    <p className={`font-serif text-xl font-black italic leading-relaxed md:text-2xl ${accent.text}`}>
                        “{module.quote}”
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {module.quoteSource}
                    </p>
                </div>

                {/* 3 BLOCK LUẬN ĐIỂM */}
                <div className="mt-6 grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                        <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
                            Luận điểm chính
                        </p>
                        <p className="text-base font-semibold leading-relaxed text-white/82 md:text-lg">
                            {module.thesis}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/28 p-5">
                        <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                            Căn cứ
                        </p>
                        <p className="text-sm font-medium leading-relaxed text-white/68 md:text-base">
                            {module.basis}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                        <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-green-200">
                            Ý nghĩa vận dụng
                        </p>
                        <p className="text-sm font-medium leading-relaxed text-white/70 md:text-base">
                            {module.action}
                        </p>
                    </div>
                </div>

                {/* MODE VISUAL đặt sau luận điểm */}
                <ModeVisual module={module} />

                {/* BULLETS */}
                <div className="mt-6">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-white/38">
                        Nội dung triển khai
                    </p>

                    <div className="grid gap-3">
                        {module.bullets.map((text, index) => (
                            <div
                                key={text}
                                className="flex gap-4 rounded-2xl border border-white/10 bg-black/24 p-4"
                            >
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${accent.border} bg-white/[0.06]`}
                                >
                                    <span className={`text-xs font-black ${accent.strong}`}>
                                        {index + 1}
                                    </span>
                                </div>

                                <p className="text-sm font-medium leading-relaxed text-white/72 md:text-base">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KEYWORDS */}
                <div className="mt-6">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-white/38">
                        Từ khóa ghi nhớ
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {module.keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className={`rounded-full border px-4 py-2 text-sm font-bold ${accent.chip}`}
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>

                {/* REFERENCES */}
                <div className="mt-6">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-white/38">
                        Tài liệu tham khảo
                    </p>

                    <div className="space-y-2">
                        {module.references.map((ref) => (
                            <div
                                key={ref}
                                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium leading-relaxed text-white/58"
                            >
                                {ref}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
export default function Session12CommandCenter() {
    const targetRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeModule = commandModules[activeIndex];

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const nextIndex = Math.min(
            commandModules.length - 1,
            Math.max(0, Math.round(latest * (commandModules.length - 1)))
        );
        setActiveIndex(nextIndex);
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="session12"
            ref={targetRef}
            className="relative z-10 bg-[#050505]"
            style={{ height: `${commandModules.length * 135}vh` }}
        >
            <div className="sticky top-[80px] h-[calc(100vh-80px)] overflow-hidden bg-[#050505] text-white">
                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                    style={{
                        backgroundImage: `url('${SECTION_12_BG}')`,
                    }}
                />

                {/* Dark overlay để nội dung rõ */}
                <div className="absolute inset-0 bg-black/28" />

                {/* Hologram light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.10),transparent_34%),radial-gradient(circle_at_78%_25%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(239,68,68,0.08),transparent_30%)]" />


                {/* Grid command center */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-transparent to-black/45" />


                <DustLayer />

                <div className="relative z-10 flex h-full min-h-0 flex-col gap-4 px-4 py-5 md:px-8 lg:px-10">
                    {/* HEADER */}
                    <header className="flex shrink-0 flex-wrap items-end justify-between gap-5">
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-yellow-100">
                                <Sparkles className="h-4 w-4" />
                                Session 12 / Command Center
                            </div>

                            <h1 className="max-w-4xl text-3xl font-black uppercase leading-[0.95] text-white md:text-4xl xl:text-5xl">
                                Bàn điều hành tư tưởng Hồ Chí Minh trong hiện tại
                            </h1>

                            <p className="mt-3 max-w-4xl text-sm font-semibold leading-relaxed text-white/58 md:text-base">
                                Từ tư tưởng đến hành động: giữ vững con đường, phát huy dân chủ,
                                kiện toàn hệ thống chính trị và tự chỉnh đốn để bảo vệ niềm tin của nhân dân.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-right backdrop-blur-xl">
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/35">
                                Active
                            </p>
                            <p className="mt-1 text-lg font-black text-yellow-100">
                                {activeModule.number}
                            </p>
                        </div>
                    </header>

                    {/* BODY */}
                    <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                        {/* LEFT: COMMAND TABLE */}
                        <div className="relative hidden min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black/28 lg:block">
                            <div
                                className="relative h-full w-full"
                                style={{
                                    perspective: "1300px",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <CommandCore activeModule={activeModule} />

                                {commandModules.map((module, index) => (
                                    <ModuleCard
                                        key={module.id}
                                        module={module}
                                        index={index}
                                        activeIndex={activeIndex}
                                        onSelect={setActiveIndex}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* MOBILE MODULE TABS */}
                        <div className="min-h-0 lg:hidden">
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {commandModules.map((module, index) => {
                                    const Icon = module.icon;
                                    const accent = getAccent(module.accent);
                                    const isActive = activeIndex === index;

                                    return (
                                        <button
                                            key={module.id}
                                            onClick={() => setActiveIndex(index)}
                                            className={`min-w-[220px] rounded-2xl border p-4 text-left ${isActive ? accent.border : "border-white/10"
                                                } bg-white/[0.055]`}
                                        >
                                            <Icon className={`mb-3 h-6 w-6 ${accent.strong}`} />
                                            <p className={`text-xs font-black uppercase tracking-[0.2em] ${accent.text}`}>
                                                {module.number}
                                            </p>
                                            <p className="mt-2 text-lg font-black uppercase leading-tight text-white">
                                                {module.label}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT: DETAIL PANEL */}
                        <div className="min-h-0">
                            <ActiveDetail module={activeModule} />
                        </div>
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="absolute bottom-4 left-1/2 z-30 w-[min(620px,82vw)] -translate-x-1/2">
                    <div className="mb-2 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                        <span>Scroll để vận hành</span>
                        <span>{activeIndex + 1} / {commandModules.length}</span>
                    </div>

                    <div className="h-1 overflow-hidden rounded-full bg-white/12">
                        <motion.div
                            style={{ width: progressWidth }}
                            className="h-full bg-gradient-to-r from-red-500 via-yellow-300 to-cyan-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}