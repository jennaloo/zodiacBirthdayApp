//Array of Objects. Objects are Zodiac Signs with property of name, photo, and traits.
var zodiacArray = [
    {
        //january 20 - february 18
        name: 'aquarius',
        photo: '<img src="img/aquarius.png" class="animated fadeIn">',
        trait: 'Friendly, humanitarian, intelligent, creative, independent and loyal.',
        month: "january",
    },
    {
        //february 19 - march 20
        name: 'pisces',
        photo: '<img src="img/pisces.png" class="animated fadeIn">',
        trait: 'Imaginative, kind, compassionate, intuitive, sensitive, and selfless.',
        month: "february",
        transitionDay: 19,
    },
    {
        //march 21 - april 19
        name: 'aries',
        photo: '<img src="img/aries.png" class="animated fadeIn">',
        trait: 'Adventurous, courageous, versatile, lively, positive, and passionate.',
        month: "march",
        transitionDay: 21,
    },
    {
        //april 20 - may 20
        name: 'taurus',
        photo: '<img src="img/taurus.png" class="animated fadeIn">',
        trait: 'Generous, dependable, down to earth, patient, independent and persistant.',
        month: 'april',
        transitionDay: 20,
    },
    {
        //may 21 - june 20
        name: 'gemini',
        photo: '<img src="img/gemini.png" class="animated fadeIn">',
        trait: 'Flexible, versatile, enthusiastic, soft-spoken, witty and humorous, and intelligent.',
        month: "may",
        transitionDay: 21,
    },
    {
        //june 21 - july 22
        name: 'cancer',
        photo: '<img src="img/cancer.png" class="animated fadeIn">',
        trait: 'Creative, spontaneous, faithful, loving and protective.',
        month: 'june',
        transitionDay: 21,
    },
    {
        //july 23 - august 22
        name: 'leo',
        photo: '<img src="img/leo.png" class="animated fadeIn">',
        trait: 'Kind, helpful, optimistic, straightforward, and loyal.',
        month: "july",
        transitionDay: 23,
    },
    {
        //august 23 - september 22
        name: 'virgo',
        photo: '<img src="img/virgo.png" class="animated fadeIn">',
        trait: 'Watchful, intelligent, practical, analytical, reliable, and perfectionist.',
        month: "august",
        transitionDay: 23,
    },
    {
        //september 23 - october 22
        name: 'libra',
        photo: '<img src="img/libra.png" class="animated fadeIn">',
        trait: 'Tactful, romantic, charming, just, and diplomatic.',
        month: "september",
        transitionDay: 23,
    },
    {
        //october 23 - november 21
        name: 'scorpio',
        photo: '<img src="img/scorpio.png" class="animated fadeIn">',
        trait: 'Focused, brave, balanced, faithful, ambitious and intuitive.',
        month: "october",
        transitionDay: 23,
    },
    {
        //november 21 - december 21
        name: 'sagittarius',
        photo: '<img src="img/sagittarius.png" class="animated fadeIn">',
        trait: 'Straightforward, intelligent, philosophical and large-hearted.',
        month: "november",
        transitionDay: 21,
    }, {
        // december 22 - january 19
        name: 'capricorn',
        photo: '<img src="img/capricorn.png" class="animated fadeIn">',
        trait: 'Practical, ambitious, wise, disciplined, patient and cautious.',
        month: "december",
        transitionDay: 22,
    }
]

document.getElementById("myBtn").addEventListener("click", birthday);

window.addEventListener("keydown", function (event) {
    console.log(event.code);
    if (event.code == "Enter") {
        birthday();
    }
});

//note: there is an object called MouseEvent that has the exact pixel location of the event. 

function birthday() {


    var userMonth = document.getElementById('month').value;
    var userDay = document.getElementById('day').value;

    for (i = 0; i < 12; i++) {

        if (userMonth.toUpperCase() == zodiacArray[i].month.toUpperCase()) {
            if (userDay > zodiacArray[i].transitionDay) {

                document.getElementById('signName').innerText = zodiacArray[i].name;

                document.getElementById('photo').innerHTML = zodiacArray[i].photo;

                document.getElementById('traits').innerText = zodiacArray[i].trait;


                break;
            } else {

                document.getElementById('signName').innerText = zodiacArray[i - 1].name;

                document.getElementById('photo').innerHTML = zodiacArray[i - 1].photo;

                document.getElementById('traits').innerText = zodiacArray[i - 1].trait;

                break;
            }
            //if usermonth matches the signs month, it is either that sign or the sign before it, depending on the day.
        }

    }
}
