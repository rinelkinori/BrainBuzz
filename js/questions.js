/* =========================================================
   BrainBuzz - questions.js
   Question data for all three quiz topics.
   Each question: q (text), options (4 choices),
   answer (index of the correct option), explain (feedback).
   ========================================================= */

const TOPICS = [
  {
    id: "fundamentals",
    title: "HTML Fundamentals Quiz",
    icon: "images/icon-fundamentals.svg",
    description:
      "What HTML stands for, its history at CERN, the DOCTYPE declaration, and the Internet versus the World Wide Web.",
    questions: [
      {
        q: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Multi Language",
          "Home Text Markup Language"
        ],
        answer: 0,
        explain: "HTML stands for HyperText Markup Language."
      },
      {
        q: "What does the word \"HyperText\" refer to in HTML?",
        options: [
          "Text that is extremely large",
          "Links that connect one page or resource to another",
          "Text written in a special font",
          "Text that is stored in a database"
        ],
        answer: 1,
        explain: "HyperText is text containing links (hyperlinks) that let users jump to other pages or resources."
      },
      {
        q: "What does the word \"Markup\" refer to in HTML?",
        options: [
          "Discounted prices on a web page",
          "Tags that annotate content to describe its structure and meaning",
          "A programming loop",
          "A tool for compressing images"
        ],
        answer: 1,
        explain: "Markup means using tags to label content so the browser knows its structure and purpose."
      },
      {
        q: "Who proposed the idea that became HTML in 1989?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        answer: 2,
        explain: "Tim Berners-Lee proposed the idea in 1989."
      },
      {
        q: "Where was HTML developed in 1990?",
        options: ["MIT", "CERN", "NASA", "Microsoft"],
        answer: 1,
        explain: "HTML was developed in 1990 at CERN, the European research organization."
      },
      {
        q: "What is the purpose of the <!DOCTYPE html> declaration?",
        options: [
          "It adds a title to the page",
          "It links a CSS file",
          "It tells the browser the document is an HTML5 document",
          "It creates a comment in the code"
        ],
        answer: 2,
        explain: "The DOCTYPE declaration tells the browser which version of HTML the page uses (HTML5)."
      },
      {
        q: "Which statement correctly describes the Internet?",
        options: [
          "A collection of web pages written in HTML",
          "A global network of connected computers and networks",
          "A web browser",
          "A search engine"
        ],
        answer: 1,
        explain: "The Internet is the global network infrastructure that connects computers around the world."
      },
      {
        q: "Which statement correctly describes the World Wide Web?",
        options: [
          "The physical cables of the Internet",
          "Another name for the Internet",
          "A system of linked pages and resources accessed over the Internet",
          "A type of computer hardware"
        ],
        answer: 2,
        explain: "The Web is a service that runs on top of the Internet, made of linked pages and resources."
      },
      {
        q: "What is the relationship between the Internet and the World Wide Web?",
        options: [
          "They are exactly the same thing",
          "The Internet runs on top of the Web",
          "The Web is one service that runs on the Internet",
          "The Web existed before the Internet"
        ],
        answer: 2,
        explain: "The Internet is the network; the Web is one of the services that uses it."
      },
      {
        q: "Which is the best description of HTML?",
        options: [
          "A markup language that structures web page content",
          "A database system",
          "An operating system",
          "A language used only for styling pages"
        ],
        answer: 0,
        explain: "HTML is a markup language used to structure the content of web pages. Styling is the job of CSS."
      }
    ]
  },
  {
    id: "tags",
    title: "Tags & Elements Quiz",
    icon: "images/icon-tags.svg",
    description:
      "The purpose of html, head, title, body, headings, br, a, and img, plus tags versus elements and the viewport meta tag.",
    questions: [
      {
        q: "What is the purpose of the <html> tag?",
        options: [
          "It is the root element that wraps the whole HTML document",
          "It creates a heading",
          "It inserts an image",
          "It adds a line break"
        ],
        answer: 0,
        explain: "The <html> element is the root that contains the entire page."
      },
      {
        q: "What does the <head> element contain?",
        options: [
          "The visible page content",
          "Metadata such as the title and links to stylesheets",
          "Only the footer of the page",
          "Only images"
        ],
        answer: 1,
        explain: "The <head> holds information about the page that is not displayed in the main content area."
      },
      {
        q: "What does the <title> element do?",
        options: [
          "Creates the biggest heading on the page",
          "Sets the text shown in the browser tab",
          "Adds a caption below an image",
          "Creates a hyperlink"
        ],
        answer: 1,
        explain: "The <title> text appears in the browser tab and is used for bookmarks and search results."
      },
      {
        q: "Which element holds the content that is displayed on the web page?",
        options: ["<head>", "<title>", "<body>", "<meta>"],
        answer: 2,
        explain: "Everything visible to the user goes inside <body>."
      },
      {
        q: "Which heading tag represents the most important heading?",
        options: ["<h6>", "<h3>", "<head>", "<h1>"],
        answer: 3,
        explain: "Headings run from <h1> (most important, largest) to <h6> (least important, smallest)."
      },
      {
        q: "What does the <br> tag do?",
        options: [
          "Makes text bold",
          "Inserts a single line break",
          "Starts a new paragraph with spacing",
          "Draws a horizontal line"
        ],
        answer: 1,
        explain: "<br> inserts a line break. It is an empty element with no closing tag."
      },
      {
        q: "Which tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
        explain: "The anchor tag <a>, with its href attribute, creates a hyperlink."
      },
      {
        q: "Which attributes are needed to properly display an image with <img>?",
        options: [
          "href and title",
          "src and alt",
          "link and text",
          "name and value"
        ],
        answer: 1,
        explain: "src gives the image file location and alt gives alternative text."
      },
      {
        q: "What is the difference between a tag and an element?",
        options: [
          "There is no difference",
          "A tag is only the markup like <p>; an element is the opening tag, content, and closing tag together",
          "An element is only the closing tag",
          "A tag is the content between two elements"
        ],
        answer: 1,
        explain: "A tag is the markup itself, while a complete element includes the opening tag, content, and closing tag."
      },
      {
        q: "What does <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> do?",
        options: [
          "Changes the page font",
          "Makes the page fit the device screen width and start at normal zoom",
          "Adds a background color",
          "Links to a JavaScript file"
        ],
        answer: 1,
        explain: "The viewport meta tag makes the page width match the device width with a 1.0 initial zoom, which supports responsive design."
      }
    ]
  },
  {
    id: "forms",
    title: "Forms & User Inputs Quiz",
    icon: "images/icon-forms.svg",
    description:
      "Text fields, password fields, radio buttons, checkboxes, textareas, drop-down lists, and submit buttons.",
    questions: [
      {
        q: "Which input type creates a single-line text field?",
        options: [
          "<input type=\"text\">",
          "<input type=\"line\">",
          "<input type=\"string\">",
          "<input type=\"box\">"
        ],
        answer: 0,
        explain: "type=\"text\" creates a single-line text field."
      },
      {
        q: "What does <input type=\"password\"> do?",
        options: [
          "Encrypts the data on the server",
          "Hides the typed characters on screen",
          "Sends the password by email",
          "Creates a checkbox"
        ],
        answer: 1,
        explain: "A password field masks the characters as dots or asterisks. It does not encrypt anything by itself."
      },
      {
        q: "Which input type lets the user select only ONE option from a group?",
        options: ["checkbox", "radio", "text", "submit"],
        answer: 1,
        explain: "Radio buttons allow only one choice within a group."
      },
      {
        q: "Which input type lets the user select MULTIPLE options?",
        options: ["radio", "password", "checkbox", "reset"],
        answer: 2,
        explain: "Checkboxes allow zero, one, or many selections."
      },
      {
        q: "Which element creates a multi-line text input area?",
        options: ["<input type=\"multiline\">", "<text>", "<textarea>", "<paragraph>"],
        answer: 2,
        explain: "<textarea> is used for longer, multi-line text such as comments."
      },
      {
        q: "Which element creates a drop-down list?",
        options: ["<dropdown>", "<select>", "<list>", "<option> by itself"],
        answer: 1,
        explain: "<select> creates the drop-down list, and <option> elements inside it are the choices."
      },
      {
        q: "Which element defines each choice inside a drop-down list?",
        options: ["<choice>", "<item>", "<option>", "<li>"],
        answer: 2,
        explain: "Each choice in a <select> is written with an <option> element."
      },
      {
        q: "Which code creates a submit button?",
        options: [
          "<input type=\"send\">",
          "<input type=\"submit\">",
          "<submit>",
          "<input type=\"go\">"
        ],
        answer: 1,
        explain: "type=\"submit\" creates a button that sends the form data."
      },
      {
        q: "How do you make several radio buttons act as one group where only one can be chosen?",
        options: [
          "Give them different id values",
          "Give them the same name attribute",
          "Place them in different forms",
          "Use type=\"checkbox\" instead"
        ],
        answer: 1,
        explain: "Radio buttons that share the same name belong to one group."
      },
      {
        q: "Which element wraps form controls such as inputs and buttons?",
        options: ["<form>", "<section>", "<fieldform>", "<table>"],
        answer: 0,
        explain: "The <form> element contains the controls and defines how the data is submitted."
      }
    ]
  }
];
