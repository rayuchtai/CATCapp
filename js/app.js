
//


$(()=> { //beginning of the winodws on load function

  const $cardContainer = $('.card-container')

  const randomNumber = (thing) => {
    let randomNum = Math.floor(Math.random()*thing)
    return randomNum
  }

  let cards = []


    $.ajax({
      url:"https://rws-cards-api.herokuapp.com/api/v1/cards/"
    }).then(
      (data) => {

        for (let i = 0; i < 78; i++) {
              cards.push(data.cards[i])
        }

        console.log(cards);

        $('#draw').on('click', () => {

          let index = randomNumber(cards.length)
          let currentCard = cards[index]

          $($cardContainer)
            .html(
              `<h3 class="card-name">${currentCard.name}</h3>\
                  <input type="image" src="imgs/${currentCard.name}.jpg"class="card-image"alt=""/>`
              )

          $(".card-image").on('click')

        }) //do not delete





      },
      () => {
        console.log("bad request");
      }
    )





}) // the end of the windows on load function
