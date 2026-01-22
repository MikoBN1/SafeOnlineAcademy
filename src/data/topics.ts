export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface Topic {
    id: string;
    icon: string;
    image: string; // Placeholder URL mainly
}

export const topics: Topic[] = [
    {
        id: 'phishing',
        icon: 'mdi-fish',
        image: '../assets/img/phishing.jpg',
    },
    {
        id: 'passwords',
        icon: 'mdi-lock',
        image: 'https://placehold.co/600x400?text=Complex+Security',
    },
    {
        id: 'hygiene',
        icon: 'mdi-shield-check',
        image: 'https://placehold.co/600x400?text=Cyber+Hygiene',
    },
    {
        id: 'social-engineering',
        icon: 'mdi-account-alert',
        image: 'https://placehold.co/600x400?text=Social+Engineering',
    },
    {
        id: 'malware',
        icon: 'mdi-virus',
        image: 'https://placehold.co/600x400?text=Malware+Defense',
    },
    {
        id: 'mobile-security',
        icon: 'mdi-cellphone-lock',
        image: 'https://placehold.co/600x400?text=Mobile+Security',
    },
    {
        id: 'physical-security',
        icon: 'mdi-door-closed-lock',
        image: 'https://placehold.co/600x400?text=Physical+Security',
    },
    {
        id: 'usb-security',
        icon: 'mdi-usb-flash-drive',
        image: 'https://placehold.co/600x400?text=USB+Security',
    },
    {
        id: 'safe-browsing',
        icon: 'mdi-web',
        image: 'https://placehold.co/600x400?text=Safe+Browsing',
    },
    {
        id: 'data-privacy',
        icon: 'mdi-incognito',
        image: 'https://placehold.co/600x400?text=Data+Privacy',
    },
    {
        id: 'remote-work',
        icon: 'mdi-laptop-account',
        image: 'https://placehold.co/600x400?text=Remote+Work',
    },
    {
        id: 'iot-security',
        icon: 'mdi-router-wireless',
        image: 'https://placehold.co/600x400?text=IoT+Security',
    },
];
