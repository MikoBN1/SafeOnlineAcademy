export interface EmailScenario {
    id: number;
    senderEmail: string;
    date: string;
    isPhishing: boolean;
    // Keys for the UI to highlight if the user gets it wrong (optional)
    redFlags?: string[];
}

export const emailScenarios: EmailScenario[] = [
    {
        id: 1,
        senderEmail: "hr-update@company-internal-portal.com",
        date: "Today, 9:41 AM",
        isPhishing: true,
        redFlags: ["urgency", "generic", "suspiciousLink"]
    },
    {
        id: 2,
        senderEmail: "support@netflix.com",
        date: "Yesterday, 6:15 PM",
        isPhishing: false,
    },
    {
        id: 3,
        senderEmail: "ceo.michael.scott@gmail.com",
        date: "Today, 10:05 AM",
        isPhishing: true,
        redFlags: ["personalEmail", "bypassingProcedure", "highValue"]
    },
    {
        id: 4,
        senderEmail: "helpdesk@yourcompany.com",
        date: "Monday, 8:00 AM",
        isPhishing: false,
    },
    {
        id: 5,
        senderEmail: "tracking-update-x89@amzon-logistics-support.net",
        date: "Today, 11:30 AM",
        isPhishing: true,
        redFlags: ["typosquatting", "feeRequest"]
    }
];
