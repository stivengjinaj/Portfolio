import {ProgrammingContext, type Project, type ToolsAndTechnologies} from "./types.ts";
import {Linkedin, Mail, Phone} from "lucide-react";


export const programmingLanguages: ToolsAndTechnologies[] = [
    {
        type: ProgrammingContext.SOC,
        tool: [
            {
                name: "C",
                icon: "https://cdn.iconscout.com/icon/free/png-256/free-c-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175247.png",
            },
            {
                name: "C++",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
            },
            {
                name: "ARM Assembly",
                icon: "https://icons.iconarchive.com/icons/chrisbanks2/cold-fusion-hd/128/cpu-ARM-icon.png"
            },
            {
                name: "Rust",
                icon: "https://rustacean.net/assets/rustacean-flat-noshadow.png"
            }
        ]
    },
    {
        type: ProgrammingContext.AI,
        tool: [
            {
                name: "Python",
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
            },
            {
                name: "Java",
                icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
            }
        ]
    },
    {
        type: ProgrammingContext.WEB,
        tool: [
            {
                name: "HTML",
                icon: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png"
            },
            {
                name: "CSS",
                icon: "https://cdn.iconscout.com/icon/free/png-256/free-css-icon-download-in-svg-png-gif-file-formats--logo-logos-pack-icons-722685.png?f=webp"
            },
            {
                name: "JavaScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            },
            {
                name: "TypeScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            },
            {
                name: "Kotlin",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"
            },
            {
                name: "Java",
                icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
            }
        ]
    },
    {
        type: ProgrammingContext.MOBILE,
        tool: [
            {
                name: "Kotlin",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"
            },
            {
                name: "Java",
                icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
            },
            {
                name: "Dart",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png"
            }
        ]
    }
];

export const frameworks: ToolsAndTechnologies[] = [
    {
        type: ProgrammingContext.MOBILE,
        tool: [
            { name: 'Firebase (Auth, DB)', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
            { name: 'Jetpack Compose', icon: 'https://logo.svgcdn.com/d/jetpackcompose-original-8x.png' },
            { name: 'Compose for Wear OS', icon: 'https://files.koenig.kodeco.com/uploads/2022/11/jetpack_compose_wearos_featured_banner@1.5x.png' },
            { name: 'Reac Native', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Flutter', icon: 'https://www.cdnlogo.com/logos/f/30/flutter.svg' }
        ],
    },
    {
        type: ProgrammingContext.WEB,
        tool: [
            { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Bootstrap', icon: 'https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png' },
            { name: 'GSAP', icon: 'https://static.wikia.nocookie.net/logopedia/images/a/a5/GSAP_2023.svg/revision/latest/scale-to-width-down/300?cb=20231024190052' },
            { name: 'Express', icon: 'https://img.icons8.com/color/512/express-js.png' },
            { name: 'Spring Boot', icon: 'https://img.icons8.com/color/200/spring-logo.png' },
        ],
    },
    {
        type: ProgrammingContext.AI,
        tool: [
            { name: 'Firebase (Machine Learning)', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
            { name: 'Pytorch', icon: 'https://img.icons8.com/fluent/200/pytorch.png' },
            { name: 'Hadoop', icon: 'https://img.icons8.com/?size=512&id=69132&format=png'}
        ],
    },
    {
        type: ProgrammingContext.SOC,
        tool: [
            {
                name: "Arduino",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png"
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
                icon: 'https://styles.redditmedia.com/t5_86iw6t/styles/communityIcon_4nalufx26dsa1.JPG',
            },
            {
                name: 'Apache Spark',
                icon: 'https://images.icon-icons.com/2699/PNG/512/apache_spark_logo_icon_170560.png'
            },
        ],
    },
    {
        type: ProgrammingContext.TOOLS,
        tool: [
            {
                name: 'Git',
                icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
            },
            {
                name: 'GitHub',
                icon: 'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png',
            },
            {
                name: 'Apache Kafka',
                icon: 'https://images.icon-icons.com/2248/PNG/512/apache_kafka_icon_138937.png',
            },
            {
                name: 'Docker',
                icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
            },
            {
                name: 'OpenAPI',
                icon: 'https://www.esegece.com/images/easyblog_articles/232/b2ap3_small_openapi.png',
            },
            {
                name: 'Prometheus',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/800px-Prometheus_software_logo.svg.png',
            },
            {
                name: 'Grafana',
                icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/grafana-ipeuuhi0ws3fbikv7ojrk.png/grafana-625ktq51icaz2carazn0n.png?_a=DATAg1AAZAA0',
            },
        ],
    },
    {
        type: ProgrammingContext.DATABASE,
        tool: [
            {
                name: 'SQL',
                icon: 'https://cdn-icons-png.flaticon.com/512/9544/9544010.png',
            },
            {
                name: 'PostgreSQL',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
            },
            {
                name: 'Firebase',
                icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
            },
            {
                name: 'Room database',
                icon: 'https://www.kodeco.com/assets/murakami/category-icons/category-saving-data-persistence-android-9dc9eed34348d1d06a4365379fba3a54aa7aabd05d828dbb4de97349126d9718.svg',
            },
        ],
    },
    {
        type: ProgrammingContext.PAYMENT_GATEWAYS,
        tool: [
            {
                name: 'PayPal',
                icon: 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
            },
            {
                name: 'Stripe',
                icon: 'https://cdn.iconscout.com/icon/free/png-256/free-stripe-logo-icon-download-in-svg-png-gif-file-formats--flat-social-media-branding-pack-logos-icons-498440.png',
            },
        ],
    },
    {
        type: ProgrammingContext.DEPLOYMENT,
        tool: [
            {
                name: "Render",
                icon: 'https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png'
            },
            {
                name: "Vercel",
                icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png'
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
            { name: "Render", icon: 'https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png'},
            { name: "Vercel", icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png' },
            { name: 'Firebase', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
            { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Bootstrap', icon: 'https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png' },
            { name: 'GSAP', icon: 'https://static.wikia.nocookie.net/logopedia/images/a/a5/GSAP_2023.svg/revision/latest/scale-to-width-down/300?cb=20231024190052' },
            { name: 'Express', icon: 'https://img.icons8.com/color/512/express-js.png' },
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
            { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Bootstrap', icon: 'https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png' },
            { name: 'GSAP', icon: 'https://static.wikia.nocookie.net/logopedia/images/a/a5/GSAP_2023.svg/revision/latest/scale-to-width-down/300?cb=20231024190052' },
            { name: 'PayPal', icon: 'https://cdn-icons-png.flaticon.com/512/174/174861.png'},
            { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'},
            { name: 'Apache Kafka', icon: 'https://images.icon-icons.com/2248/PNG/512/apache_kafka_icon_138937.png'},
            { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png'},
            { name: 'OpenAPI', icon: 'https://www.esegece.com/images/easyblog_articles/232/b2ap3_small_openapi.png'},
            { name: 'Prometheus', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/800px-Prometheus_software_logo.svg.png'},
            { name: 'Grafana', icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/grafana-ipeuuhi0ws3fbikv7ojrk.png/grafana-625ktq51icaz2carazn0n.png?_a=DATAg1AAZAA0'},
            { name: 'Spring Boot', icon: 'https://img.icons8.com/color/200/spring-logo.png'},
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
            { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Bootstrap', icon: 'https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png' },
            { name: 'GSAP', icon: 'https://static.wikia.nocookie.net/logopedia/images/a/a5/GSAP_2023.svg/revision/latest/scale-to-width-down/300?cb=20231024190052' },
            { name: 'Express', icon: 'https://img.icons8.com/color/512/express-js.png' },
            { name: "Render", icon: 'https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png'},
            { name: 'Firebase', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
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
            { name: "Python", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png" },
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
            { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"},
            { name: 'Jetpack Compose', icon: 'https://logo.svgcdn.com/d/jetpackcompose-original-8x.png' },
            { name: 'Room database', icon: 'https://www.kodeco.com/assets/murakami/category-icons/category-saving-data-persistence-android-9dc9eed34348d1d06a4365379fba3a54aa7aabd05d828dbb4de97349126d9718.svg',},
            { name: 'Firebase', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'},
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
            { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"},
            { name: 'Jetpack Compose', icon: 'https://logo.svgcdn.com/d/jetpackcompose-original-8x.png' },
            { name: 'Room database', icon: 'https://www.kodeco.com/assets/murakami/category-icons/category-saving-data-persistence-android-9dc9eed34348d1d06a4365379fba3a54aa7aabd05d828dbb4de97349126d9718.svg',},
            { name: 'Firebase', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'},
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
            { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"},
            { name: 'Compose for WearOS', icon: 'https://logo.svgcdn.com/d/jetpackcompose-original-8x.png' },
        ],
        image: "/projects/Horus.png",
        githubRepo: "https://github.com/stivengjinaj/Horus"
    },
];

export const contacts = [
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
    },
    {
        icon: Linkedin,
        label_en: "LinkedIn",
        label_sq: "LinkedIn",
        label_it: "LinkedIn",
        label_es: "LinkedIn",
        value: ["https://www.linkedin.com/in/stiven-gjinaj-835134161/"],
    }
];
