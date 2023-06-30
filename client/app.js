const url = "https://test-backend-xpao.onrender.com"

const test = async() => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
    }

    catch(err) {
        console.log(err);
    }
}

document.querySelector('button').addEventListener('click', e => {
    test()
})