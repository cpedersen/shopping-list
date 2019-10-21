//.submit(), preventDefault(), toggleClass(), and closest()
//https://repl.it/@cjapedersen/fizzbuzz-solution
//https://repl.it/@thinkful/lessimggreater-input-switches

function addItems() {
    $('#js-shopping-list-form').submit(event => {
        console.log("Adding item");

        event.preventDefault();

        //Get the text entered by the user
        const text = $(event.currentTarget).find('#shopping-list-entry').val();
        console.log("text = " + text);

        //Clear the input field 
        $('#shopping-list-entry').val("");

        //Create empty array for building new item's html content
        const item = [];

        //Build the html for the new item, then push to the new array 
        item.push($(
        `<ul class="shopping-list"> <li><span class="shopping-item">${text}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`));

        //Append the html to the bottom of the existing shopping-list 
        $('.shopping-list').append(item);
    });
}

function toggleItems() {
    $('.button-label').on('click', function(event) {
        console.log("Toggling item");

        //Get item that user is interacting with
        //const target = $(event.currentTarget).closest('.button-label');
        const target = $(event.currentTarget).closest('.shopping-item');
        const text = $(event.currentTarget).closest('.shopping-item').text();
        console.log("text = " + text);

        //Create empty array 
        const item = [];

        //Build the html for strikethrough
        //TODO: How get the text?
        item.push($(
            `<ul class="shopping-list"> <li><span class="shopping-item shopping-item__checked">${text}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`));
        
        //Test that we can toggle this item
        target.toggleClass('shopping-item__checked');
        //text.toggleClass('.shopping-item__checked');

        //Test that we can delete this item
        //target.removeClass('.shopping-item');

        //Check if item is a 'check' button or a 'delete' button
        //if (target === "shopping-item-toggle") {
        //    console.log("Check button selected");
        //    target.toggleClass('.shopping-item-toggle');
        //} else if (target === "shopping-item-delete) {
        //    console.log("Delete button selected");
        //    target.toggleClass('.shopping-item-delete');
        //} else {
        //    console.log("No button selected");
        //}
    });
}



//$(addItems);
$(toggleItems);
