


$(() => {


  $.ajax({
     url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
   }).then(
     (data) => {


       for (let i = 0; i < data.cards.length; i++) {

         let $findFool = data.cards[i]
         let $foolsValue = $findFool.value_int

         if ($foolsValue === 1) {

              console.log($foolsValue);
         } else{

              // console.log('Well then....try again?');
         }

       }

        let $test = data.cards[0].name

        console.log(data);
        console.log($test);


     },
     () => {
       console.log("bad request");
     }
   )


 })
