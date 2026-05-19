import { MdComputer, MdOutlineAccountBalance } from "react-icons/md";
import { FaFileInvoiceDollar, FaBuilding } from "react-icons/fa";
import { BsFileEarmarkText, BsClipboardCheck, BsShop } from "react-icons/bs";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { TbFileAlert, TbReceiptTax, TbFileDescription, TbScale } from "react-icons/tb";
import { RiGovernmentLine } from "react-icons/ri";
import { PiWarningCircle } from "react-icons/pi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuKeyRound } from "react-icons/lu";
const ServicesList = [
    {
        icon: <LuKeyRound />,
        nameService: 'Obtención de CUIT y Clave Fiscal',
        description: 'Obtención de CUIT, blanqueo y elevación de nivel de seguridad de Clave Fiscal en ARCA.'
    },
    {
        icon: <MdComputer />,
        nameService: 'Alta en Monotributo',
        description: 'Encuadre inicial en la categoría correcta según tus ingresos, superficie y energía. Configuración del domicilio fiscal electrónico.'
    },
    {
        icon: <BsFileEarmarkText />,
        nameService: 'Alta en Ingresos Brutos',
        description: 'Inscripción en el Régimen Simplificado o General de la DPR de Jujuy o DGR de Salta, incluyendo Convenio Multilateral.'
    },
    {
        icon: <BsShop />,
        nameService: 'Habilitación de Facturación',
        description: 'Configuración del sistema Comprobantes en Línea de ARCA y parametrización de Facturador Web o APIs de facturación.'
    },
    {
        icon: <HiOutlineDocumentSearch />,
        nameService: 'Diagnóstico Fiscal',
        description: 'Análisis completo de tu situación en ARCA: Nuestra Parte, Cuentas Tributarias y Mis Facilidades para determinar deudas reales.'
    },
    {
        icon: <TbFileAlert />,
        nameService: 'Levantamiento de CUIT',
        description: 'Reactivación de CUITs limitadas por falta de presentación de declaraciones juradas o inconsistencias ante ARCA.'
    },
    {
        icon: <LiaMoneyCheckAltSolid />,
        nameService: 'Planes de Facilidades de Pago',
        description: 'Confección y presentación de planes de regularización en ARCA o moratorias locales en la DPR de Jujuy o DGR de Salta.'
    },
    {
        icon: <PiWarningCircle />,
        nameService: 'Contestación de Intimaciones',
        description: 'Redacción de descargos formales ante notificaciones en el Domicilio Fiscal Electrónico por desvíos en el IVA o fiscalizaciones.'
    },
    {
        icon: <BsClipboardCheck />,
        nameService: 'Certificación de Ingresos',
        description: 'Preparación del perfil de ingresos con informe de contador público según RT 37, requerido por entidades bancarias o comerciales.'
    },
    {
        icon: <MdOutlineAccountBalance />,
        nameService: 'Manifestación de Bienes',
        description: 'Estado patrimonial detallado para solicitud de créditos prendarios o hipotecarios ante entidades financieras.'
    },
    {
        icon: <FaBuilding />,
        nameService: 'Certificación de Origen de Fondos',
        description: 'Requerida por la UIF, escribanías o concesionarias para compra de vehículos, inmuebles o transacciones financieras.'
    },
    {
        icon: <TbScale />,
        nameService: 'Certificación de Ventas MiPyME',
        description: 'Certificación para la categorización o renovación del Certificado MiPyME ante la Secretaría de la Pequeña y Mediana Empresa.'
    },
    // SERVICIOS ANUALES
    {
        icon: <TbReceiptTax />,
        nameService: 'Recategorización de Monotributo',
        description: 'Evaluación semestral de parámetros de los últimos 12 meses y ejecución del trámite de recategorización en enero y julio.'
    },
    {
        icon: <FaFileInvoiceDollar />,
        nameService: 'Ganancias y Bienes Personales',
        description: 'Declaraciones juradas anuales para personas humanas que superan los mínimos no imponibles o empleados en relación de dependencia.'
    },
    {
        icon: <TbFileDescription />,
        nameService: 'Convenio Multilateral CM05',
        description: 'Determinación de coeficientes unificados para Jujuy, Salta y demás jurisdicciones involucradas en el período fiscal anual.'
    },
    {
        icon: <RiGovernmentLine />,
        nameService: 'Planificación Fiscal para PyMEs',
        description: 'Diagnóstico sobre la estructura societaria más eficiente (SAS, SRL) para mitigar el impacto impositivo y previsional.'
    },
    {
        icon: <HiOutlineDocumentSearch />,
        nameService: 'Auditoría de Circuitos Administrativos',
        description: 'Revisión de facturación y retenciones sufridas (SIRCREB, retenciones locales) para optimizar saldos a favor inmovilizados.'
    },
]

export default ServicesList;