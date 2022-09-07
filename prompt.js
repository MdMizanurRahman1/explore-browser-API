console.log('prompt connected');
//alert('ki khobor dosto, ami valo nai');
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 6) {
        alert('what is the number');
    } else {
        'do not show the number';
    }

}

const askSomething = () => {
    const decision = confirm('Are you coming to the picnic?')
    console.log(decision);
    if (decision === true) {
        alert('then do bkash picnic money by tomorrow')
    } else {
        console.log('dure giye mor sona bondu')
    }
}

const getUserInfo = () => {
    const name = prompt('please tell us your name.')
    console.log(name);
    if (!!name) {
        console.log('welcome here', name);
    }

}