import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { TECHNICAL_FLIPBOOK_PAGES } from "./data/technicalFlipbookPages";
const PAGE_RATIO = 1024 / 576;
const DEFAULT_PAGES = Array.from({ length: 16 }, (_, i) => ({
  id: `page-${i}`,
  src: `/images/flipbook/P_${i}.jpg`,
  alt: i === 0 ? "Trang bìa" : `Trang truyện ${i}`,
  type: i === 0 ? "cover" : "story",
}));

const DEFAULT_STORY_TEXTS = [
  `Có những lúc, lòng yêu nước không bắt đầu từ những điều thật lớn lao.
Nó bắt đầu từ một con đường làng quen thuộc, một lá cờ bay trong gió, một bến thuyền nhỏ, và những con người âm thầm sống vì nhau.

Câu chuyện “Ngọn Đèn Ở Cuối Làng” kể về An, một sinh viên trở về quê sau những ngày học tập ở thành phố.
Trong một đêm bão, khi ngọn hải đăng cuối làng bất ngờ vụt tắt, An lần đầu hiểu rằng: quê hương không chỉ là nơi để trở về, mà còn là nơi mỗi người cần có trách nhiệm gìn giữ.

Và đôi khi, chỉ một ánh đèn nhỏ cũng có thể soi sáng cả một tình yêu lớn.`,

  `Chiều hè, An kéo vali trở về làng chài ven biển.
Con đường cát, mái nhà nhỏ, bến thuyền và lá cờ đỏ sao vàng hiện ra trước mắt cậu.
An từng nghĩ yêu nước là điều gì đó rất lớn lao.
Nhưng khi trở về nơi mình sinh ra, cậu bắt đầu thấy Tổ quốc thật gần.`,

  `An đứng trên bãi cát, nhìn về ngọn hải đăng cũ ở cuối làng.
Một đứa trẻ nói với cậu rằng ánh đèn ấy luôn soi đường cho thuyền cá trở về.
An im lặng nhìn vệt sáng mỏng trên mặt biển.
Cậu tự hỏi vì sao cả làng luôn tin vào ngọn đèn ấy.`,

  `Sáng hôm sau, làng chài lại bắt đầu một ngày mới.
Người lớn vá lưới, kéo thuyền, phơi cá. Trẻ con chạy chơi trên cát.
An nhận ra, mỗi người đều đang âm thầm làm phần việc của mình.
Có lẽ lòng yêu nước bắt đầu từ những điều bình dị như thế.`,

  `An ngồi trước hiên nhà, mở cuốn giáo trình ra đọc.
Trên trang sách là những dòng chữ về trách nhiệm của thế hệ trẻ.
Nhưng An vẫn tự hỏi: yêu nước thật sự là gì?
Cậu cảm thấy có những câu hỏi chỉ quê hương mới trả lời được.`,

  `Chiều muộn, mây đen kéo đến từ phía biển.
Sóng bắt đầu mạnh hơn, còn vài chiếc thuyền vẫn chưa kịp trở về.
Bác cựu chiến binh cầm chiếc radio cũ, lặng lẽ nghe tin bão.
An nhìn biển và thấy lòng mình bất an.`,

  `Đêm xuống, mưa gió dữ dội bao trùm cả làng.
Người dân tập trung gần bến, ai cũng căng thẳng chờ tin từ ngoài khơi.
Những ánh đèn nhỏ run rẩy trong màn mưa.
Lần đầu tiên, An thấy sự bình yên mong manh đến vậy.`,

  `Giữa cơn bão, ngọn hải đăng cuối làng bất ngờ vụt tắt.
Cả vùng biển phía trước chìm vào bóng tối.
Mọi người hoảng hốt nhìn về phía cuối làng.
Khi ngọn đèn tắt, An mới hiểu vì sao cả làng cần nó sáng.`,

  `Bác cựu chiến binh khoác áo mưa, cầm đèn pin đi về phía hải đăng.
An nhìn bác, rồi nhìn ra biển tối.
Cậu không biết mình có giúp được gì không.
Nhưng cậu biết mình không thể đứng yên.`,

  `Đoàn người đi dọc con đường ven biển trong mưa gió.
Sóng đánh mạnh vào đá, còn gió thì thổi rát mặt.
Dưới mái hiên, vài đứa trẻ cầm đèn nhỏ soi theo.
Trong cơn bão, An thấy làng mình không hề nhỏ bé.`,

  `Bên trong hải đăng, An soi đèn pin lên những bức ảnh cũ.
Có ảnh dân làng kéo thuyền sau bão, người lính đứng bên biển, trẻ em cầm cờ trong ngày hội làng.
Bác cựu chiến binh kể rằng nhiều thế hệ đã cùng giữ ngọn đèn này sáng.
An nhận ra mình đang đứng trong một phần ký ức của làng.`,

  `Trên tầng cao của hải đăng, mọi người cùng sửa hệ thống đèn.
Người giữ thang, người che mưa, người nối dây, người đưa dụng cụ.
An phụ bác cựu chiến binh nối lại đoạn dây bị hỏng.
Cậu hiểu rằng có những điều lớn lao được giữ bằng rất nhiều việc nhỏ.`,

  `Một cơn gió mạnh làm cửa hải đăng bật tung.
Bóng đèn phụ vỡ, dây điện rơi xuống sàn.
An thoáng sợ và gần như muốn bỏ cuộc.
Nhưng khi nhìn xuống bến, cậu thấy cả làng vẫn đang chờ ánh sáng.`,

  `Sau nhiều cố gắng, ngọn hải đăng bừng sáng trở lại.
Ánh sáng vàng mạnh mẽ xuyên qua màn mưa, rọi ra biển tối.
Người dân dưới bến reo lên.
Đêm ấy, An không chỉ thấy một ngọn đèn sáng lên, mà thấy lòng mình cũng sáng lên.`,

  `Ngoài khơi, những chiếc thuyền cá nhìn thấy ánh đèn và lần lượt hướng về bờ.
Dân làng chạy ra bến đón người thân trong mưa nhẹ dần.
Một người ngư dân già đặt tay lên vai An và gật đầu cảm ơn.
An hiểu rằng ánh sáng ấy không chỉ soi biển, mà soi đường cho sự bình yên.`,

  `Sáng hôm sau, bão tan. Biển xanh trở lại, làng chài yên bình dưới nắng sớm.
An khoác balo, chuẩn bị quay lại thành phố.
Cậu không còn nghĩ yêu nước là điều xa vời.
Với An, yêu nước bắt đầu từ trách nhiệm với nơi mình thuộc về.
Dù đi đâu, cậu cũng sẽ giữ cho ngọn đèn trong lòng luôn sáng.`,
];
const DEFAULT_AUDIO_FILES = Array.from(
  { length: 16 },
  (_, i) => `/audio/A_${i}.mp3`
);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FlipBook = React.forwardRef((props = {}, ref) => {
  const {
    audioRef: externalAudioRef,
    audioFiles: externalAudioFiles,
    setIsPlaying,
    setIsAudioAutoPlay,
  } = props;

  const flipBookRef = useRef(null);
  const containerRef = useRef(null);
  const internalAudioRef = useRef(null);

  const autoPlayTimeoutRef = useRef(null);
  const isStoppingRef = useRef(false);
  const playbackSessionRef = useRef(0);
  const pendingAutoFlipRef = useRef(false);
  const restartFromPageRef = useRef(null);

  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 360, height: 640 });
  const pages = useMemo(() => DEFAULT_PAGES, []);
  const storyTexts = useMemo(() => DEFAULT_STORY_TEXTS, []);
  const audioFiles = useMemo(() => {
    if (Array.isArray(externalAudioFiles) && externalAudioFiles.length > 0) {
      return externalAudioFiles;
    }
    return DEFAULT_AUDIO_FILES;
  }, [externalAudioFiles]);

  const activeAudioRef =
    externalAudioRef?.current ? externalAudioRef : internalAudioRef;

  const clearAutoPlayTimer = () => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }
  };

  const isSessionActive = (sessionId) =>
    playbackSessionRef.current === sessionId && !isStoppingRef.current;

  const stopAudio = () => {
    const audio = activeAudioRef?.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.removeAttribute("src");
    audio.load();
    setIsPlaying?.(false);
  };

  const cancelCurrentPlayback = () => {
    playbackSessionRef.current += 1;
    clearAutoPlayTimer();
    stopAudio();
  };

  const createPlaybackSession = () => {
    playbackSessionRef.current += 1;
    return playbackSessionRef.current;
  };

  const waitForAudioMetadata = (audio, sessionId) =>
    new Promise((resolve) => {
      if (!audio) {
        resolve(false);
        return;
      }

      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        resolve(true);
        return;
      }

      let settled = false;

      const cleanup = () => {
        audio.removeEventListener("loadedmetadata", handleLoaded);
        audio.removeEventListener("canplaythrough", handleLoaded);
        audio.removeEventListener("error", handleError);
        clearInterval(intervalId);
      };

      const finish = (value) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(value);
      };

      const handleLoaded = () => finish(true);
      const handleError = () => finish(false);

      const intervalId = setInterval(() => {
        if (!isSessionActive(sessionId)) finish(false);
      }, 100);

      audio.addEventListener("loadedmetadata", handleLoaded, { once: true });
      audio.addEventListener("canplaythrough", handleLoaded, { once: true });
      audio.addEventListener("error", handleError, { once: true });
    });

  const waitForAudioEnded = (audio, sessionId) =>
    new Promise((resolve) => {
      if (!audio) {
        resolve("cancelled");
        return;
      }

      let settled = false;

      const cleanup = () => {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("error", handleError);
        clearInterval(intervalId);
      };

      const finish = (value) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(value);
      };

      const handleEnded = () => finish("ended");
      const handleError = () => finish("error");

      const intervalId = setInterval(() => {
        if (!isSessionActive(sessionId)) finish("cancelled");
      }, 100);

      audio.addEventListener("ended", handleEnded, { once: true });
      audio.addEventListener("error", handleError, { once: true });
    });

  const getVisibleSpreadPages = (pageIndex) => {
    const lastPage = pages.length - 1;

    if (pageIndex <= 0) return [0];
    if (pageIndex >= lastPage) return [lastPage];

    const rightPage = Math.min(pageIndex + 1, lastPage);
    return [pageIndex, rightPage];
  };

  const getPageIndicatorText = (pageIndex) => {
    const visiblePages = getVisibleSpreadPages(pageIndex).map((p) => p + 1);
    return visiblePages.length === 1
      ? `Trang ${visiblePages[0]} / ${pages.length}`
      : `Trang ${visiblePages.join(", ")} / ${pages.length}`;
  };

  const getStoryTextForCurrentView = () => {
    const visiblePages = getVisibleSpreadPages(currentPage);
    return visiblePages
      .map((pageIndex) => storyTexts[pageIndex])
      .filter(Boolean)
      .join(" ");
  };

  const playSingleAudio = async (pageIndex, sessionId) => {
    const audio = activeAudioRef?.current;
    const audioFile = audioFiles?.[pageIndex] || `/audio/page${pageIndex}.mp3`;

    if (!audio || !audioFile || !isSessionActive(sessionId)) return false;

    try {
      audio.pause();
      audio.currentTime = 0;
      audio.src = audioFile;
      audio.load();

      const hasMetadata = await waitForAudioMetadata(audio, sessionId);
      if (!hasMetadata || !isSessionActive(sessionId)) return false;

      await audio.play();
      if (!isSessionActive(sessionId)) return false;

      setIsPlaying?.(true);

      const result = await waitForAudioEnded(audio, sessionId);
      return result === "ended";
    } catch (error) {
      console.warn("Audio play failed:", error);
      setIsPlaying?.(false);
      return false;
    }
  };

  const playAudioForSpread = async (pageIndex, sessionId) => {
    const spreadPages = getVisibleSpreadPages(pageIndex);

    for (const p of spreadPages) {
      if (!isSessionActive(sessionId)) return false;

      const played = await playSingleAudio(p, sessionId);
      if (!played) return false;
    }

    if (isSessionActive(sessionId)) {
      setIsPlaying?.(false);
    }

    return true;
  };

  const playSpreadOnce = async (pageIndex) => {
    cancelCurrentPlayback();
    isStoppingRef.current = false;

    const sessionId = createPlaybackSession();
    await playAudioForSpread(pageIndex, sessionId);

    if (isSessionActive(sessionId)) {
      setIsPlaying?.(false);
    }
  };

  const getNextPageForAutoPlay = (pageIndex) => {
    const lastPage = pages.length - 1;
    if (pageIndex <= 0) return 1;
    if (pageIndex >= lastPage) return lastPage;
    return Math.min(pageIndex + 2, lastPage);
  };

  const handleFlip = (e) => {
    const nextPage = e.data;
    const audio = activeAudioRef?.current;
    const wasPlaying = Boolean(audio && !audio.paused);
    const wasInternalAutoFlip = pendingAutoFlipRef.current;

    pendingAutoFlipRef.current = false;
    setCurrentPage(nextPage);

    if (wasInternalAutoFlip) return;
    if (!wasPlaying) return;

    restartFromPageRef.current = nextPage;
    cancelCurrentPlayback();

    if (!isAutoPlay) {
      void playSpreadOnce(nextPage);
    }
  };

  const startAutoPlay = async () => {
    if (isAutoPlay) return;

    setIsAudioAutoPlay?.(true);
    setIsAutoPlay(true);
    isStoppingRef.current = false;
    restartFromPageRef.current = null;

    let pageIndex = currentPage;

    while (!isStoppingRef.current) {
      const sessionId = createPlaybackSession();
      await playAudioForSpread(pageIndex, sessionId);

      if (isStoppingRef.current) break;

      if (restartFromPageRef.current !== null) {
        pageIndex = restartFromPageRef.current;
        restartFromPageRef.current = null;
        continue;
      }

      if (pageIndex >= pages.length - 1) break;

      const nextPage = getNextPageForAutoPlay(pageIndex);

      await wait(200);
      if (isStoppingRef.current) break;

      pendingAutoFlipRef.current = true;
      flipBookRef.current?.pageFlip()?.flip(nextPage);
      pageIndex = nextPage;

      await wait(1050);
      if (isStoppingRef.current) break;
    }

    setIsAudioAutoPlay?.(false);
    setIsAutoPlay(false);
    isStoppingRef.current = false;
    restartFromPageRef.current = null;
    clearAutoPlayTimer();
    setIsPlaying?.(false);
  };

  const stopAutoPlay = () => {
    isStoppingRef.current = true;
    restartFromPageRef.current = null;
    setIsAudioAutoPlay?.(false);
    setIsAutoPlay(false);
    cancelCurrentPlayback();
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (error) {
      console.warn("Fullscreen failed:", error);
    }
  };

  const goPrev = () => {
    cancelCurrentPlayback();
    flipBookRef.current?.pageFlip()?.flipPrev();
  };

  const goNext = () => {
    cancelCurrentPlayback();
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const goStart = () => {
    cancelCurrentPlayback();
    flipBookRef.current?.pageFlip()?.flip(0);
  };

  useEffect(() => {
    const updateSize = () => {
      const parentWidth = containerRef.current?.clientWidth || window.innerWidth;
      const parentHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      const availableWidth = Math.max(parentWidth - 32, 320);

      // Tăng chiều cao dành cho truyện, vì ảnh của bạn là ảnh dọc
      const availableHeight = parentHeight * 0.76;

      let pageWidth;

      if (isMobile) {
        pageWidth = availableWidth * 0.9;
      } else {
        // Tăng độ rộng mỗi trang, nhưng vẫn giữ tỉ lệ dọc
        pageWidth = Math.min(availableWidth / 2.25, 430);
      }

      let pageHeight = pageWidth * PAGE_RATIO;

      if (pageHeight > availableHeight) {
        pageHeight = availableHeight;
        pageWidth = pageHeight / PAGE_RATIO;
      }

      setBookSize({
        width: Math.floor(pageWidth),
        height: Math.floor(pageHeight),
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(Boolean(document.fullscreenElement));

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    return () => {
      cancelCurrentPlayback();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    pageFlip: () => ({
      flipNext: () => flipBookRef.current?.pageFlip()?.flipNext(),
      flipPrev: () => flipBookRef.current?.pageFlip()?.flipPrev(),
      flip: (page) => flipBookRef.current?.pageFlip()?.flip(page),
    }),
    startAutoPlay,
    stopAutoPlay,
    toggleFullscreen,
    getCurrentPage: () => currentPage,
    getTotalPages: () => pages.length,
    getCurrentStoryText: () => getStoryTextForCurrentView(),
  }));

  return (
    <div
      ref={containerRef}
      className={`flipbook-container ${isFullscreen ? "fullscreen" : ""}`}
    >
      <style>{`
        .flipbook-container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 18px 20px 16px;
  background: #121212;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  color: white;
}

.flipbook-header {
  text-align: center;
  margin-bottom: 12px;
}

.flipbook-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 4px;
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.flipbook-header p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.55 !important;
}

.flipbook-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 3000px;
  padding: 8px 0 10px;
  min-height: unset;
}

.dialectic-book {
  position: relative;
  box-shadow: 0 22px 70px rgba(0,0,0,0.75);
}

.dialectic-book::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.4) 0%,
    rgba(255,255,255,0.1) 50%,
    rgba(0,0,0,0.4) 100%
  );
  transform: translateX(-50%);
  z-index: 100;
  pointer-events: none;
}

.page {
  background: #000;
  overflow: hidden;
}

.page-inner {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
}

.page-inner::before {
  content: "";
  position: absolute;
  top: 0;
  width: 60px;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.page-left .page-inner::before {
  right: 0;
  background: linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 100%);
}

.page-right .page-inner::before {
  left: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 100%);
}

.page-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
}

.flipbook-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.ui-btn {
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.88rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
}

.ui-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.ui-btn.active {
  background: #2563eb;
  border-color: #3b82f6;
}

.page-indicator {
  background: rgba(37, 99, 235, 0.2);
  color: #60a5fa;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
  margin-left: 0;
  display: inline-block;
  margin-top: 6px;
}

.story-card {
  margin-top: 14px;
  padding: 12px 16px;
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.9);
  line-height: 1.55;
  font-size: 0.9rem;
}

.story-card-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #60a5fa;
  margin-bottom: 6px;
  font-weight: 700;
}

        @media (max-width: 768px) {
          .flipbook-container {
            padding: 24px 12px;
            border-radius: 18px;
          }

          .flipbook-title {
            font-size: 1.8rem;
          }

          .flipbook-stage {
            min-height: 260px;
            padding: 12px 0;
          }

          .page-indicator {
            margin-left: 0;
            margin-top: 10px;
          }

          .flipbook-footer {
            gap: 10px;
          }

          .ui-btn {
            width: calc(50% - 8px);
            min-width: 140px;
          }
          .technical-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #020617;
  color: white;
  font-family: Inter, system-ui, sans-serif;
}

.technical-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.08);
  transform: scale(1.02);
}

.technical-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.14), transparent 30%),
    linear-gradient(90deg, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.45), rgba(2, 6, 23, 0.86));
  z-index: 1;
}

.tech-grid {
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  pointer-events: none;
}

.tech-header {
  position: absolute;
  z-index: 4;
  top: 8%;
  left: 7%;
  right: 7%;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.tech-icon {
  width: 46px;
  height: 46px;
  border: 1px solid;
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.62);
  backdrop-filter: blur(10px);
  display: grid;
  place-items: center;
  box-shadow: 0 0 24px rgba(255,255,255,0.08);
}

.tech-kicker {
  margin: 0 0 6px;
  font-size: 9px;
  letter-spacing: 0.22em;
  color: rgba(255,255,255,0.58);
  font-weight: 800;
}

.tech-header h2 {
  margin: 0;
  font-size: clamp(18px, 2.2vw, 32px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.tech-header p {
  margin: 8px 0 0;
  font-size: clamp(10px, 1vw, 14px);
  color: rgba(255,255,255,0.76);
  line-height: 1.45;
  max-width: 520px;
}

.tech-tags {
  position: absolute;
  z-index: 4;
  left: 7%;
  bottom: 22%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tags span {
  font-size: 10px;
  padding: 7px 10px;
  border: 1px solid;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.62);
  backdrop-filter: blur(10px);
  color: rgba(255,255,255,0.86);
}

.tech-metrics {
  position: absolute;
  z-index: 4;
  left: 7%;
  right: 7%;
  bottom: 7%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.tech-card {
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 16px;
  background: rgba(2, 6, 23, 0.68);
  backdrop-filter: blur(12px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}

.tech-card span {
  display: block;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.48);
  margin-bottom: 5px;
}

.tech-card strong {
  font-size: 13px;
  letter-spacing: -0.02em;
}

.tech-map-node {
  position: absolute;
  z-index: 4;
  right: 10%;
  top: 38%;
  width: 82px;
  height: 82px;
  border: 1px solid;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(2, 6, 23, 0.38);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 40px rgba(255,255,255,0.08);
}

.tech-map-node::before,
.tech-map-node::after {
  content: "";
  position: absolute;
  inset: -14px;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: inherit;
}

.tech-map-node::after {
  inset: -28px;
  opacity: 0.5;
}

.tech-map-node div {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  box-shadow: 0 0 24px currentColor;
}

.tech-footer-line {
  position: absolute;
  z-index: 5;
  left: 7%;
  right: 7%;
  bottom: 4%;
  height: 2px;
  opacity: 0.9;
  box-shadow: 0 0 18px currentColor;
}             
        }
      `}</style>

      {!externalAudioRef && <audio ref={internalAudioRef} preload="auto" />}

      <div className="flipbook-header">
        <h1 className="flipbook-title">Ngọn Đèn Ở Cuối Làng</h1>
        <p style={{ opacity: 0.7 }}>
          Sử dụng nút cuộn hoặc click để lật trang
        </p>
        <span className="page-indicator">{getPageIndicatorText(currentPage)}</span>
      </div>

      <div className="flipbook-stage">
        <HTMLFlipBook
          width={bookSize.width}
          height={bookSize.height}
          size="fixed"
          minWidth={260}
          maxWidth={520}
          minHeight={420}
          maxHeight={820}
          usePortrait={false}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          onFlip={handleFlip}
          className="dialectic-book"
          ref={flipBookRef}
          showCover={true}
          maxShadowOpacity={0.5}
        >
          {pages.map((page, index) => (
            <div
              key={page.id}
              className={`page ${index % 2 === 0 ? "page-right" : "page-left"}`}
            >
              <div className="page-inner">
                <img
                  src={page.src}
                  alt={page.alt}
                  className="page-image"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div className="flipbook-footer">
        <button className="ui-btn" onClick={goPrev}>
          ← Trang trước
        </button>
        <button className="ui-btn" onClick={() => void playSpreadOnce(currentPage)}>
          Phát Audio
        </button>
        <button
          className={`ui-btn ${isAutoPlay ? "active" : ""}`}
          onClick={() => {
            if (isAutoPlay) {
              stopAutoPlay();
            } else {
              void startAutoPlay();
            }
          }}
        >
          {isAutoPlay ? "Dừng tự động" : "Tự động lật + Audio"}
        </button>
        <button className="ui-btn" onClick={goNext}>
          Trang sau →
        </button>
        <button className="ui-btn" onClick={goStart}>
          Về trang đầu
        </button>
        <button className="ui-btn" onClick={toggleFullscreen}>
          {isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
        </button>
      </div>

      <div className="story-card">
        <div className="story-card-label">Nội dung từng trang</div>
        <div>{getStoryTextForCurrentView()}</div>
      </div>
    </div>
  );
});

export default FlipBook;
