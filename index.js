/*-----------------------------------------------------
  REQUIRE
-------------------------------------------------------*/
var yo       = require('yo-yo')
var csjs     = require('csjs-inject')
var minixhr  = require('minixhr')
/*-----------------------------------------------------
  THEME
-------------------------------------------------------*/
var font       = 'Kaushan Script, cursive'
var yellow     = 'hsla(52,35%,63%,1)'
var white      = 'hsla(120,24%,96%,1)'
var violet     = 'hsla(329,25%,45%,1)'
var lightBrown = 'hsla(29,21%,67%,1)'
var darkBrown  = 'hsla(13,19%,45%,1)'
/*-----------------------------------------------------------------------------
  LOADING FONT
-----------------------------------------------------------------------------*/
var links = ['https://fonts.googleapis.com/css?family=Kaushan+Script']
var font = yo`<link href=${links[0]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
/*-----------------------------------------------------------------------------
LOADING DATA
-----------------------------------------------------------------------------*/
var questions = [
`
Statement #1:
The next social network I build,
will definitely be for cats.
`,
`
Statement #2:
I believe dogs should be allowed
everywhere people are
`,
`
Statement #3:
My friends say, my middle name should be "Meow".
`,
`
Statement #4:
Snoop Dog is definitely one of my
favourite artists
`,
`
Statement #5:
I think I could spend all day just
watching cat videows
`,
`
Statement #6:
I regularly stop people in the street
to pet their dogs.
`
]
var i               = 0
var question        = questions[i]
var results         = []
var answerOptions   = [1,2,3,4,5,6]
/*-----------------------------------------------------------------------------
  QUIZ
-----------------------------------------------------------------------------*/
function quizComponent () {
  var css = csjs`
    .quiz {
      background-color: ${yellow};
      text-align: center;
      font-family: 'Kaushan Script', cursive;
      padding-bottom: 200px;
    }
    .welcome {
      font-size: 4em;
      padding: 50px;
      color: ${darkBrown}
    }
    .question {
      font-size: 2em;
      color: ${white};
      padding: 40px;
      margin: 0 5%;
    }
    .answers {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 5%;
    }
    .answer {
      background-color: ${violet};
      padding: 15px;
      margin: 5px;
      border: 2px solid ${white};
      border-radius: 30%;
    }
    .answer:hover {
      background-color: ${lightBrown};
      cursor: pointer;
    }
    .instruction {
      color: ${violet};
      font-size: 1em;
      margin: 0 15%;
      padding: 20px;
    }
    .results {
      background-color: ${white};
      text-align: center;
      font-family: 'Kaushan Script', cursive;
      padding-bottom: 200px;
    }
    .resultTitle{
      font-size: 4em;
      padding: 50px;
      color: ${darkBrown}
    }
    .back {
      display: flex;
      justify-content: center;
    }
    .backImg {
      height: 30px;
      padding: 5px;
    }
    .backText {
      color: ${white};
      font-size: 25px;
    }
  `
  function template () {
    return yo`
      <div class="${css.quiz}">
        <div class="${css.welcome}">
          Welcome to my quiz!
        </div>
        <div class="${css.question}">
          ${question}
        </div>
        <div class="${css.answers}">
           ${answerOptions.map(x=>yo`<div class="${css.answer}" onclick=${nextQuestion(x)}>${x}</div>`)}
         </div>
        <div class="${css.instruction}">
          Choose how strongly do you agree with the statement<br>
          (1 - don't agree at all, 6 - completely agree)
        </div>
           <div class="${css.back}" >
           <img src="http://i.imgur.com/L6kXXEi.png" class="${css.backImg}">
           <div class="${css.backText}">Back</div>
        </div>
      </div>
    `
  }
  var element = template()
  document.body.appendChild(element)

  return element
   function nextQuestion(id) {
    return function () {
      if (i < (questions.length-1)) {
        results[i] = id
        i = i+1
        question = questions[i]
        yo.update(element, template())
      } else {
      }
    }
	}
     }
 quizComponent()
