
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

        $('#draw').on('click', () => { //beginning the thing

          let index = randomNumber(cards.length)
          let currentCard = cards[index]

          const $modal = $('#modal')
          let $modalInnards = $('#modal=innards')



          $($cardContainer)
            .html(`<img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)

          $(".card-back").on('click', () => { //flipping the card

            $cardContainer
            .html(`<h3 class="card-name">${currentCard.name}</h3>\
            <img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)

            $('.card-back')
            .replaceWith(`<img src="imgs/${currentCard.name}.jpg" class="card-image" alt="" />`)

            $(".card-image").on('click', () => {

            })

          }) //do not delete










        }) //do not delete





      },
      () => {
        console.log("bad request");
      }
    )





}) // the end of the windows on load function
