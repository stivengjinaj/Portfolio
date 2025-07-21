import {ProgrammingContext, type ToolsAndTechnologies} from "./types.ts";


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

export const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        demoType: "video" as const,
        demoUrl: "https://via.placeholder.com/400x200/6366f1/white?text=Demo+Video"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with interactive maps and forecasts",
        technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
        demoType: "gif" as const,
        demoUrl: "https://via.placeholder.com/400x200/8b5cf6/white?text=Demo+GIF"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        demoType: "video" as const,
        demoUrl: "https://via.placeholder.com/400x200/a855f7/white?text=Demo+Video"
    }
];
