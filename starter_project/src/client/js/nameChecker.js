// checkForName.js

function nameChecker(inputText) {
    console.log("::: Running nameChecker :::", inputText);

    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}'+ // domain name
        '|((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-zA-Z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-zA-Z\\d_]*)?$','i'); // fragment locator

    if(urlPattern.test(inputText)) {
        console.log("Valid URL");
        return true;
    } else {
        console.log("Invalid URL");
        alert("Please enter a valid URL.");
        return false;
    }
}

export { nameChecker };
