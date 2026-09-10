import { useEffect, useState } from 'react'
import StatCard from '../ui/StatCard'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  CircleX,
  FileSpreadsheet,
  FileText,
  BookOpen,
  Lightbulb,
  MessageCircle,
  PieChart,
  PiggyBank,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react'

const stats = [
  { value: 'S/ 25', label: 'Acceso completo', sublabel: 'Pago único', variant: 'emerald' },
  { value: '100%', label: 'Seguro y Privado', sublabel: 'Cifrado bancario', variant: 'primary' },
  { value: '24/7', label: 'Siempre Disponible', sublabel: 'Nube en tiempo real', variant: 'emerald' },
]

const benefits = [
  {
    title: 'Descubre los "gastos hormiga" que drenan tu dinero',
    description:
      'Identifica al instante a dónde se va cada centavo. Registra gastos diarios por categoría con notas y obtén la radiografía exacta de tus fugas.',
    badge: 'Control Diario',
    badgeColor: 'bg-rose-100/90 text-rose-800 border-rose-300/80',
    icon: Zap,
    iconColor: 'text-rose-600 bg-white border border-rose-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-rose-100/85 via-rose-50/70 to-rose-50/50 border-rose-200 hover:border-rose-300 hover:shadow-rose-500/10',
  },
  {
    title: 'Multiplica tu capacidad de ahorro cada mes',
    description:
      'Aparta excedentes en tu Pool de Ahorro global. Protege tu liquidez y traslada fondos a tus metas sin alterar tu balance operativo.',
    badge: 'Ahorro Real',
    badgeColor: 'bg-emerald-100/90 text-emerald-800 border-emerald-300/80',
    icon: PiggyBank,
    iconColor: 'text-emerald-600 bg-white border border-emerald-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-emerald-100/85 via-emerald-50/70 to-emerald-50/50 border-emerald-200 hover:border-emerald-300 hover:shadow-emerald-500/10',
  },
  {
    title: 'Presupuestos inteligentes que evitan sobregiros',
    description:
      'Establece límites mensuales por categoría, sigue barras de consumo visuales y registra gastos en 1 clic para no exceder tus topes.',
    badge: 'Presupuestos',
    badgeColor: 'bg-amber-100/90 text-amber-800 border-amber-300/80',
    icon: Wallet,
    iconColor: 'text-amber-600 bg-white border border-amber-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-amber-100/85 via-amber-50/70 to-amber-50/50 border-amber-200 hover:border-amber-300 hover:shadow-amber-500/10',
  },
  {
    title: 'Entiende tus finanzas en 3 segundos, no en 3 horas',
    description:
      'Panel central con 5 métricas clave en tiempo real: Balance disponible, Balance total, Ingresos, Gastos y Ahorro acumulado con filtros por periodo.',
    badge: 'Visual & Rápido',
    badgeColor: 'bg-indigo-100/90 text-indigo-800 border-indigo-300/80',
    icon: BarChart3,
    iconColor: 'text-indigo-600 bg-white border border-indigo-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-indigo-100/85 via-indigo-50/70 to-indigo-50/50 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-500/10',
  },
  {
    title: 'Metas con seguimiento de avance en vivo',
    description:
      'Fija objetivos para viajes, compras o emergencias. Asigna dinero del fondo de ahorros de forma libre o directa con fecha estimada.',
    badge: 'Objetivos',
    badgeColor: 'bg-violet-100/90 text-violet-800 border-violet-300/80',
    icon: Target,
    iconColor: 'text-violet-600 bg-white border border-violet-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-violet-100/85 via-violet-50/70 to-violet-50/50 border-violet-200 hover:border-violet-300 hover:shadow-violet-500/10',
  },
  {
    title: 'Control de gastos fijos y cuentas atrasadas',
    description:
      'Gestiona suscripciones y pagos mensuales con día de corte, abonos parciales y alertas automáticas de cobros pendientes en el dashboard.',
    badge: 'Recurrentes',
    badgeColor: 'bg-purple-100/90 text-purple-800 border-purple-300/80',
    icon: RefreshCw,
    iconColor: 'text-purple-600 bg-white border border-purple-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-purple-100/85 via-purple-50/70 to-purple-50/50 border-purple-200 hover:border-purple-300 hover:shadow-purple-500/10',
  },
  {
    title: 'Historial de 6 meses y reportes con gráficos',
    description:
      'Gráficos de dona interactivos con distribución porcentual de gastos e ingresos, comparativa semestral y tablas exportables.',
    badge: 'Reportes',
    badgeColor: 'bg-sky-100/90 text-sky-800 border-sky-300/80',
    icon: PieChart,
    iconColor: 'text-sky-600 bg-white border border-sky-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-sky-100/85 via-sky-50/70 to-sky-50/50 border-sky-200 hover:border-sky-300 hover:shadow-sky-500/10',
  },
  {
    title: 'Score de salud financiera y consejos por impacto',
    description:
      'Diagnóstico automatizado de 0 a 100 puntos con recomendaciones prácticas clasificadas en Alerta, Ahorro e Inversión con caché de 24h.',
    badge: 'Health Score',
    badgeColor: 'bg-teal-100/90 text-teal-800 border-teal-300/80',
    icon: Activity,
    iconColor: 'text-teal-600 bg-white border border-teal-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-teal-100/85 via-teal-50/70 to-teal-50/50 border-teal-200 hover:border-teal-300 hover:shadow-teal-500/10',
  },
  {
    title: 'Disponible en tu celular, tablet y computadora',
    description:
      'App instalable (PWA) con navegación táctil nativa, soporte completo para Modo Oscuro/Claro y visualización compacta opcional.',
    badge: 'Multi-dispositivo',
    badgeColor: 'bg-slate-200 text-slate-800 border-slate-300',
    icon: Smartphone,
    iconColor: 'text-slate-700 bg-white border border-slate-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-slate-200/85 via-slate-100/70 to-slate-100/50 border-slate-300 hover:border-slate-400 hover:shadow-slate-500/10',
  },
  {
    title: 'Asistente financiero con Inteligencia Artificial',
    description:
      'Chatea con un asesor inteligente conectado en tiempo real a tus transacciones y balances reales para guiarte en cada decisión financiera.',
    badge: 'Potenciado por IA',
    badgeColor: 'bg-indigo-100/90 text-indigo-800 border-indigo-300/80',
    icon: Bot,
    iconColor: 'text-indigo-600 bg-white border border-indigo-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-blue-100/85 via-indigo-50/70 to-indigo-50/50 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-500/10',
  },
]

const comparisonRows = [
  { feature: 'Acceso desde celular, tablet y PC (PWA instalable)', finanzasTrack: true, excel: true, notebook: false },
  { feature: 'Dashboard en vivo con 5 métricas de balance automático', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Control de presupuestos y gasto rápido en 1 clic', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Metas de ahorro con pool global y fechas estimadas', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Gastos e ingresos fijos con alertas de corte mensual', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Asistente financiero con IA conectado a tus datos en vivo', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Score de salud financiera (0-100) y consejos prácticos', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Reportes semestrales y gráficos de dona interactivos', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Interfaz moderna con soporte para Modo Oscuro y Claro', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Registro ágil en menos de 5 segundos sin fórmulas', finanzasTrack: true, excel: false, notebook: true },
  { feature: 'Respaldo automático en la nube 24/7 y máxima privacidad', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Actualizaciones continuas de por vida incluidas', finanzasTrack: true, excel: false, notebook: false },
]

const demoVideoUrl = 'https://drive.google.com/file/d/1lZOXHgS1GUbnDNI0qeovX4ogqAC_FRg6/preview'

const appSections = [
  {
    id: 'dashboard',
    tag: 'Dashboard Completo',
    tagColor: 'bg-[#e8f9f8] text-[#0f766e] border border-teal-200/80',
    title: 'Vista General de tu Mes y Balance en Vivo',
    description:
      'Visualiza tus 5 métricas clave en tiempo real: Balance disponible, Balance total, Ingresos, Gastos y Ahorro acumulado. Gráficos interactivos de evolución a 6 meses y resumen mensual de categorías.',
    bullets: [
      '5 métricas en tiempo real',
      'Gráficos de 6 meses (Recharts)',
      'Desglose de gastos por categoría',
      'Movimientos recientes y alertas',
    ],
    bulletDot: 'bg-[#10b981]',
    bulletColor: 'text-[#10b981]',
    imageLeft: false,
    imageSrc: '/capturas/1-dashboard.gif',
    previewBadge: 'Panel Principal • 5 Métricas',
    previewGradient: 'from-teal-500/10 via-slate-900/5 to-indigo-500/10',
  },
  {
    id: 'ingresos',
    tag: 'Gestión de Ingresos',
    tagColor: 'bg-[#dcfce7] text-[#15803d] border border-emerald-200/80',
    title: 'Registro Ágil y Control de Fuentes de Entrada',
    description:
      'Registra todas tus fuentes de ingresos (Trabajo, Negocio, Comisiones, Inversiones, Regalos, Reembolsos) con categorías personalizadas, notas descriptivas y totales mensuales automáticos.',
    bullets: [
      'Múltiples categorías oficiales',
      'Totales mensuales automáticos',
      'Historial detallado y filtros',
      'Edición y registro en 5 segundos',
    ],
    bulletDot: 'bg-[#22c55e]',
    bulletColor: 'text-[#22c55e]',
    imageLeft: true,
    imageSrc: '/capturas/2-ingresos.gif',
    previewBadge: 'Entradas • Categorías Reales',
    previewGradient: 'from-emerald-500/10 via-slate-900/5 to-teal-500/10',
  },
  {
    id: 'gastos',
    tag: 'Control de Gastos',
    tagColor: 'bg-[#fee2e2] text-[#dc2626] border border-rose-200/80',
    title: 'Monitoreo de Salidas y Eliminación de Gastos Fuga',
    description:
      'Controla cada egreso clasificado en Hogar, Alimentación, Transporte, Salud, Educación, Entretenimiento o Negocio. Monitorea el impacto inmediato en tu balance disponible.',
    bullets: [
      'Categorías con íconos visuales',
      'Top de gastos del periodo',
      'Impacto inmediato en balance',
      'Historial completo editable',
    ],
    bulletDot: 'bg-[#f87171]',
    bulletColor: 'text-[#f87171]',
    imageLeft: false,
    imageSrc: '/capturas/3-gastos.gif',
    previewBadge: 'Egresos • Radiografía Financiera',
    previewGradient: 'from-rose-500/10 via-slate-900/5 to-amber-500/10',
  },
  {
    id: 'presupuestos',
    tag: 'Presupuestos & Límites',
    tagColor: 'bg-[#e0e7ff] text-[#4f46e5] border border-indigo-200/80',
    title: 'Límites por Categoría con Botón de Gasto Rápido',
    description:
      'Planifica topes mensuales por categoría y monitorea el consumo con barras de progreso visuales. Incluye botón de gasto rápido con 1 solo clic para agilizar tus registros diarios.',
    bullets: [
      'Límites mensuales configurables',
      'Barras de consumo visuales',
      'Botón de gasto rápido en 1 clic',
      'Alertas de sobregiro antes de exceder',
    ],
    bulletDot: 'bg-[#818cf8]',
    bulletColor: 'text-[#818cf8]',
    imageLeft: true,
    imageSrc: '/capturas/4-presupuestos.gif',
    previewBadge: 'Presupuestos • 1 Clic',
    previewGradient: 'from-amber-500/10 via-slate-900/5 to-orange-500/10',
  },
  {
    id: 'metas',
    tag: 'Metas de Ahorro',
    tagColor: 'bg-[#dbeafe] text-[#2563eb] border border-blue-200/80',
    title: 'Objetivos Financieros con Pool Global de Ahorros',
    description:
      'Define metas a plazo (viajes, compras, fondo de emergencia) con monto objetivo y fecha límite. Asigna dinero desde el pool de ahorro global de forma libre o vinculada.',
    bullets: [
      'Pool global de ahorro acumulado',
      'Asignación libre o directa',
      'Progreso porcentual en vivo',
      'Cálculo de fecha y tiempo restante',
    ],
    bulletDot: 'bg-[#60a5fa]',
    bulletColor: 'text-[#60a5fa]',
    imageLeft: false,
    imageSrc: '/capturas/5-metas.gif',
    previewBadge: 'Metas • Pool de Ahorro',
    previewGradient: 'from-violet-500/10 via-slate-900/5 to-purple-500/10',
  },
  {
    id: 'recurrentes',
    tag: 'Transacciones Recurrentes',
    tagColor: 'bg-[#f3e8ff] text-[#9333ea] border border-purple-200/80',
    title: 'Automatización de Pagos Fijos y Cuentas Atrasadas',
    description:
      'Gestiona suscripciones, servicios y alquiler con su día de corte mensual. Permite ajustes por mes, pagos parciales y te notifica de inmediato en el dashboard si tienes pagos pendientes.',
    bullets: [
      'Día de corte mensual automático',
      'Alertas de cuentas atrasadas',
      'Soporte para abonos parciales',
      'Avisos visuales en el Dashboard',
    ],
    bulletDot: 'bg-[#c084fc]',
    bulletColor: 'text-[#c084fc]',
    imageLeft: true,
    imageSrc: '/capturas/6-recurrentes.gif',
    previewBadge: 'Recurrentes • Días de Corte',
    previewGradient: 'from-purple-500/10 via-slate-900/5 to-indigo-500/10',
  },
  {
    id: 'reportes',
    tag: 'Reportes Detallados',
    tagColor: 'bg-[#ffedd5] text-[#ea580c] border border-orange-200/80',
    title: 'Gráficos de Distribución, Dona y Exportación',
    description:
      'Analiza gráficos de dona interactivos con la distribución porcentual de tus ingresos y gastos. Compara meses anteriores, analiza tu tasa de ahorro y exporta la información.',
    bullets: [
      'Gráficos de dona interactivos',
      'Distribución porcentual por rubro',
      'Historial comparativo semestral',
      'Filtros por periodo y exportación',
    ],
    bulletDot: 'bg-[#fb923c]',
    bulletColor: 'text-[#fb923c]',
    imageLeft: false,
    imageSrc: '/capturas/7-reportes.gif',
    previewBadge: 'Reportes • Donut Charts',
    previewGradient: 'from-blue-500/10 via-slate-900/5 to-cyan-500/10',
  },
  {
    id: 'consejos',
    tag: 'Consejos & Health Score',
    tagColor: 'bg-[#ccfbf1] text-[#0f766e] border border-teal-200/80',
    title: 'Score de Salud Financiera (0-100) y Consejos IA',
    description:
      'Recibe un diagnóstico automatizado de 0 a 100 puntos con recomendaciones clasificadas por impacto (Alerta, Ahorro, Inversión, General) generadas con inteligencia artificial y caché de 24h.',
    bullets: [
      'Score de salud financiera (0-100)',
      'Consejos por impacto (Alto / Medio)',
      'Recomendaciones de ahorro e inversión',
      'Caché optimizado de 24 horas',
    ],
    bulletDot: 'bg-[#2dd4bf]',
    bulletColor: 'text-[#2dd4bf]',
    imageLeft: true,
    imageSrc: '/capturas/8-consejos.gif',
    previewBadge: 'Salud Financiera • Score 0-100',
    previewGradient: 'from-teal-500/10 via-slate-900/5 to-emerald-500/10',
  },
  {
    id: 'movil',
    tag: 'Acceso Móvil & PWA',
    tagColor: 'bg-[#e0e7ff] text-[#3730a3] border border-indigo-200/80',
    title: 'Experiencia Nativa en tu Celular (Android & iOS)',
    description:
      'Lleva FinanzasTrack a donde vayas. Gracias a la tecnología PWA instalable, úsala en tu smartphone o tablet como una aplicación nativa con carga instantánea, interfaz táctil optimizada y modo oscuro/claro.',
    bullets: [
      'Instalable en pantalla de inicio',
      'Navegación táctil rápida y fluida',
      'Compatible con Android, iPhone y iPad',
      'Sin ocupar espacio de almacenamiento',
    ],
    bulletDot: 'bg-[#6366f1]',
    bulletColor: 'text-[#6366f1]',
    imageLeft: false,
    imageSrc: '/capturas/pwa-mobile.jpg',
    previewBadge: 'PWA • Android / iOS',
    previewGradient: 'from-indigo-500/15 via-blue-900/10 to-teal-500/15',
  },
]

const aiCards = [
  {
    title: 'Diagnóstico y Salud Financiera',
    description: 'Obtén un score de 0 a 100 puntos sobre tus hábitos de gasto, capacidad de ahorro y estabilidad.',
    Icon: BarChart3,
    badge: 'Score 0-100',
  },
  {
    title: 'Consejos Inteligentes Personalizados',
    description: 'Recomendaciones automáticas clasificadas por impacto (Alertas, Ahorro, Inversión) generadas con IA.',
    Icon: Lightbulb,
    badge: 'Caché 24h',
  },
  {
    title: 'Chat Financiero Conversacional',
    description: 'Pregúntale a la IA sobre tu presupuesto: analiza tus transacciones reales y sugiere ajustes concretos.',
    Icon: MessageCircle,
    badge: 'IA en Vivo',
  },
  {
    title: 'Oportunidades de Inversión',
    description: 'Aprende alternativas de inversión seguras acordes a tu excedente mensual acumulado.',
    Icon: TrendingUp,
    badge: 'Estrategias',
  },
]

const pricingFeatures = [
  'Acceso completo a todos los módulos del sistema',
  'Control ilimitado de ingresos, gastos y ahorros',
  'Dashboard en tiempo real con gráficos interactivos',
  'Módulo de presupuestos con gasto rápido',
  'Metas de ahorro con pool y asignación de fondos',
  'Gestión de transacciones y pagos recurrentes',
  'Asistente financiero con Inteligencia Artificial integrada',
  'Reportes y distribución porcentual por categoría',
  'Modo oscuro, claro y personalización de preferencias',
  'Acceso desde cualquier dispositivo (Web Responsive)',
  'Respaldo automático en la nube 24/7',
  'Soporte técnico prioritario y actualizaciones continuas',
]

const faqItems = [
  {
    question: '¿El precio de S/ 25 es mensual o es un pago único de por vida?',
    answer:
      'Es un pago único. Con un solo abono de S/ 25 obtienes acceso completo y permanente a la plataforma. No cobramos mensualidades, renovaciones obligatorias ni tarifas ocultas.',
  },
  {
    question: '¿Tengo que conectar mis tarjetas o claves bancarias a la plataforma?',
    answer:
      'No, en ningún momento. FinanzasTrack nunca te pedirá números de tarjeta, contraseñas de banco ni accesos financieros. Tú registras tus movimientos de forma 100% privada, manual y en menos de 5 segundos, garantizando tu total seguridad.',
  },
  {
    question: '¿Cómo funciona el Asistente Financiero con Inteligencia Artificial (IA)?',
    answer:
      'La IA está conectada en tiempo real a tus transacciones y balances. Puedes chatear con ella en cualquier momento para pedirle que analice tus gastos del mes, identifique fugas de dinero, calcule cuánto puedes ahorrar o te sugiera un plan para salir de deudas.',
  },
  {
    question: '¿Cómo se instala en mi celular (Android / iPhone) y computadora?',
    answer:
      'FinanzasTrack es una Aplicación Web Progresiva (PWA). Al ingresar desde Chrome en Android o Safari en iPhone, seleccionas "Agregar a la pantalla principal" o "Instalar App". Funciona como una aplicación nativa, con carga ultra rápida y sin ocupar espacio en la memoria de tu teléfono.',
  },
  {
    question: '¿Cómo me ayuda el sistema a no gastar de más en el mes?',
    answer:
      'El sistema calcula automáticamente tu "Balance Disponible", descontando tus gastos fijos y el dinero que decides apartar en Ahorros y Metas. Además, cada categoría de Presupuesto tiene barras de progreso visuales y alertas que te avisan antes de que superes tu límite mensual.',
  },
  {
    question: '¿Cómo gestiona los pagos fijos y suscripciones recurrentes?',
    answer:
      'En el módulo de Recurrentes configuras tus gastos periódicos (alquiler, luz, agua, internet, streaming) con su día de corte. La app te alerta en el Dashboard cuando una cuenta está próxima a vencer o atrasada, y te permite marcarlas como pagadas o registrar abonos parciales.',
  },
  {
    question: '¿Qué diferencia a FinanzasTrack de una plantilla de Excel o Google Sheets?',
    answer:
      'En Excel debes crear y mantener fórmulas complejas, es incómodo de usar en celular y no te da alertas automáticas. FinanzasTrack calcula todo en tiempo real, cuenta con botón de gasto rápido en 1 clic, gráficos interactivos de 6 meses y un asesor IA disponible 24/7.',
  },
  {
    question: '¿Cómo realizo el pago y cuánto demora la activación de mi cuenta?',
    answer:
      'El proceso toma menos de 5 minutos. Haces clic en el botón de WhatsApp, coordinamos el pago por Yape o Transferencia Bancaria, te generamos tus credenciales de acceso y puedes empezar a ordenar tus finanzas de inmediato.',
  },
]

const testimonials = [
  {
    quote:
      'Llevaba años peleando con plantillas de Excel que siempre dejaba a medias. Con FinanzasTrack anoto mis compras diarias en 5 segundos desde el celular. El cálculo automático de mi Balance Disponible me salvó de sobregirarme a fin de mes.',
    name: 'Rodrigo Salazar',
    role: 'Diseñador UI / Freelance',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    highlight: 'Control de gastos diario',
  },
  {
    quote:
      'Lo que más me encanta es el módulo de Metas conectado al Pool de Ahorro y el Asistente IA integrado. Le pregunto cómo voy con mi presupuesto de viaje a Cusco y me da consejos financieros exactos con mis números reales.',
    name: 'Valeria Cárdenas',
    role: 'Coordinadora de Marketing',
    avatarBg: 'bg-indigo-100 text-indigo-700',
    highlight: 'Metas de ahorro e IA',
  },
  {
    quote:
      'Tengo 8 pagos fijos entre alquiler, internet y préstamos. El sistema de transacciones recurrentes con alertas de corte y atrasos me quitó un peso enorme de encima. Pagué los S/ 25 una sola vez y valió totalmente la pena.',
    name: 'Jorge Luis Huamán',
    role: 'Ingeniero de Sistemas',
    avatarBg: 'bg-purple-100 text-purple-700',
    highlight: 'Gestión de recurrentes',
  },
]

const trustStats = [
  { value: '4.9 / 5', label: 'Calificación promedio' },
  { value: '98%', label: 'Satisfacción garantizada' },
  { value: '24/7', label: 'Disponibilidad en la nube' },
]

function ComparisonStatus({ enabled }) {
  if (enabled) {
    return (
      <span className="mx-auto grid h-7 w-7 place-content-center rounded-full bg-emerald-100/90 text-emerald-600 shadow-sm border border-emerald-200/60 transition-transform duration-200 hover:scale-110">
        <Check className="h-4 w-4 stroke-[3]" />
      </span>
    )
  }
  return (
    <span className="mx-auto grid h-7 w-7 place-content-center rounded-full bg-slate-100/80 text-slate-400 border border-slate-200/60">
      <CircleX className="h-4 w-4 stroke-[2]" />
    </span>
  )
}

const PRICING_COUNTDOWN_START_SECONDS = 24 * 3600 + 59 * 60 + 59

function HeroSection() {
  const [openFaq, setOpenFaq] = useState(0)
  const [countdownSeconds, setCountdownSeconds] = useState(PRICING_COUNTDOWN_START_SECONDS)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  const countdownHours = Math.floor(countdownSeconds / 3600)
  const countdownMinutes = Math.floor((countdownSeconds % 3600) / 60)
  const countdownSecs = countdownSeconds % 60

  return (
    <main className="mx-auto w-full px-4 pb-20 pt-8 sm:px-6 md:pt-14">
      {/* 1. HERO PRINCIPAL */}
      <section id="inicio" className="mx-auto max-w-5xl scroll-mt-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
          <span>GESTIÓN FINANCIERA INTELIGENTE • VERSIÓN 2026</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.15]">
          Toma el control total de tu dinero con{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            FinanzasTrack
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          La plataforma intuitiva para registrar gastos, fijar presupuestos, alcanzar metas de ahorro y recibir asesoría inteligente con IA.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
          <a
            href="#precio"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-[0_8px_24px_rgba(79,70,229,0.45)] sm:w-auto"
          >
            <span>Obtener Acceso Completo</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#funcionalidades"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
          >
            <span>Explorar Funcionalidades</span>
          </a>
        </div>
      </section>

      {/* 2. STATS CARDS */}
      <section className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
            variant={stat.variant}
          />
        ))}
      </section>

      {/* 3. DEMO VIDEO CARD */}
      <section className="group mx-auto mt-14 w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 md:p-7">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5 min-w-0">
            <span className="relative flex h-12 w-12 min-h-[48px] min-w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2.5 shadow-md shadow-teal-500/25">
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[logo-shine_3.5s_infinite]"
                aria-hidden="true"
              />
              <img
                src="/v4.svg"
                alt="FinanzasTrack"
                className="relative z-10 h-7 w-7 object-contain drop-shadow-sm shrink-0"
              />
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                Demostración en Video
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Conoce la interfaz fluida y las funciones clave de FinanzasTrack en acción
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Tour de la Plataforma
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-inner">
          <div className="relative w-full aspect-video bg-slate-950 flex items-center justify-center">
            <video
              className="h-full w-full object-contain rounded-2xl"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS */}
      <section id="beneficios" className="mx-auto mt-24 w-full max-w-6xl scroll-mt-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Beneficios Claros</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Di adiós al desorden financiero.{' '}
            <span className="text-indigo-600">Tus cuentas bajo control en minutos.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Herramientas diseñadas para que ahorrar y ordenar tus gastos sea fácil y motivador.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <article
              key={b.title}
              className={`group rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${b.cardBg}`}
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-10 w-10 place-content-center rounded-xl ${b.iconColor} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  <b.icon className="h-5 w-5" />
                </span>
                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${b.badgeColor}`}>
                  {b.badge}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-slate-900">
                {b.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. TABLA COMPARATIVA */}
      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Comparativa Directa</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Por qué elegir <span className="text-indigo-600">FinanzasTrack</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Comprueba por qué miles de usuarios dejaron atrás las libretas y hojas de Excel complicadas.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr>
                <th className="w-[42%] border-b border-r border-slate-200 px-6 py-5 text-left text-base font-bold text-slate-900">
                  Funcionalidades Clave
                </th>
                <th className="w-[26%] border-b border-r border-indigo-200/80 bg-indigo-50/60 px-6 py-5 text-center">
                  <span className="relative mx-auto mb-2 grid h-10 w-10 place-content-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2 shadow-md shadow-teal-500/25">
                    <span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[logo-shine_3.5s_infinite]"
                      aria-hidden="true"
                    />
                    <img
                      src="/v4.svg"
                      alt="FinanzasTrack"
                      className="relative z-10 h-6 w-6 object-contain drop-shadow-sm"
                    />
                  </span>
                  <p className="text-lg font-bold text-indigo-900">FinanzasTrack</p>
                </th>
                <th className="w-[16%] border-b border-r border-slate-200 px-5 py-5 text-center">
                  <span className="mx-auto mb-2 grid h-10 w-10 place-content-center rounded-2xl border border-emerald-200/80 bg-emerald-50 text-emerald-600 shadow-sm transition-transform duration-200 hover:scale-105">
                    <FileSpreadsheet className="h-5 w-5 stroke-[2]" />
                  </span>
                  <p className="text-base font-semibold text-slate-700">Excel / Sheets</p>
                </th>
                <th className="w-[16%] border-b border-slate-200 px-5 py-5 text-center">
                  <span className="mx-auto mb-2 grid h-10 w-10 place-content-center rounded-2xl border border-amber-200/80 bg-amber-50 text-amber-600 shadow-sm transition-transform duration-200 hover:scale-105">
                    <BookOpen className="h-5 w-5 stroke-[2]" />
                  </span>
                  <p className="text-base font-semibold text-slate-700">Cuaderno</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="transition-colors hover:bg-slate-50/60">
                  <td className="border-b border-r border-slate-200 px-6 py-3.5 text-sm font-medium text-slate-800">
                    {row.feature}
                  </td>
                  <td className="border-b border-r border-indigo-100 bg-indigo-50/30 px-6 py-3.5 text-center">
                    <ComparisonStatus enabled={row.finanzasTrack} />
                  </td>
                  <td className="border-b border-r border-slate-200 px-5 py-3.5 text-center">
                    <ComparisonStatus enabled={row.excel} />
                  </td>
                  <td className="border-b border-slate-200 px-5 py-3.5 text-center">
                    <ComparisonStatus enabled={row.notebook} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. FUNCIONALIDADES DETALLADAS (SHOWCASE ZIG-ZAG) */}
      <section id="funcionalidades" className="mx-auto mt-28 w-full max-w-6xl scroll-mt-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Módulos de la Plataforma</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para tu <span className="text-indigo-600">salud financiera</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Una plataforma completa diseñada con los módulos reales de FinanzasTrack para que tengas el control total de tu dinero.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-20">
          {appSections.map((sec) => (
            <article
              key={sec.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${sec.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
            >
              {/* Contenedor Mockup / Espacio de Imagen */}
              <div className="group/mockup relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_45px_rgba(79,70,229,0.12)]">
                {/* Cabecera estilo navegador / app */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/70 bg-white px-3 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>finanzastrack.site/{sec.id}</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {sec.previewBadge}
                  </span>
                </div>

                {/* Espacio reservado para la captura de pantalla */}
                <div className={`relative flex min-h-[260px] sm:min-h-[310px] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${sec.previewGradient} bg-slate-50`}>
                  <img
                    src={sec.imageSrc}
                    alt={`Vista de ${sec.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                        e.currentTarget.nextElementSibling.classList.add('flex');
                      }
                    }}
                  />
                  {/* Placeholder elegante en caso de no cargar la imagen todavía */}
                  <div className="hidden flex-col items-center justify-center gap-3 p-8 text-center text-slate-400">
                    <span className="grid h-14 w-14 place-content-center rounded-2xl bg-white text-indigo-600 border border-indigo-100 shadow-md">
                      <TrendingUp className="h-7 w-7 stroke-[2.5]" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Captura: {sec.tag}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Espacio reservado para imagen: <code className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">{sec.imageSrc}</code></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información Descriptiva del Módulo */}
              <div className="flex flex-col justify-center">
                <span className={`inline-flex w-fit rounded-full px-3.5 py-1 text-xs font-bold ${sec.tagColor}`}>
                  {sec.tag}
                </span>
                <h3 className="mt-3.5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {sec.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {sec.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {sec.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 md:text-sm">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${sec.bulletDot}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. MÓDULO DE INTELIGENCIA ARTIFICIAL */}
      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 text-white shadow-2xl shadow-indigo-950/30 md:p-12">
          <div className="relative z-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3.5 py-1 text-xs font-bold text-indigo-300 backdrop-blur-md">
                  <Bot className="h-4 w-4" />
                  <span>INTELIGENCIA ARTIFICIAL INTEGRADA</span>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Tu Asesor Financiero con IA 24/7
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-indigo-200/90 md:text-base">
                  Conectado con modelos LLM avanzados para analizar tus finanzas en tiempo real, diagnosticar tus hábitos y responder tus consultas.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  Motor de IA Financiera
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aiCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-content-center rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/30">
                      <card.Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-indigo-200/80">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRECIO Y OFERTA */}
      <section id="precio" className="mx-auto mt-28 w-full max-w-4xl scroll-mt-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Acceso Inmediato</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Inversión única, <span className="text-indigo-600">beneficio permanente</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sin mensualidades obligatorias ni costos ocultos.
          </p>
        </div>

        {/* Tarjeta Principal de Precios */}
        <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-300/40 md:p-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700">
              <Zap className="h-3.5 w-3.5 text-indigo-600" />
              ACCESO COMPLETO AL SISTEMA
            </span>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-slate-500">S/</span>
              <span className="text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl">25</span>
              <span className="text-sm font-semibold text-slate-500">pago único</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Sin suscripciones recurrentes obligatorias</p>
          </div>

          {/* Contador de Oferta */}
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-center">
            <p className="text-xs font-bold text-rose-800">
              ⚡ Oferta especial por tiempo limitado
            </p>
            <div className="mt-3 flex items-center justify-center gap-2.5">
              <div className="flex flex-col items-center">
                <div className="grid h-12 w-12 place-content-center rounded-xl bg-rose-600 text-lg font-bold text-white shadow-md shadow-rose-600/20">
                  {countdownHours}
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase text-rose-700">Horas</span>
              </div>
              <span className="text-xl font-black text-rose-500">:</span>
              <div className="flex flex-col items-center">
                <div className="grid h-12 w-12 place-content-center rounded-xl bg-rose-600 text-lg font-bold text-white shadow-md shadow-rose-600/20">
                  {String(countdownMinutes).padStart(2, '0')}
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase text-rose-700">Minutos</span>
              </div>
              <span className="text-xl font-black text-rose-500">:</span>
              <div className="flex flex-col items-center">
                <div className="grid h-12 w-12 place-content-center rounded-xl bg-rose-600 text-lg font-bold text-white shadow-md shadow-rose-600/20">
                  {String(countdownSecs).padStart(2, '0')}
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase text-rose-700">Segundos</span>
              </div>
            </div>

            <p className="mt-3.5 border-t border-rose-200/80 pt-2.5 text-xs font-medium text-rose-900">
              Al finalizar el contador, el precio subirá a <span className="font-extrabold text-rose-700">S/ 50</span>
            </p>
          </div>

          {/* Botón WhatsApp CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/51926289293?text=Hola%2C%20quiero%20activar%20mi%20cuenta%20de%20FinanzasTrack%20por%20S%2F%2025"
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/40 active:translate-y-0"
            >
              <MessageCircle className="h-5 w-5 fill-white stroke-none" />
              <span>Quiero mi acceso por S/ 25 vía WhatsApp</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Aceptamos Yape, Transferencia Bancaria • Activación en minutos
            </p>
          </div>

          {/* Checklist de Features */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-slate-100 pt-8 sm:grid-cols-2">
            {pricingFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <Check className="h-4 w-4 shrink-0 stroke-[3] text-emerald-600" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* 9. TESTIMONIOS Y SOCIAL PROOF */}
      <section className="mx-auto mt-28 w-full max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Testimonios</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lo que opinan nuestros <span className="text-indigo-600">usuarios</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Personas reales que ordenaron sus finanzas con FinanzasTrack.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  {t.highlight && (
                    <span className="rounded-full border border-indigo-100 bg-indigo-50/70 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700">
                      {t.highlight}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className={`grid h-10 w-10 place-content-center rounded-full font-bold text-sm shadow-sm ${t.avatarBg || 'bg-indigo-50 text-indigo-600'}`}>
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {trustStats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-2xl font-extrabold tracking-tight text-indigo-600 sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 10. PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="mx-auto mt-28 w-full max-w-3xl scroll-mt-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Preguntas Frecuentes</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Resolvemos todas tus dudas
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? 'border-indigo-200 bg-indigo-50/20 shadow-sm' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'
                  }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span className="text-sm font-bold text-slate-900">{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-indigo-100/60 px-6 py-4 text-xs leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default HeroSection
