import { useEffect, useState } from 'react'
import StatCard from '../ui/StatCard'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CircleCheck,
  CircleX,
  FileText,
  Gift,
  Lightbulb,
  MessageCircle,
  Send,
  Square,
  Star,
  User,
  VolumeX,
} from 'lucide-react'

const stats = [
  { value: '500+', label: 'Usuarios activos', sublabel: '' },
  { value: '20', label: 'soles', sublabel: 'Pago unico' },
  { value: '100%', label: 'Seguro', sublabel: '' },
  { value: '24/7', label: 'Disponible', sublabel: '' },
]

const benefits = [
  {
    title: 'Descubre los "gastos hormiga" que te roban dinero',
    description:
      'Identifica en segundos donde se escapa tu dinero. Un cafe aqui, un taxi alla y veras la historia completa de tus gastos diarios.',
  },
  {
    title: 'Multiplica tus ingresos sin trabajar mas horas',
    description:
      'Visualiza patrones ocultos en tus fuentes de ingreso y descubre oportunidades que estaban frente a ti todo el tiempo.',
  },
  {
    title: 'Evita perder ventas por quedarte sin inventario',
    description:
      'Recibe alertas inteligentes antes de que se agote tu producto estrella. Nunca mas pierdas dinero por falta de stock.',
  },
  {
    title: 'Entiende tu negocio en 3 segundos, no en 3 horas',
    description:
      'Graficos tan claros que tu situacion financiera salta a la vista. Toma decisiones con confianza, no con dudas.',
  },
  {
    title: 'Ahorra sin sentir que te estas sacrificando',
    description:
      'Alertas inteligentes te avisan antes de gastar de mas. Ahorra tus metas financieras sin renunciar a lo que amas.',
  },
  {
    title: 'Proteccion bancaria para tus datos mas sensibles',
    description:
      'Encriptacion de nivel militar. Tus numeros estan mas seguros aqui que en una boveda fisica.',
  },
  {
    title: 'Aprende de tus errores sin repetirlos',
    description:
      'Revive cualquier momento de tu historia financiera. Descubre que funciono y que no para mejorar cada mes.',
  },
  {
    title: 'Tu contador personal en el bolsillo 24/7',
    description:
      'Desde el sofa, la oficina o la playa. Gestiona todo desde tu celular sin depender de nadie.',
  },
  {
    title: 'Categorias que reflejan tu vida, no plantillas genericas',
    description:
      'Personaliza cada detalle segun tu realidad. Porque tu negocio es unico y merece un sistema unico.',
  },
  {
    title: 'Reportes profesionales que impresionan en segundos',
    description:
      'Genera documentos detallados para tu contador, socio o banco. Luce profesional sin contratar a nadie.',
  },
]

const comparisonRows = [
  { feature: 'Acceso desde cualquier dispositivo', budgetTrack: true, excel: true, notebook: false },
  { feature: 'Graficos y visualizaciones automaticas', budgetTrack: true, excel: true, notebook: false },
  { feature: 'Alertas y recordatorios inteligentes', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Categorizacion automatica', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Reportes profesionales en PDF', budgetTrack: true, excel: true, notebook: false },
  { feature: 'Metas de ahorro con seguimiento', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Transacciones recurrentes', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Respaldo automatico en la nube', budgetTrack: true, excel: true, notebook: false },
  { feature: 'Analisis de tendencias', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Interfaz intuitiva y moderna', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Actualizaciones en tiempo real', budgetTrack: true, excel: false, notebook: false },
  { feature: 'Seguridad bancaria', budgetTrack: true, excel: false, notebook: false },
]

const demoVideoUrl = 'https://drive.google.com/file/d/1lZOXHgS1GUbnDNI0qeovX4ogqAC_FRg6/preview'
const appPreviewImage = '/captura-app-336.png'

const appSections = [
  {
    tag: 'Dashboard Completo',
    tagColor: 'bg-[#e8f9f8] text-[#0f766e]',
    title: 'Dashboard Completo',
    description:
      'Visualiza tu balance, ingresos y gastos en tiempo real. Graficos interactivos de resumen mensual y categorias de gastos.',
    bullets: ['Balance en tiempo real', 'Graficos de categorias', 'Resumen mensual', 'Indicador de ahorro'],
    imageLeft: false,
    bulletColor: 'text-[#10b981]',
  },
  {
    tag: 'Gestion de Ingresos',
    tagColor: 'bg-[#dcfce7] text-[#15803d]',
    title: 'Gestion de Ingresos',
    description:
      'Registra todas tus fuentes de ingreso con categorias personalizadas. Historial completo y totales mensuales.',
    bullets: ['Multiples categorias', 'Historial detallado', 'Totales automaticos', 'Edicion rapida'],
    imageLeft: true,
    bulletColor: 'text-[#22c55e]',
  },
  {
    tag: 'Control de Gastos',
    tagColor: 'bg-[#fee2e2] text-[#dc2626]',
    title: 'Control de Gastos',
    description:
      'Monitorea cada gasto por categoria. Visualiza tus top categorias con barras de progreso y edita transacciones facilmente.',
    bullets: ['Categorias con iconos', 'Top gastos visual', 'Barras de progreso', 'Historial completo'],
    imageLeft: false,
    bulletColor: 'text-[#f87171]',
  },
  {
    tag: 'Personalizacion de Datos',
    tagColor: 'bg-[#e0e7ff] text-[#4f46e5]',
    title: 'Personaliza tus Gastos e Ingresos',
    description:
      'Crea categorias personalizadas para tus gastos e ingresos segun tus necesidades. Organiza tu informacion de manera clara y obten datos mas precisos sobre tus finanzas.',
    bullets: ['Categorias personalizadas', 'Etiquetas unicas', 'Datos mas claros', 'Organizacion flexible'],
    imageLeft: true,
    bulletColor: 'text-[#818cf8]',
  },
  {
    tag: 'Metas de Ahorro',
    tagColor: 'bg-[#dbeafe] text-[#2563eb]',
    title: 'Metas de Ahorro',
    description:
      'Define objetivos financieros y haz seguimiento de tu progreso. Alcanza tus metas con indicadores visuales motivadores.',
    bullets: ['Objetivos personalizados', 'Progreso en tiempo real', 'Multiples metas', 'Agregar fondos facil'],
    imageLeft: false,
    bulletColor: 'text-[#60a5fa]',
  },
  {
    tag: 'Transacciones Recurrentes',
    tagColor: 'bg-[#f3e8ff] text-[#9333ea]',
    title: 'Transacciones Recurrentes',
    description:
      'Automatiza gastos e ingresos fijos. Recordatorios diarios y registro con un solo clic.',
    bullets: ['Gastos automaticos', 'Recordatorios', 'Un clic para registrar', 'Resumen diario'],
    imageLeft: true,
    bulletColor: 'text-[#c084fc]',
  },
  {
    tag: 'Reportes Detallados',
    tagColor: 'bg-[#ffedd5] text-[#ea580c]',
    title: 'Reportes Detallados',
    description:
      'Analiza tus finanzas con reportes mensuales. Exporta a PDF y visualiza ingresos y gastos por categoria.',
    bullets: ['Exportar a PDF', 'Analisis por categoria', 'Tasa de ahorro', 'Filtros por periodo'],
    imageLeft: false,
    bulletColor: 'text-[#fb923c]',
  },
  {
    tag: 'Personalizacion Total',
    tagColor: 'bg-[#ccfbf1] text-[#0f766e]',
    title: 'Personalizacion Total',
    description:
      'Configura tu perfil, cambia el tema de colores y personaliza tu experiencia segun tus preferencias.',
    bullets: ['Foto de perfil', '5 temas de colores', 'Datos personales', 'Interfaz adaptable'],
    imageLeft: true,
    bulletColor: 'text-[#2dd4bf]',
  },
]

const aiCards = [
  {
    title: 'Resumen de gastos',
    description: 'Obten un analisis completo de todos tus gastos organizados por categoria en segundos.',
    Icon: FileText,
  },
  {
    title: 'Consejos personalizados',
    description: 'Recibe recomendaciones inteligentes sobre donde puedes ahorrar mas dinero.',
    Icon: Lightbulb,
  },
  {
    title: 'Analisis de ingresos',
    description: 'Identifica cual es tu menor fuente de ingreso y como puedes fortalecerla.',
    Icon: BarChart3,
  },
  {
    title: 'Chat conversacional',
    description: 'Pregunta lo que quieras sobre tus finanzas como si hablaras con un asesor real.',
    Icon: MessageCircle,
  },
]

const pricingFeatures = [
  'Control completo de gastos e ingresos',
  'Gestion de inventario ilimitada',
  'Metricas y graficos avanzados',
  'Reportes mensuales y anuales',
  'Presupuestos personalizados',
  'Historial de transacciones',
  'Acceso desde cualquier dispositivo',
  'Soporte tecnico prioritario',
  'Actualizaciones gratuitas',
  'Respaldo automatico de datos',
  'Acceso de por vida',
  'Descarga reportes en PDF o Excel',
]

const faqItems = [
  {
    question: '¿Como funciona BudgetTrack?',
    answer:
      'BudgetTrack es una aplicación web que te permite registrar y gestionar tus ingresos, gastos e inventario de manera simple. Solo necesitas crear una cuenta, configurar tus categorías y empezar a registrar tus transacciones. La plataforma genera automáticamente gráficos y reportes para que puedas visualizar tu situación financiera en tiempo real.',
  },
  {
    question: '¿Que incluye el precio de 20 soles pago unico?',
    answer:
      'El pago único de 20 soles te da acceso de por vida a todas las funcionalidades de BudgetTrack: control de gastos e ingresos, gestión de inventario, métricas avanzadas, reportes en PDF, presupuestos personalizados, respaldo automático, soporte técnico y todas las actualizaciones futuras sin costo adicional.',
  },
  {
    question: '¿Puedo descargar los reportes?',
    answer:
      'Sí, puedes exportar tus reportes financieros en formato PDF o Excel. Los reportes incluyen análisis detallados de ingresos, gastos por categoría, tendencias mensuales y tu tasa de ahorro. Perfectos para presentar a tu contador o para tu análisis personal.',
  },
  {
    question: '¿Puedo acceder desde mi celular?',
    answer:
      'Absolutamente. BudgetTrack es una aplicación web responsive que funciona perfectamente en cualquier dispositivo: computadora, tablet o celular. Solo necesitas un navegador web e internet para acceder desde cualquier lugar y en cualquier momento.',
  },
  {
    question: '¿Mis datos estan seguros?',
    answer:
      'Sí, la seguridad es nuestra prioridad. Utilizamos encriptación de nivel bancario para proteger toda tu información financiera. Además, realizamos respaldos automáticos en la nube para que nunca pierdas tus datos. Tu información está más segura con nosotros que en hojas de cálculo locales.',
  },
  {
    question: '¿Como realizo el pago?',
    answer:
      'El proceso es muy simple. Haz clic en el botón de WhatsApp en la sección de precios y te contactaremos inmediatamente. Aceptamos transferencias bancarias, Yape y Plin. Una vez confirmado el pago, recibirás tu acceso en minutos.',
  },
  {
    question: '¿Que pasa si necesito ayuda?',
    answer:
      'Contamos con soporte técnico prioritario para todos nuestros usuarios. Puedes contactarnos por WhatsApp, correo electrónico o a través del chat en la aplicación. Nuestro equipo responde rápidamente y está disponible para ayudarte con cualquier duda o problema que tengas.',
  },
  {
    question: '¿Es realmente un pago unico?',
    answer:
      'Sí, es 100% un pago único. No hay suscripciones mensuales ni costos ocultos. Pagas 20 soles una sola vez y obtienes acceso de por vida a BudgetTrack, incluyendo todas las actualizaciones y nuevas funcionalidades que agreguemos en el futuro.',
  },
  {
    question: '¿Sirve para negocios o solo uso personal?',
    answer:
      'BudgetTrack es perfecto para ambos. Puedes usarlo para gestionar tus finanzas personales, tu negocio pequeño, tu emprendimiento o incluso para llevar las cuentas de varios proyectos. Las categorías personalizables y la gestión de inventario lo hacen ideal tanto para uso personal como profesional.',
  },
]

const testimonials = [
  {
    quote:
      'BudgetTrack cambio completamente mi forma de manejar las finanzas de mi negocio. Ahora tengo control total de mis gastos e ingresos, y los reportes mensuales me ayudan a tomar mejores decisiones.',
    name: 'Maria Garcia',
    role: 'Emprendedora',
  },
  {
    quote:
      'Como freelancer, necesitaba algo simple pero potente. BudgetTrack es exactamente eso. La gestion de inventario y las metricas avanzadas me han ahorrado horas de trabajo cada semana.',
    name: 'Carlos Mendoza',
    role: 'Freelancer',
  },
  {
    quote:
      'El mejor S/25 que he invertido. Antes usaba Excel y perdia mucho tiempo. Ahora todo esta automatizado y puedo ver mis finanzas desde el celular en cualquier momento.',
    name: 'Ana Lucia Torres',
    role: 'Dueña de tienda',
  },
]

const trustStats = [
  { value: '2,500+', label: 'Usuarios activos' },
  { value: '4.9/5', label: 'Calificación promedio' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte disponible' },
]

function ComparisonStatus({ enabled }) {
  if (enabled) {
    return <CircleCheck className="mx-auto h-5 w-5 fill-[#22c55e] text-white stroke-3" aria-hidden="true" />
  }

  return <CircleX className="mx-auto h-5 w-5 fill-[#f87171] text-white stroke-3" aria-hidden="true" />
}

/** Cuenta atrás inicial 24:59:59 (ajustable) */
const PRICING_COUNTDOWN_START_SECONDS = 24 * 3600 + 59 * 60 + 59

function HeroSection() {
  const [openFaq, setOpenFaq] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
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
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d8bf80] bg-white px-5 py-2 text-[14px] text-[#6b7280] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <Square className="h-3 w-3 text-[#d98104]" aria-hidden="true" />
          ¿No sabes donde se fue tu dinero este mes?
        </p>

        <h1 className="mx-auto mt-9 w-fit whitespace-nowrap text-center text-[clamp(2rem,3.8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-black">
          Tu dinero bajo control con BudgetTrack
        </h1>

        <p className="mx-auto mt-5 max-w-4xl text-[17px] leading-[1.4] text-[#1f2937] md:text-[20px]">
          Gestiona ingresos, gastos e inventario en un solo lugar. Metricas inteligentes
          que te ayudan a tomar mejores decisiones financieras.
        </p>

        <button className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#d98104] px-8 py-2.5 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(217,129,4,0.35)] transition hover:bg-[#c87400] md:text-[18px]">
          Organiza tu dinero en 5 minutos
          <Square className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
        </button>
      </section>

      <section className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={`${stat.value}-${stat.label}`}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
          />
        ))}
      </section>

      <section className="group mx-auto mt-16 w-full max-w-5xl rounded-[26px] border border-[#dce8ea] bg-[#f7fbfb] p-5 shadow-[0_0_0_1px_rgba(220,232,234,0.7),0_10px_22px_rgba(15,23,42,0.08),0_0_24px_rgba(20,184,166,0.1)] transition-transform duration-300 ease-out hover:scale-[1.01] md:p-6">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-1 grid h-12 w-12 place-content-center rounded-full bg-[#14b8a6] text-white shadow-[0_10px_22px_rgba(20,184,166,0.35)]">
              <Square className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
            </span>

            <div>
              <h2 className="text-[20px] font-semibold leading-none tracking-[-0.01em] text-[#111827] md:text-[24px]">
                Ver Video
              </h2>
              <p className="mt-1 text-[14px] text-[#374151] md:text-[16px]">
                Descubre todos los detalles de nuestro aplicativo
              </p>
            </div>
          </div>

          <button className="inline-flex w-fit items-center gap-2 rounded-full bg-[#14b8a6] px-8 py-3 text-[15px] font-semibold text-[#053b3b] shadow-[0_10px_20px_rgba(20,184,166,0.25)]">
            <VolumeX className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
            Sonido
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#d1d5db] bg-[#9a9a9a] transition-transform duration-300 ease-out group-hover:scale-[1.01]">
          <div className="relative min-h-[300px] w-full pb-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={demoVideoUrl}
              title="Demo de BudgetTrack"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            Di adios al estres financiero.
            <span className="ml-2 text-[#0ea5a4]">Todo tu dinero organizado en minutos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] text-[#4b5563] md:text-[17px]">
            Resultados reales que transforman tu relacion con el dinero
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
            >
              <span className="mb-5 inline-grid h-10 w-10 place-content-center rounded-xl bg-[#14b8a6] text-white shadow-[0_10px_20px_rgba(20,184,166,0.35)]">
                <Square className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
              </span>
              <h3 className="text-[17px] font-semibold leading-[1.35] text-[#0f172a]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.45] text-[#4b5563]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium text-[#111827]">Comparacion</p>
          <h2 className="mt-2 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            ¿Por que elegir
            <span className="ml-2 text-[#0ea5a4]">FinanzasTrack?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] text-[#4b5563] md:text-[17px]">
            Compara y descubre por que miles de personas ya dejaron atras los metodos
            tradicionales
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[22px] border border-[#e5e7eb] bg-white shadow-[0_20px_35px_rgba(15,23,42,0.08)]">
          <table className="w-full min-w-[920px] border-collapse">
            <thead>
              <tr>
                <th className="w-[40%] border-b border-r border-[#eef2f7] px-5 py-7 text-left text-[22px] font-semibold text-[#0f172a]">
                  Caracteristicas
                </th>
                <th className="w-[20%] border-b border-r border-[#eef2f7] px-5 py-7 text-center">
                  <span className="mx-auto mb-3 grid h-10 w-10 place-content-center rounded-xl border border-[#f3f4f6] bg-white shadow-[0_6px_14px_rgba(15,23,42,0.08)]">
                    <Square className="h-4 w-4 stroke-[2.5] text-[#9ca3af]" aria-hidden="true" />
                  </span>
                  <p className="text-[24px] font-semibold text-[#0f172a]">FinanzasTrack</p>
                </th>
                <th className="w-[20%] border-b border-r border-[#eef2f7] bg-[#f1fff7] px-5 py-7 text-center">
                  <span className="mx-auto mb-3 grid h-10 w-10 place-content-center rounded-xl bg-[#16a34a] shadow-[0_6px_14px_rgba(22,163,74,0.25)]">
                    <Square className="h-4 w-4 stroke-[2.5] text-white" aria-hidden="true" />
                  </span>
                  <p className="text-[24px] font-semibold text-[#0f172a]">Excel</p>
                </th>
                <th className="w-[20%] border-b border-[#eef2f7] px-5 py-7 text-center">
                  <span className="mx-auto mb-3 grid h-10 w-10 place-content-center rounded-xl bg-[#4b5563] shadow-[0_6px_14px_rgba(75,85,99,0.25)]">
                    <Square className="h-4 w-4 stroke-[2.5] text-white" aria-hidden="true" />
                  </span>
                  <p className="text-[24px] font-semibold text-[#0f172a]">Cuaderno</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="border-b border-r border-[#eef2f7] px-5 py-4 text-[17px] text-[#0f172a]">
                    {row.feature}
                  </td>
                  <td className="border-b border-r border-[#eef2f7] px-5 py-4 text-center">
                    <ComparisonStatus enabled={row.budgetTrack} />
                  </td>
                  <td className="border-b border-r border-[#eef2f7] bg-[#f1fff7] px-5 py-4 text-center">
                    <ComparisonStatus enabled={row.excel} />
                  </td>
                  <td className="border-b border-[#eef2f7] px-5 py-4 text-center">
                    <ComparisonStatus enabled={row.notebook} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-4xl rounded-[22px] border border-[#e9eef2] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(15,23,42,0.05)] md:px-8">
        <h3 className="text-[22px] font-semibold leading-none tracking-[-0.02em] text-[#0f172a] md:text-[24px]">
          ¿Listo para el cambio?
        </h3>
        <p className="mt-2 text-[13px] text-[#334155] md:text-[14px]">
          Unete a miles de usuarios que ya transformaron su forma de gestionar el dinero
        </p>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium text-[#111827]">Conoce la App</p>
          <h2 className="mt-2 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            Descubre todo lo que puedes hacer con
            <span className="ml-2 text-[#0ea5a4]">FinanzasTrack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] text-[#4b5563] md:text-[17px]">
            Una plataforma completa diseñada para que tengas el control total de tus finanzas
            personales o de negocio.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {appSections.map((item) => (
            <article
              key={item.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${item.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}
            >
              <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                <img
                  className="h-full w-full object-cover"
                  src={appPreviewImage}
                  alt={`Vista de ${item.title}`}
                  loading="lazy"
                />
              </div>

              <div>
                <p className={`inline-flex rounded-full px-4 py-1.5 text-[14px] font-semibold ${item.tagColor}`}>
                  {item.tag}
                </p>
                <h3 className="mt-4 text-[24px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-[14px] leading-[1.45] text-[#334155] md:text-[17px]">
                  {item.description}
                </p>

                <ul className="mt-5 grid max-w-xl grid-cols-2 gap-x-6 gap-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[13px] text-[#0f172a] md:text-[16px]">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full bg-current ${item.bulletColor}`}
                      ></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl">
        <div className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#f5f7ed] px-4 py-1 text-[12px] font-medium text-[#0f766e]">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            Potenciado con IA
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            Inteligencia Artificial con
            <span className="ml-2 text-[#0ea5a4]">BudgetTrack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[14px] text-[#334155] md:text-[17px]">
            Puedes pedirle a la inteligencia artificial de nuestro programa que haga un resumen
            de todos tus gastos de manera rapida y te de consejos sobre en donde estas gastando
            mas o cual es el ingreso menor que estas teniendo.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-2">
          <div className="relative pb-10 sm:pb-8 lg:pb-6">
            <img
              className="h-[260px] w-full rounded-2xl border border-[#e5e7eb] bg-white p-3 object-contain shadow-[0_16px_30px_rgba(15,23,42,0.1)] md:h-[320px]"
              src={appPreviewImage}
              alt="Vista de BudgetTrack en panel general"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute -bottom-1 right-3 z-10 w-[min(calc(100%-1.5rem),17.5rem)] motion-reduce:animate-none sm:bottom-4 sm:right-4 animate-ai-badge-float"
              role="status"
              aria-label="IA activa, analizando tus finanzas"
            >
              <div className="pointer-events-auto flex cursor-default items-center gap-3 rounded-2xl border border-[#eef2f7] bg-white p-3 pr-4 shadow-[0_14px_40px_rgba(15,23,42,0.14)] transition-transform duration-200 ease-out hover:scale-105">
                <span className="inline-grid h-11 w-11 shrink-0 place-content-center rounded-xl bg-[#14b8a6] text-white shadow-[0_8px_18px_rgba(20,184,166,0.4)]">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-tight text-[#0f172a]">IA Activa</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-[#64748b]">Analizando tus finanzas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#dfe8ef] bg-white shadow-[0_16px_30px_rgba(15,23,42,0.1)]">
            <div className="flex items-center justify-between border-b border-[#e7edf4] bg-[#f7fffe] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="inline-grid h-10 w-10 place-content-center rounded-full bg-[#14b8a6] text-white shadow-[0_8px_16px_rgba(20,184,166,0.35)]">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[16px] font-semibold leading-none text-[#0f172a]">IA de BudgetTrack</p>
                  <p className="mt-1 text-[14px] text-[#0ea5a4]">Tu asesor financiero personal</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0f766e]">
                <span className="h-3 w-3 rounded-full bg-[#72ddd8]"></span>
                En línea
              </span>
            </div>

            <div className="flex justify-end px-4 pt-4">
              <span className="inline-flex max-w-[95%] rounded-full bg-[#d98104] px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(217,129,4,0.38),0_0_24px_rgba(217,129,4,0.35)]">
                ¿Cuales son mis principales fuentes de ingreso?
              </span>
            </div>

            <div className="mx-4 mt-4 rounded-2xl border border-[#e2e8f0] bg-white p-4 text-[14px] leading-[1.45] text-[#0f172a]">
              <p className="font-medium">¡Hola! Soy tu asesor de BudgetTrack. He analizado tus movimientos:</p>
              <ul className="mt-2 space-y-1 text-[#334155]">
                <li>💰 Tus Fuentes de Ingreso</li>
                <li>Tus ingresos totales suman S/ 2,100.00</li>
                <li>• Transporte (S/ 1,900.0): 90.5% del total</li>
                <li>• Otros (S/ 100.0): Registrado como "[skoll]"</li>
                <li>• Negocio (S/ 100.0): Ingreso adicional</li>
              </ul>
              <p className="mt-2 text-[#334155]">
                💡 Consejo: Tu economia depende del 90% de "transporte". Te sugiero diversificar tus fuentes de ingreso.
              </p>
            </div>

            <div className="mx-4 mb-4 mt-4 flex items-center gap-2 rounded-2xl border border-[#dbe5ee] bg-white px-4 py-3">
              <p className="flex-1 text-[16px] text-[#0f172a]">Pregunta sobre tus finanzas...</p>
              <span className="inline-grid h-10 w-10 place-content-center rounded-xl bg-[#14b8a6] text-white">
                <Send className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aiCards.map((card) => (
            <article
              key={card.title}
              className="group relative z-0 cursor-default rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-200 ease-out hover:z-10 hover:scale-[1.03] hover:border-[#b5f0eb] hover:bg-[#f2fffe] hover:shadow-[0_14px_28px_rgba(15,23,42,0.1)]"
            >
              <span className="inline-grid h-9 w-9 place-content-center rounded-xl bg-[#e8fbfa] text-[#14b8a6] transition-colors duration-200 group-hover:bg-[#14b8a6] group-hover:text-white">
                <card.Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[20px] font-semibold text-[#0f172a]">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#334155]">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-[30px] font-bold tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            Un precio,
            <span className="ml-2 text-[#0ea5a4]">todo incluido</span>
          </h2>
          <p className="mt-2 text-[14px] text-[#334155]">
            Sin sorpresas, sin costos ocultos. Acceso de por vida.
          </p>
        </div>

        <article className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-[#f3d58a] bg-[#fffdf5] p-5 shadow-[0_12px_26px_rgba(217,129,4,0.12)]">
          <div className="flex items-start gap-4">
            <span className="inline-grid h-11 w-11 place-content-center rounded-xl bg-[#f59e0b] text-white shadow-[0_10px_18px_rgba(245,158,11,0.3)]">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>

            <div className="flex-1 text-left">
              <p className="inline-flex rounded-full bg-[#f7d999] px-3 py-1 text-[11px] font-semibold text-[#9a5a00]">
                BONO ESPECIAL SOLO POR HOY
              </p>
              <h3 className="mt-2 text-[24px] font-bold text-[#7c4a10] md:text-[35px]">
                🎁 eBook GRATIS en PDF
              </h3>
              <p className="text-[18px] font-semibold text-[#7c4a10] md:text-[26px]">
                "De Caos Financiero a Control Total en 30 Dias"
              </p>
              <p className="mt-2 max-w-3xl text-[14px] text-[#6b4c2a] md:text-[22px]">
                Una guia practica que te acompaña paso a paso para implementar el sistema,
                crear habitos financieros y tomar el control real de tu dinero.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#f2e6c9] pt-3">
                <p className="text-[34px] font-bold text-[#7c4a10] md:text-[45px]">
                  <span className="mr-2 text-[#9ca3af] line-through">50 soles</span>
                  <span className="text-[#14b8a6]">GRATIS</span>
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#7c4a10] md:text-[22px]">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Formato PDF descargable
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 border-t border-[#f2e6c9] pt-3 text-[13px] text-[#7c4a10] sm:grid-cols-3 md:text-[18px]">
                <span>Guia paso a paso</span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Plan de 30 dias
                </span>
                <span>Habitos financieros</span>
              </div>
            </div>
          </div>
        </article>

        <article className="mx-auto mt-8 w-full max-w-4xl rounded-3xl border border-[#dff0ef] bg-white p-8 shadow-[0_20px_35px_rgba(15,23,42,0.08)]">
          <p className="text-center text-[14px] text-[#0f172a]">∞ Acceso de por vida</p>
          <p className="mt-3 text-center text-[92px] font-bold leading-none text-[#14b8a6] md:text-[124px]">
            20
            <span className="ml-2 text-[58px] md:text-[72px]">soles</span>
          </p>
          <p className="mt-2 text-center text-[15px] text-[#334155]">Pago unico • Sin suscripciones</p>

          <div className="mx-auto mt-6 w-full max-w-md rounded-2xl border border-[#f0b8b8] bg-[#fff8f8] p-4 text-center">
            <p className="text-[13px] font-semibold text-[#9f2f2f]">
              Este precio solo estará disponible por tiempo limitado
            </p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="rounded-lg px-3 py-2 text-white">
                <div className="rounded-lg bg-[#ef4444] p-5 text-white">
                  <p className="text-[24px] font-bold leading-none tabular-nums">{countdownHours}</p>
                </div>
                <p className="mt-1 text-[12px] font-semibold text-red-600  uppercase">Horas</p>
              </div>

              <span className="text-[#ef4444] text-[34px] font-extrabold text-center">:</span>
              <div className="rounded-lg px-3 py-2 text-white">
                <div className="rounded-lg bg-[#ef4444] p-5 text-white">
                  <p className="text-[24px] font-bold leading-none tabular-nums">
                    {String(countdownMinutes).padStart(2, '0')}
                  </p>
                </div>
                <p className="mt-1 text-[12px] font-semibold text-red-600  uppercase">Minutos</p>
              </div>

              <span className="text-[#ef4444] text-[34px] font-extrabold text-center">:</span>
              <div className="rounded-lg px-3 py-2 text-white">
                <div className="rounded-lg bg-[#ef4444] p-5 text-white">
                  <p className="text-[24px] font-bold leading-none tabular-nums">
                    {String(countdownSecs).padStart(2, '0')}
                  </p>
                </div>
                <p className="mt-1 text-[12px] font-semibold text-red-600  uppercase">Segundos</p>
              </div>
              
            </div>
            <p className="mt-3 text-[15px] font-semibold text-[#7f1d1d]">
              Proximo precio: <span className="text-[30px]">30 soles</span>
            </p>
          </div>

          <button className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-2xl bg-linear-to-r from-[#fba14c] to-[#eb7ad9] px-8 py-4 text-[18px] font-semibold text-white shadow-[0_10px_20px_rgba(244,114,182,0.35)]">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Si, quiero mi acceso de por vida por 20 soles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-3 text-center text-[13px] text-[#334155]">
            ⚡ Acceso inmediato • Contáctanos por WhatsApp
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {pricingFeatures.map((feature) => (
              <p key={feature} className="inline-flex items-center gap-2 text-[14px] text-[#0f172a]">
                <CircleCheck className="h-4 w-4 fill-[#14b8a6] text-white stroke-2" aria-hidden="true" />
                {feature}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[13px] text-[#334155]">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Testimonios
          </p>
          <h2 className="mt-3 text-[30px] font-bold tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
            Lo que dicen
            <span className="ml-2 text-[#14b8a6]">nuestros usuarios</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[14px] text-[#334155]">
            Miles de personas ya confían en BudgetTrack para gestionar sus finanzas personales y de negocio.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[#e5e7eb] bg-white p-2 shadow-md transition hover:bg-[#f8fafc] md:inline-flex"
            aria-label="Anterior"
            onClick={() =>
              setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
          >
            <ChevronLeft className="h-4 w-4 text-[#334155]" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[#e5e7eb] bg-white p-2 shadow-md transition hover:bg-[#f8fafc] md:inline-flex"
            aria-label="Siguiente"
            onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
          >
            <ChevronRight className="h-4 w-4 text-[#334155]" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-12 gap-10 md:px-4">
            {[0, 1, 2].map((offset) => {
              const t = testimonials[(testimonialIndex + offset) % testimonials.length]
              return (
                <article
                  key={`${t.name}-${offset}`}
                  className="col-span-12 rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] md:col-span-4"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.55] text-[#0f172a]">{t.quote}</p>
                  <hr className="my-4 border-[#eef2f7]" />
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#e5e7eb] bg-[#f8fafc]">
                      <User className="h-5 w-5 text-[#64748b]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-[#0f172a]">{t.name}</p>
                      <p className="text-[13px] text-[#64748b]">{t.role}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            className="rounded-full border border-[#e5e7eb] bg-white p-6 shadow-md"
            aria-label="Anterior"
            onClick={() =>
              setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
          >
            <ChevronLeft className="h-4 w-4 text-[#334155]" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full border border-[#e5e7eb] bg-white p-2 shadow-md"
            aria-label="Siguiente"
            onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
          >
            <ChevronRight className="h-4 w-4 text-[#334155]" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 md:px-4">
          {trustStats.map((item) => (
            <article
              key={item.label}
              className="col-span-12 rounded-2xl border border-[#e5e7eb] bg-white p-5 text-center shadow-[0_8px_20px_rgba(15,23,42,0.05)] sm:col-span-6 lg:col-span-3"
            >
              <p className="text-[28px] font-bold text-[#14b8a6] md:text-[34px]">{item.value}</p>
              <p className="mt-1 text-[13px] text-[#334155]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-4xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-[13px] text-[#334155]">
            <CircleHelp className="h-4 w-4" aria-hidden="true" />
            Resuelve tus dudas
          </p>
          <h2 className="mt-3 text-[34px] font-bold tracking-[-0.02em] text-[#0f172a] md:text-[44px]">
            Preguntas
            <span className="ml-2 text-[#14b8a6]">Frecuentes</span>
          </h2>
          <p className="mt-2 text-[14px] text-[#334155]">Resolvemos tus dudas sobre BudgetTrack</p>
        </div>

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index

            return (
              <article
                key={item.question}
                className="rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-7 py-7 text-left"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span className="inline-flex items-center gap-3">
                    <CircleHelp className="h-4 w-4 text-[#0f172a]" aria-hidden="true" />
                    <span className="text-[16px] font-semibold text-[#111827]">{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#111827] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#eef2f7] font-semibold px-13 py-4 text-[19px] leading-[1.4] text-[#334155]">
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
