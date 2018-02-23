/* global document, randomColor, snabbt, FastClick */
// Constants
'use strict';

var CARD_HEIGHT = 80;
var CARD_WIDTH = 80;
var CARD_COUNT = 40;

var WIDTH = 800;
var HEIGHT = 600;

var TILT = Math.PI / 8;
var PYTH_ANGLE = Math.PI / 2 - TILT;

var TILTED_CARD_HEIGHT = Math.sin(PYTH_ANGLE) * CARD_HEIGHT + 2;
var TILTED_CARD_WIDTH = Math.cos(PYTH_ANGLE) * CARD_HEIGHT;
var CARD_SPACING = 2;
var PYRAMID_WIDTH = TILTED_CARD_WIDTH * 2 + CARD_SPACING * 2;

// array storing title in four languages
// Spanish, Hindi, Mongolian, 
var titleArrays = [["Yo", "quiero", "Taco", "Bell"], 
    ["Mujhe", "chahiye", "Taco", "Bell"],
    ["Mimi", "unataka", "Taco", "Bell"],
    ["I", "want", "Taco", "Bell"]];

function updateSizes() {
  var container = document.getElementById('container');
  WIDTH = container.clientWidth;
  HEIGHT = container.clientHeight;
  CARD_WIDTH = WIDTH * 0.05;
  CARD_HEIGHT = WIDTH * 0.05;
  TILTED_CARD_HEIGHT = Math.sin(PYTH_ANGLE) * CARD_HEIGHT + 2;
  TILTED_CARD_WIDTH = Math.cos(PYTH_ANGLE) * CARD_HEIGHT;
  PYRAMID_WIDTH = TILTED_CARD_WIDTH * 2 + CARD_SPACING * 2;
  for (var i = 0; i < Deck.length(); ++i) {
    Deck.cardAt(i).style.height = CARD_HEIGHT + 'px';
    Deck.cardAt(i).style.width = CARD_WIDTH + 'px';
  }
}

// set of colors for cards, repeat blue and purple
var COLORS = [
  "#4A5FAB",
  "#8B194D",
  "#F26634",
  "#4A5FAB",
  "#FCB247",
  "#8B194D"
]

// Formations
var PILE = 1;
// var HOUSE = 2;
var WALL = 3;
// var CYLINDER = 4;
var current_mode;

var formationBuilders = {};
formationBuilders[PILE] = pile_positions;
// formationBuilders[HOUSE] = house_positions;
formationBuilders[WALL] = wall_positions;
// formationBuilders[CYLINDER] = cylinder_positions;

function createCard(container, index) {
  var card = document.createElement('div');
  card.className = 'card';
  card.style.background = COLORS[index % COLORS.length];
  card.setAttribute("cardColor", COLORS[index % COLORS.length]);

  if (index == 0) {
    card.style.backgroundImage = "url('images/iconI.png')";
    card.style.backgroundSize = "100%";
    card.classList.add("cardWithIconI");
    card.setAttribute("cardTitleNumber", 0);
  }
  else if (index == 1) {
    card.style.backgroundImage = "url('images/iconWant.png')";
    card.style.backgroundSize = "100%";
    card.classList.add("cardWithIconWant");
    card.setAttribute("cardTitleNumber", 1);
  }
  else if (index == 2) {
    card.style.backgroundImage = "url('images/iconTaco.png')";
    card.style.backgroundSize = "100%";
    card.classList.add("cardWithIconTaco");
    card.setAttribute("cardTitleNumber", 2);
  }
  else if (index == 3) {
    card.style.backgroundImage = "url('images/iconBell.png')";
    card.style.backgroundSize = "100%";
    card.classList.add("cardWithIconBell");
    card.setAttribute("cardTitleNumber", 3);
  }
  else if (index > 3) {
    for (var i = 4; i <= COLORS.length; i++) {
      var randomValue = Math.floor(Math.random() * Math.floor(4));

      console.log("random" + randomValue + "index" + index + "i" + i)

      if (randomValue == 0) {
        card.style.backgroundImage = "url('images/iconI.png')";
        card.style.backgroundSize = "100%";
        card.classList.add("cardWithIconI");
        card.setAttribute("cardTitleNumber", 0);
        break;
      }
      else if (randomValue == 1) {
        card.style.backgroundImage = "url('images/iconWant.png')";
        card.style.backgroundSize = "100%";
        card.classList.add("cardWithIconWant");
        card.setAttribute("cardTitleNumber", 1);
        break;
      }
      else if (randomValue == 2) {
        card.style.backgroundImage = "url('images/iconTaco.png')";
        card.style.backgroundSize = "100%";
        card.classList.add("cardWithIconTaco");
        card.setAttribute("cardTitleNumber", 2);
        break;
      }
      else if (randomValue == 3) {
        card.style.backgroundImage = "url('images/iconBell.png')";
        card.style.backgroundSize = "100%";
        card.classList.add("cardWithIconBell");
        card.setAttribute("cardTitleNumber", 3);
        break;
      }

    }
  }

  container.appendChild(card);
  return card;
}

// Deck
var Deck = (function() {
  var cards = [];
  var cardIndex = 0;

  for (var i = 0; i < CARD_COUNT; ++i) {
    var container = document.getElementById('surface');
    cards.push(createCard(container, i));
  }

  return {
    nextCard: function() {
      if (cardIndex > 51)
        return;
      return cards[cardIndex++];
    },
    cardAt: function(index) {
      return cards[index];
    },
    reset: function() {
      cardIndex = 0;
    },
    length: function() {
      return cards.length;
    }
  };
})();

function build_formation(positions) {
  Deck.reset();
  for (var i = 0; i < positions.length; ++i) {
    snabbt(Deck.nextCard(), {
      position: positions[i].position,
      rotation: positions[i].rotation,
      easing: 'ease',
      delay: i * 50
    });
  }
}

function setMode(mode) {
  updateSizes();
  if (mode === current_mode) {
    return;
  }

  var positions = formationBuilders[mode]();
  build_formation(positions);

  current_mode = mode;
}

function rotateContainer() {
  var container = document.getElementById('surface');
  snabbt(container, {
    fromRotation: [0, 0, 0],
    rotation: [0, 0/*2 * Math.PI*/, 0],
    duration: 10000,
    perspective: 2000,
    complete: function() {
      rotateContainer();
    }
  });
}

function pile_positions() {
  Deck.reset();
  var positions = [];

  var i = 0;
  var card = Deck.nextCard();
  var center = (WIDTH - CARD_WIDTH) / 2;
  var y = HEIGHT - HEIGHT * 0.2;
  while (card) {
    positions.push({
      position: [center, y - i * 0.5, WIDTH * 0.1],
      rotation: [Math.PI / 2, 0, 0]
    });
    ++i;
    card = Deck.nextCard();
  }
  return positions;
}

// function house_positions() {
//   Deck.reset();

//   var floors = 5;
//   var y = (floors - 1) * TILTED_CARD_HEIGHT + TILTED_CARD_HEIGHT / 2;
//   var z = -WIDTH * 0.2;
//   var x = (WIDTH - PYRAMID_WIDTH * floors) / 2 - TILTED_CARD_WIDTH;

//   var positions = [];
//   var i;
//   for (i = 0; i < floors; ++i) {
//     var _x = x + i * TILTED_CARD_WIDTH + i * CARD_SPACING;
//     var _y = y - i * TILTED_CARD_HEIGHT - i * CARD_SPACING;
//     positions = positions.concat(house_row_positions(floors - i, _x, _y, z));
//   }

//   return positions;
// }

// function house_row_positions(count, x, y, z) {
//   var positions = [];
//   var i;
//   // Tilted cards
//   for (i = 0; i < count; ++i) {
//     var cardPositions = pyramid_postions(x + i * PYRAMID_WIDTH, y, z);
//     positions.push({
//       position: cardPositions[0].position,
//       rotation: cardPositions[0].rotation
//     });
//     positions.push({
//       position: cardPositions[1].position,
//       rotation: cardPositions[1].rotation
//     });
//   }
//   // Bridge cards
//   for (i = 0; i < count - 1; ++i) {
//     positions.push({
//       position: [x + i * PYRAMID_WIDTH + TILTED_CARD_WIDTH, y - TILTED_CARD_HEIGHT / 2 - CARD_SPACING / 2, z],
//       rotation: [Math.PI / 2, Math.PI / 2, 0]
//     });
//   }
//   return positions;
// }

// function pyramid_postions(x, y, z) {
//   // Firefox flickers if elements overlap
//   var spacing = TILTED_CARD_WIDTH / 2 + CARD_SPACING / 2;

//   return [{
//     position: [x - spacing, y, z],
//     rotation: [-TILT, Math.PI / 2, 0]
//   }, {
//     position: [x + spacing, y, z],
//     rotation: [TILT, Math.PI / 2, 0]
//   }];
// }

function wall_positions() {
  var positions = [];
  var w = CARD_WIDTH + 10;
  var h = CARD_HEIGHT + 10;
  var start_x = (WIDTH - 10 * w) / 2;
  var start_y = (HEIGHT - 4 * h) / 2;
  for (var i = 0; i < CARD_COUNT; ++i) {
    var x = i % 10 * w + start_x;
    var y = Math.floor(i / 10) * h + start_y;
    positions.push({
      position: [x, y, 0],
      rotation: [0, 0, 0]
    });
  }
  return positions;
}

// function cylinder_positions() {
//   var positions = [];
//   var start_x = WIDTH / 2;
//   var start_y = HEIGHT * 0.1;
//   var radius = WIDTH * 0.2;
//   for (var i = 0; i < CARD_COUNT; ++i) {
//     var angle = i % 10 / 10 * 2 * Math.PI;
//     var x = Math.cos(angle) * radius + start_x;
//     var z = Math.sin(angle) * radius;
//     var y = Math.floor(i / 10) * 1.2 * CARD_HEIGHT + start_y;
//     positions.push({
//       position: [x, y,s z],
//       rotation: [0, Math.PI / 2 + angle, 0]
//     });
//   }
//   return positions;
// }



// var classCardWithIconI = getElementsByClassName("cardWithIconI");

// classCardWithIconI.onclick = function(){
//   console.log("flip cards");
// };

function rotateCardHalfwayPerClick(className) {
  var card = $("." + className);

  snabbt(card, {
    fromRotation: [0, 0, 0],
    rotation: [0, (1/2 * (Math.PI)), 0],
    duration: 2000,
    allDone: function () {
      // adds a class so that when the card rotates to the backside, the card color changes
      $(card).addClass("cardBack");
      // adds the appropriate text to the back of the card, sites attributes for card color (language) and word in array (which word to translate)
      // blue, language Spanish
      $("." + className + "[cardcolor*='#4A5FAB']").append("<p class='translatedText" + className + "'>" + titleArrays[0][$("." + className).attr("cardTitleNumber")] + "</p>");
      // purple, language Hindi
      $("." + className + "[cardcolor*='#8B194D']").append("<p class='translatedText" + className + "'>" + titleArrays[1][$("." + className).attr("cardTitleNumber")] + "</p>");
      // orange, language Swahili
      $("." + className + "[cardcolor*='#F26634']").append("<p class='translatedText" + className + "'>" + titleArrays[2][$("." + className).attr("cardTitleNumber")] + "</p>");
      // yellow, language English
      $("." + className + "[cardcolor*='#FCB247']").append("<p class='translatedText" + className + "'>" + titleArrays[3][$("." + className).attr("cardTitleNumber")] + "</p>");
    }
  }).snabbt({
      fromRotation: [0, (1/2 * (Math.PI)), 0],
      rotation: [0, (1 * Math.PI), 0],
      duration: 2000
  });

  // if the card is facing the back
  if ($(card).hasClass( "cardBack")) {
    snabbt(card, {
        fromRotation: [0, 0, 0],
        rotation: [0, (1/2 * (Math.PI)), 0],
        duration: 2000,
        // perspective: 2000,
        allDone: function () {
          // var backgroundColor = $(this).css("background");
          // console.log(backgroundColor)
          $(card).removeClass("cardBack");
          $(".translatedText" + className).remove(); 
        }
    }).snabbt({
        fromRotation: [0, (1/2 * (Math.PI)), 0],
        rotation: [0, (1 * Math.PI), 0],
        duration: 2000,
    });
  };
};

function rotateCardFullForAutoLoop(className) {
  var card = $("." + className);

  snabbt(card, {
    fromRotation: [0, 0, 0],
    rotation: [0, (1/2 * (Math.PI)), 0],
    duration: 2000,
    allDone: function () {
      // adds a class so that when the card rotates to the backside, the card color changes
      $(card).addClass("cardBack");
      // adds the appropriate text to the back of the card, sites attributes for card color (language) and word in array (which word to translate)
      // blue, language Spanish
      $("." + className + "[cardcolor*='#4A5FAB']").append("<p class='translatedText" + className + "'>" + titleArrays[0][$("." + className).attr("cardTitleNumber")] + "</p>");
      // purple, language Hindi
      $("." + className + "[cardcolor*='#8B194D']").append("<p class='translatedText" + className + "'>" + titleArrays[1][$("." + className).attr("cardTitleNumber")] + "</p>");
      // orange, language Swahili
      $("." + className + "[cardcolor*='#F26634']").append("<p class='translatedText" + className + "'>" + titleArrays[2][$("." + className).attr("cardTitleNumber")] + "</p>");
      // yellow, language English
      $("." + className + "[cardcolor*='#FCB247']").append("<p class='translatedText" + className + "'>" + titleArrays[3][$("." + className).attr("cardTitleNumber")] + "</p>");
    }
  }).snabbt({
      fromRotation: [0, (1/2 * (Math.PI)), 0],
      rotation: [0, (1 * Math.PI), 0],
      duration: 2000
  }).snabbt({
        fromRotation: [0, 0, 0],
        rotation: [0, (1/2 * (Math.PI)), 0],
        duration: 2000,
        // perspective: 2000,
        allDone: function () {
          // var backgroundColor = $(this).css("background");
          // console.log(backgroundColor)
          $(card).removeClass("cardBack");
          $(".translatedText" + className).remove(); 
        }
  }).snabbt({
        fromRotation: [0, (1/2 * (Math.PI)), 0],
        rotation: [0, (1 * Math.PI), 0],
        duration: 2000,
  });
};

// automatic card flip function, linked in a series made for a for loop
function automaticCardFlip(i) {
    if (i%5 == 0) {
      rotateCardFullForAutoLoop("cardWithIconI");
    } 
    else if (i%5 == 1) {
      rotateCardFullForAutoLoop("cardWithIconWant");
    } 
    else if (i%5 == 2) {
      rotateCardFullForAutoLoop("cardWithIconTaco");
    } 
    else if (i%5 == 3) {
      rotateCardFullForAutoLoop("cardWithIconBell");
    }
};

// ----------------------- click events for cards by class- I, want, taco, bell
// ----------------------- cards by classes flip together
$(".cardWithIconI").on('click', function(){
    rotateCardHalfwayPerClick("cardWithIconI");
});

$(".cardWithIconWant").on('click', function(){
    rotateCardHalfwayPerClick("cardWithIconWant");
});

$(".cardWithIconTaco").on('click', function(){
    rotateCardHalfwayPerClick("cardWithIconTaco");
});

$(".cardWithIconBell").on('click', function(){
    rotateCardHalfwayPerClick("cardWithIconBell");
});

function init() {
  updateSizes();
  Deck.reset();
  setMode(PILE);
  rotateContainer();

  // Initialize fast click
  FastClick.attach(document.body);

  // // Event handlers
  var buttons = {
    // 'pile_button': PILE,
    // 'house_button': HOUSE,
    // 'wall_button': WALL,
    // 'cylinder_button': CYLINDER,
    'clickToAnimate': WALL
  };

  var click_handler = function(key) {
    // document.getElementById('pile_button').className = '';
    // document.getElementById('house_button').className = '';
    // document.getElementById('wall_button').className = '';
    // document.getElementById('cylinder_button').className = '';
    document.getElementById(key).className = 'button-primary';
    setMode(buttons[key]);
  };

  Object.keys(buttons).forEach(function(key) {
    document.getElementById(key).addEventListener('click', click_handler.bind(null, key));
  });
}

// change button text on click
document.getElementById("clickToAnimate").addEventListener("click", function(){
  //wall_positions();
  document.getElementById("clickToAnimate").innerHTML = "YOU CLICKED ME!";
  setTimeout(function () {
    for (var x = 0; x < 1500; x++) {
      (function (x) {
        setTimeout(function () {
          automaticCardFlip(x);
        }, 2000*x);
      })(x);
    };
  }, 3350);
});

