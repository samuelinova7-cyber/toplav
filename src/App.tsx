import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Instagram as InstagramIcon, 
  MapPin, 
  Clock as ClockIcon, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown, 
  Star,
  MessageCircle,
  CheckCircle2,
  PartyPopper,
  Droplets,
  Wind,
  Medal,
  Gem,
  HelpCircle,
  Sparkles,
  Volume2,
  VolumeX,
  Wifi,
  WashingMachine,
  Camera
} from 'lucide-react';
import { 
  NAV_ITEMS, 
  DIFFERENTIALS, 
  HOW_IT_WORKS, 
  TESTIMONIALS, 
  FAQ_ITEMS, 
  STRUCTURE_IMAGES,
  INSTAGRAM_IMAGES,
  WHATSAPP_LINK,
  GOOGLE_REVIEWS_LINK,
  INSTAGRAM_LINK
} from './constants';

// --- Utility Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href 
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'success' | 'navy'; 
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider";
  const variants = {
    primary: "bg-[#005696] text-white hover:bg-[#004275] shadow-md",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "border-2 border-[#005696] text-[#005696] hover:bg-blue-50",
    ghost: "text-slate-600 hover:text-[#005696] hover:bg-blue-50",
    accent: "bg-[#FFD700] text-slate-900 hover:bg-[#e6c200] shadow-md",
    success: "bg-[#22c55e] text-white hover:bg-[#1eb054] shadow-md",
    navy: "bg-[#005696] text-white hover:bg-[#004275] shadow-md"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

const VideoPlayer = ({ src, className = "", overlayClassName = "", autoPlay = true, loop = true, playsInline = true }: { src: string, className?: string, overlayClassName?: string, autoPlay?: boolean, loop?: boolean, playsInline?: boolean }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={isMuted}
        loop={loop}
        playsInline={playsInline}
        className={className}
      />
      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all shadow-lg ${overlayClassName}`}
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </>
  );
};

// --- Section Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'}`}>
      {/* Marquee Top Bar */}
      <div className="bg-[#00B7F1] text-white text-sm py-2 overflow-hidden flex items-center">
        <div className="animate-infinite-scroll flex whitespace-nowrap items-center">
          {[...Array(2)].map((_, copyIdx) => (
            <div key={copyIdx} className="flex items-center gap-8 px-4">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="flex items-center gap-2"><ClockIcon size={14} /> Aberto das 06:00 às 22:00</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> Caxangá Trader Center</span>
                  <span className="flex items-center gap-2"><Wind size={14} /> Secagem em 45 min</span>
                  <span className="flex items-center gap-2"><Droplets size={14} /> Produtos Comfort Inclusos</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#005696] shrink-0">
            <video 
              src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-1ee8bc91-2ef9-4ec0-b4b0-fce514e394cc%20(1).mp4"
              className="w-full h-full object-cover"
              autoPlay loop muted playsInline
            />
          </div>
          <span className="text-3xl font-brand text-[#005696] font-bold">TOP<span className="text-[#00B7F1]">LAV</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="font-medium text-slate-700 transition-colors hover:text-[#00B7F1]"
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" href={WHATSAPP_LINK} className="rounded-full">
            <MessageCircle size={18} /> Chamar no WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-lg font-medium text-slate-700 border-b border-slate-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" className="w-full rounded-full" href={WHATSAPP_LINK}>
            Chamar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="max-w-xl z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B7F1]/10 text-[#005696] text-sm font-bold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00B7F1]"></span>
              O alívio de um cesto vazio
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Liberdade é chegar no descanso <span className="text-[#00B7F1]">sem lembrar do varal.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Lavanderia de Autoatendimento em Recife. Lave ou seque suas roupas com praticidade, autonomia e produtos de alta qualidade inclusos. A sua roupa limpa e seca em menos de 1 hora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30" href={WHATSAPP_LINK}>
                Fale Conosco pelo WhatsApp <ChevronRight size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300" href="#contact">
                Ver Localização
              </Button>
            </div>
          </div>

          {/* Right Media Content */}
          <div className="relative z-20 h-full w-full flex items-center justify-center">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full h-full min-h-[500px] lg:min-h-[600px] bg-slate-100 flex">
              <VideoPlayer
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-1ee8bc91-2ef9-4ec0-b4b0-fce514e394cc.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                overlayClassName="bottom-32 right-6"
              />
              
              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#005696] flex items-center justify-center text-white font-brand text-xl shrink-0 font-bold">
                  TL
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">TopLav</h3>
                  <p className="text-sm text-slate-600">Tudo Limpo: Seco e pronto para o armário.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00B7F1]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#005696]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Structure = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Content */}
          <div className="order-1 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 z-20">
              <video 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQNuY4Ret_yvGbt7G6vtzf0HYc7WaJ8ucVaZRScx7zk2tM6ZrY9i2IJ59B3_XrANMS0rwdMkN_a0Y3emCN7HWQyeQuGThy74Jy9W1rs.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#005696]/20 to-[#00B7F1]/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B7F1]/10 text-[#005696] text-sm font-bold mb-6 uppercase tracking-wider">
              <Wifi size={16} className="text-[#00B7F1]" />
              Ambiente Climatizado
            </div>
            
            <h2 className="text-4xl md:text-5xl font-brand text-[#005696] mb-6 leading-tight">
              Estrutura <span className="text-[#00B7F1]">Moderna e Confortável</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nossa lavanderia foi projetada para oferecer a melhor experiência enquanto você cuida das suas roupas. Um ambiente seguro, limpo e totalmente equipado para o seu conforto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8FAFC] rounded-lg text-[#00B7F1] shrink-0">
                  <Wifi size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Wi-Fi Grátis</h4>
                  <p className="text-sm text-slate-600">Conecte-se enquanto espera.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8FAFC] rounded-lg text-[#00B7F1] shrink-0">
                  <Wind size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Ar Condicionado</h4>
                  <p className="text-sm text-slate-600">Ambiente sempre fresquinho.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8FAFC] rounded-lg text-[#00B7F1] shrink-0">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Segurança 24h</h4>
                  <p className="text-sm text-slate-600">Monitoramento contínuo.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8FAFC] rounded-lg text-[#00B7F1] shrink-0">
                  <WashingMachine size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Máquinas Novas</h4>
                  <p className="text-sm text-slate-600">Equipamentos de última geração.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-brand text-[#005696] mb-4 tracking-tight">Nossos Diferenciais</h2>
        <p className="text-slate-500 text-xl">Tecnologia e praticidade no coração da Caxangá.</p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {DIFFERENTIALS.map((item, idx) => (
          <div 
            key={idx} 
            className="p-10 rounded-[20px] bg-[#005696] text-white flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="mb-6 text-[#00B7F1]">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 leading-snug">{item.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-brand text-[#005696] mb-4">Como Funciona</h2>
        <p className="text-slate-500 text-lg mb-16">Quatro passos simples para você ganhar até 3 horas no seu dia.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
              <div className="absolute -top-6 w-12 h-12 bg-[#00B7F1] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#F8FAFC]">
                {item.step}
              </div>
              <div className="mt-6 mb-4 text-[#005696]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#005696] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PremiumProducts = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#005696]/10 text-[#005696] text-sm font-bold mb-6 uppercase tracking-wider">
              <Sparkles size={16} className="text-[#00B7F1]" />
              Qualidade Garantida
            </div>
            
            <h2 className="text-4xl md:text-5xl font-brand text-[#005696] mb-6 leading-tight">
              Produtos Premium <span className="text-[#00B7F1]">Inclusos</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na TopLav, você não precisa se preocupar em trazer sabão ou amaciante. Nossas máquinas já dosam automaticamente a quantidade ideal dos melhores produtos do mercado para garantir roupas limpas, macias e muito cheirosas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#005696] shadow-sm shrink-0">
                  <Droplets size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Omo Lavagem Perfeita</h3>
                  <p className="text-slate-600">Poder de limpeza imbatível que remove as manchas mais difíceis sem danificar os tecidos.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00B7F1] shadow-sm shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Comfort Concentrado</h3>
                  <p className="text-slate-600">Maciez prolongada e aquele cheirinho de roupa limpa que dura por muito mais tempo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 z-20">
              <video 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQMBCMW5czVs7nsNRcQJo0cKe0V2t7i3qEEQPj3eKYLu_-10TKPTYLpZvCKkFlx_gslBakDnMdaMMahYaDwwNtFR.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00B7F1]/20 to-[#005696]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "TopClassic",
      description: "10 Ciclos. Ideal para quem lava roupas regularmente.",
      price: "139",
      cents: "00",
      unit: "pacote",
      icon: <Droplets size={44} className="text-[#005696]" />,
      buttonText: "Adquirir TopClassic",
      variant: "outline" as const,
      cyclePrice: "13,90"
    },
    {
      title: "TopPlus",
      description: "15 Ciclos. Mais economia para a família toda.",
      price: "203",
      cents: "00",
      unit: "pacote",
      icon: <Medal size={44} className="text-[#005696]" />,
      buttonText: "Adquirir TopPlus",
      variant: "primary" as const,
      popular: true,
      cyclePrice: "13,53"
    },
    {
      title: "TopSuper",
      description: "20 Ciclos. O melhor custo-benefício para alto volume.",
      price: "260",
      cents: "00",
      unit: "pacote",
      icon: <Gem size={44} className="text-[#005696]" />,
      buttonText: "Adquirir TopSuper",
      variant: "outline" as const,
      cyclePrice: "13,00"
    }
  ];

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-brand text-[#005696] mb-4">Nossos Planos</h2>
          <p className="text-slate-500 text-xl">Escolha o pacote ideal para sua necessidade e economize ainda mais.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-white rounded-[30px] p-8 shadow-xl flex flex-col items-center text-center border-2 ${plan.popular ? 'border-[#00B7F1] scale-105 z-10' : 'border-slate-100'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B7F1] text-white px-6 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-md whitespace-nowrap">
                  <Star size={14} className="fill-white" /> Mais popular
                </div>
              )}
              
              <div className="mb-6 mt-4 text-[#00B7F1]">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#005696] mb-2">{plan.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 h-10">
                {plan.description}
              </p>

              <div className="flex items-start text-[#005696] mb-2">
                <span className="text-lg font-bold mt-2 mr-1">R$</span>
                <span className="text-6xl font-bold leading-none">{plan.price}</span>
                <div className="flex flex-col items-start ml-1">
                  <span className="text-2xl font-bold border-b-2 border-[#005696] leading-none mb-1">,{plan.cents}</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-8 font-medium">R$ {plan.cyclePrice} por ciclo</p>

              <Button 
                variant={plan.variant} 
                className="w-full py-4 text-base mt-auto"
                href={WHATSAPP_LINK}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Single Cycle Info */}
        <div className="mt-16 bg-[#F8FAFC] rounded-2xl p-8 text-center border border-slate-200 max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold text-[#005696] mb-2">Lavagem ou Secagem Avulsa</h4>
          <p className="text-slate-600 mb-4">Precisa de apenas um ciclo? Sem problemas!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[#005696]">R$ 14,90</span>
              <span className="text-slate-500">/ ciclo</span>
            </div>
            <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="bg-[#FFD700] text-slate-900 px-3 py-1 rounded-md text-sm font-bold">PROMO</span>
              <span className="text-xl font-bold text-[#005696]">R$ 13,90</span>
              <span className="text-slate-500 text-sm">Terças e Quartas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#00B7F1] font-brand text-2xl mb-2">Sobre Nós</h3>
            <h2 className="text-4xl md:text-5xl font-heading text-[#005696] mb-6 font-bold">A TopLav Lavanderia</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Somos uma marca própria, nascida com o propósito de trazer mais praticidade e economia para o seu dia a dia. Há 1 ano no mercado, nos orgulhamos de oferecer um serviço de autoatendimento de excelência na região da Caxangá.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Contamos com uma unidade exclusiva, pensada para garantir o melhor atendimento e conforto enquanto você cuida das suas roupas. Aqui, você tem total autonomia: sem delivery, sem complicação. Você traz, você lava, você seca, e sai com tudo pronto em menos de 1 hora.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-bold text-[#005696] mb-2">1 Ano</div>
                <div className="text-slate-500 font-medium">de experiência e dedicação</div>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-bold text-[#005696] mb-2">100%</div>
                <div className="text-slate-500 font-medium">Marca própria e independente</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-bounce-custom">
            <div 
              className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
              style={{ WebkitBoxReflect: 'below 4px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.3))' }}
            >
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20222946.png" 
                alt="Interior da Lavanderia" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#00B7F1]/10 rounded-full flex items-center justify-center text-[#00B7F1]">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-slate-800">Unidade Exclusiva</h4>
              </div>
              <p className="text-slate-500 text-sm">Localizada estrategicamente na Madalena, Recife, para melhor atendê-lo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfluencerVideo = ({ src, className }: { src: string, className?: string }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 ${className || ''}`}>
      <video 
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay loop muted playsInline
      />
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-10"
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

const Influencers = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="bg-[#00B7F1] text-white py-4 transform -rotate-2 scale-110 mb-20 shadow-lg">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-infinite-scroll flex gap-8 items-center w-max">
            {[...Array(10)].map((_, i) => (
              <span key={`first-${i}`} className="text-2xl md:text-3xl font-brand font-bold uppercase tracking-wider">
                A Melhor Lavanderia de Recife •
              </span>
            ))}
            {[...Array(10)].map((_, i) => (
              <span key={`second-${i}`} className="text-2xl md:text-3xl font-brand font-bold uppercase tracking-wider">
                A Melhor Lavanderia de Recife •
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-brand text-[#005696] font-bold mb-4">
            Quem conhece, <span className="text-[#00B7F1]">recomenda!</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Veja o que os influenciadores estão falando sobre a nossa estrutura, praticidade e qualidade de lavagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center items-center">
          <InfluencerVideo 
            src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQPSrx5UQyxduEIDaHKSdgAok-8yTD8X_DGNtGJxTpaQbRWefstzPs-DnG2_dIVNoPCl_omWcmZraEh5OBudO3GkY23V4t597uEa6q4.mp4"
          />
          
          <InfluencerVideo 
            src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQORADcpOj_HpXD27jvyJjJdgk26bOavfQMZzUbcZDQpusmMgEbXdiexy1tWejchC-ZM5V-0hvmnFLANHmgO85nYqtaJde0TJh1PfQ8.mp4"
            className="md:mt-12"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(TESTIMONIALS.length / (window.innerWidth < 768 ? 1 : 3)));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(TESTIMONIALS.length / (window.innerWidth < 768 ? 1 : 3)) - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-brand text-[#005696] mb-4">O que nossos clientes dizem</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Gostou do nosso atendimento? Deixe seu comentário de 5 estrelas, conte um pouco sobre a sua experiência e compartilhe uma foto das suas roupas dobradas, limpas e cheirosas!
        </p>
        <Button 
          variant="primary" 
          className="rounded-xl px-10 py-4 mb-20"
          href={GOOGLE_REVIEWS_LINK}
        >
          Deixe sua Avaliação
        </Button>
      </div>

      <div className="container mx-auto px-4 relative max-w-7xl">
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-10 z-10 p-3 bg-white rounded-full shadow-lg text-slate-400 hover:text-blue-500 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-10 z-10 p-3 bg-white rounded-full shadow-lg text-slate-400 hover:text-blue-500 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(TESTIMONIALS.length / (window.innerWidth < 768 ? 1 : 3)) }).map((_, pageIndex) => (
              <div key={pageIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-4">
                {TESTIMONIALS.slice(pageIndex * (window.innerWidth < 768 ? 1 : 3), (pageIndex + 1) * (window.innerWidth < 768 ? 1 : 3)).map((item) => (
                  <div key={item.id} className="bg-white p-8 rounded-[20px] shadow-xl border border-slate-100 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#00B7F1]/10 rounded-full flex items-center justify-center text-[#00B7F1] font-bold text-xl">
                        {item.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{item.name}</div>
                        {item.role && <div className="text-xs text-slate-500">{item.role}</div>}
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic flex-grow text-sm leading-relaxed">"{item.comment}"</p>
                    {item.time && <div className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-50">{item.time}</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 mb-4">
            <HelpCircle size={30} />
          </div>
          <h2 className="text-4xl md:text-6xl font-brand text-[#005696] mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-500 text-xl font-medium">Tire suas dúvidas sobre nossos serviços de lavanderia.</p>
        </div>
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <button 
                className="w-full py-6 flex items-center justify-between text-left group transition-all" 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-blue-500' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-blue-500' : ''}`} size={20} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-4 uppercase tracking-wider">
              <InstagramIcon size={16} />
              Nosso Instagram
            </div>
            <h2 className="text-4xl md:text-5xl font-brand text-[#005696] font-bold">
              Acompanhe a <span className="text-[#00B7F1]">TopLav</span>
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-2xl">
              Siga nosso perfil para ficar por dentro das novidades, dicas de lavagem e promoções exclusivas.
            </p>
          </div>
          <Button 
            variant="primary" 
            href={INSTAGRAM_LINK}
            className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 border-none text-white shadow-lg shadow-pink-500/30"
          >
            <InstagramIcon size={20} /> Seguir @toplav.lavanderia
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden pb-8">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-4 pr-4">
            {INSTAGRAM_IMAGES.map((img, idx) => (
              <a 
                key={`set1-${idx}`} 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={img} 
                  alt={`Instagram post ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full">
                    <InstagramIcon size={24} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex gap-4 pr-4">
            {INSTAGRAM_IMAGES.map((img, idx) => (
              <a 
                key={`set2-${idx}`} 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={img} 
                  alt={`Instagram post ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full">
                    <InstagramIcon size={24} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
        <div>
          <h3 className="text-[#00B7F1] font-brand text-2xl mb-2">Visite-nos</h3>
          <h2 className="text-4xl md:text-5xl font-heading text-[#005696] mb-8 font-bold">Localização & Contato</h2>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#00B7F1] shadow-sm"><MapPin size={24} /></div>
              <div><h4 className="font-bold text-slate-800">Endereço</h4><p className="text-slate-600">Av. Caxangá, 205 - Loja 02 - Madalena, Recife - PE, 50720-000, Brasil</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#00B7F1] shadow-sm"><ClockIcon size={24} /></div>
              <div><h4 className="font-bold text-slate-800">Horário</h4><p className="text-slate-600">Aberto todos os dias das 06:00 às 22:00</p></div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" className="rounded-full px-8" href={WHATSAPP_LINK}>
              <MessageCircle size={20} /> Falar no WhatsApp
            </Button>
          </div>
        </div>
        <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl bg-slate-200 border-4 border-white">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.404746618588!2d-34.9080645!3d-8.0601004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d0b2b8b9b9%3A0x8b8b8b8b8b8b8b8b!2sAv.%20Caxang%C3%A1%2C%20205%20-%20Madalena%2C%20Recife%20-%20PE%2C%2050720-000!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#005696] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-start max-w-7xl">
        <div className="max-w-xs mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shrink-0">
              <video 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-1ee8bc91-2ef9-4ec0-b4b0-fce514e394cc%20(1).mp4"
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              />
            </div>
            <h2 className="text-3xl font-brand text-white font-bold">TOP<span className="text-[#00B7F1]">LAV</span></h2>
          </div>
          <p className="text-blue-100">Lavanderia de autoatendimento. Praticidade e economia para o seu dia a dia.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-white">Navegação</h4>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}><a href={item.href} className="text-blue-200 hover:text-white transition-colors">{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-white">Redes Sociais</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#00B7F1] transition-colors"><InstagramIcon size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-10 border-t border-white/20 text-center text-blue-200 text-sm">
        <p>&copy; {new Date().getFullYear()} TopLav Lavanderia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce-custom">
      <MessageCircle size={32} />
    </a>
  );
};

export default function App() {
  return (
    <div className="antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <Structure />
      <HowItWorks />
      <PremiumProducts />
      <Plans />
      <Differentials />
      <AboutUs />
      <Influencers />
      <Testimonials />
      <FAQ />
      <InstagramFeed />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
