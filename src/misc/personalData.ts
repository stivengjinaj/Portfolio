import {type Contact, ProgrammingContext, type Project, type ToolsAndTechnologies} from "./types.ts";
import {LucideLinkedin, Mail, Phone} from "lucide-react";


export const programmingLanguages: ToolsAndTechnologies[] = [
    {
        type: ProgrammingContext.SOC,
        tool: [
            {
                name: "C",
                icon: "/icons/c.png",
            },
            {
                name: "C++",
                icon: "/icons/c++.png"
            },
            {
                name: "ARM Assembly",
                icon: "/icons/arm.png"
            },
            {
                name: "Rust",
                icon: "/icons/rust.png"
            }
        ]
    },
    {
        type: ProgrammingContext.AI,
        tool: [
            {
                name: "Python",
                icon: "/icons/python.png"
            },
            {
                name: "Java",
                icon: "/icons/java.png"
            }
        ]
    },
    {
        type: ProgrammingContext.WEB,
        tool: [
            {
                name: "HTML",
                icon: "/icons/html.png"
            },
            {
                name: "CSS",
                icon: "/icons/css.png"
            },
            {
                name: "JavaScript",
                icon: "/icons/javascript.png"
            },
            {
                name: "TypeScript",
                icon: "/icons/typescript.png"
            },
            {
                name: "Kotlin",
                icon: "/icons/kotlin.png"
            },
            {
                name: "Java",
                icon: "/icons/java.png"
            }
        ]
    },
    {
        type: ProgrammingContext.MOBILE,
        tool: [
            {
                name: "Kotlin",
                icon: "/icons/kotlin.png"
            },
            {
                name: "Java",
                icon: "/icons/java.png"
            },
            {
                name: "Dart",
                icon: "/icons/dart.png"
            }
        ]
    }
];

export const frameworks: ToolsAndTechnologies[] = [
    {
        type: ProgrammingContext.MOBILE,
        tool: [
            { name: 'Firebase (Auth, DB)', icon: '/icons/firebase.png' },
            { name: 'Jetpack Compose', icon: '/icons/jetpack-compose.png' },
            { name: 'Compose for Wear OS', icon: '/icons/jetpack-compose-wearos.png' },
            { name: 'React Native', icon: '/icons/react-native.png' },
            { name: 'Flutter', icon: '/icons/flutter.png' }
        ],
    },
    {
        type: ProgrammingContext.WEB,
        tool: [
            { name: 'React', icon: '/icons/react.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'Express', icon: '/icons/express.png' },
            { name: 'Spring Boot', icon: '/icons/spring-boot.png' },
        ],
    },
    {
        type: ProgrammingContext.AI,
        tool: [
            { name: 'Firebase (Machine Learning)', icon: '/icons/firebase.png' },
            { name: 'Pytorch', icon: '/icons/pytorch.png' },
            { name: 'Hadoop', icon: '/icons/hadoop.png' }
        ],
    },
    {
        type: ProgrammingContext.SOC,
        tool: [
            {
                name: "Arduino",
                icon: "/icons/arduino.png"
            }
        ],
    },
];

export const technologies: ToolsAndTechnologies[] = [
    {
        type: ProgrammingContext.AI,
        tool: [
            {
                name: 'MuJoCo',
                icon: '/icons/mujoco.png',
            },
            {
                name: 'Apache Spark',
                icon: '/icons/spark.png',
            },
        ],
    },
    {
        type: ProgrammingContext.TOOLS,
        tool: [
            {
                name: 'Git',
                icon: '/icons/git.png',
            },
            {
                name: 'GitHub',
                icon: '/icons/github.png',
            },
            {
                name: 'Apache Kafka',
                icon: '/icons/kafka.png',
            },
            {
                name: 'Docker',
                icon: '/icons/docker.png',
            },
            {
                name: 'OpenAPI',
                icon: '/icons/openapi.png',
            },
            {
                name: 'Prometheus',
                icon: '/icons/prometheus.png',
            },
            {
                name: 'Grafana',
                icon: '/icons/grafana.png',
            },
        ],
    },
    {
        type: ProgrammingContext.DATABASE,
        tool: [
            {
                name: 'SQL',
                icon: '/icons/sql.png',
            },
            {
                name: 'PostgreSQL',
                icon: '/icons/postgresql.png',
            },
            {
                name: 'Firebase',
                icon: '/icons/firebase.png',
            },
            {
                name: 'Room database',
                icon: '/icons/room.svg',
            },
        ],
    },
    {
        type: ProgrammingContext.PAYMENT_GATEWAYS,
        tool: [
            {
                name: 'PayPal',
                icon: '/icons/paypal.png',
            },
            {
                name: 'Stripe',
                icon: '/icons/stripe.png',
            },
        ],
    },
    {
        type: ProgrammingContext.DEPLOYMENT,
        tool: [
            {
                name: "Render",
                icon: '/icons/render.png'
            },
            {
                name: "Vercel",
                icon: '/icons/vercel.png'
            }
        ]
    }
];

export const projectsData: Project[] = [
    {
        projectTitle: "Stiflix",
        projectDescription_en: "Stiflix is a streaming website that offers the possibility to watch movies for free and have an account to save watched movies.",
        projectDescription_sq: "Stiflix është një website streaming që ofron mundësinë për të shikuar filma falas dhe për të pasur një llogari për të ruajtur filmat e shikuar.",
        projectDescription_it: "Stiflix è un sito web streaming che offre la possibilità di guardare film gratuitamente ed avere un account personale dove salvare i film guardati.",
        projectDescription_es: "Stiflix es un sito web que ofrece la posibilidad de ver películas gratis y hacer un account para guardar las películas vistas.",
        usedTechnologies: [
            { name: "Render", icon: '/icons/render.png' },
            { name: "Vercel", icon: '/icons/vercel.png' },
            { name: 'Firebase', icon: '/icons/firebase.png' },
            { name: 'React', icon: '/icons/react.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'Express', icon: '/icons/express.png' },
        ],
        video: "/projects/Stiflix.mp4",
        githubRepo: "https://github.com/stivengjinaj/StiFlix"
    },
    {
        projectTitle: "CarRental",
        projectDescription_en: "CarRental is a web application used by clients do car reservations with integrated Paypal payments. It is also used by the CarRental staff to manage maintenances, updates and reservations.",
        projectDescription_sq: "CarRental është një aplikacion uebi i përdorur nga klientët për të bërë rezervime makinash me pagesa të integruara Paypal. Përdoret gjithashtu nga stafi i CarRental për të menaxhuar mirëmbajtjet, përditësimet dhe rezervimet.",
        projectDescription_it: "CarRental è un'applicazione web utilizzata dai clienti per effettuare prenotazioni auto con pagamenti Paypal integrati. È anche usata dal personale di CarRental per gestire manutenzioni, aggiornamenti e prenotazioni.",
        projectDescription_es: "CarRental es una aplicación web utilizada por los clientes para hacer reservas de coches con pagos integrados de Paypal. También es utilizada por el personal de CarRental para gestionar mantenimientos, actualizaciones y reservas.",
        usedTechnologies: [
            { name: 'React', icon: '/icons/react.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'PayPal', icon: '/icons/paypal.png' },
            { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
            { name: 'Apache Kafka', icon: '/icons/kafka.png' },
            { name: 'Docker', icon: '/icons/docker.png' },
            { name: 'OpenAPI', icon: '/icons/openapi.png' },
            { name: 'Prometheus', icon: '/icons/prometheus.png' },
            { name: 'Grafana', icon: '/icons/grafana.png' },
            { name: 'Spring Boot', icon: '/icons/spring-boot.png' },
        ],
        video: "/projects/CarRental.mp4",
        githubRepo: "https://github.com/polito-WAII-2025/final-project-g21"
    },
    {
        projectTitle: "Fantashow",
        projectDescription_en: "Fantashow is a web application used to manage a football competition. It allows users to register based on a referral link system that rewards users. The competition consists in collecting points and coins to earn different rewards",
        projectDescription_sq: "Fantashow është një aplikacion uebi i përdorur për të menaxhuar një konkurs futbolli. Ai lejon përdoruesit të regjistrohen bazuar në një sistem lidhjesh referuese që shpërblen përdoruesit. Konkursi konsiston në mbledhjen e pikëve dhe monedhave për të fituar shpërblime të ndryshme",
        projectDescription_it: "Fantashow è un'applicazione web utilizzata per gestire una competizione calcistica. Permette agli utenti di registrarsi tramite un sistema di link di riferimento che premia gli utenti. La competizione consiste nel raccogliere punti e monete per guadagnare diverse ricompense.",
        projectDescription_es: "Fantashow es una aplicación web utilizada para gestionar una competición de fútbol. Permite a los usuarios registrarse mediante un sistema de enlaces de referencia que recompensa a los usuarios. La competición consiste en recolectar puntos y monedas para ganar diferentes recompensas.",
        usedTechnologies: [
            { name: 'React', icon: '/icons/react.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'Express', icon: '/icons/express.png' },
            { name: "Render", icon: '/icons/render.png' },
            { name: 'Firebase', icon: '/icons/firebase.png' },
        ],
        video: "/projects/Fantashow.mp4",
        githubRepo: "https://github.com/stivengjinaj/fantashow"
    },
    {
        projectTitle: "Out of Kilter",
        projectDescription_en: "The out-of-kilter algorithm is a primal-dual algorithm. It adjusts edges working on the primal problem and the nodes working on the dual problem in order to find a feasible solution, and then to optimize the problem.",
        projectDescription_sq: "Algoritmi 'out-of-kilter' është një algoritm primal-dual. Ai rregullon skajet që punojnë në problemin primal dhe nyjet që punojnë në problemin dual, në mënyrë që të gjejë një zgjidhje të realizueshme, dhe më pas të optimizojë problemin.",
        projectDescription_it: "L'algoritmo out-of-kilter è un algoritmo primale-duale. Regola gli archi che lavorano sul problema primale e i nodi che lavorano sul problema duale al fine di trovare una soluzione fattibile, e quindi ottimizzare il problema.",
        projectDescription_es: "El algoritmo 'out-of-kilter' es un algoritmo primal-dual. Ajusta los bordes que trabajan en el problema primal y los nodos que trabajan en el problema dual para encontrar una solución factible, y luego optimizar el problema.",
        usedTechnologies: [
            { name: "Python", icon: "/icons/python.png" },
        ],
        video: "/projects/OOK.mp4",
        githubRepo: "https://github.com/stivengjinaj/Out-of-kilter"
    },
    {
        projectTitle: "Archiumion",
        projectDescription_en: "Archiumion is an Android social network designed for architects to share their work. A community where architects can connect with each other and help each other.",
        projectDescription_sq: "Archiumion është një rrjet social Android i krijuar për arkitektët për të ndarë punën e tyre. Një komunitet ku arkitektët mund të lidhen dhe të ndihmojnë njëri-tjetrin.",
        projectDescription_it: "Archiumion è un social network Android progettato per architetti per condividere il loro lavoro. Una comunità dove gli architetti possono connettersi e aiutarsi a vicenda.",
        projectDescription_es: "Archiumion es una red social de Android diseñada para que los arquitectos compartan su trabajo. Una comunidad donde los arquitectos pueden conectarse y ayudarse mutuamente.",
        usedTechnologies: [
            { name: "Kotlin", icon: "/icons/kotlin.png"},
            { name: 'Jetpack Compose', icon: '/icons/jetpack-compose.png' },
            { name: 'Room database', icon: '/icons/room.svg',},
            { name: 'Firebase', icon: '/icons/firebase.png'},
        ],
        video: "/projects/Archiumion.mp4",
        githubRepo: "https://github.com/stivengjinaj/Archiumion"
    },
    {
        projectTitle: "ItaLearn",
        projectDescription_en: "ItaLearn is an Android application that targets users in immigration contexts and helps the learn the very basics of italian language easily. It also offers emergency help phrases that might be useful in different contexts.",
        projectDescription_sq: "ItaLearn është një aplikacion Android që synon përdoruesit në kontekste imigrimi dhe i ndihmon ata të mësojnë bazat e gjuhës italiane lehtësisht. Ai gjithashtu ofron fraza ndihme emergjente që mund të jenë të dobishme në kontekste të ndryshme.",
        projectDescription_it: "ItaLearn è un'applicazione Android che si rivolge agli utenti in contesti di immigrazione e li aiuta a imparare facilmente le basi della lingua italiana. Offre anche frasi di aiuto di emergenza che potrebbero essere utili in diversi contesti.",
        projectDescription_es: "ItaLearn es una aplicación de Android dirigida a usuarios en contextos de inmigración y les ayuda a aprender los conceptos básicos del idioma italiano fácilmente. También ofrece frases de ayuda de emergencia que pueden ser útiles en diferentes contextos.",
        usedTechnologies: [
            { name: "Kotlin", icon: "/icons/kotlin.png"},
            { name: 'Jetpack Compose', icon: '/icons/jetpack-compose.png' },
            { name: 'Room database', icon: '/icons/room.svg',},
            { name: 'Firebase', icon: '/icons/firebase.png'},
        ],
        image: "/projects/ItaLearn2.png",
        githubRepo: "https://github.com/stivengjinaj/Language_App"
    },
    {
        projectTitle: "Horus",
        projectDescription_en: "Horus is a WearOS application used to produce different flashlight modes on user's WearOS smartwatch.",
        projectDescription_sq: "Horus është një aplikacion WearOS i përdorur për të prodhuar mënyra të ndryshme elektrik dore në orën inteligjente WearOS të përdoruesit.",
        projectDescription_it: "Horus è un'applicazione WearOS utilizzata per produrre diverse modalità torcia sullo smartwatch WearOS dell'utente.",
        projectDescription_es: "Horus es una aplicación de WearOS utilizada para producir diferentes modos de linterna en el smartwatch WearOS del usuario.",
        usedTechnologies: [
            { name: "Kotlin", icon: "/icons/kotlin.png"},
            { name: 'Compose for WearOS', icon: '/icons/jetpack-compose-wearos.png' },
        ],
        image: "/projects/Horus.png",
        githubRepo: "https://github.com/stivengjinaj/Horus"
    },
];

export const contacts: Contact[] = [
    {
        icon: Phone,
        label_en: "Phone",
        label_sq: "Telefon",
        label_it: "Telefono",
        label_es: "Teléfono",
        value: [
            "+39 351 840 9127",
            "+355 69 374 9509"
        ],
        type: 'phone'
    },
    {
        icon: Mail,
        label_en: "Email",
        label_sq: "Email",
        label_it: "Email",
        label_es: "Email",
        value: [
            "stivengjinaj@hotmail.com",
            "stivengjinaj2002@gmail.com"
        ],
        type: 'email'
    },
    {
        icon: LucideLinkedin,
        label_en: "LinkedIn",
        label_sq: "LinkedIn",
        label_it: "LinkedIn",
        label_es: "LinkedIn",
        value: [
            "https://www.linkedin.com/in/stiven-gjinaj-835134161/",
        ],
        type: 'linkedin'
    }
];
