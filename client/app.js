const test = async() => {
    try {
        const res = await fetch('http://localhost:3000')
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