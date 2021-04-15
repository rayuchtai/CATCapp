


$(()=> { //beginning of the winodws on load function

  const $cardContainer = $('.card-container')

  const randomNumber = (thing) => {
    let randomNum = Math.floor(Math.random()*thing)
    return randomNum
  }

  //Information about the tyope of deck: Rider Waite
  $('#deck-info').on('click',() => {
    $('#modal-two').css('display', 'block')
  })

  $('#inner-modal-two > button').on('click', () => {
    $('#modal-two').css('display', 'none')
  })

  //Information about a One Card reading
  $('#one-card-reading').on('click', () => {
    $('#modal-three').css('display', 'block')
  })

  $('#close-one').on('click', () => {
    $('#modal-three').css('display', 'none')
  })

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

          const revOrUp = () => {
            let roll = randomNumber(6)
            let card = null
            if (roll % 2 === 0) {
              card = `<img src="imgs/${currentCard.name}.jpg" class="card-imageUp" id="open-modal"  alt=""/>`
              console.log('its even');
            } else {
              card = `<img src="imgs/${currentCard.name}.jpg" class="card-imageRev" id="open-modal"  alt=""/>`
              console.log(`it is odd`);
            }
            return card
          }

          const $modal = $('#modal')
          let $modalInnards = $('#modal-innards')



          $($cardContainer)
            .html(`<img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)



          $(".card-back").on('click', () => { //flipping the card


            $cardContainer
            .html(`
            <img src="imgs/card-back.jpg" class="card-back" alt="card-back"/>`)


            $('.card-back')
            .replaceWith(revOrUp())


          //Information for the Modal
            $('#cardName')
              .html(`<h3 class="card-name">${currentCard.name}</h3>`)

            $('.meaning-text').html(`<p>${currentCard.meaning_up}</p>`)
            $('.desc-text').html(`<p>${currentCard.desc}</p>`)
            $('.meaningRev-text').html(`<p>${currentCard.meaning_rev}</p>`)

            $('.modal-card').replaceWith(`<img src="imgs/${currentCard.name}.jpg" class="modal-card" alt=""/>`)

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
