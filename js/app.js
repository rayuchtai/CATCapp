
//


$(()=> {






    $.ajax({
      url:"https://rws-cards-api.herokuapp.com/api/v1/cards"
    }).then(
      (data) => {

        console.log(data);

      },
      () => {
        console.log("bad request");
      }
    )





})
