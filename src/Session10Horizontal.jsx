import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Shield,
  Flag,
  Layers,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const session10Tabs = [
  {
    id: "nature",
    number: "01",
    title: "Tính chất thời kỳ quá độ",
    subtitle: "Khó khăn, phức tạp và lâu dài",
    icon: Shield,
    content: [
      "Là một thời kỳ lịch sử vô cùng khó khăn.",
      "Diễn biến phức tạp, đan xen giữa cái cũ và cái mới.",
      "Mang tính chất lâu dài, cần sự bền bỉ và kiên trì.",
      "Đòi hỏi sự hy sinh, gian khổ trong quá trình xây dựng xã hội mới.",
    ],
    quote: "“Khó hơn đánh giặc” - Hồ Chí Minh",
  },
  {
    id: "vietnam",
    number: "02",
    title: "Đặc điểm Việt Nam",
    subtitle: "Đi lên từ một nước nông nghiệp lạc hậu",
    icon: Flag,
    content: [
      "Việt Nam xuất phát từ một nước nông nghiệp lạc hậu.",
      "Tiến thẳng lên Chủ nghĩa Xã hội.",
      "Không trải qua giai đoạn phát triển tư bản chủ nghĩa.",
      "Đi lên từ xuất phát điểm kinh tế thấp và hậu quả chiến tranh nặng nề.",
    ],
  },
  {
    id: "missions",
    number: "03",
    title: "Nhiệm vụ trên các lĩnh vực",
    subtitle: "Xây dựng toàn diện chính trị, kinh tế, văn hóa, xã hội",
    icon: Layers,
    content: [
      "Chính trị: Giữ vững vai trò lãnh đạo của Đảng, xây dựng Nhà nước của dân.",
      "Kinh tế: Phát triển lực lượng sản xuất, công nghiệp hóa - hiện đại hóa.",
      "Văn hóa: Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      "Quan hệ xã hội: Đảm bảo công bằng, dân chủ và văn minh.",
    ],
  },
  {
    id: "principles",
    number: "04",
    title: "Nguyên tắc xây dựng CNXH",
    subtitle: "Kiên định nền tảng, vận dụng sáng tạo",
    icon: BookOpen,
    content: [
      "Dựa trên nền tảng Chủ nghĩa Mác - Lênin.",
      "Giữ vững độc lập dân tộc làm cốt lõi.",
      "Học hỏi và vận dụng sáng tạo kinh nghiệm quốc tế.",
      "Kết hợp chặt chẽ giữa xây dựng và đấu tranh: xây đi đôi với chống.",
    ],
  },
];

export default function Session10Horizontal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = session10Tabs[activeIndex];
  const Icon = activeTab.icon;

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
      className="py-32 relative z-10 border-t border-gray-200 dark:border-white/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B0000]/10 dark:bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 dark:bg-[#8B0000]/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-[#8B0000] dark:text-[#D4AF37] tracking-[0.3em] text-sm font-bold uppercase mb-4 block">
            Session 10
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white uppercase tracking-wide">
            Thời Kỳ Quá Độ Lên CNXH
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#8B0000] dark:via-[#D4AF37] to-transparent mx-auto mt-6" />

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Khám phá nội dung chính qua 4 tab ngang, giúp người xem theo dõi
            từng ý một cách rõ ràng và trực quan hơn.
          </p>
        </motion.div>

        {/* Horizontal tab buttons */}
        <div className="relative mb-10">
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
            {session10Tabs.map((tab, index) => {
              const TabIcon = tab.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[260px] md:min-w-[300px] snap-start text-left rounded-2xl border p-5 transition-all duration-300 group ${
                    isActive
                      ? "bg-[#8B0000] dark:bg-[#D4AF37] border-[#8B0000] dark:border-[#D4AF37] text-white dark:text-black shadow-xl"
                      : "bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-[#8B0000]/40 dark:hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? "bg-white/15 dark:bg-black/10 border-white/30 dark:border-black/20"
                          : "bg-gray-50 dark:bg-black/40 border-gray-200 dark:border-white/10 group-hover:scale-110"
                      }`}
                    >
                      <TabIcon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-3xl font-serif font-bold ${
                        isActive
                          ? "text-white/70 dark:text-black/40"
                          : "text-gray-200 dark:text-white/10"
                      }`}
                    >
                      {tab.number}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg md:text-xl leading-snug mb-2">
                    {tab.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isActive
                        ? "text-white/80 dark:text-black/70"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {tab.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-yellow-50 dark:from-[#8B0000]/10 dark:via-transparent dark:to-[#D4AF37]/10 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0">
                {/* Left visual area */}
                <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/10 flex flex-col justify-between min-h-[360px]">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#8B0000]/10 dark:bg-[#D4AF37]/10 border border-[#8B0000]/20 dark:border-[#D4AF37]/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#8B0000] dark:text-[#D4AF37]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#8B0000] dark:text-[#D4AF37]">
                          Nội dung {activeTab.number}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-1">
                          {activeTab.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {activeTab.subtitle}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-3">
                    <button
                      onClick={goPrev}
                      className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 hover:bg-[#8B0000] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-black transition-all duration-300 flex items-center justify-center"
                      aria-label="Previous tab"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={goNext}
                      className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 hover:bg-[#8B0000] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-black transition-all duration-300 flex items-center justify-center"
                      aria-label="Next tab"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                      {activeIndex + 1} / {session10Tabs.length}
                    </span>
                  </div>
                </div>

                {/* Right content area */}
                <div className="p-8 md:p-12">
                  <div className="space-y-5">
                    {activeTab.content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex gap-4"
                      >
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#8B0000]/10 dark:bg-[#D4AF37]/10 border border-[#8B0000]/20 dark:border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-[#8B0000] dark:text-[#D4AF37]">
                            {index + 1}
                          </span>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {activeTab.quote && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="mt-8 p-6 rounded-2xl bg-[#8B0000]/5 dark:bg-[#D4AF37]/10 border-l-4 border-[#8B0000] dark:border-[#D4AF37]"
                    >
                      <p className="text-[#8B0000] dark:text-[#D4AF37] font-serif italic font-bold text-lg">
                        {activeTab.quote}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}