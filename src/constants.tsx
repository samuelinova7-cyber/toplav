import React from 'react';
import { Droplets, Wind, Sparkles, Heart, ShieldCheck, Clock, CheckCircle2, CreditCard, WashingMachine } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/message/XFNILP4RWUMTO1";
export const GOOGLE_REVIEWS_LINK = "https://g.page/r/CZnodaoKQ0bnEAI/review";
export const INSTAGRAM_LINK = "https://www.instagram.com/toplav.lavanderia?igsh=MXh5Y21qNDk1NnV0ag%3D%3D&utm_source=qr";

export const NAV_ITEMS = [
  { href: "#home", label: "Início" },
  { href: "#how-it-works", label: "Como Funciona" },
  { href: "#plans", label: "Preços" },
  { href: "#differentials", label: "Diferenciais" },
  { href: "#about", label: "Sobre Nós" },
  { href: "#testimonials", label: "Avaliações" },
  { href: "#contact", label: "Onde Estamos" }
];

export const DIFFERENTIALS = [
  {
    icon: <WashingMachine size={32} />,
    title: "Autoatendimento",
    description: "Você mesmo cuida das suas roupas com total autonomia e praticidade."
  },
  {
    icon: <Clock size={32} />,
    title: "Ciclo Rápido",
    description: "Secagem em aproximadamente 45 minutos. Resolvemos em minutos o que demoraria dias."
  },
  {
    icon: <Droplets size={32} />,
    title: "Produtos Inclusos",
    description: "Utilização de produtos de alta qualidade (Sabão e Amaciante Comfort) já dosados."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Economia",
    description: "Pacotes promocionais para uso recorrente. Mais economia para quem ama praticidade."
  }
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Escolha a máquina",
    description: "Selecione uma lavadora ou secadora disponível em nossa loja.",
    icon: <WashingMachine size={24} />
  },
  {
    step: "2",
    title: "Efetue o pagamento",
    description: "Pague facilmente via totem ou aplicativo com total segurança.",
    icon: <CreditCard size={24} />
  },
  {
    step: "3",
    title: "Adicione a roupa",
    description: "Coloque suas roupas. Sabão e amaciante de alta qualidade já são adicionados automaticamente.",
    icon: <Droplets size={24} />
  },
  {
    step: "4",
    title: "Aguarde e pronto!",
    description: "Aguarde o ciclo (aprox. 45 min) no nosso ambiente climatizado e leve suas roupas limpas e secas.",
    icon: <CheckCircle2 size={24} />
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "SAULO M",
    avatar: "S",
    role: "Local Guide · 183 avaliações",
    time: "4 meses atrás",
    comment: "Ambiente limpo, organizado, climatizado, bem estruturado. Equipamento de altíssima qualidade. São duas máquinas pra lavar e duas pra secar. Ao chegar tinha pessoas usando e as mesmas elogiaram bastante a qualidade e a organização também. Falaram que já são clientes e que é tudo muito bom. Que Deus abençoe e prospere sempre mais."
  },
  {
    id: 2,
    name: "Aryane Alves",
    avatar: "A",
    role: "Local Guide · 53 avaliações",
    time: "3 semanas atrás",
    comment: "Ótima lavanderia, super indico! Preço justo, lugar higienizado, climatizado e super confortável."
  },
  {
    id: 3,
    name: "Nayra Costa",
    avatar: "N",
    role: "8 avaliações",
    time: "2 meses atrás",
    comment: "Adorei! As roupas saíram limpas e cheirosas e com a secagem ficaram perfeitas. Além de ter me dado um suporte por ter sido minha primeira vez. Voltaria."
  },
  {
    id: 4,
    name: "gaudencio cabral",
    avatar: "G",
    role: "Local Guide · 36 avaliações",
    time: "2 meses atrás",
    comment: "Melhor opção de lavanderia da região, com um excelente som ambiente."
  },
  {
    id: 5,
    name: "Mércia Ribeiro",
    avatar: "M",
    role: "1 avaliação",
    time: "5 meses atrás",
    comment: "Local bem limpo, climatizado, produtos de qualidade, Omo e amaciante Confort. Voltarei sempre..."
  },
  {
    id: 6,
    name: "Viih Freitas",
    avatar: "V",
    role: "3 avaliações",
    time: "5 meses atrás",
    comment: "Ambiente maravilhoso, minhas roupas sairam limpas e cheirosas e as secadoras secam muito bem."
  },
  {
    id: 7,
    name: "Caio Farias",
    avatar: "C",
    role: "1 avaliação",
    time: "10 meses atrás",
    comment: "Levei minhas roupas na TOP LAV Lavanderia e fiquei extremamente satisfeito com o resultado! Tudo voltou impecável: super limpo, bem cuidado, sequinho, quentinho e com um perfume delicioso que dura dias ✨👏. O atendimento foi incrível..."
  },
  {
    id: 8,
    name: "Eliade Ferreira",
    avatar: "E",
    role: "2 avaliações",
    time: "7 meses atrás",
    comment: "Preço muito justo, máquinas novas e sempre funcionando e não precisa usar sabão líquido ou amaciante adicional, já tem tudo lá, só como ar pra lavar e pronto!"
  },
  {
    id: 9,
    name: "Manasses Ribeiro",
    avatar: "M",
    role: "3 avaliações",
    time: "10 meses atrás",
    comment: "Estava de passagem por Recife e encontrei a solução perfeita para minhas roupas. O serviço é super rápido, prático, eficiente e, o melhor de tudo, deixa as roupas limpas e perfumadas. Eles utilizam Sabão OMO e amaciante confort. Parabéns pelo empreendimento! Super recomendo"
  },
  {
    id: 10,
    name: "studio Arqmob",
    avatar: "S",
    role: "1 avaliação",
    time: "10 meses atrás",
    comment: "Lavei minhas roupas na TOP LAV LAVANDERIA e simplesmente amei o resultado! Tudo voltou impecável, super limpo e com um cheiro maravilhoso 😍. O atendimento foi excelente e o serviço foi rápido e de qualidade. Com certeza virei cliente fiel! Recomendo de olhos fechados! 👕✨👏"
  },
  {
    id: 11,
    name: "Hadassa Mega Hair",
    avatar: "H",
    role: "1 avaliação",
    time: "6 meses atrás",
    comment: "Maravilha de lavanderia lava muito bem ! Roupas limpas e cheiosas ambiente agradável e seguro"
  },
  {
    id: 12,
    name: "Maria Lucia Correia Ribeiro Melo",
    avatar: "M",
    role: "1 avaliação",
    time: "11 meses atrás",
    comment: "Lavei minhas roupas e sequei, produtos muito bom, sabão omo e amaciante confort. Roupas limpas e cheirosa. Ambiente climatizado, galeria com estacionamento.."
  },
  {
    id: 13,
    name: "perla alves",
    avatar: "P",
    role: "1 avaliação",
    time: "6 meses atrás",
    comment: "Super limpinho e prático para fazer a lavagem de roupa. O Erick é super atencioso."
  },
  {
    id: 14,
    name: "Eric Willian",
    avatar: "E",
    role: "1 avaliação",
    time: "11 meses atrás",
    comment: "Local muito bom, máquinas modernas, local climatizado, muito aconchegante… as roupas saem limpas e cheirosas…"
  },
  {
    id: 15,
    name: "gustavo rodrigues",
    avatar: "G",
    role: "3 avaliações",
    time: "11 meses atrás",
    comment: "Lavagem no padrão, gostei de verdade, minha roupa está super cheirosa viu."
  },
  {
    id: 16,
    name: "Edileuza Melo",
    avatar: "E",
    role: "1 avaliação",
    time: "11 meses atrás",
    comment: "Lavagem perfeita, secagem muito boa, local limpo e climatizado 👏🏻👏🏻👏🏻👏🏻"
  },
  {
    id: 17,
    name: "Lucas Mariano",
    avatar: "L",
    role: "10 avaliações",
    time: "2 semanas atrás",
    comment: "Gostei muito da experiência. O ambiente é limpo e organizado, o uso é prático e as roupas ficaram bem limpas e cheirosas. Também tive um bom suporte no local, o que ajudou bastante. Com certeza voltarei mais vezes."
  },
  {
    id: 18,
    name: "Carlos Sánchez",
    avatar: "C",
    role: "Local Guide · 76 avaliações",
    time: "3 semanas atrás",
    comment: "As roupas têm um cheiro agradável e o preço é bom. Mas o ar condicionado está muito frio, 18°C é muito pouco. Uma dica: o ideal é que a temperatura fique entre 23 e 25°C."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Preciso levar sabão e amaciante?",
    answer: "Não! Nossas máquinas já dosam automaticamente sabão e amaciante Comfort de alta qualidade em todas as lavagens."
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Abrimos todos os dias das 06:00 às 21:00. Você tem flexibilidade para lavar suas roupas no melhor horário para sua rotina."
  },
  {
    question: "Vocês fazem delivery ou busca de roupas?",
    answer: "Não trabalhamos com delivery. Somos uma lavanderia de autoatendimento, onde você mesmo traz e cuida das suas roupas com total praticidade e economia."
  },
  {
    question: "Quantas unidades a TopLav possui?",
    answer: "Atualmente possuímos apenas uma unidade, localizada na Av. Caxangá, 205 - Loja 02 - Madalena, Recife."
  },
  {
    question: "A TopLav é uma franquia?",
    answer: "Não, somos uma marca própria. Estamos há 1 ano no mercado, focados em oferecer o melhor serviço de autoatendimento para a nossa região."
  },
  {
    question: "Tem limite de roupa por máquina?",
    answer: "Sim, o limite é de 1 cesto-medida por máquina/ciclo para garantir a qualidade da lavagem e secagem."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos pagamentos via PIX, cartão de crédito e débito diretamente no totem de autoatendimento da loja. Tudo de forma rápida e segura."
  },
  {
    question: "Quanto tempo demora para lavar e secar?",
    answer: "O ciclo de lavagem dura cerca de 35 minutos e o de secagem cerca de 45 minutos. Em pouco mais de 1 hora, suas roupas estão limpas e secas!"
  },
  {
    question: "Posso lavar edredons e cobertores?",
    answer: "Sim! Nossas máquinas comportam edredons de solteiro e casal (tamanho padrão). Edredons King ou Queen muito volumosos podem não caber adequadamente e ultrapassar o limite do cesto."
  },
  {
    question: "O que não posso lavar nas máquinas?",
    answer: "Por questões de higiene e segurança, não é permitido lavar roupas e camas de pets, tapetes muito sujos, sapatos, panos de chão ou peças com graxa/produtos químicos inflamáveis."
  }
];

export const STRUCTURE_IMAGES = [
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800"
];

export const INSTAGRAM_IMAGES = [
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215601.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215546.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215536.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215528.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215516.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215458.png",
  "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-12%20215445.png"
];
