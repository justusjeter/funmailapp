let emailApp = {
    name: 'FunmailApp',
    mailboxes: {
        inbox: [
            {
                subject: "Meeting Reminder",
                body: "Don't forget about the meeting tomorrow at 10am.",
                sender: "aliceinwonderland@example.com",
                recipients: ["bobmarley@example.com"],
                date: "2024-06-10",
                status: "unread"
            },
            {
                subject: "Weekly Report",
                body: "Here is the weekly report.",
                sender: "franksinatra@example.com",
                recipients: ["you@example.com"],
                date: "2024-06-09",
                status: "read"
            }
        ],
        sent: [
            {
                subject: "Re: Meeting Reminder",
                body: "Thanks for the reminder!",
                sender: "you@example.com",
                recipients: ["aliceinwonderland@example.com"],
                date: "2024-06-10",
                status: "sent"
            }
        ],
        drafts: [],
        junk: [],
        trash: []
    },
    contacts: [
        {name: 'Alice', email: 'aliceinwonderland@example.com'},
        {name: 'Bob', email: 'bobmarley@example.com'},
        {name: 'Frank', email: 'franksinatra@example.com'}
    ],
    emails: [
        {
            subject: "Meeting Reminder",
            body: "Don't forget about the meeting tomorrow at 10am.",
            sender: "aliceinwonderland@example.com",
            recipients: ["bobmarley@example.com"],
            date: "2024-06-10",
            status: "unread"
        },
        {
            subject: "Weekly Report",
            body: "Here is the weekly report.",
            sender: "franksinatra@example.com",
            recipients: ["you@example.com"],
            date: "2024-06-09",
            status: "read"
        },
        {
            subject: "Re: Meeting Reminder",
            body: "Thanks for the reminder!",
            sender: "you@example.com",
            recipients: ["aliceinwonderland@example.com"],
            date: "2024-06-10",
            status: "sent"
        }
    ]
};

//list of mailbox names
let mailboxNames = Object.keys(emailApp.mailboxes);
console.log(mailboxNames);

// Get a list of emails (assuming they are there)
let emailsInInbox = emailApp.mailboxes.inbox;
console.log(emailsInInbox);

// Get the text of the second email in the visible list (assuming they are there)
if (emailsInInbox.length > 1) {
    console.log(emailsInInbox[1].body);
} else {
    console.log("Not enough emails in the inbox.");
}

// Move from drafts to sent
let draftEmail = {
    subject: "Project Update",
    body: "Here is the update on the project.",
    sender: "you@example.com",
    recipients: ["bobmarley@example.com"],
    date: "2024-06-11",
    status: "draft"
};

emailApp.mailboxes.drafts.push(draftEmail);
let emailToSend = emailApp.mailboxes.drafts.pop();
emailToSend.status = "sent";
emailApp.mailboxes.sent.push(emailToSend);

// Add draft email to the drafts mailbox
let newDraftEmail = {
    subject: "New Draft",
    body: "This is a new draft email.",
    sender: "you@example.com",
    recipients: ["aliceinwonderland@example.com"],
    date: "2024-06-11",
    status: "draft"
};

emailApp.mailboxes.drafts.push(newDraftEmail);
console.log("Drafts after adding new draft:", emailApp.mailboxes.drafts);