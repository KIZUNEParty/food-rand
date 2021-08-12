let call = '{"shopname": [' +
    '{"shop": "ครัวไท"},'+
    '{"shop": "สเต็ก"},' +
    '{"shop": "ก๋วยเตี๋ยว"},' +
    '{"shop": "ข้าวไข่เจียว"}]}'

const data = JSON.parse(call);

function rnd() {
    const id = Math.floor(Math.random() * 4);
    if (id == 0) {
        document.getElementById('shop-ran').innerHTML = data.shopname[0].shop
        document.getElementById('id').value = "0"
        document.getElementById('random').classList.add('hidden')
        document.getElementById('warp').classList.remove('hidden')
    } else if (id == 1) {
        document.getElementById('shop-ran').innerHTML = data.shopname[1].shop
        document.getElementById('id').value = "1"
        document.getElementById('random').classList.add('hidden')
        document.getElementById('warp').classList.remove('hidden')
    } else if (id == 2) {
        document.getElementById('shop-ran').innerHTML = data.shopname[2].shop
        document.getElementById('id').value = "2"
        document.getElementById('random').classList.add('hidden')
        document.getElementById('warp').classList.remove('hidden')
    } else if (id == 3) {
        document.getElementById('shop-ran').innerHTML = data.shopname[3].shop
        document.getElementById('id').value = "3"
        document.getElementById('random').classList.add('hidden')
        document.getElementById('warp').classList.remove('hidden')
    }
}

function re() {
    document.getElementById('warp').classList.add('hidden')
    document.getElementById('random').classList.remove('hidden')

}