const suspects = [
    {
        id: 1,
        name: "Alex Thompson",
        profile: "Tech expert with history of cyber crimes",
        clues: {
            location: {
                data: {
                    gps: [
                        "Silicon Valley",
                        "Tech Hub",
                        "Underground Server Room",
                    ],
                    frequency: "Daily pattern changes",
                    timeStamps: "Active during night hours",
                    recentLocations: [
                        "Datacenter",
                        "Tech Conference",
                        "Private Server Farm",
                    ],
                },
                validity: 0.9,
            },
            communication: {
                data: {
                    calls: ["Encrypted VoIP", "Burner Phones", "Signal App"],
                    patterns: "Irregular intervals",
                    contacts: "Multiple anonymous sources",
                    metadata: "Heavy encryption usage",
                },
                validity: 0.85,
            },
            financial: {
                data: {
                    transactions: [
                        "Cryptocurrency",
                        "Multiple Shell Companies",
                    ],
                    patterns: "Large transfers at odd hours",
                    accounts: "Offshore connections",
                    anomalies: "Regular Bitcoin conversions",
                },
                validity: 0.75,
            },
            digital: {
                data: {
                    darkweb: "Active on multiple forums",
                    encryption: "Advanced protocols used",
                    malware: "Custom signatures detected",
                    tools: "Advanced hacking software detected",
                },
                validity: 0.95,
            },
            social: {
                data: {
                    connections: "Limited public presence",
                    aliases: "Multiple identified personas",
                    behavior: "Highly technical discussions",
                    patterns: "Avoids social media",
                },
                validity: 0.7,
            },
            physical: {
                data: {
                    surveillance: "Often avoids cameras",
                    movement: "Irregular patterns",
                    appearance: "Frequently changes disguises",
                    schedule: "No fixed routine",
                },
                validity: 0.8,
            },
        },
        isTarget: true,
    },
    {
        id: 2,
        name: "Sarah Chen",
        profile: "Financial analyst with clean record",
        clues: {
            location: {
                data: {
                    gps: [
                        "Financial District",
                        "Corporate Office",
                        "Local Gym",
                    ],
                    frequency: "Regular pattern",
                    timeStamps: "9-5 schedule",
                    recentLocations: ["Bank", "Coffee Shop", "Fitness Center"],
                },
                validity: 0.9,
            },
            communication: {
                data: {
                    calls: ["Corporate Lines", "Personal Mobile", "Work Email"],
                    patterns: "Regular business hours",
                    contacts: "Known business associates",
                    metadata: "Standard encryption",
                },
                validity: 0.85,
            },
            financial: {
                data: {
                    transactions: ["Salary Deposits", "Regular Expenses"],
                    patterns: "Predictable monthly pattern",
                    accounts: "Traditional Banking",
                    anomalies: "None detected",
                },
                validity: 0.95,
            },
            digital: {
                data: {
                    darkweb: "No presence",
                    encryption: "Standard protocols",
                    malware: "None detected",
                    tools: "Standard office software",
                },
                validity: 0.9,
            },
            social: {
                data: {
                    connections: "Active professional network",
                    aliases: "None detected",
                    behavior: "Professional networking",
                    patterns: "Regular social media use",
                },
                validity: 0.8,
            },
            physical: {
                data: {
                    surveillance: "Regular routine",
                    movement: "Predictable patterns",
                    appearance: "Professional attire",
                    schedule: "Consistent weekly routine",
                },
                validity: 0.9,
            },
        },
        isTarget: false,
    },
    {
        id: 3,
        name: "Marcus Rodriguez",
        profile: "Freelance security consultant",
        clues: {
            location: {
                data: {
                    gps: [
                        "Various Client Sites",
                        "Home Office",
                        "Security Conferences",
                    ],
                    frequency: "Semi-regular patterns",
                    timeStamps: "Variable work hours",
                    recentLocations: [
                        "Corporate Clients",
                        "Security Firms",
                        "Training Centers",
                    ],
                },
                validity: 0.7,
            },
            communication: {
                data: {
                    calls: [
                        "Business VoIP",
                        "Secured Lines",
                        "Client Communications",
                    ],
                    patterns: "Project-based communication",
                    contacts: "Security industry professionals",
                    metadata: "Professional encryption",
                },
                validity: 0.8,
            },
            financial: {
                data: {
                    transactions: ["Project Payments", "Business Expenses"],
                    patterns: "Variable income",
                    accounts: "Business and Personal Separated",
                    anomalies: "Occasional large deposits",
                },
                validity: 0.85,
            },
            digital: {
                data: {
                    darkweb: "Research purposes only",
                    encryption: "Professional grade",
                    malware: "Testing tools present",
                    tools: "Security testing software",
                },
                validity: 0.75,
            },
            social: {
                data: {
                    connections: "Industry professionals",
                    aliases: "Professional personas",
                    behavior: "Security-focused content",
                    patterns: "Professional social media",
                },
                validity: 0.8,
            },
            physical: {
                data: {
                    surveillance: "Security-conscious",
                    movement: "Client-based travel",
                    appearance: "Business casual",
                    schedule: "Project-based routine",
                },
                validity: 0.7,
            },
        },
        isTarget: false,
    },
    {
        id: 4,
        name: "Emma BlackWood",
        profile: "Cybersecurity researcher",
        clues: {
            location: {
                data: {
                    gps: [
                        "University Labs",
                        "Research Centers",
                        "Tech Startups",
                    ],
                    frequency: "Academic schedule",
                    timeStamps: "Research hours",
                    recentLocations: [
                        "Labs",
                        "Conference Centers",
                        "Innovation Hubs",
                    ],
                },
                validity: 0.85,
            },
            communication: {
                data: {
                    calls: [
                        "Academic Networks",
                        "Research Collaborations",
                        "Peer Reviews",
                    ],
                    patterns: "Professional academic",
                    contacts: "Research community",
                    metadata: "Research-grade encryption",
                },
                validity: 0.9,
            },
            financial: {
                data: {
                    transactions: ["Research Grants", "Academic Salary"],
                    patterns: "Grant-based funding",
                    accounts: "Institution-linked",
                    anomalies: "Research equipment purchases",
                },
                validity: 0.8,
            },
            digital: {
                data: {
                    darkweb: "Academic research only",
                    encryption: "Research protocols",
                    malware: "Research samples",
                    tools: "Analysis software",
                },
                validity: 0.85,
            },
            social: {
                data: {
                    connections: "Academic network",
                    aliases: "Research profiles",
                    behavior: "Academic publishing",
                    patterns: "Research community engagement",
                },
                validity: 0.9,
            },
            physical: {
                data: {
                    surveillance: "Campus presence",
                    movement: "Research facility access",
                    appearance: "Academic professional",
                    schedule: "Research-based routine",
                },
                validity: 0.85,
            },
        },
        isTarget: false,
    },
    {
        id: 5,
        name: "Viktor Petrov",
        profile: "Independent software developer",
        clues: {
            location: {
                data: {
                    gps: ["Co-working Spaces", "Tech Meetups", "Remote Work"],
                    frequency: "Flexible schedule",
                    timeStamps: "Irregular hours",
                    recentLocations: ["Startup Hubs", "Tech Events", "Cafes"],
                },
                validity: 0.6,
            },
            communication: {
                data: {
                    calls: [
                        "Developer Forums",
                        "Project Channels",
                        "Client Calls",
                    ],
                    patterns: "Project-based",
                    contacts: "Developer community",
                    metadata: "Mixed protocols",
                },
                validity: 0.7,
            },
            financial: {
                data: {
                    transactions: ["Project Income", "Digital Payments"],
                    patterns: "Irregular freelance",
                    accounts: "Multiple payment platforms",
                    anomalies: "Cryptocurrency payments",
                },
                validity: 0.65,
            },
            digital: {
                data: {
                    darkweb: "Occasional presence",
                    encryption: "Various methods",
                    malware: "Development tools",
                    tools: "Coding environments",
                },
                validity: 0.8,
            },
            social: {
                data: {
                    connections: "Tech community",
                    aliases: "Developer handles",
                    behavior: "Code sharing",
                    patterns: "Tech forum activity",
                },
                validity: 0.75,
            },
            physical: {
                data: {
                    surveillance: "Mobile working",
                    movement: "Tech hub hopping",
                    appearance: "Casual tech",
                    schedule: "Flexible hours",
                },
                validity: 0.7,
            },
        },
        isTarget: false,
    },
    {
        id: 6,
        name: "Diana Maxwell",
        profile: "Corporate IT director",
        clues: {
            location: {
                data: {
                    gps: ["Corporate HQ", "Data Centers", "Branch Offices"],
                    frequency: "Business hours",
                    timeStamps: "Regular schedule",
                    recentLocations: [
                        "Office Buildings",
                        "IT Facilities",
                        "Business Centers",
                    ],
                },
                validity: 0.9,
            },
            communication: {
                data: {
                    calls: [
                        "Corporate Network",
                        "Management Meetings",
                        "IT Teams",
                    ],
                    patterns: "Structured corporate",
                    contacts: "Business hierarchy",
                    metadata: "Enterprise encryption",
                },
                validity: 0.95,
            },
            financial: {
                data: {
                    transactions: ["Corporate Salary", "Business Expenses"],
                    patterns: "Regular corporate",
                    accounts: "Executive banking",
                    anomalies: "Standard bonuses",
                },
                validity: 0.9,
            },
            digital: {
                data: {
                    darkweb: "No presence",
                    encryption: "Corporate standard",
                    malware: "Protection systems",
                    tools: "Enterprise software",
                },
                validity: 0.85,
            },
            social: {
                data: {
                    connections: "Corporate network",
                    aliases: "Official profiles",
                    behavior: "Professional presence",
                    patterns: "Corporate communications",
                },
                validity: 0.9,
            },
            physical: {
                data: {
                    surveillance: "Corporate security",
                    movement: "Office-based",
                    appearance: "Executive style",
                    schedule: "Corporate hours",
                },
                validity: 0.95,
            },
        },
        isTarget: false,
    },
    {
        id: 7,
        name: "Ray Johnson",
        profile: "Gaming industry programmer",
        clues: {
            location: {
                data: {
                    gps: [
                        "Gaming Studio",
                        "E-sports Events",
                        "Gaming Conventions",
                    ],
                    frequency: "Creative schedule",
                    timeStamps: "Project deadlines",
                    recentLocations: [
                        "Development Studio",
                        "Gaming Events",
                        "Tech Shows",
                    ],
                },
                validity: 0.8,
            },
            communication: {
                data: {
                    calls: [
                        "Development Team",
                        "Gaming Platforms",
                        "Studio Chat",
                    ],
                    patterns: "Team collaboration",
                    contacts: "Gaming industry",
                    metadata: "Gaming platforms",
                },
                validity: 0.85,
            },
            financial: {
                data: {
                    transactions: ["Studio Salary", "Gaming Purchases"],
                    patterns: "Regular income",
                    accounts: "Gaming industry",
                    anomalies: "Game purchases",
                },
                validity: 0.9,
            },
            digital: {
                data: {
                    darkweb: "Gaming forums only",
                    encryption: "Standard security",
                    malware: "Game testing",
                    tools: "Development software",
                },
                validity: 0.85,
            },
            social: {
                data: {
                    connections: "Gaming community",
                    aliases: "Gaming handles",
                    behavior: "Gaming content",
                    patterns: "Community engagement",
                },
                validity: 0.9,
            },
            physical: {
                data: {
                    surveillance: "Studio presence",
                    movement: "Gaming events",
                    appearance: "Casual gaming",
                    schedule: "Project schedule",
                },
                validity: 0.85,
            },
        },
        isTarget: false,
    },
    {
        id: 8,
        name: "Olivia Zhang",
        profile: "Data science consultant",
        clues: {
            location: {
                data: {
                    gps: ["Analytics Firms", "Client Offices", "Data Centers"],
                    frequency: "Client-based",
                    timeStamps: "Project timelines",
                    recentLocations: [
                        "Tech Companies",
                        "Consulting Firms",
                        "Training Centers",
                    ],
                },
                validity: 0.8,
            },
            communication: {
                data: {
                    calls: [
                        "Client Meetings",
                        "Data Teams",
                        "Analytics Platforms",
                    ],
                    patterns: "Professional consulting",
                    contacts: "Industry clients",
                    metadata: "Data security",
                },
                validity: 0.85,
            },
            financial: {
                data: {
                    transactions: ["Consulting Fees", "Professional Services"],
                    patterns: "Project billing",
                    accounts: "Business consulting",
                    anomalies: "Client payments",
                },
                validity: 0.9,
            },
            digital: {
                data: {
                    darkweb: "No presence",
                    encryption: "Data protection",
                    malware: "Analysis tools",
                    tools: "Data science software",
                },
                validity: 0.85,
            },
            social: {
                data: {
                    connections: "Professional network",
                    aliases: "Data science profiles",
                    behavior: "Industry insights",
                    patterns: "Professional sharing",
                },
                validity: 0.9,
            },
            physical: {
                data: {
                    surveillance: "Client sites",
                    movement: "Consulting travel",
                    appearance: "Business professional",
                    schedule: "Client meetings",
                },
                validity: 0.85,
            },
        },
        isTarget: false,
    },
    {
        id: 9,
        name: "James Cooper",
        profile: "Network infrastructure specialist",
        clues: {
            location: {
                data: {
                    gps: [
                        "Server Facilities",
                        "Network Centers",
                        "ISP Locations",
                    ],
                    frequency: "Maintenance schedule",
                    timeStamps: "24/7 rotation",
                    recentLocations: [
                        "Data Centers",
                        "Network Hubs",
                        "Infrastructure Sites",
                    ],
                },
                validity: 0.85,
            },
            communication: {
                data: {
                    calls: [
                        "Technical Support",
                        "Network Teams",
                        "Emergency Response",
                    ],
                    patterns: "On-call rotation",
                    contacts: "Infrastructure teams",
                    metadata: "Network protocols",
                },
                validity: 0.9,
            },
            financial: {
                data: {
                    transactions: ["Technical Salary", "Equipment Purchases"],
                    patterns: "Regular income",
                    accounts: "Technical industry",
                    anomalies: "Equipment costs",
                },
                validity: 0.85,
            },
            digital: {
                data: {
                    darkweb: "No presence",
                    encryption: "Network security",
                    malware: "Protection systems",
                    tools: "Network software",
                },
                validity: 0.9,
            },
            social: {
                data: {
                    connections: "Technical community",
                    aliases: "Professional profiles",
                    behavior: "Technical content",
                    patterns: "Industry engagement",
                },
                validity: 0.85,
            },
            physical: {
                data: {
                    surveillance: "Facility access",
                    movement: "Site maintenance",
                    appearance: "Technical uniform",
                    schedule: "Rotating shifts",
                },
                validity: 0.9,
            },
        },
        isTarget: false,
    },
    {
        id: 10,
        name: "Lucas Wright",
        profile: "Blockchain developer and crypto enthusiast",
        clues: {
            location: {
                data: {
                    gps: [
                        "Crypto Startups",
                        "Blockchain Events",
                        "Private Offices",
                    ],
                    frequency: "Highly irregular",
                    timeStamps: "Global time zones",
                    recentLocations: [
                        "Crypto Conferences",
                        "Private Meetings",
                        "Remote Locations",
                    ],
                },
                validity: 0.7,
            },
            communication: {
                data: {
                    calls: [
                        "Encrypted Messaging",
                        "Private Channels",
                        "Crypto Forums",
                    ],
                    patterns: "Decentralized networks",
                    contacts: "Anonymous connections",
                    metadata: "High-level encryption",
                },
                validity: 0.8,
            },
            financial: {
                data: {
                    transactions: [
                        "Multiple Cryptocurrencies",
                        "NFT Trading",
                        "Smart Contracts",
                    ],
                    patterns: "Complex blockchain movements",
                    accounts: "Decentralized wallets",
                    anomalies: "Large crypto transfers",
                },
                validity: 0.9,
            },
            digital: {
                data: {
                    darkweb: "Moderate activity",
                    encryption: "Advanced blockchain protocols",
                    malware: "Smart contract testing",
                    tools: "Blockchain development kits",
                },
                validity: 0.85,
            },
            social: {
                data: {
                    connections: "Crypto community",
                    aliases: "Multiple blockchain identities",
                    behavior: "Privacy-focused",
                    patterns: "Decentralized platforms",
                },
                validity: 0.75,
            },
            physical: {
                data: {
                    surveillance: "Privacy-conscious movement",
                    movement: "International travel",
                    appearance: "Tech casual",
                    schedule: "Unpredictable patterns",
                },
                validity: 0.6,
            },
        },
        isTarget: false,
    },
];

export default suspects;
