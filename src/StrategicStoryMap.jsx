import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Landmark,
    ScrollText,
    BookOpen,
    Users,
    Handshake,
    HeartHandshake,
    Globe2,
    Network,
    Compass,
    GraduationCap,
    HeartPulse,
    Home,
    Shield,
    Flag,
    MapPin,
    X,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
    { id: "all", label: "Tất cả", color: "#FFFFFF" },
    { id: "history", label: "Lịch sử", color: "#D4AF37" },
    { id: "unity", label: "Đoàn kết", color: "#FACC15" },
    { id: "integration", label: "Hội nhập", color: "#22C55E" },
    { id: "people", label: "Đời sống", color: "#A78BFA" },
    { id: "defense", label: "Quốc phòng", color: "#EF4444" },
];

const STRATEGIC_MAP_EVENTS = [
    {
        id: "origin",
        title: "Nguồn cội dân tộc",
        cluster: "history",
        clusterTitle: "Lịch sử – Nguồn cội",
        x: "50%",
        y: "12%",
        color: "#D4AF37",
        icon: Landmark,
        short: "Khởi nguồn bản sắc và ý chí dân tộc.",
        story:
            "Từ nền văn minh lâu đời, dân tộc Việt Nam hình thành bản lĩnh, bản sắc và ý chí dựng nước, giữ nước. Nguồn cội ấy trở thành nền tảng tinh thần để đất nước vượt qua thử thách và tiếp tục phát triển trong thời đại mới.",
        keywords: ["Lịch sử", "Bản sắc", "Nguồn cội"],
    },
    {
        id: "culture",
        title: "Bản sắc văn hóa",
        cluster: "history",
        clusterTitle: "Lịch sử – Nguồn cội",
        x: "42%",
        y: "17%",
        color: "#F59E0B",
        icon: ScrollText,
        short: "Văn hóa là sức mạnh mềm của dân tộc.",
        story:
            "Bản sắc văn hóa Việt Nam được tạo nên từ truyền thống, ngôn ngữ, phong tục, lòng nhân ái và tinh thần cộng đồng. Trong quá trình hội nhập, bản sắc ấy giúp Việt Nam tiếp thu cái mới mà không đánh mất chính mình.",
        keywords: ["Văn hóa", "Truyền thống", "Bản lĩnh"],
    },
    {
        id: "build-protect",
        title: "Dựng nước và giữ nước",
        cluster: "history",
        clusterTitle: "Lịch sử – Nguồn cội",
        x: "58%",
        y: "17%",
        color: "#FBBF24",
        icon: BookOpen,
        short: "Ý chí độc lập xuyên suốt lịch sử.",
        story:
            "Từ quá khứ đến hiện tại, tinh thần dựng nước và giữ nước luôn là dòng chảy xuyên suốt. Đó không chỉ là ký ức lịch sử, mà còn là trách nhiệm của thế hệ hôm nay trong xây dựng và bảo vệ Tổ quốc.",
        keywords: ["Dựng nước", "Giữ nước", "Độc lập"],
    },
    {
        id: "people-power",
        title: "Sức mạnh nhân dân",
        cluster: "unity",
        clusterTitle: "Đại đoàn kết",
        x: "12%",
        y: "38%",
        color: "#FACC15",
        icon: Users,
        short: "Con người là nguồn lực trung tâm.",
        story:
            "Sức mạnh của đất nước không chỉ đến từ tài nguyên hay công nghệ, mà trước hết đến từ con người. Khi nhân dân cùng chung ý chí, mỗi cá nhân trở thành một phần của sức mạnh dân tộc.",
        keywords: ["Nhân dân", "Sức mạnh", "Đoàn kết"],
    },
    {
        id: "overcome",
        title: "Đồng lòng vượt khó",
        cluster: "unity",
        clusterTitle: "Đại đoàn kết",
        x: "17%",
        y: "52%",
        color: "#FB923C",
        icon: Handshake,
        short: "Đoàn kết giúp vượt qua biến cố.",
        story:
            "Trong những thời điểm khó khăn, tinh thần đoàn kết giúp cộng đồng đứng vững. Sự sẻ chia, trách nhiệm và niềm tin chung tạo nên khả năng vượt qua thử thách của cả dân tộc.",
        keywords: ["Đồng lòng", "Vượt khó", "Niềm tin"],
    },
    {
        id: "responsibility",
        title: "Cộng đồng và trách nhiệm",
        cluster: "unity",
        clusterTitle: "Đại đoàn kết",
        x: "11%",
        y: "66%",
        color: "#F97316",
        icon: HeartHandshake,
        short: "Đoàn kết bắt đầu từ hành động cụ thể.",
        story:
            "Đại đoàn kết không phải là khẩu hiệu xa vời, mà bắt đầu từ những hành động cụ thể: học tập, lao động, sáng tạo, bảo vệ môi trường, giúp đỡ cộng đồng và sống có trách nhiệm với xã hội.",
        keywords: ["Cộng đồng", "Trách nhiệm", "Hành động"],
    },
    {
        id: "global-connect",
        title: "Kết nối toàn cầu",
        cluster: "integration",
        clusterTitle: "Hội nhập quốc tế",
        x: "88%",
        y: "34%",
        color: "#22C55E",
        icon: Globe2,
        short: "Việt Nam mở rộng quan hệ với thế giới.",
        story:
            "Hội nhập quốc tế giúp Việt Nam kết nối với tri thức, công nghệ, thương mại và văn hóa toàn cầu. Qua đó, đất nước có thêm nguồn lực để phát triển nhanh hơn, sâu hơn và bền vững hơn.",
        keywords: ["Toàn cầu", "Kết nối", "Hợp tác"],
    },
    {
        id: "era-power",
        title: "Sức mạnh thời đại",
        cluster: "integration",
        clusterTitle: "Hội nhập quốc tế",
        x: "92%",
        y: "49%",
        color: "#14B8A6",
        icon: Network,
        short: "Kết hợp nội lực với xu thế hiện đại.",
        story:
            "Trong thời đại mới, phát triển không thể tách rời hội nhập. Việt Nam cần phát huy sức mạnh dân tộc, đồng thời tận dụng thành tựu khoa học, công nghệ và hợp tác quốc tế để tạo nên sức mạnh tổng hợp.",
        keywords: ["Thời đại", "Công nghệ", "Hợp tác"],
    },
    {
        id: "identity-integration",
        title: "Giữ bản sắc khi hội nhập",
        cluster: "integration",
        clusterTitle: "Hội nhập quốc tế",
        x: "87%",
        y: "63%",
        color: "#38BDF8",
        icon: Compass,
        short: "Mở cửa nhưng không hòa tan.",
        story:
            "Hội nhập không có nghĩa là đánh mất chính mình. Việt Nam tiếp thu tinh hoa thế giới nhưng vẫn giữ vững độc lập, chủ quyền, văn hóa và bản lĩnh dân tộc.",
        keywords: ["Bản sắc", "Độc lập", "Hội nhập"],
    },
    {
        id: "education",
        title: "Giáo dục và tri thức",
        cluster: "people",
        clusterTitle: "Phát triển đời sống",
        x: "35%",
        y: "87%",
        color: "#60A5FA",
        icon: GraduationCap,
        short: "Tri thức là nền tảng phát triển con người.",
        story:
            "Một đất nước phát triển bền vững cần bắt đầu từ giáo dục. Khi người dân có cơ hội học tập, tiếp cận tri thức và phát triển năng lực, xã hội sẽ có nền tảng vững chắc để tiến xa hơn.",
        keywords: ["Giáo dục", "Tri thức", "Con người"],
    },
    {
        id: "healthcare",
        title: "Y tế và an sinh",
        cluster: "people",
        clusterTitle: "Phát triển đời sống",
        x: "50%",
        y: "91%",
        color: "#A78BFA",
        icon: HeartPulse,
        short: "Phát triển đi cùng chăm lo đời sống.",
        story:
            "Nâng cao đời sống nhân dân không chỉ là phát triển kinh tế, mà còn là chăm sóc sức khỏe, bảo đảm an sinh và tạo điều kiện để mọi người được sống an toàn, ổn định hơn.",
        keywords: ["Y tế", "An sinh", "Ổn định"],
    },
    {
        id: "happy-community",
        title: "Hạnh phúc cộng đồng",
        cluster: "people",
        clusterTitle: "Phát triển đời sống",
        x: "65%",
        y: "87%",
        color: "#EC4899",
        icon: Home,
        short: "Đích đến của phát triển là con người.",
        story:
            "Mọi thành tựu phát triển cuối cùng đều hướng đến cuộc sống tốt đẹp hơn cho nhân dân: gia đình hạnh phúc, cộng đồng văn minh, môi trường xanh và đời sống tinh thần phong phú.",
        keywords: ["Hạnh phúc", "Gia đình", "Cộng đồng"],
    },
    {
        id: "island-sovereignty",
        title: "Chủ quyền biển đảo",
        cluster: "defense",
        clusterTitle: "Chủ quyền – Quốc phòng",
        x: "78%",
        y: "74%",
        color: "#EF4444",
        icon: Flag,
        short: "Biển đảo là một phần thiêng liêng của Tổ quốc.",
        story:
            "Bảo vệ chủ quyền biển đảo là nhiệm vụ quan trọng gắn liền với độc lập và toàn vẹn lãnh thổ. Trong hòa bình, tinh thần ấy được thể hiện bằng trách nhiệm, sự cảnh giác và lòng yêu nước.",
        keywords: ["Biển đảo", "Chủ quyền", "Tổ quốc"],
    },
    {
        id: "peace-defense",
        title: "Quốc phòng hòa bình",
        cluster: "defense",
        clusterTitle: "Chủ quyền – Quốc phòng",
        x: "91%",
        y: "78%",
        color: "#F97316",
        icon: Shield,
        short: "Quốc phòng để bảo vệ, không phải để gây chiến.",
        story:
            "Hình ảnh quốc phòng trong thời đại mới cần được nhìn bằng tinh thần hòa bình, bảo vệ và ổn định. Sức mạnh quốc phòng giúp đất nước yên tâm phát triển, giữ vững môi trường hòa bình cho nhân dân.",
        keywords: ["Quốc phòng", "Hòa bình", "Bảo vệ"],
    },
    {
        id: "border-marker",
        title: "Biên giới và cột mốc",
        cluster: "defense",
        clusterTitle: "Chủ quyền – Quốc phòng",
        x: "84%",
        y: "90%",
        color: "#DC2626",
        icon: MapPin,
        short: "Bảo vệ từng phần lãnh thổ quốc gia.",
        story:
            "Mỗi đường biên, cột mốc và vùng biển đều mang ý nghĩa thiêng liêng. Bảo vệ lãnh thổ không chỉ là nhiệm vụ của lực lượng chức năng, mà còn là nhận thức và trách nhiệm chung của toàn dân.",
        keywords: ["Biên giới", "Lãnh thổ", "Trách nhiệm"],
    },
];
const CLUSTER_LABELS = [
    {
        id: "history",
        title: "Lịch sử – Nguồn cội",
        x: "50%",
        y: "5%",
        color: "#D4AF37",
        icon: Landmark,
    },
    {
        id: "unity",
        title: "Đại đoàn kết",
        x: "10%",
        y: "28%",
        color: "#FACC15",
        icon: Users,
    },
    {
        id: "integration",
        title: "Hội nhập quốc tế",
        x: "88%",
        y: "27%",
        color: "#22C55E",
        icon: Globe2,
    },
    {
        id: "people",
        title: "Phát triển đời sống",
        x: "50%",
        y: "97%",
        color: "#A78BFA",
        icon: HeartPulse,
    },
    {
        id: "defense",
        title: "Chủ quyền – Quốc phòng",
        x: "84%",
        y: "68%",
        color: "#EF4444",
        icon: Shield,
    },
];

function VietnamOutline({ selectedEvent }) {
    return (
        <div className="absolute left-1/2 top-[50%] z-10 h-[82%] w-[36%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[70px]" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
            <div className="absolute left-1/2 top-1/2 h-[92%] w-[175%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/10" />

            <img
                src="/images/VietNam.png"
                alt="Vietnam strategic map"
                className="relative z-10 h-full w-full object-contain opacity-95 drop-shadow-[0_0_38px_rgba(34,211,238,0.65)]"
            />

            <div className="absolute left-1/2 top-1/2 z-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-3xl" />

            {selectedEvent && (
                <motion.div
                    key={selectedEvent.id}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-slate-950/70 px-4 py-3 text-center shadow-2xl backdrop-blur-xl"
                    style={{
                        borderColor: `${selectedEvent.color}88`,
                        boxShadow: `0 0 45px ${selectedEvent.color}33`,
                    }}
                >
                    <p
                        className="text-[10px] font-black uppercase tracking-[0.18em]"
                        style={{ color: selectedEvent.color }}
                    >
                        Đang khám phá
                    </p>
                    <p className="mt-1 max-w-[190px] text-sm font-bold leading-snug text-white">
                        {selectedEvent.title}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
function ConnectionLines({ events, selectedEvent }) {
    return (
        <svg className="absolute inset-0 z-0 h-full w-full">
            {events.map((event) => {
                const isSelected = selectedEvent?.id === event.id;

                return (
                    <line
                        key={event.id}
                        x1="50%"
                        y1="50%"
                        x2={event.x}
                        y2={event.y}
                        stroke={event.color}
                        strokeWidth={isSelected ? "2.2" : "1"}
                        strokeOpacity={isSelected ? "0.75" : "0.2"}
                        strokeDasharray={isSelected ? "0" : "5 8"}
                    />
                );
            })}
        </svg>
    );
}

function ClusterLabel({ cluster, activeFilter, onFilter }) {
    const Icon = cluster.icon;
    const isActive = activeFilter === cluster.id || activeFilter === "all";

    return (
        <button
            onClick={() => onFilter(cluster.id)}
            className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-xl transition-all duration-300"
            style={{
                left: cluster.x,
                top: cluster.y,
                color: isActive ? cluster.color : "rgba(255,255,255,0.45)",
                borderColor: isActive ? `${cluster.color}88` : "rgba(255,255,255,0.12)",
                background: isActive ? "rgba(2,6,23,0.72)" : "rgba(2,6,23,0.4)",
                boxShadow: isActive ? `0 0 26px ${cluster.color}33` : "none",
            }}
        >
            <Icon size={15} />
            {cluster.title}
        </button>
    );
}

function EventMarker({ event, isActive, isVisited, isSelected, onClick }) {
    const Icon = event.icon;

    return (
        <motion.button
            layout
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
                opacity: isActive ? 1 : 0.14,
                scale: isSelected ? 1.22 : isActive ? 1 : 0.72,
            }}
            whileHover={{ scale: isSelected ? 1.26 : 1.12 }}
            onClick={() => onClick(event)}
            className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: event.x, top: event.y }}
        >
            {isSelected && (
                <motion.span
                    className="absolute -inset-5 rounded-full border"
                    style={{ borderColor: `${event.color}88` }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.75, 0.2, 0.75] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                />
            )}

            <span
                className="absolute inset-0 h-14 w-14 -translate-x-2 -translate-y-2 rounded-full opacity-50 blur-xl transition-all group-hover:opacity-90"
                style={{ backgroundColor: event.color }}
            />

            <span
                className="relative grid h-11 w-11 place-items-center rounded-full border bg-slate-950/85 backdrop-blur-md transition-all"
                style={{
                    borderColor: isSelected ? event.color : `${event.color}aa`,
                    boxShadow: isSelected
                        ? `0 0 38px ${event.color}aa`
                        : `0 0 22px ${event.color}55`,
                }}
            >
                <Icon size={19} color={event.color} />

                {isVisited && (
                    <CheckCircle2
                        size={14}
                        className="absolute -right-1 -top-1 rounded-full bg-slate-950"
                        color="#22C55E"
                    />
                )}
            </span>

            <span
                className={`pointer-events-none absolute left-1/2 top-13 w-56 -translate-x-1/2 rounded-xl border bg-slate-950/92 px-3 py-2 text-left text-xs text-white shadow-2xl backdrop-blur-md ${isSelected ? "block" : "hidden group-hover:block"
                    }`}
                style={{ borderColor: `${event.color}66` }}
            >
                <strong className="block text-sm" style={{ color: event.color }}>
                    {event.title}
                </strong>
                <span className="mt-1 block text-white/65">{event.short}</span>
            </span>
        </motion.button>
    );
}
function StoryPanel({ event, onClose }) {
    const Icon = event.icon;

    return (
        <motion.aside
            initial={{ opacity: 0, y: 46, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 46, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
            className="absolute bottom-6 left-1/2 z-50 w-[980px] max-w-[calc(100%-48px)] -translate-x-1/2 overflow-hidden rounded-[2rem] border text-white shadow-[0_35px_130px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            style={{
                borderColor: `${event.color}99`,
                background: `
          linear-gradient(135deg, rgba(2,6,23,0.98), rgba(15,23,42,0.96)),
          radial-gradient(circle at 18% 20%, ${event.color}22, transparent 34%)
        `,
                boxShadow: `0 35px 130px rgba(0,0,0,0.9), 0 0 55px ${event.color}22`,
            }}
        >
            {/* Top light bar */}
            <div
                className="h-[5px] w-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${event.color}, transparent)`,
                }}
            />

            {/* Decorative glow */}
            <div
                className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full blur-3xl"
                style={{ backgroundColor: `${event.color}22` }}
            />

            <button
                onClick={onClose}
                className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 p-2.5 text-white/75 transition hover:bg-white/20 hover:text-white"
            >
                <X size={18} />
            </button>

            <div className="grid gap-6 p-7 lg:grid-cols-[0.72fr_1.28fr]">
                {/* LEFT: title block */}
                <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
                    <div className="mb-5 flex items-center gap-4">
                        <div
                            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border"
                            style={{
                                borderColor: event.color,
                                background: `${event.color}1F`,
                                boxShadow: `0 0 36px ${event.color}40`,
                            }}
                        >
                            <Icon size={31} color={event.color} />
                        </div>

                        <div>
                            <p
                                className="text-[11px] font-black uppercase tracking-[0.2em]"
                                style={{ color: event.color }}
                            >
                                {event.clusterTitle}
                            </p>
                            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                                Strategic Story Node
                            </p>
                        </div>
                    </div>

                    <h3 className="text-4xl font-black leading-[1.05] tracking-tight text-white">
                        {event.title}
                    </h3>

                    <div
                        className="mt-5 rounded-2xl border p-4"
                        style={{
                            borderColor: `${event.color}4D`,
                            background: `linear-gradient(135deg, ${event.color}1F, rgba(255,255,255,0.045))`,
                        }}
                    >
                        <p className="text-lg font-extrabold leading-7 text-white">
                            “{event.short}”
                        </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {event.keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="rounded-full border px-3.5 py-1.5 text-xs font-black"
                                style={{
                                    color: event.color,
                                    borderColor: `${event.color}77`,
                                    background: `${event.color}16`,
                                }}
                            >
                                #{keyword}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT: story block */}
                <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                                Nội dung câu chuyện
                            </p>
                            <h4 className="mt-1 text-xl font-black text-white">
                                Ý nghĩa của sự kiện
                            </h4>
                        </div>

                        <div
                            className="rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.14em]"
                            style={{
                                color: event.color,
                                borderColor: `${event.color}66`,
                                background: `${event.color}12`,
                            }}
                        >
                            Click Story
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                        <p className="text-[18px] font-semibold leading-9 text-white">
                            {event.story}
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                                Chủ đề
                            </p>
                            <p className="mt-1 text-sm font-bold text-white/85">
                                {event.clusterTitle}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                                Trọng tâm
                            </p>
                            <p className="mt-1 text-sm font-bold text-white/85">
                                {event.keywords[0]}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                                Vai trò
                            </p>
                            <p className="mt-1 text-sm font-bold text-white/85">
                                Kết nối
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.aside>
    );
}
export default function StrategicStoryMap() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [visitedIds, setVisitedIds] = useState([]);

    const visibleEvents = useMemo(() => {
        if (activeFilter === "all") return STRATEGIC_MAP_EVENTS;
        return STRATEGIC_MAP_EVENTS.filter((event) => event.cluster === activeFilter);
    }, [activeFilter]);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setVisitedIds((prev) =>
            prev.includes(event.id) ? prev : [...prev, event.id]
        );
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] px-6 py-8 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_35%),linear-gradient(135deg,#020617,#030712_55%,#111827)]" />

            <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:36px_36px]" />

            <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-none flex-col">
                <div className="mb-4 flex flex-col gap-4 px-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                            <Sparkles size={14} />
                            Strategic Story Map
                        </div>

                        <h2 className="max-w-5xl text-4xl font-black tracking-tight md:text-6xl xl:text-7xl">
                            Bản Đồ Chiến Lược Việt Nam
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
                            Click vào từng điểm sáng để khám phá câu chuyện về lịch sử,
                            đại đoàn kết, hội nhập, phát triển đời sống và bảo vệ Tổ quốc.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                            Đã khám phá
                        </p>
                        <p className="mt-1 text-2xl font-black">
                            {visitedIds.length}
                            <span className="text-white/40">/{STRATEGIC_MAP_EVENTS.length}</span>
                        </p>
                    </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2 px-4">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveFilter(category.id);
                                setSelectedEvent(null);
                            }}
                            className="rounded-full border px-4 py-2 text-sm font-bold transition-all"
                            style={{
                                color:
                                    activeFilter === category.id ? category.color : "rgba(255,255,255,0.58)",
                                borderColor:
                                    activeFilter === category.id
                                        ? `${category.color}aa`
                                        : "rgba(255,255,255,0.12)",
                                background:
                                    activeFilter === category.id
                                        ? `${category.color}18`
                                        : "rgba(255,255,255,0.04)",
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                <div className="relative flex-1 min-h-[760px] h-[calc(100vh-220px)] w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/70 shadow-[0_45px_140px_rgba(0,0,0,0.65)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_80%_65%,rgba(239,68,68,0.12),transparent_26%),radial-gradient(circle_at_25%_45%,rgba(250,204,21,0.12),transparent_24%)]" />

                    <ConnectionLines events={visibleEvents} selectedEvent={selectedEvent} />

                    <VietnamOutline selectedEvent={selectedEvent} />

                    {CLUSTER_LABELS.map((cluster) => (
                        <ClusterLabel
                            key={cluster.id}
                            cluster={cluster}
                            activeFilter={activeFilter}
                            onFilter={(id) => {
                                setActiveFilter(id);
                                setSelectedEvent(null);
                            }}
                        />
                    ))}

                    <AnimatePresence>
                        {STRATEGIC_MAP_EVENTS.map((event) => {
                            const isActive =
                                activeFilter === "all" || activeFilter === event.cluster;

                            return (
                                <EventMarker
                                    key={event.id}
                                    event={event}
                                    isActive={isActive}
                                    isVisited={visitedIds.includes(event.id)}
                                    isSelected={selectedEvent?.id === event.id}
                                    onClick={handleSelectEvent}
                                />
                            );
                        })}
                    </AnimatePresence>

                    <div className="absolute left-5 top-5 z-40 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-medium text-white/65 backdrop-blur-xl">
                        Gợi ý: Hover để xem nhanh, click để mở câu chuyện.
                    </div>

                    <AnimatePresence>
                        {selectedEvent && (
                            <StoryPanel
                                event={selectedEvent}
                                onClose={() => setSelectedEvent(null)}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}