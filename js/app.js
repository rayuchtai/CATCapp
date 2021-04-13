



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
          let cardImage = $('.card-image')


          const whichCard = () => {
              let roll = randomNumber(6)

              if (roll % 2 === 0) {
                cardImage.css({'trandform':'rotate(180deg)'})
              } else {
                cardImage
              }
            return whichCard
          }

          const $modal = $('#modal')
          let $modalInnards = $('#modal-innards')



          $($cardContainer)
            .html(`<img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)

          $(".card-back").on('click', () => { //flipping the card

            $cardContainer
            .html(`<h3 class="card-name">${currentCard.name}</h3>\
            <img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)

            $('.card-back')
            .replaceWith(`<input type="image" src="imgs/${currentCard.name}.jpg" class="card-image" id="open-modal" alt=""/>`)

            $('#cardName')
              .html(`<h3 class="card-name">${currentCard.name}</h3>`)

            $('.meaning-text').html(`<p>${currentCard.meaning_up}</p>`)
            $('.desc-text').html(`<p>${currentCard.desc}</p>`)

            $('.modal-card').replaceWith(`<input type="image" src="imgs/${currentCard.name}.jpg" class="modal-card" alt=""/>`)

            $("#open-modal").on('click', () => {
              $('#modal').css('display', 'block')


              console.log('it is clickable');
            })

            $('#closeBtn').on('click', () => {
              $('#modal').css('display', 'none')
            })

          }) //do not delete










        }) //do not delete





      },
      () => {
        console.log("bad request");
      }
    )





}) // the end of the windows on load function
