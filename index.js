//.submit(), preventDefault(), toggleClass(), and closest()
//https://repl.it/@cjapedersen/fizzbuzz-solution
//https://repl.it/@thinkful/lessimggreater-input-switches
//https://stackoverflow.com/questions/2830542/prevent-double-submission-of-forms-in-jquery




function addItems() {

    $('#js-shopping-list-form').submit(event => {

        console.log("Adding item");
        event.preventDefault();

        //Get the text entered by the user
        const text = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        console.log("text = " + text);

        //Clear the input field 
        $('#shopping-list-entry').val("");

        //TODO - Why are multiple items being added to shopping list?
            //Use off()?
        //Create empty array for building new item's html content
        let item = [];

        //Build the html for the new item, then push to the new array 
        item.push($(
        `<li><span class="shopping-item">${text}
            </span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
            </button><button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
            </li>`));

        //Append the html to the bottom of the existing shopping-list 
        $('.shopping-list').append(item);

    });
}

function toggleItems() {

    $('.shopping-list').on('click', '.shopping-item-toggle', event => {

        console.log("Toggling item");
        event.preventDefault();

        //Get item that user is interacting with
        const target = $(event.currentTarget).closest('li').find('.shopping-item');
        console.log("target = " + target);

        //Strike through grocery item text
        target.toggleClass('shopping-item__checked');

    });
}

function removeItems() {

    //console.log("Removing item");

    //Find the button associated with shopping-item-delete
    //const target = $('li.shopping-item-delete').closest('');
    //console.log("target = " + target);


    //$('ul').on('click', 'li', function(event) {
    
        //const target = $(event.currentTarget).closest('.shopping-item-delete');
        //target.remove();
        //this.remove();
      //});

}

function startApp() {
    addItems();
    removeItems();
    toggleItems();
}



$(startApp);
