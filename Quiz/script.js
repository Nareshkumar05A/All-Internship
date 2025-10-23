document.addEventListener('DOMContentLoaded', () =>{
  hideAllCatagory();
  
})
function hideAllCatagory()
{
  const selectCatagory = document.querySelectorAll('#javaQuiz, #htmlQuiz, #cssQuiz, #jsQuiz, #oracleQuiz, #categorySection, #opt');
  selectCatagory.forEach(element =>{
    element.style.display = 'none';
  })
}

function startQuiz(selectId)
{
  const chooseLang = document.getElementById(selectId);
  if(chooseLang)
  {
    chooseLang.style.display = 'block';
    chooseLang.scrollIntoView({behavior:'smooth'})
  }
}
function ChangeCatagory()
{
  document.getElementById('categorySection').scrollIntoView({behavior:'smooth'})
}

function JAVA() 
{
   startQuiz('javaQuiz') 
   let lang = java;
};
function HTML() 
{ 
  startQuiz('htmlQuiz')
  let lang = html; 
};
function CSS() 
{ 
  startQuiz('cssQuiz') 

};
function ORACLE()
{

} 
function JAVASCRIPT() 
{ 
  startQuiz('jsQuiz') 
};
{ 
  startQuiz('oracleQuiz') 
};
function start() 
{
  startQuiz('categorySection')
};

const ques = document.getElementById('question');
ques.style.display = 'none'

const opt = document.getElementById('options');
opt.style.display = 'none';

let btn = document.getElementById('next-btn');
btn.style.display = 'none';

const Change_Catagory = document.getElementById('Change-Catagory')
Change_Catagory.style.display = 'none';

const next_btn = document.getElementById('pre-btn')
next_btn.style.display = 'none';

function nextQuestion(){
  let op = document.querySelectorAll('#opt1, #opt2, #opt3, #opt4');
  op.forEach(ele =>{
    ele.style.display = 'block';
  })
   let start = document.getElementById('nextBtn');
    start.style.display = 'none';
     ques.style.display = 'block';
     opt.style.display = 'block';
     btn.style.display = 'block';
     Change_Catagory.style.display = 'block';
     next_btn.style.display = 'block';
}






































































































































































//  let quizData = [
//   { question: " What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
//   { question: " Who invented Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"] },
//   { question: " HTML stands for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks Text Mark Language", "None of these"] },
//   { question: " CSS is used for?", options: ["Styling", "Programming", "Database", "Compiling"] },
//   { question: " JavaScript is a ___ language.", options: ["Scripting", "Styling", "Markup", "Query"] },
//   { question: " 2 + 3 × 2 = ?", options: ["8", "10", "7", "12"] },
//   { question: " Who is known as the father of C language?", options: ["Dennis Ritchie", "Ken Thompson", "James Gosling", "Linus Torvalds"] },
//   { question: " The full form of DBMS?", options: ["Database Management System", "Data Backup Main System", "Database Monitoring Service", "None"] },
//   { question: " Which tag is used for images in HTML?", options: ["<img>", "<image>", "<pic>", "<src>"] },
//   { question: " CSS stands for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Styling Syntax", "None of these"] },
//   { question: " Who is the current Prime Minister of India (2025)?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"] },
//   { question: " In Java, int takes how many bytes?", options: ["2", "4", "8", "1"] },
//   { question: " Which symbol is used for comments in JavaScript?", options: ["//", "#", "<!-- -->", "/* */"] },
//   { question: " What is the time complexity of Binary Search?", options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"] },
//   { question: " Who discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Tesla"] },
//   { question: " Which company developed ReactJS?", options: ["Facebook", "Google", "Microsoft", "Apple"] },
//   { question: " SQL stands for?", options: ["Structured Query Language", "Stylish Question Language", "Standard Query Language", "None"] },
//   { question: " Which keyword is used to inherit a class in Java?", options: ["extends", "inherits", "super", "this"] },
//   { question: " The brain of computer is?", options: ["CPU", "RAM", "HDD", "GPU"] },
//   { question: " Which is not a JavaScript framework?", options: ["Django", "React", "Angular", "Vue"] },
//   { question: " CSS position property does not include?", options: ["absolute", "relative", "center", "fixed"] },
//   { question: " Which planet is called Red Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
//   { question: " Shortcut key for copy?", options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+S"] },
//   { question: " In Java, String is?", options: ["Immutable", "Mutable", "Primitive", "None"] },
//   { question: " HTML5 introduced which tag?", options: ["<video>", "<marquee>", "<font>", "<blink>"] },
//   { question: " Which year did India get independence?", options: ["1947", "1950", "1945", "1930"] },
//   { question: " Which one is not an OOP concept?", options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"] },
//   { question: " Java is ___ typed language.", options: ["Strongly", "Weakly", "Loosely", "None"] },
//   { question: " RAM stands for?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Ready Available Memory"] },
//   { question: " Which of these is a CSS framework?", options: ["Bootstrap", "React", "Angular", "Node.js"] },
//   { question: " Which data structure uses FIFO?", options: ["Queue", "Stack", "Tree", "Graph"] },
//   { question: " Largest planet in solar system?", options: ["Jupiter", "Saturn", "Earth", "Neptune"] },
//   { question: " Which company created Windows OS?", options: ["Microsoft", "Apple", "IBM", "Google"] },
//   { question: " What does API stand for?", options: ["Application Programming Interface", "Applied Program Internet", "Advanced Processing Integration", "None"] },
//   { question: " In Java, which collection does not allow duplicates?", options: ["Set", "List", "Queue", "Map"] },
//   { question: " Shortcut key for paste?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+P"] },
//   { question: " Who wrote Ramayana?", options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"] },
//   { question: " 5! (Factorial of 5) equals?", options: ["120", "25", "60", "100"] },
//   { question: " Which HTML tag is used for a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"] },
//   { question: " Which CSS property changes text color?", options: ["color", "text-color", "font-color", "background"] },
//   { question: " Father of the Internet?", options: ["Vint Cerf", "Tim Berners-Lee", "Bill Gates", "Steve Jobs"] },
//   { question: " In DBMS, which key uniquely identifies a record?", options: ["Primary Key", "Foreign Key", "Composite Key", "Candidate Key"] },
//   { question: " OS used in Apple devices?", options: ["iOS", "Windows", "Android", "Linux"] },
//   { question: " Which keyword creates object in Java?", options: ["new", "create", "class", "object"] },
//   { question: " What is the SI unit of force?", options: ["Newton", "Joule", "Pascal", "Watt"] },
//   { question: " HTML attribute to open link in new tab?", options: ["target='_blank'", "href='_new'", "new='true'", "window='tab'"] },
//   { question: " CSS property to make text bold?", options: ["font-weight", "text-style", "bold", "weight"] },
//   { question: " In Java, default value of boolean?", options: ["false", "true", "0", "null"] },
//   { question: " 256 is equal to 2 power?", options: ["8", "16", "32", "4"] },
//   { question: " National animal of India?", options: ["Tiger", "Lion", "Elephant", "Leopard"] } ];