import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ddhruv8824@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Dhruv, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.linkedin.com/in/dhruv-suthar-57512b232/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ddhruv8824' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/dhruv-suthar-57512b232/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Crypto Wallet',
        slug: 'crypto-wallet',
        liveUrl: 'https://crypto-wallet-tau-five.vercel.app/',
        year: 2025,
        description: `
   A sleek, user-friendly Web3 wallet built with a modern front-end to deliver a seamless experience. Easily connect to dApps, manage crypto assets, and interact with blockchain networks—all with a clean, intuitive interface designed for speed and simplicity. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Wallet Connect: Seamlessly connect to dApps with WalletConnect</li>
        <li>💰 Crypto Management: Securely store, send, and receive crypto assets</li>
        <li>� Transaction History: Track all your crypto transactions</li>
        <li>� Multi-Signature: Enhanced security with multi-signature transactions</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul>
      
      
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added WalletConnect for seamless wallet integration</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React Bits',
            'Tailwind CSS',
            'Framer Motion',
            'Vite',
        ],
        thumbnail: '/projects/images/CryptoWalletLong.png',
        longThumbnail: '/projects/images/CryptoWalletLong.png',
        images: [
            '/projects/images/CryptoWallet1.png',
            '/projects/images/CryptoWallet2.png',
            '/projects/images/CryptoWallet3.png',
        ],
    },
    {
        title: 'Fitness Buddy App',
        slug: 'fitness-buddy-app',
        techStack: ['React', 'Redux', 'debouncing', 'Api Integration'],
        thumbnail: '/projects/images/FitnessBuddyLong.png',
        longThumbnail: '/projects/images/FitnessBuddyLong.png',
        images: [
            '/projects/images/FitnessBuddy1.png',
            '/projects/images/FitnessBuddy2.png',
            '/projects/images/FitnessBuddy3.png',
        ],
        liveUrl: 'https://fitness-buddy-alpha.vercel.app',
        year: 2024,
        description: `Your personal companion for health and wellness. Fitness Buddy helps you track workouts, monitor progress, and stay motivated with personalized fitness plans. Whether you're a beginner or a pro, this app supports your journey with smart features, a clean interface, and real-time insights to keep you moving toward your goals.`,
        role: `As the frontend developer in a team of four, I: <br/>
        - Built the frontend from scratch using React, Redux  and  CSS.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Puma Clone',
        slug: 'puma-clone',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/images/PumaCloneLong.png',
        longThumbnail: '/projects/images/PumaCloneLong.png',
        images: [
            '/projects/images/PumaClone1.png',
            '/projects/images/PumaClone2.png',
            '/projects/images/PumaClone3.png',
        ],
        liveUrl: 'https://darling-pavlova-f90572.netlify.app/',
        year: 2024,
        description:
            'This is a Puma website clone built using React.js, CSS, and JavaScript. It replicates the design and functionality of the official Puma e-commerce website, providing a responsive and user-friendly shopping experience.',
        role: `As the developer I:<br/>
        - Designed and developed the platform end-to-end using HTML, CSS, and JavaScript.<br/>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Inspiron Labs',
        duration: 'Feb 2025 - Present',
    },
];
