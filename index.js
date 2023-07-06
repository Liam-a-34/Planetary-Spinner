var counter = 1;
// $(".planet-title").text("Mercury")
// $(".planet-info").text("Mercury is the closest planet to the Sun and the smallest in our solar system. It has a rocky surface and no atmosphere, experiencing extreme temperature variations between its scorching days and freezing nights.")

const titleArr = ["",
"Mercury",
"Venus",
"Earth",
"Mars",
"Jupiter",
"Saturn",
"Uranus",
"Neptune",
"Pluto"
]

// const title1 = "Mercury"
// const title2 = "Venus"
// const title3 = "Earth"
// const title4 = "Mars"
// const title5 = "Jupiter"
// const title6 = "Saturn"
// const title7 = "Uranus"
// const title8 = "Neptune"
// const title9 = "Pluto"
const infoArr = [
"",
"Mercury is the closest planet to the Sun and the smallest in our solar system. It has a rocky surface and no atmosphere, experiencing extreme temperature variations between its scorching days and freezing nights.",
"Venus is often referred to as Earth's 'sister planet' due to its similar size and composition. It has a thick atmosphere, primarily composed of carbon dioxide, resulting in a runaway greenhouse effect that makes it the hottest planet in our solar system.",
"Our home planet, Earth, is the third planet from the Sun and the only known celestial body to support life. It has a diverse range of ecosystems, abundant water, and a protective atmosphere that maintains a suitable climate for living organisms.",
"Mars, often called the 'Red Planet,' is known for its rusty, reddish appearance. It has a thin atmosphere and features such as polar ice caps and the largest volcano in the solar system, Olympus Mons. Scientists have been studying Mars as a potential candidate for future human exploration.",
"Jupiter is the largest planet in our solar system, known for its distinctive bands of clouds and the famous Great Red Spot—a massive storm. It is a gas giant composed mostly of hydrogen and helium and has numerous moons, including the four Galilean moons.",
"Saturn is famous for its spectacular ring system, consisting of ice particles and rocky debris. It is the second-largest planet and has prominent features like its hexagonal-shaped storm at the north pole. Saturn also has numerous moons, with its largest moon, Titan, being of particular interest to scientists.",
"Uranus is an ice giant and the seventh planet from the Sun. It is unique among the planets as it rotates on its side, likely due to a past collision. Uranus has a bluish-green color due to the presence of methane in its atmosphere.",
"Neptune is the farthest planet from the Sun and the fourth-largest by diameter. It is an ice giant with a deep blue color caused by methane in its atmosphere. Neptune has strong winds and is known for its storms, including the Great Dark Spot.",
"Pluto, once considered the ninth planet, is now classified as a dwarf planet. It resides in the Kuiper Belt, a region beyond Neptune, and is composed of rock and ice. Pluto has a highly eccentric orbit and a complex system of moons, including its largest moon, Charon.",
]

const imageUrls = [
    "/images/mercury.png",
    "/images/venus.png",
    "/images/earth.png",
    "/images/mars.png",
    "/images/jupiter.png",
    "/images/saturn.png",
    "/images/uranus.png",
    "/images/neptune.png",
    "/images/pluto.png",
]



document.getElementById("planet").classList.add("planet1")
$("#name-1").addClass("white-text")

function preloadImages() {
    var imagesLoaded = 0;
  
    for (var i = 0; i < imageUrls.length; i++) {
      var img = new Image();
      img.src = imageUrls[i];
      img.onload = function() {
        imagesLoaded++;
  
        if (imagesLoaded === imageUrls.length) {
          // All images have finished loading
          $(".planet-title").text(titleArr[counter]);
          $(".planet-info").text(infoArr[counter]);
          $('#name-1').arctext({ radius: 400 });
          $('#name-2').arctext({ radius: 400 });
          $('#name-3').arctext({ radius: 400 });
          $('#name-4').arctext({ radius: 400 });
          $('#name-5').arctext({ radius: 400 });
          $('#name-6').arctext({ radius: 400 });
          $('#name-7').arctext({ radius: 400 });
          $('#name-8').arctext({ radius: 400 });
          $('#name-9').arctext({ radius: 600 });
        }
      };
    }
  }

document.querySelector(".back-button").addEventListener("click", () => {
    if(counter >= 2){
        counter --
        document.getElementById("planet").className = ""
        document.getElementById("planet").classList.add(`planet${counter}`)

        $(".planet-title").addClass("fade")
        $(".planet-info").addClass("fade")
        setTimeout(function(){
            $(".planet-title").text(titleArr[counter])
            $(".planet-info").text(infoArr[counter])
            $(".planet-title").removeClass("fade")
            $(".planet-info").removeClass("fade")
        },250)

        $(`#name-${counter}`).addClass("white-text")
        $(`#name-${counter + 1}`).removeClass("white-text")
    } else {
        return
    }
})

document.querySelector(".forward-button").addEventListener("click", () => {
    if(counter <= 8){
        counter ++
        document.getElementById("planet").className = ""
        document.getElementById("planet").classList.add(`planet${counter}`)

        $(".planet-title").addClass("fade")
        $(".planet-info").addClass("fade")
        setTimeout(function(){
            $(".planet-title").text(titleArr[counter])
            $(".planet-info").text(infoArr[counter])
            $(".planet-title").removeClass("fade")
            $(".planet-info").removeClass("fade")
        },250)

        $(`#name-${counter}`).addClass("white-text")
        $(`#name-${counter - 1}`).removeClass("white-text")
    } else {
        return
    }
})

    // $('#name-1').arctext({radius: 400});
    // $('#name-2').arctext({radius: 400});
    // $('#name-3').arctext({radius: 400});
    // $('#name-4').arctext({radius: 400});
    // $('#name-5').arctext({radius: 400});
    // $('#name-6').arctext({radius: 400});
    // $('#name-7').arctext({radius: 400});
    // $('#name-8').arctext({radius: 400});
    // $('#name-9').arctext({radius: 600});
    
    window.addEventListener("load", preloadImages);