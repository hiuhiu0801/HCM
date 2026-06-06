import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Toaster, toast } from "sonner";
import {
  MessageSquare,
  Send,
  X,
  ChevronRight,
  LogOut,
  User,
  Settings,
  History,
  LogIn,
  Camera,
  Sun,
  Moon,
  Landmark
} from "lucide-react";
import Session12CommandCenter from "./Session12CommandCenter";
import StrategicStoryMap from "./StrategicStoryMap";
import Session11Horizontal from "./Session11Horizontal";
import Session10Horizontal from "./Session10Horizontal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CinematicReveal } from "./CinematicReveal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { FooterQuiz } from "@/components/footer-quiz";
import { getChatResponse } from "./lib/gemini";
import { auth, googleProvider } from "./lib/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { Footer } from "./Footer"; // Sửa lại đường dẫn nếu bạn để ở thư mục khác, VD: "./components/Footer"
// ==========================================
// INTERFACES
// ==========================================
interface Message {
  role: "user" | "model";
  text: string;
  timestamp?: any;
}

interface UserProfile {
  displayName: string;
  photoURL?: string;
}

// ==========================================
// THÀNH PHẦN DÙNG CHUNG (2D)
// ==========================================
const PhilosophicalParticles = ({ density = 20, className = "" }: { density?: number; className?: string }) => {
  const particles = useMemo(() => {
    return Array.from({ length: density }).map(() => ({
      xInit: `${Math.random() * 100}%`,
      yInit: `${Math.random() * 100}%`,
      scaleInit: Math.random() * 0.5 + 0.5,
      xAnim: `${Math.random() * 10 - 5}%`,
      opacityMax: Math.random() * 0.4 + 0.2,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 3,
    }));
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/30 dark:bg-primary/50 rounded-full blur-[1px]"
          initial={{ x: p.xInit, y: p.yInit, opacity: 0, scale: p.scaleInit }}
          animate={{ y: ["0%", "15%", "-15%", "0%"], x: ["0%", p.xAnim, "0%"], opacity: [0, p.opacityMax, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
};

// ==========================================
// MAIN APP COMPONENT (2D & Logic)
// ==========================================
// ==========================================
// MAIN APP COMPONENT (2D & Logic) - ĐÃ CẬP NHẬT LIGHT/DARK MODE
// ==========================================
export default function App() {
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Xin chào! Tôi là trợ lý ảo chuyên về Hội nhập kinh tế quốc tế của Việt Nam. Bạn muốn tìm hiểu về nội dung nào hôm nay?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthSubmitting, setIsAuthSubmitting] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const qrCodeUrl = `..\\public\\images\\1. QUY LUẬT LƯỢNG - CHẤT...png`; // Rút gọn để hiển thị

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getLocalProfileKey = (uid: string) => `thbc_profile_${uid}`;
  const getLocalMessagesKey = (uid: string) => `thbc_messages_${uid}`;

  const loadLocalProfile = (currentUser: FirebaseUser): UserProfile => {
    try {
      const raw = localStorage.getItem(getLocalProfileKey(currentUser.uid));
      const saved = raw ? JSON.parse(raw) : {};
      return {
        displayName: saved.displayName || currentUser.displayName || "Người dùng",
        photoURL: saved.photoURL || currentUser.photoURL || ""
      };
    } catch {
      return {
        displayName: currentUser.displayName || "Người dùng",
        photoURL: currentUser.photoURL || ""
      };
    }
  };

  const saveLocalProfile = (uid: string, nextProfile: UserProfile) => {
    localStorage.setItem(getLocalProfileKey(uid), JSON.stringify(nextProfile));
  };

  const getDefaultWelcomeMessage = (): Message[] => ([
    { role: "model", text: "Xin chào! Tôi là trợ lý ảo chuyên về Hội nhập kinh tế quốc tế của Việt Nam. Bạn muốn tìm hiểu về nội dung nào hôm nay?" }
  ]);

  const loadLocalMessages = (uid: string): Message[] => {
    try {
      const raw = localStorage.getItem(getLocalMessagesKey(uid));
      const saved = raw ? JSON.parse(raw) : [];
      return Array.isArray(saved) && saved.length > 0 ? saved : getDefaultWelcomeMessage();
    } catch {
      return getDefaultWelcomeMessage();
    }
  };

  const saveLocalMessages = (uid: string, nextMessages: Message[]) => {
    localStorage.setItem(getLocalMessagesKey(uid), JSON.stringify(nextMessages));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        setProfile(null);
        setMessages(getDefaultWelcomeMessage());
        return;
      }

      const localProfile = loadLocalProfile(currentUser);
      setProfile(localProfile);
      saveLocalProfile(currentUser.uid, localProfile);
      setMessages(loadLocalMessages(currentUser.uid));
    });
    return () => unsubscribe();
  }, []);

  const resetAuthForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRegisterName("");
    setAuthError("");
  };

  const getReadableAuthError = (error: any, mode: "login" | "register") => {
    const code = error?.code;
    switch (code) {
      case "auth/email-already-in-use": return "Email này đã được sử dụng.";
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
      case "auth/invalid-login-credentials": return "Email hoặc mật khẩu không chính xác.";
      case "auth/weak-password": return "Mật khẩu quá yếu. Hãy dùng ít nhất 6 ký tự.";
      default: return mode === "register" ? "Đăng ký thất bại. Vui lòng thử lại." : "Đăng nhập thất bại. Vui lòng thử lại.";
    }
  };

  const handleLogin = () => {
    resetAuthForm();
    setIsAuthDialogOpen(true);
    setAuthMode("login");
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    setIsAuthSubmitting(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthDialogOpen(false);
      resetAuthForm();
      toast.success("Đăng nhập thành công!");
    } catch (error: any) {
      setAuthError(getReadableAuthError(error, "login") + ` (${error?.code || 'unknown'})`);
    } finally {
      setIsAuthSubmitting(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    setAuthError("");

    if (!normalizedEmail) return setAuthError("Vui lòng nhập email.");
    if (authMode === "register") {
      if (password !== confirmPassword) return setAuthError("Mật khẩu xác nhận không khớp.");
      if (password.length < 6) return setAuthError("Mật khẩu phải có ít nhất 6 ký tự.");
      if (!registerName.trim()) return setAuthError("Vui lòng nhập tên của bạn.");
    }

    setIsAuthSubmitting(true);

    try {
      if (authMode === "register") {
        const userCredential = await createUserWithEmailAndPassword(auth, normalizedEmail, password);
        await updateProfile(userCredential.user, { displayName: registerName.trim() });
        const nextProfile = { displayName: registerName.trim(), photoURL: userCredential.user.photoURL || "" };
        saveLocalProfile(userCredential.user.uid, nextProfile);
        setProfile(nextProfile);
        setIsAuthDialogOpen(false);
        resetAuthForm();
        toast.success("Đăng ký thành công!");
        return;
      }
      await signInWithEmailAndPassword(auth, normalizedEmail, password);
      setIsAuthDialogOpen(false);
      resetAuthForm();
      toast.success("Đăng nhập thành công!");
    } catch (error: any) {
      setAuthError(getReadableAuthError(error, authMode));
    } finally {
      setIsAuthSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return setAuthError("Hãy nhập email trước khi yêu cầu đặt lại mật khẩu.");
    try {
      await sendPasswordResetEmail(auth, normalizedEmail);
      toast.success("Đã gửi email đặt lại mật khẩu.");
    } catch (error: any) {
      setAuthError(getReadableAuthError(error, "login"));
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsChatOpen(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const uploadToCloudinary = async (dataUrl: string) => {
    const cloudName = (import.meta as any).env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = (import.meta as any).env.VITE_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !uploadPreset) throw new Error("Cloudinary configuration missing");
    const formData = new FormData();
    formData.append("file", dataUrl);
    formData.append("upload_preset", uploadPreset);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: formData });
    if (!response.ok) throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    const data = await response.json();
    return data.secure_url;
  };

  const handleUpdateProfile = async () => {
    if (!user || !newDisplayName.trim()) return;
    setIsUpdatingProfile(true);
    try {
      let photoURL = newPhotoURL.trim() || profile?.photoURL || "";
      if (photoURL.startsWith("data:image/")) photoURL = await uploadToCloudinary(photoURL);
      const updatedProfile = { displayName: newDisplayName.trim(), photoURL };
      await updateProfile(user, updatedProfile);
      saveLocalProfile(user.uid, updatedProfile);
      setProfile(updatedProfile);
      setIsProfileDialogOpen(false);
      toast.success("Cập nhật hồ sơ thành công!");
    } catch (error) {
      toast.error("Cập nhật hồ sơ thất bại.");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const appendLocalMessage = (message: Message) => {
    setMessages(prev => {
      const next = [...prev, message];
      if (user) saveLocalMessages(user.uid, next);
      return next;
    });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMessage = inputValue.trim();
    const newMessage: Message = { role: "user", text: userMessage };
    setInputValue("");
    setIsLoading(true);
    appendLocalMessage(newMessage);
    const history = [...messages, newMessage].map(m => ({ role: m.role, parts: [{ text: m.text }] }));
    try {
      const response = await getChatResponse(userMessage, history);
      appendLocalMessage({ role: "model", text: response || "Xin lỗi, tôi không thể trả lời lúc này." });
    } catch (error) {
      appendLocalMessage({ role: "model", text: "Xin lỗi, đã có lỗi xảy ra khi xử lý câu hỏi của bạn." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" richColors />

      {/* ==========================================
          GLOBAL NAVIGATION
      ========================================== */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#0A0A0A]/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0A0A0A]/60 transition-colors duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#8B0000] to-red-900 rounded-lg border border-[#D4AF37]/30">
              <Landmark className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#8B0000] dark:text-[#D4AF37] uppercase">
              Triển Lãm Số
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 mr-4 border-r border-gray-300 dark:border-white/20 pr-8">
              <a href="#hero" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#8B0000] dark:hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Khai mạc</a>
              <a href="#session10" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#8B0000] dark:hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Phòng 10</a>
              <a href="#session11" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#8B0000] dark:hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Phòng 11</a>
              <a href="#strategic-map" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#8B0000] dark:hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Tư liệu</a>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-9 h-9 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10">
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost" }), "relative h-9 w-9 rounded-full p-0")}>
                    <Avatar className="h-9 w-9 border border-gray-200 dark:border-primary/10">
                      <AvatarImage src={profile?.photoURL || user.photoURL || ""} alt={profile?.displayName || ""} />
                      <AvatarFallback>{(profile?.displayName || user.displayName || "U").charAt(0)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{profile?.displayName || user.displayName}</p>
                          <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                        </div>
                      </DropdownMenuLabel>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {
                      setNewDisplayName(profile?.displayName || user.displayName || "");
                      setNewPhotoURL(profile?.photoURL || user.photoURL || "");
                      setIsProfileDialogOpen(true);
                    }}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Tùy chỉnh hồ sơ</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsChatOpen(true)}>
                      <History className="mr-2 h-4 w-4" />
                      <span>Lịch sử trò chuyện</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} variant="destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Đăng xuất</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="default" size="sm" onClick={handleLogin} className="rounded-full px-5 h-9 bg-gradient-to-r from-[#8B0000] to-red-900 text-white border border-[#D4AF37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <LogIn className="mr-2 h-4 w-4" /> Đăng nhập
                </Button>
              )}

              <Button variant="outline" size="sm" onClick={() => setIsChatOpen(true)} className="rounded-full h-9 border-[#8B0000] dark:border-[#D4AF37]/50 text-[#8B0000] dark:text-[#D4AF37] hover:bg-[#8B0000]/10 dark:hover:bg-[#D4AF37]/10">
                Hỏi Chatbot
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==========================================
          RENDER NỘI DUNG 2D
      ========================================== */}
      {/* HIỆU ỨNG MỞ MÀN CHẠY ĐỘC LẬP TẠI ĐÂY */}
      <CinematicReveal />

      <main className="flex-1 overflow-x-clip bg-gray-50 dark:bg-[#0A0A0A] text-gray-800 dark:text-gray-200 selection:bg-[#D4AF37] selection:text-black transition-colors duration-300">

        {/* TẠO KHOẢNG TRẮNG ĐỂ CUỘN (SCROLL SPACER) THEO Ý TƯỞNG CỦA BẠN */}
        {/* Chiều cao 1000px này phải khớp với con số 1000 trong file CinematicReveal.tsx */}
        <div className="w-full h-[850px] pointer-events-none" aria-hidden="true"></div>

        {/* Layer Ánh sáng Nền */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8B0000] rounded-full blur-[180px] opacity-10 dark:opacity-20"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37] rounded-full blur-[150px] opacity-[0.04] dark:opacity-[0.08]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
        </div>

        {/* ==========================================
                A. HERO SECTION 
            ========================================== */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
          {/* Ảnh nền */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 dark:opacity-50"
            style={{ backgroundImage: `url('/images/BG1.jpg')` }}
          ></div>

          {/* Lớp phủ gradient sáng/tối */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-gray-50 dark:from-black/50 dark:via-black/40 dark:to-black/80 z-0"></div>

          <PhilosophicalParticles density={30} className="z-0 opacity-40 text-[#8B0000] dark:text-[#D4AF37]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* TOÀN BỘ NỘI DUNG HERO SECTION GIỮ NGUYÊN CỦA BẠN */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="max-w-5xl mx-auto text-center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="mb-8">
                <Badge variant="outline" className="px-6 py-2 border-[#8B0000]/50 dark:border-[#D4AF37]/50 text-[#8B0000] dark:text-[#D4AF37] bg-[#8B0000]/10 dark:bg-[#D4AF37]/10 font-medium tracking-[0.2em] uppercase text-sm backdrop-blur-md">
                  Không gian triển lãm chuyên đề
                </Badge>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold uppercase tracking-wide leading-tight mb-6 drop-shadow-2xl text-gray-900 dark:text-white">
                Tư Tưởng <span className="text-[#8B0000] dark:text-[#D4AF37] relative inline-block">
                  Hồ Chí Minh
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B0000] dark:via-[#D4AF37] to-transparent"></span>
                </span>
                <br />
                <span className="text-4xl md:text-6xl text-gray-600 dark:text-gray-300 mt-4 block tracking-normal">Về Chủ Nghĩa Xã Hội</span>
              </h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-light italic font-serif mb-12">
                “Độc lập dân tộc gắn liền với chủ nghĩa xã hội”
              </motion.p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <a href="#session10" className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#8B0000] to-red-900 border border-red-900/50 dark:border-[#D4AF37]/50 rounded-full hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden">
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative uppercase tracking-widest text-sm">Khám phá triển lãm</span>
                  <ChevronRight className="relative ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
                B. SESSION 10 
            ========================================== */}
        <Session10Horizontal />

        {/* ==========================================
                C. SESSION 11
            ========================================== */}
        <Session11Horizontal />
         {/* ==========================================
                D. SESSION 12
            ========================================== */}
        <Session12CommandCenter />
        {/* ==========================================
                E. FLIPBOOK 
            ========================================== */}
        <section id="strategic-map">
          <StrategicStoryMap />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* ==========================================
          CHATBOT & DIALOGS
      ========================================== */}
      <Button
        size="lg"
        className="fixed bottom-6 right-6 h-14 px-6 rounded-full shadow-[0_0_20px_rgba(139,0,0,0.3)] dark:shadow-[0_0_20px_rgba(212,175,55,0.4)] z-50 bg-gradient-to-r from-[#8B0000] to-red-900 hover:from-red-900 hover:to-black text-white dark:text-[#D4AF37] border border-red-900/30 dark:border-[#D4AF37]/30 flex items-center gap-2 transition-all duration-300 hover:scale-105"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-bold text-sm tracking-wide">Hỏi AI</span>
      </Button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="fixed bottom-6 right-6 w-[95vw] md:w-[600px] h-[80vh] max-h-[800px] z-50 flex flex-col bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#D4AF37]/30 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-gray-100 to-white dark:from-[#111] dark:to-black border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {user ? (
                    <Avatar className="w-12 h-12 rounded-2xl border-2 border-[#8B0000] dark:border-[#D4AF37] shadow-md dark:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      <AvatarImage src={profile?.photoURL || user.photoURL || ""} />
                      <AvatarFallback className="bg-[#8B0000] text-white"><User className="w-6 h-6" /></AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B0000] to-red-900 flex items-center justify-center border border-red-900/50 dark:border-[#D4AF37]/50">
                      <MessageSquare className="w-6 h-6 text-white dark:text-[#D4AF37]" />
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-black rounded-full" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-none mb-1 text-gray-900 dark:text-white">Triển Lãm AI</p>
                  {user && <p className="text-[10px] text-[#8B0000] dark:text-[#D4AF37] font-medium uppercase tracking-wider">Chào, {profile?.displayName || user.displayName?.split(' ')[0]}</p>}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400" onClick={() => setIsChatOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-[#050505] custom-scrollbar">
              <div className="space-y-6">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm leading-relaxed ${msg.role === "user" ? "bg-gradient-to-br from-[#8B0000] to-red-900 text-white rounded-tr-none shadow-lg" : "bg-white text-gray-800 dark:bg-[#111] dark:text-gray-200 rounded-tl-none shadow-sm border border-gray-200 dark:border-white/10"}`}>
                      <div className={cn("prose prose-sm max-w-none", msg.role === "model" && "dark:prose-invert")}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#111] p-4 rounded-[1.5rem] rounded-tl-none border border-gray-200 dark:border-white/10 flex gap-1.5 shadow-sm">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-[#8B0000]/60 dark:bg-[#D4AF37]/60 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-[#8B0000]/60 dark:bg-[#D4AF37]/60 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-[#8B0000]/60 dark:bg-[#D4AF37]/60 rounded-full" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#111] border-t border-gray-200 dark:border-white/10">
              <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                <Input
                  placeholder="Nhập câu hỏi..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 h-12 rounded-full px-6 bg-gray-100 text-gray-900 border-gray-300 dark:bg-black dark:text-white dark:border-white/20 focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/30 focus-visible:border-[#8B0000]/50 dark:focus-visible:border-[#D4AF37]/50"
                />
                <Button type="submit" size="icon" className="w-12 h-12 rounded-full bg-[#8B0000] text-white hover:bg-red-900 dark:bg-[#D4AF37] dark:text-black dark:hover:bg-[#b08d2b]" disabled={isLoading || !inputValue.trim()}>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialog Cập nhật Profile */}
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-[2rem] bg-white dark:bg-[#111] text-gray-900 dark:text-white border-gray-200 dark:border-white/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#8B0000] dark:text-[#D4AF37]">Tùy chỉnh hồ sơ</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400">Thay đổi tên hiển thị và ảnh đại diện của bạn.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="flex justify-center">
              <div className="relative group">
                <Avatar className="w-24 h-24 border-4 border-gray-200 dark:border-[#8B0000]/50">
                  <AvatarImage src={newPhotoURL || profile?.photoURL || user?.photoURL || ""} />
                  <AvatarFallback className="text-2xl bg-gray-100 text-gray-600 dark:bg-black dark:text-[#D4AF37]">{(newDisplayName || user?.displayName || "U").charAt(0)}</AvatarFallback>
                </Avatar>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-6 h-6 text-white" />
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) { const r = new FileReader(); r.onloadend = () => setNewPhotoURL(r.result as string); r.readAsDataURL(f); } }} />
                </label>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium px-1 text-gray-700 dark:text-gray-300">Tên hiển thị</label>
              <Input id="name" value={newDisplayName} onChange={(e) => setNewDisplayName(e.target.value)} placeholder="Nhập tên..." className="rounded-full h-12 bg-gray-50 dark:bg-black border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/50" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsProfileDialogOpen(false)} className="rounded-full border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10">Hủy</Button>
            <Button onClick={handleUpdateProfile} className="rounded-full px-8 bg-[#8B0000] dark:bg-[#D4AF37] text-white dark:text-black hover:bg-red-900 dark:hover:bg-[#b08d2b]" disabled={isUpdatingProfile}>{isUpdatingProfile ? "Đang lưu..." : "Lưu thay đổi"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog Đăng Nhập */}
      <Dialog open={isAuthDialogOpen} onOpenChange={(open) => { setIsAuthDialogOpen(open); if (!open) resetAuthForm(); }}>
        <DialogContent className="sm:max-w-[400px] rounded-[2rem] p-0 overflow-hidden border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] text-gray-900 dark:text-white shadow-2xl">
          <div className="bg-gradient-to-br from-red-50 to-white dark:from-[#8B0000] dark:to-black p-8 text-center border-b border-gray-200 dark:border-[#D4AF37]/30">
            <h2 className="text-3xl font-serif italic mb-2 text-[#8B0000] dark:text-[#D4AF37]">{authMode === "login" ? "Chào mừng trở lại" : "Tham gia triển lãm"}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{authMode === "login" ? "Đăng nhập để tiếp tục trải nghiệm" : "Tạo tài khoản để lưu trữ lịch sử"}</p>
          </div>
          <div className="p-8">
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {authMode === "register" && (
                <div className="space-y-1"><Input value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder="Họ và tên" className="rounded-xl h-12 bg-gray-50 dark:bg-black border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/50" required /></div>
              )}
              <div className="space-y-1"><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-xl h-12 bg-gray-50 dark:bg-black border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/50" required /></div>
              <div className="space-y-1"><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" className="rounded-xl h-12 bg-gray-50 dark:bg-black border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/50" required /></div>
              {authMode === "register" && (
                <div className="space-y-1"><Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Xác nhận mật khẩu" className="rounded-xl h-12 bg-gray-50 dark:bg-black border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus-visible:ring-[#8B0000]/30 dark:focus-visible:ring-[#D4AF37]/50" required /></div>
              )}
              {authError && <p className="text-red-600 dark:text-red-400 text-xs font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-200 dark:border-red-500/20">{authError}</p>}
              <Button type="submit" disabled={isAuthSubmitting} className="w-full h-12 rounded-xl text-base font-bold bg-[#8B0000] dark:bg-[#D4AF37] text-white dark:text-black hover:bg-red-900 dark:hover:bg-[#b08d2b] transition-colors">
                {isAuthSubmitting ? "Đang xử lý..." : authMode === "login" ? "Đăng nhập" : "Đăng ký"}
              </Button>
              {authMode === "login" && <button type="button" onClick={handleForgotPassword} className="w-full text-right text-xs font-medium text-[#8B0000] dark:text-[#D4AF37] hover:underline">Quên mật khẩu?</button>}
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200 dark:border-white/10" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-[#111] px-4 text-gray-500 font-bold tracking-widest">Hoặc</span></div>
            </div>
            <Button variant="outline" onClick={handleGoogleLogin} disabled={isAuthSubmitting} className="w-full h-12 rounded-xl border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 flex items-center justify-center gap-3 font-medium text-gray-700 dark:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Tiếp tục với Google
            </Button>
            <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
              {authMode === "login" ? (<>Chưa có tài khoản? <button onClick={() => { setAuthMode("register"); setAuthError(""); }} className="text-[#8B0000] dark:text-[#D4AF37] font-bold hover:underline">Đăng ký ngay</button></>) : (<>Đã có tài khoản? <button onClick={() => { setAuthMode("login"); setAuthError(""); }} className="text-[#8B0000] dark:text-[#D4AF37] font-bold hover:underline">Đăng nhập</button></>)}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const ExhibitionCard = ({ title, items, icon, delay }: { title: string, items: React.ReactNode[], icon: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -5 }}
      className="group relative p-8 md:p-10 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#8B0000]/50 dark:hover:border-[#D4AF37]/50 shadow-xl dark:shadow-none hover:shadow-[0_0_40px_rgba(139,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(139,0,0,0.2)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 dark:from-[#8B0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-8">
          <div className="p-4 bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-white/10 rounded-xl group-hover:border-[#8B0000]/50 dark:group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-500 shadow-md dark:shadow-lg">
            {icon}
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-serif">{title}</h4>
        </div>

        <div className="relative pl-6 border-l border-gray-200 dark:border-white/10 group-hover:border-[#8B0000]/30 dark:group-hover:border-[#D4AF37]/30 transition-colors duration-500 space-y-5">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] top-2 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-[#8B0000] dark:group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_10px_rgba(139,0,0,0.5)] dark:group-hover:shadow-[0_0_10px_rgba(212,175,55,1)] transition-all duration-300"></div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};