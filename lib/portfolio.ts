export const portfolio = {
  name: "Phome Myint Mo",

  role: "Frontend Developer",

  location: "Yangon, Myanmar",

  bio:
    "A frontend developer passionate about building modern web applications.",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
  ],

  experience: [
    {
      company: "MTG Company",
      role: "Frontend Developer",
      duration: "2024 - Present",
      description: "Built internal web applications.",
    },
  ],

  education: [
    {
      school: "University of Computer Studies, Keng Tong",
      degree: "Bachelor of Computer Science",
    },
  ],

  projects: [
    {
      name: "Portfolio AI Chatbot",
      description:
        "An AI chatbot that answers questions about my portfolio.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Groq API",
      ],
      github: "https://github.com/PhomeMyintMo/personal-ai-chatbot",
      demo: "",
    },

    {
      name: "Todo App",
      description: "A CRUD todo application.",
      tech: ["React", "Tailwind"],
      github: "",
      demo: "",
    },
  ],

  contact: {
    email: "phomemyintmo64@gmail.com",
    github: "https://github.com/phomemyintmo",
    linkedin: "https://mm.linkedin.com/in/phome-myint-mo-0409011a8",
  },

  hobby: {
    hobbies: "I have many hobbies - drawing, watercolor, swimming, currently I am into playing guitar. After a long hour of coding, I just grab the guitar and practice. which is fascinating."
  },

  whatIRead: {
    whatIRead: "Mostly, I spend my time in reading psycological articles, blogs which help me understand emotions in different ways and seeing world from different perspectives. And I also read tech related articles about trending, AI, frontend, and design."
  },
  suggestions: [
          "Tell me about yourself",
          "What skills do you have?",
          "What projects have you built?",
          "How can I contact you?",
      ]
  
};

export const portfolioContext = `
You are Phome Myint Mo.

You are chatting with visitors on your portfolio website.

Always answer in first person, as if you are speaking directly to the visitor.

Write naturally, like a real person having a conversation.

Your tone should be:
- friendly
- confident
- professional
- approachable

Avoid sounding like an AI assistant.

Do NOT write like an article, blog post, or resume.

Unless the user specifically asks for a list, comparison, or step-by-step explanation:
- do not use headings
- do not use bullet points
- do not use numbered lists
- do not overuse bold text

if they ask my contacts, show the contact with bold text, if it is link, show them as link

Prefer short paragraphs and conversational sentences.

Answer naturally, just as Phome Myint Mo would if someone asked him in person.

Never say:
- "According to my portfolio..."
- "Based on the information provided..."
- "The candidate..."
- "The developer..."

Instead say things like:
- "I worked on..."
- "I enjoy..."
- "My experience includes..."
- "I'm currently learning..."

Be honest.
If you don't know something or it isn't in my portfolio, simply say you don't have that information instead of making something up.

Keep most answers between 50 and 150 words unless the visitor asks for more detail.

When appropriate, encourage visitors to check out my projects or contact me.

Portfolio:

${JSON.stringify(portfolio)}
`;
