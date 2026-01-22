export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
    explanation: string;
}

export interface Topic {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string; // Placeholder URL mainly
    content: string; // Markdown or simple text
    questions: Question[];
}

export const topics: Topic[] = [
    {
        id: 'phishing',
        title: 'Phishing Attacks',
        description: 'Learn how to identify and avoid phishing scams.',
        icon: 'mdi-fish',
        image: 'https://placehold.co/600x400?text=Phishing+Defense',
        content: `
      <h2>What is Phishing?</h2>
      <p>Phishing is a cybercrime in which a target or targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.</p>
      
      <h3>Common Signs of Phishing</h3>
      <ul>
        <li><strong>Generic Greetings:</strong> Phishing emails often use generic greetings like "Dear Customer" instead of your name.</li>
        <li><strong>Urgent or Threatening Language:</strong> Scammers try to create a sense of urgency to make you act quickly without thinking.</li>
        <li><strong>Suspicious Links:</strong> Hover over links to see the actual URL. If it looks strange or doesn't match the company's website, don't click it.</li>
        <li><strong>Spelling and Grammar Mistakes:</strong> legitimate companies usually have professional communication.</li>
      </ul>

      <h3>How to Protect Yourself</h3>
      <p>Always verify the sender's email address. Enable Two-Factor Authentication (2FA) on your accounts. If you suspect an email is phishing, contact the company directly using official contact information.</p>
    `,
        questions: [
            {
                id: 1,
                text: 'What is a common sign of a phishing email?',
                options: [
                    'Personalized greeting with your full name',
                    'Urgent language demanding immediate action',
                    'A link to the official company website',
                    'No spelling errors',
                ],
                correctAnswer: 1,
                explanation: 'Phishing emails often create urgency (e.g., "Account suspended!") to manipulate you into acting fast.',
            },
            {
                id: 2,
                text: 'You receive an email from "supprt@not-netflix.com" asking to update payment. What should you do?',
                options: [
                    'Click the link and update payment',
                    'Reply to the email asking if it is real',
                    'Mark as spam and do not click anything',
                    'Forward it to your friends',
                ],
                correctAnswer: 2,
                explanation: 'The email address is misspelled and suspicious. Mark it as spam/junk and do not interact.',
            },
            {
                id: 3,
                text: 'What is the safest way to check if a link is legitimate?',
                options: [
                    'Click it and see where it goes',
                    'Hover over the link to preview the URL',
                    'Ask a friend to click it',
                    'Copy and paste it into a search engine',
                ],
                correctAnswer: 1,
                explanation: 'Hovering over the link allows you to see the actual destination URL without clicking it.',
            },
        ],
    },
    {
        id: 'passwords',
        title: 'Password Security',
        description: 'Best practices for creating and managing strong passwords.',
        icon: 'mdi-lock',
        image: 'https://placehold.co/600x400?text=Strong+Passwords',
        content: `
      <h2>The Importance of Strong Passwords</h2>
      <p>Passwords are the first line of defense against unauthorized access to your accounts. A weak password is like leaving your house key under the doormat.</p>

      <h3>Characteristics of a Strong Password</h3>
      <ul>
        <li><strong>Length:</strong> At least 12-14 characters long.</li>
        <li><strong>Complexity:</strong> definite mix of upper/lower case letters, numbers, and symbols.</li>
        <li><strong>Uniqueness:</strong> Never use the same password for different accounts.</li>
      </ul>

      <h3>Password Managers</h3>
      <p>It is impossible to remember unique, complex passwords for every account. Use a Password Manager to generate and store them securely.</p>
    `,
        questions: [
            {
                id: 1,
                text: 'Which of the following is the strongest password?',
                options: [
                    'Password123',
                    'P@ssword!',
                    'Tr0ub4dor&3',
                    'X7#mK9$vL2@pQz',
                ],
                correctAnswer: 3,
                explanation: 'It is long, random, and includes a mix of character types.',
            },
            {
                id: 2,
                text: 'Why should you avoiding using the same password everywhere?',
                options: [
                    'It is harder to remember',
                    'If one account is breached, all your accounts are at risk',
                    'Password managers usually charge extra for duplicates',
                    'It is easier to type',
                ],
                correctAnswer: 1,
                explanation: 'Credential stuffing attacks try your stolen password on many other sites. Unique passwords prevent this chain reaction.',
            },
        ],
    },
    {
        id: 'hygiene',
        title: 'Cyber Hygiene',
        description: 'Maintain healthy habits for your digital life.',
        icon: 'mdi-shield-check',
        image: 'https://placehold.co/600x400?text=Cyber+Hygiene',
        content: `
      <h2>What is Cyber Hygiene?</h2>
      <p>Cyber hygiene refers to the steps that users of computers and other devices take to maintain system health and improve online security.</p>

      <h3>Key Practices</h3>
      <ul>
        <li><strong>Software Updates:</strong> Keep your OS and apps updated to patch security vulnerabilities.</li>
        <li><strong>Backups:</strong> Regularly back up important data to an external drive or cloud.</li>
        <li><strong>Antivirus:</strong> Use reputable antivirus software and scan regularly.</li>
        <li><strong>Public Wi-Fi:</strong> Avoid accessing sensitive data (banking) on public Wi-Fi without a VPN.</li>
      </ul>
    `,
        questions: [
            {
                id: 1,
                text: 'How often should you update your software?',
                options: [
                    'Once a year',
                    'Only when it stops working',
                    'As soon as updates are available',
                    'Never',
                ],
                correctAnswer: 2,
                explanation: 'Updates often contain critical security patches that fix known vulnerabilities.',
            },
            {
                id: 2,
                text: 'Is it safe to do online banking on a coffee shop public Wi-Fi?',
                options: [
                    'Yes, if the website has HTTPS',
                    'No, public Wi-Fi can be intercepted; use a VPN or mobile data',
                    'Yes, if you use a strong password',
                    'Only if you are in Incognito mode',
                ],
                correctAnswer: 1,
                explanation: 'Public Wi-Fi is often unencrypted or easily snooped. A VPN encrypts your traffic.',
            },
        ],
    },
];
