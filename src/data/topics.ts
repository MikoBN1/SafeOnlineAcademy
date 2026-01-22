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
        description: 'Master the art of spotting digital deception and email fraud.',
        icon: 'mdi-fish',
        image: '../assets/img/phishing.jpg',
        content: `
      <h2>The Anatomy of a Phish</h2>
      <p>Phishing isn't just about bad grammar anymore. Modern attacks are sophisticated, often using "Spear Phishing" tactics where the attacker researches you specifically before sending the email.</p>
      
      <h3>Types of Phishing</h3>
      <ul>
        <li><strong>Spear Phishing:</strong> Targeted at a specific individual using real details (e.g., mentioning your boss's name).</li>
        <li><strong>Whaling:</strong> Targeting high-profile executives (CEOs, CFOs) to authorize massive financial transfers.</li>
        <li><strong>Clone Phishing:</strong> The attacker copies a legitimate email you previously received but swaps the link for a malicious one.</li>
      </ul>

      <h3>🕵️‍♂️ The Red Flag Checklist</h3>
      <p>Before clicking, perform these checks:</p>
      <ul>
        <li><strong>The "From" Domain:</strong> Is it <code style="background:#eee;padding:2px;">support@netflix.com</code> or <code style="background:#eee;padding:2px;">support@netflix-security-update.com</code>? Look for subtle misspellings (Typosquatting) like <em>rn</em>icrosoft.com (r+n looks like m).</li>
        <li><strong>Emotional Triggers:</strong> Fear ("Your account is banned"), Greed ("You won an iPhone"), or Curiosity ("Look at these photos of you") are used to bypass your critical thinking.</li>
        <li><strong>The Hover Test:</strong> On desktop, hover your mouse over the button. Does the preview URL match the text?</li>
      </ul>

      <div style="background-color: #f0f4f8; padding: 15px; border-left: 5px solid #007bff; margin-top: 10px;">
        <strong>💡 Did You Know?</strong> <br/>
        90% of all cyberattacks start with a phishing email. Humans are the "softest" target in any security system.
      </div>
    `,
        questions: [
            {
                id: 1,
                text: 'What is the difference between generic Phishing and Spear Phishing?',
                options: [
                    'Spear phishing involves actual spears',
                    'Generic phishing targets everyone; Spear phishing targets a specific person with researched details',
                    'Spear phishing is only done via SMS',
                    'There is no difference'
                ],
                correctAnswer: 1,
                explanation: 'Spear phishing is dangerous because it uses personal details (name, job title, hobbies) to make the lie believable.',
            },
            {
                id: 2,
                text: 'You receive an email from "supprt@micros0ft.com". What is this technique called?',
                options: [
                    'Domain Spoofing / Typosquatting',
                    'Whaling',
                    'Vishing',
                    'DDoS'
                ],
                correctAnswer: 0,
                explanation: 'Attackers register domains that look visually similar to real ones (using a zero instead of an O) to trick your eyes.',
            },
            {
                id: 3,
                text: 'What is the safest way to verify a suspicious alert from your bank?',
                options: [
                    'Reply to the email',
                    'Click the link to chat with support',
                    'Ignore it completely',
                    'Open a new browser tab and type the bank\'s URL manually'
                ],
                correctAnswer: 3,
                explanation: 'Never trust links in the email. Going directly to the website ensures you are on the legitimate platform.',
            },
        ],
    },
    {
        id: 'passwords',
        title: 'Password & Auth Security',
        description: 'Complexity, Hygiene, and Multi-Factor Authentication.',
        icon: 'mdi-lock',
        image: 'https://placehold.co/600x400?text=Complex+Security',
        content: `
      <h2>Why Complexity Matters</h2>
      <p>While length is important, using a diverse <strong>set of characters</strong> is a critical component of strong password hygiene. Hackers use sophisticated tools to guess credentials, so reliance on simple words—even long ones—can leave you vulnerable if the words are in a dictionary.</p>

      <h3>The Power of Entropy (Randomness)</h3>
      <p>The most secure passwords combine <strong>length</strong> with a <strong>mix of character types</strong> (symbols, numbers, uppercase, and lowercase). A password like <code style="color:green">Jhk207991@alg</code> is superior because it disrupts dictionary attacks while maintaining sufficient length to resist brute force.</p>

      <h3>🛡️ The Golden Rules</h3>
      <ul>
        <li><strong>Mix Your Characters:</strong> Ensure your password policy includes a full set of characters: uppercase, lowercase, numbers, and symbols.</li>
        <li><strong>Avoid Reuse:</strong> 54% of employees use the same password across multiple platforms. This allows hackers to use a password leaked from one site to unlock your other accounts (Credential Stuffing).</li>
        <li><strong>MFA / 2FA:</strong> Multi-Factor Authentication adds an extra layer of security by verifying the user's identity through a separate device or token, ensuring access is restricted even if the password is compromised[cite: 304].</li>
      </ul>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 5px solid #ffc107; margin-top: 10px;">
        <strong>⚠️ Warning:</strong> Never write your passwords down. Research shows 22% of employees still write passwords on paper to remember them, which is a major security risk.
      </div>
    `,
        questions: [
            {
                id: 1,
                text: 'According to the research, which password strategy represents good hygiene?',
                options: [
                    'password123 (Simple and easy to remember)',
                    'admin (Default)',
                    'Jhk207991@alg (Long combination with a set of mixed characters)',
                    'Writing the password on a sticky note'
                ],
                correctAnswer: 2,
                explanation: 'Good password hygiene requires "long password combinations" that also comprise a "set of characters" (complexity) to prevent unauthorized access.',
            },
            {
                id: 2,
                text: 'Why is password reuse considered poor cyber hygiene?',
                options: [
                    'It makes the password harder to remember',
                    'It causes the password to expire faster',
                    'If one site is breached, hackers can access your other accounts (Credential Stuffing)',
                    'It violates copyright laws'
                ],
                correctAnswer: 2,
                explanation: 'Using the same password across platforms is a major issue (practiced by 54% of employees) because a single breach exposes all your accounts.',
            },
        ],
    },
    {
        id: 'hygiene',
        title: 'Cyber Hygiene',
        description: 'Daily habits to reduce your digital attack surface.',
        icon: 'mdi-shield-check',
        image: 'https://placehold.co/600x400?text=Cyber+Hygiene',
        content: `
      <h2>Reduce Your "Attack Surface"</h2>
      <p>Cyber hygiene isn't just about cleaning screens; it's about minimizing what hackers can exploit. Every app you install is a potential door for a hacker.</p>

      <h3>The Clean-Up Checklist</h3>
      <ul>
        <li><strong>Software Updates:</strong> These aren't just new features; they are often "patches" for security holes found by researchers. Delaying an update leaves the door open.</li>
        <li><strong>Delete Unused Accounts:</strong> That forum you signed up for 5 years ago? If it gets hacked, your email and password might be leaked. Delete old accounts.</li>
        <li><strong>Backups (3-2-1 Rule):</strong>
            <ul>
                <li><strong>3</strong> copies of data.</li>
                <li><strong>2</strong> different media types (Cloud + Hard Drive).</li>
                <li><strong>1</strong> copy offsite (in case of fire/theft).</li>
            </ul>
        </li>
      </ul>
    `,
        questions: [
            {
                id: 1,
                text: 'What is the "3-2-1" backup rule?',
                options: [
                    '3 passwords, 2 usernames, 1 account',
                    '3 copies of data, 2 different media types, 1 stored offsite',
                    '3 hours of work, 2 breaks, 1 nap',
                    'Back up every 3 days at 2 PM'
                ],
                correctAnswer: 1,
                explanation: 'This ensures that even if your house burns down or you get ransomware, your data survives in the cloud or offsite.',
            },
            {
                id: 2,
                text: 'Why is "Zero Day" a scary term?',
                options: [
                    'It means you have zero days of vacation left',
                    'It is a vulnerability known to hackers but the developers have had "zero days" to fix it',
                    'It implies the virus lasts zero days',
                    'It is a discount day for software'
                ],
                correctAnswer: 1,
                explanation: 'Zero-day exploits are dangerous because no patch exists yet. Keeping software updated ensures you get the patch as soon as it is released.',
            },
        ],
    },
    {
        id: 'social-engineering',
        title: 'Social Engineering',
        description: 'Hacking the human brain: Vishing, Smishing, and Pretexting.',
        icon: 'mdi-account-alert',
        image: 'https://placehold.co/600x400?text=Social+Engineering',
        content: `
        <h2>Hacking Humans, Not Computers</h2>
        <p>Social engineering is the art of manipulating people so they give up confidential information. Attackers exploit human nature: trust, fear, helpfulness, and curiosity.</p>
        
        <h3>The Psychological Triggers</h3>
        <ul>
            <li><strong>Urgency:</strong> "Your tax payment is overdue! Pay now or go to jail." (Stops you from thinking logically).</li>
            <li><strong>Authority:</strong> "This is the CEO, I need you to do this favor for me." (Exploits fear of superiors).</li>
            <li><strong>Reciprocity:</strong> An attacker does something nice for you (holds a door, gives a compliment) so you feel obligated to give them info.</li>
        </ul>

        <h3>Common Techniques</h3>
        <ul>
            <li><strong>Pretexting:</strong> Creating a fake scenario (e.g., "I'm from IT support and we need to resync your token").</li>
            <li><strong>Quid Pro Quo:</strong> Offering a service/gift in exchange for information (e.g., "Take this survey for a free iPad").</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'An attacker calls claiming to be IT support and asks for your password to "fix a virus". What is this?',
                options: [
                    'A helpful service',
                    'Vishing (Voice Phishing) / Pretexting',
                    'Ransomware',
                    'Debugging'
                ],
                correctAnswer: 1,
                explanation: 'Real IT support will NEVER ask for your password. They have backend tools to reset it if needed.',
            },
            {
                id: 2,
                text: 'What is the "Piggybacking" or "Tailgating" attack?',
                options: [
                    'Riding on someone\'s back',
                    'Following an authorized person through a secure door without badging in',
                    'Using someone else\'s Wi-Fi',
                    'Sharing a Netflix account'
                ],
                correctAnswer: 1,
                explanation: 'Social engineers use "kindness" (asking you to hold the door because their hands are full) to bypass physical security locks.',
            }
        ]
    },
    {
        id: 'malware',
        title: 'Malware & Ransomware',
        description: 'Viruses, Worms, Trojans, and how to stop them.',
        icon: 'mdi-virus',
        image: 'https://placehold.co/600x400?text=Malware+Defense',
        content: `
        <h2>Know Your Enemy</h2>
        <p>Malware is an umbrella term for "Malicious Software". It's not just about annoying pop-ups anymore; it's a multi-billion dollar criminal industry.</p>
    
        <h3>The Malware Zoo</h3>
        <ul>
            <li><strong>Ransomware:</strong> The most dangerous threat today. It encrypts your files (turns them into gibberish) and demands crypto-currency to unlock them.</li>
            <li><strong>RAT (Remote Access Trojan):</strong> Gives the attacker full control of your PC (webcam, microphone, mouse) while you are using it.</li>
            <li><strong>Keylogger:</strong> A silent spy that records every key you press (passwords, credit card numbers) and sends it to the hacker.</li>
            <li><strong>Botnet:</strong> Turns your computer into a "zombie" that attacks other computers without you knowing.</li>
        </ul>

        <div style="background-color: #ffebee; padding: 15px; border-left: 5px solid #f44336; margin-top: 10px;">
            <strong>🛑 Action Item:</strong> If you suspect infection, disconnect from the internet immediately to stop the malware from "phoning home" or spreading to other devices.
        </div>
        `,
        questions: [
            {
                id: 1,
                text: 'What is the main goal of Ransomware?',
                options: [
                    'To delete your files for fun',
                    'To encrypt data and extort money (Crypto) for the decryption key',
                    'To slow down your internet',
                    'To steal your webcam footage'
                ],
                correctAnswer: 1,
                explanation: 'Ransomware is a business model. They kidnap your data. Even if you pay, there is no guarantee they will unlock it.',
            },
            {
                id: 2,
                text: 'How does a "Trojan" malware work?',
                options: [
                    'It attacks like a horse',
                    'It disguises itself as legitimate software (e.g., a free game or cracked app)',
                    'It spreads via email only',
                    'It physically breaks the hardware'
                ],
                correctAnswer: 1,
                explanation: 'Named after the Trojan Horse, it tricks the user into installing it willingly by hiding inside something desirable.',
            }
        ]
    },
    {
        id: 'mobile-security',
        title: 'Mobile Device Security',
        description: 'Permissions, Jailbreaking, and Juice Jacking.',
        icon: 'mdi-cellphone-lock',
        image: 'https://placehold.co/600x400?text=Mobile+Security',
        content: `
        <h2>Your Life in Your Pocket</h2>
        <p>We treat phones like accessories, but they are powerful computers containing our GPS history, 2FA codes, and banking apps.</p>
    
        <h3>Top Mobile Threats</h3>
        <ul>
            <li><strong>Juice Jacking:</strong> Public USB charging stations can transfer data. Always use a "Data Blocker" cable or your own power brick at airports.</li>
            <li><strong>Excessive Permissions:</strong> Does a Calculator app need access to your Contacts and Location? No. That's data mining malware.</li>
            <li><strong>Jailbreaking/Rooting:</strong> Removing the safety restrictions of iOS/Android makes you vulnerable. Apps can now escape their "sandbox" and steal data from other apps.</li>
            <li><strong>Smishing:</strong> Phishing via SMS ("Package delivery failed, click here").</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'What is "Juice Jacking"?',
                options: [
                    'Spilling juice on your phone',
                    'Overcharging the battery',
                    'Stealing data or installing malware via a public USB charging station',
                    'Stealing electricity'
                ],
                correctAnswer: 2,
                explanation: 'USB cables carry both power and data. Attackers can modify public charging ports to copy your photos while you charge.',
            },
            {
                id: 2,
                text: 'Why is "Rooting" or "Jailbreaking" a security risk?',
                options: [
                    'It voids the warranty',
                    'It removes the OS security sandbox, allowing malicious apps to access sensitive data from other apps',
                    'It makes the screen brighter',
                    'It prevents you from making calls'
                ],
                correctAnswer: 1,
                explanation: 'The "Sandbox" is what prevents a malicious game from reading your Banking App\'s memory. Rooting breaks these walls.',
            }
        ]
    },
    {
        id: 'physical-security',
        title: 'Physical Security',
        description: 'Clean Desk Policy, Tailgating, and Evil Maids.',
        icon: 'mdi-door-closed-lock',
        image: 'https://placehold.co/600x400?text=Physical+Security',
        content: `
        <h2>If they can touch it, they own it.</h2>
        <p>Software firewalls cannot stop a person who physically walks away with your laptop.</p>
    
        <h3>Concepts to Know</h3>
        <ul>
            <li><strong>Tailgating / Piggybacking:</strong> Slipping through a secure door when an authorized person opens it. Be the rude person: don't hold the door for strangers!</li>
            <li><strong>Shoulder Surfing:</strong> Spying on screens in trains or cafes. Use a <em>Privacy Filter</em> (a polarized screen protector) so only you can see the display.</li>
            <li><strong>Clean Desk Policy:</strong> Don't write passwords on sticky notes. Don't leave sensitive documents on your desk when you go to the bathroom.</li>
            <li><strong>Evil Maid Attack:</strong> Leaving a device unattended in a hotel room allows an attacker (posing as cleaning staff) to insert a USB drive or tamper with hardware.</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'What is the best defense against "Shoulder Surfing" in public?',
                options: [
                    'Typing very fast',
                    'Using a Privacy Screen Filter',
                    'Turning the brightness down',
                    'Working under a blanket'
                ],
                correctAnswer: 1,
                explanation: 'Privacy filters utilize micro-louvers to ensure the screen looks black to anyone not sitting directly in front of it.',
            },
            {
                id: 2,
                text: 'You are leaving your desk for 2 minutes to get water. What must you do?',
                options: [
                    'Turn off the monitor',
                    'Lock your computer (Win+L or Cmd+Ctrl+Q)',
                    'Ask a neighbor to watch it',
                    'Close the laptop lid halfway'
                ],
                correctAnswer: 1,
                explanation: 'Always lock your session. An unlocked PC allows an attacker to install malware or copy files in under 10 seconds.',
            }
        ]
    },
    {
        id: 'usb-security',
        title: 'Removable Media Risks',
        description: 'Rubber Duckies and the danger of "Lost" drives.',
        icon: 'mdi-usb-flash-drive',
        image: 'https://placehold.co/600x400?text=USB+Security',
        content: `
        <h2>The Curiosity Trap</h2>
        <p>USB drives are popular attack vectors because they bypass network firewalls. They are brought inside the building by employees.</p>
    
        <h3>The "Rubber Ducky"</h3>
        <p>A "USB Rubber Ducky" looks like a flash drive, but the computer thinks it's a <strong>Keyboard</strong>. When plugged in, it types commands at superhuman speed to install viruses, create backdoors, or steal passwords—all in milliseconds.</p>

        <h3>Baiting Attacks</h3>
        <p>Attackers leave USBs labeled "Payroll 2024" or "Confidential" in parking lots. Human curiosity makes us plug it in. <strong>Never</strong> plug in a found drive.</p>
        `,
        questions: [
            {
                id: 1,
                text: 'What happens in a "Baiting" attack with a USB drive?',
                options: [
                    'The USB explodes',
                    'The attacker relies on your curiosity to plug the infected drive into a corporate computer',
                    'The USB formats itself',
                    'Nothing happens'
                ],
                correctAnswer: 1,
                explanation: 'Social engineering meets hardware. Curiosity kills the cat (and the network security).',
            },
            {
                id: 2,
                text: 'Why does a computer trust a malicious "Rubber Ducky" USB?',
                options: [
                    'It has a virus',
                    'It identifies itself as a Keyboard (Human Interface Device), which computers automatically trust',
                    'It has a special microchip',
                    'It is expensive'
                ],
                correctAnswer: 1,
                explanation: 'Computers are designed to accept keyboards immediately. These tools exploit that trust to type malicious commands.',
            }
        ]
    },
    {
        id: 'safe-browsing',
        title: 'Safe Web Browsing',
        description: 'HTTPS, Ad-blockers, and Drive-by Downloads.',
        icon: 'mdi-web',
        image: 'https://placehold.co/600x400?text=Safe+Browsing',
        content: `
        <h2>The Web is a Minefield</h2>
        <p>You can get infected just by visiting a website, without clicking anything (Drive-by Download).</p>
    
        <h3>Browsing Defense Kit</h3>
        <ul>
            <li><strong>HTTPS (Lock Icon):</strong> Encrypts the tunnel between you and the site. NOTE: It does <em>not</em> mean the site is safe, only that the connection is private. Phishing sites use HTTPS too!</li>
            <li><strong>Ad Blockers (uBlock Origin):</strong> Malicious Code is often hidden in advertisements ("Malvertising"). Blocking ads reduces your risk significantly.</li>
            <li><strong>Pop-ups:</strong> Never call the number on a "Your PC is infected" pop-up. It is a scam. Close the browser (Alt+F4).</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'Does the "Lock" icon (HTTPS) mean a website is 100% safe?',
                options: [
                    'Yes, it means the site was scanned by Google',
                    'No, it only means the connection is encrypted. A phishing site can also have a lock icon',
                    'Yes, it means no viruses',
                    'Only if it is green'
                ],
                correctAnswer: 1,
                explanation: 'Attackers can easily get free SSL certificates. HTTPS protects your data in transit, but you might be sending that data securely to a thief.',
            },
            {
                id: 2,
                text: 'What is "Malvertising"?',
                options: [
                    'Advertising malware scanners',
                    'Injecting malicious code into legitimate advertising networks to infect users who view the ad',
                    'Selling bad products',
                    'Pop-up blocking'
                ],
                correctAnswer: 1,
                explanation: 'You can be on a reputable news site and get infected because a third-party ad banner contained an exploit kit.',
            }
        ]
    },
    {
        id: 'data-privacy',
        title: 'Data Privacy & OSINT',
        description: 'Oversharing, Metadata, and Doxing.',
        icon: 'mdi-incognito',
        image: 'https://placehold.co/600x400?text=Data+Privacy',
        content: `
        <h2>You Are The Target</h2>
        <p><strong>OSINT (Open Source Intelligence)</strong> is how hackers build a profile on you using public data.</p>
    
        <h3>What are you leaking?</h3>
        <ul>
            <li><strong>Photos of Work:</strong> Posting a selfie with your desk in the background? You might be leaking sticky notes with passwords or confidential memos on the screen.</li>
            <li><strong>Travel Plans:</strong> "Flying to Hawaii tomorrow!" = "My house is empty, come rob me."</li>
            <li><strong>Metadata (EXIF):</strong> Photos taken on phones contain GPS coordinates embedded in the file. Sending the raw file reveals exactly where you live.</li>
            <li><strong>Security Questions:</strong> "Happy birthday to my dog, Fluffy!" -> Now the hacker knows the answer to "What is your pet's name?".</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'Why is posting a photo of your Boarding Pass dangerous?',
                options: [
                    'People will be jealous',
                    'The barcode contains your full name, frequent flyer number, and PNR, allowing hackers to cancel or change your flight',
                    'It is against airline policy',
                    'It looks messy'
                ],
                correctAnswer: 1,
                explanation: 'Barcodes on boarding passes hold significant personal data that can be decoded with free phone apps.',
            },
            {
                id: 2,
                text: 'What is "Doxing"?',
                options: [
                    'Documenting code',
                    'Compiling and publishing someone\'s private information (address, phone, employer) online maliciously',
                    'A type of dog',
                    'Deleting documents'
                ],
                correctAnswer: 1,
                explanation: 'Doxing is used to harass, intimidate, or endanger targets by removing their anonymity.'
            }
        ]
    },
    {
        id: 'remote-work',
        title: 'Remote Work Security',
        description: 'VPNs, Home Routers, and Separation of Duties.',
        icon: 'mdi-laptop-account',
        image: 'https://placehold.co/600x400?text=Remote+Work',
        content: `
        <h2>The Perimeter is Gone</h2>
        <p>In the office, you are behind a corporate firewall. At home, you are behind a cheap plastic router.</p>
    
        <h3>Securing the Home Office</h3>
        <ul>
            <li><strong>VPN (Virtual Private Network):</strong> Always use this when working. It creates an encrypted tunnel into the office, protecting your data from your ISP and hackers on the local network.</li>
            <li><strong>Router Security:</strong> Change the default password (admin/admin). Use WPA3 or WPA2 encryption. Update the firmware.</li>
            <li><strong>Separation:</strong> Do not let your kids install games on your work laptop. Do not do personal banking on the work laptop. Keep work and play separate.</li>
        </ul>
        `,
        questions: [
            {
                id: 1,
                text: 'Why is using public Wi-Fi (cafes/airports) dangerous for work?',
                options: [
                    'The internet is slow',
                    'It is an open network where attackers can perform "Man-in-the-Middle" attacks to intercept data',
                    'Coffee shops don\'t allow work',
                    'It drains battery'
                ],
                correctAnswer: 1,
                explanation: 'On open networks, anyone with simple software can "sniff" the traffic flying through the air around you.',
            },
            {
                id: 2,
                text: 'What should you do with your home Wi-Fi router?',
                options: [
                    'Hide it under the bed',
                    'Change the default admin password and keep firmware updated',
                    'Never turn it off',
                    'Share the password on Facebook'
                ],
                correctAnswer: 1,
                explanation: 'Default passwords are public knowledge. Botnets scan for routers that still use "admin/password" to hijack them.'
            }
        ]
    },
    {
        id: 'iot-security',
        title: 'IoT (Internet of Things)',
        description: 'Botnets, Shodan, and Network Segmentation.',
        icon: 'mdi-router-wireless',
        image: 'https://placehold.co/600x400?text=IoT+Security',
        content: `
        <h2>The "S" in IoT stands for Security</h2>
        <p>(That's a joke—there is no S. IoT security is notoriously bad.) Smart fridges, cameras, and lightbulbs often have hard-coded passwords.</p>
    
        <h3>The Mirai Botnet</h3>
        <p>In 2016, a malware named "Mirai" took over thousands of smart cameras and DVRs using default passwords. It used them to launch a massive attack that shut down major parts of the internet.</p>

        <h3>Defense Strategy: Segmentation</h3>
        <p>Put your "Smart" devices on a <strong>Guest Network</strong>. If your cheap smart bulb gets hacked, the attacker is trapped in the Guest network and cannot reach your main laptop or phone.</p>
        `,
        questions: [
            {
                id: 1,
                text: 'Why are IoT devices (cameras, bulbs) easy targets for hackers?',
                options: [
                    'They have big screens',
                    'They often have weak default passwords and are rarely updated/patched by users',
                    'They are expensive',
                    'They use Bluetooth'
                ],
                correctAnswer: 1,
                explanation: 'Manufacturers prioritize convenience over security. Many devices ship with "admin/admin" and users never change it.',
            },
            {
                id: 2,
                text: 'What is the best way to protect your home network from insecure IoT devices?',
                options: [
                    'Don\'t use electricity',
                    'Network Segmentation (Put them on a separate Guest Wi-Fi)',
                    'Cover them with foil',
                    'Buy the most expensive ones'
                ],
                correctAnswer: 1,
                explanation: 'Isolation is key. If a device is compromised, segmentation limits the damage to that specific zone.'
            }
        ]
    },
];
