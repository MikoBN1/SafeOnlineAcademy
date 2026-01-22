export interface EmailScenario {
    id: number;
    senderName: string;
    senderEmail: string;
    subject: string;
    body: string; // HTML content supported
    date: string;
    isPhishing: boolean;
    explanation: string;
    // Hints for the UI to highlight if the user gets it wrong (optional)
    redFlags?: string[];
}

export const emailScenarios: EmailScenario[] = [
    {
        id: 1,
        senderName: "HR Department",
        senderEmail: "hr-update@company-internal-portal.com",
        subject: "Action Required: Update Your Direct Deposit Info",
        date: "Today, 9:41 AM",
        body: `
            <p>Dear Employee,</p>
            <p>We are switching to a new payroll system for the upcoming month.</p>
            <p>Please <strong>click here</strong> to confirm your direct deposit details immediately to ensure you get paid on time.</p>
            <p>Failure to update your information by 5:00 PM today will result in a delay in your paycheck.</p>
            <br/>
            <p>Regards,<br/>Human Resources Team</p>
        `,
        isPhishing: true,
        explanation: "Phishing! Look at the urgency ('Failure to update... delay in paycheck') and the generic greeting ('Dear Employee'). Also, HR would rarely ask for sensitive banking changes via a link in an unsolicited email.",
        redFlags: ["Urgency/Threats", "Generic Greeting", "Suspicious Link"]
    },
    {
        id: 2,
        senderName: "Netflix Support",
        senderEmail: "support@netflix.com",
        subject: "New sign-in to your account",
        date: "Yesterday, 6:15 PM",
        body: `
            <p>Hi John,</p>
            <p>We noticed a new sign-in to your Netflix account from a device in <strong>Moscow, Russia</strong>.</p>
            <p>If this was you, you can ignore this email.</p>
            <p>If this wasn't you, please reset your password immediately to secure your account.</p>
            <br/>
            <p>The Netflix Team</p>
        `,
        isPhishing: false,
        explanation: "Safe. This is a standard security alert. It addresses the user by name (if known) and doesn't demand immediate clicking of a masked link. It alerts you to activity but doesn't threaten you.",
    },
    {
        id: 3,
        senderName: "CEO - Michael Scott",
        senderEmail: "ceo.michael.scott@gmail.com",
        subject: "Urgent Wire Transfer Request",
        date: "Today, 10:05 AM",
        body: `
            <p>Hey,</p>
            <p>I'm in a meeting right now and can't talk, but I need you to process a wire transfer for a new vendor ASAP.</p>
            <p>It's very time-sensitive. I will send the invoice details in the next email.</p>
            <p>Please confirm you received this.</p>
            <br/>
            <p>Sent from my iPhone</p>
        `,
        isPhishing: true,
        explanation: "Phishing (Whaling)! Check the sender email. The CEO wouldn't use a personal Gmail account for official wire transfers. The request bypasses standard procedures and relies on urgency and authority.",
        redFlags: ["Personal Email Domain", "Bypassing Procedure", "High-Value Request"]
    },
    {
        id: 4,
        senderName: "IT Service Desk",
        senderEmail: "helpdesk@yourcompany.com",
        subject: "Scheduled Maintenance Notification",
        date: "Monday, 8:00 AM",
        body: `
            <p>Team,</p>
            <p>We will be performing scheduled maintenance on the file servers this Saturday from 10:00 PM to 2:00 AM.</p>
            <p>Services may be intermittent during this time. No action is required from you.</p>
            <br/>
            <p>IT Support</p>
        `,
        isPhishing: false,
        explanation: "Safe. This is an informational email. It does not ask you to click a link, download an attachment, or provide a password.",
    },
    {
        id: 5,
        senderName: "Amazon Delivery",
        senderEmail: "tracking-update-x89@amzon-logistics-support.net",
        subject: "Failed Delivery Attempt: #839201",
        date: "Today, 11:30 AM",
        body: `
            <p>We tried to deliver your package today but no one was home.</p>
            <p>To reschedule delivery, please pay the $1.99 redelivery fee via the link below.</p>
            <p><a href='#'>Click here to pay and reschedule</a></p>
            <br/>
            <p>Thank you for shopping with us.</p>
        `,
        isPhishing: true,
        explanation: "Phishing! Look at the domain 'amzon-logistics-support.net' - that is NOT Amazon. Also, asking for a small fee for redelivery is a common scam to steal credit card numbers.",
        redFlags: ["Typosquatting/Fake Domain", "Fee Request"]
    }
];
