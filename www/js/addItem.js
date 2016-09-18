function addItem() {
    prompt({
        title: "Item Entry",
        template: 'Enter Food Item',
        inputType: 'Food Item',
        inputPlaceholder: 'Eg. Eggs, Milk, etc.'
    }).then(function (res) {
        console.log('Your password is', res);
    });
}