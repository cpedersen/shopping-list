function addItems() {

    $('#js-shopping-list-form').submit(event => {

        console.log("Adding item");

        //Prevent the submission of data to a server
        event.preventDefault();

        //Get the text entered by the user
        const text = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        console.log("text = " + text);

        //Clear the input field 
        $('#shopping-list-entry').val("");

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

        //Prevent the submission of data to a server
        event.preventDefault();

        //Get item that user is interacting with
        const target = $(event.currentTarget).closest('li').find('.shopping-item');
        console.log("target = " + target);

        //Strike through grocery item text
        target.toggleClass('shopping-item__checked');

    });
}

function removeItems() {

    $('.shopping-list').on('click', '.shopping-item-delete', event => {

    console.log("Removing item");

    //Prevent the submission of data to a server
    event.preventDefault();

    //Get closest grocery item that user is interacting with
    const target = $(event.currentTarget).closest('li');

    //Remove grocery item
    target.remove();

    });

}

function startApp() {
    addItems();
    toggleItems();
    removeItems();
}

$(startApp);
