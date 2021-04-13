# Click a Tarot Card.

## Why this type of app?
  I have a couple of tarot decks. I was already interested in the subject. My decks are not Rider Waite Tarot Deck. My tarot decks are based of the Arthurian Legends and the other is based on Hermeticism. Rider Waite's Deck is a very common and mostly known deck. It seemed natural to create an app based off of my interest of tarot.
  
## How did I approach this app?
  1. I started out with a couple sketches of what I wanted my app to look like. Based on my sketch, I handwritten a wireframe before going over it once more to group certain elements within divs to make it much easier to access them and/or design them with CSS.
  2. I found the API that works and I like for the app. The API i had used is from this link (https://github.com/ekelen/tarot-api)
  3. I tested the API and then began logging each different aspect I could with this API to understand how to access the information I would need for this app. 
  4. I had noticed that this API did not include images of the R.W. Tarot cards. Therefore, the first thing I did was find all the images of the cards and placed them in a directory, the imgs directory.
  5. At this point, my documents are linked, the basic wireframe has been coded, the API is linked, I had noted the syntax needed to access the information in the API. I began to create a checklist of things that needed to be down in order for this app to reach MVP.
  ##### Checklist:
    -[x] Find the Images of the cards.
          - Style the images with CSS, one thing that is out the way and not distracting
          - rename the images so they could be called upon with the name of the card. 
          - find the back of the card so the user can flip the card.
          - give the card-back and the card-iomage classes 
    -[x] Create a button to 'draw the card'
          - add the card name
          - add the card information to the modal
          - all have to be done with a click
          - must be done before 'flipping' the card
    -[x] When Card-back is clicked
          - the correct card image is shown with the corresponding card name
    -[x] When the card-image is clicked
          - Modal appears:
             - Name
             - meaning
             - description
