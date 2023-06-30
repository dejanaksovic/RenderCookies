const url = "https://test-backend-xpao.onrender.com/lolo"

const test = async() => {
    try {
        await fetch(url, {credentials: 'include'})
    }

    catch(err) {
        console.log(err);
    }
}

document.querySelector('button').addEventListener('click', e => {
    test()
})