//call url
const getURL = window.location.href
console.log(getURL)
const id = getURL.substr(37)
console.log(id)

// declair span id
const ta = document.getElementById('a')
const tb = document.getElementById('b')
const tc = document.getElementById('c')
const tfix = document.getElementById('fix')
const tmenu = document.getElementById('menu')

// fetch json
function congrat(){
    fetch("./db/main.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        dataFuc(data)
    })
    .catch((err) => {
        console.log("error : " + err);
    })
}

function dataFuc(data) {    
    // สำหรับสุ่มอาหาร
    if (id == 0) {
        const rand_a = Math.floor(Math.random() * 4)
        const rand_b = Math.floor(Math.random() * 3)
        const item = data.shopname[0].item

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = item.a[3].a
        }

        if (rand_b == 0) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[0].a
        } else if (rand_b == 1) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[1].a
        } else if (rand_b == 2) {
            menu.classList.add('hidden')
            tb.innerHTML = item.b[2].a
        }
    } else if (id == 1) {
        const rand_a = Math.floor(Math.random() * 5)
        const food = data.shopname[1]

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[3].a
        } else if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = food.item[4].a
        }
    } else if (id == 2) {
        const rand_a = Math.floor(Math.random() * 7)
        const rand_b = Math.floor(Math.random() * 3)
        const rand_c = Math.floor(Math.random() * 4)

        const a = data.shopname[2]

        if (rand_b == 0) {
            menu.classList.add('hidden')
            tb.innerHTML = a.item[0].b
        } else if (rand_b == 1) {
            menu.classList.add('hidden')
            tb.innerHTML = a.item[1].b
        } else if (rand_b == 2) {
            menu.classList.add('hidden')
            tb.innerHTML = a.item[2].b
        }

        if (rand_c == 0) {
            menu.classList.add('hidden')
            tc.innerHTML = a.item[0].c
        } else if (rand_c == 1) {
            menu.classList.add('hidden')
            tc.innerHTML = a.item[1].c
        } else if (rand_c == 2) {
            menu.classList.add('hidden')
            tc.innerHTML = a.item[2].c
        } else if (rand_c == 3) {
            menu.classList.add('hidden')
            tc.innerHTML = a.item[3].c
        }

        if (rand_a == 0) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[0].a
        } else if (rand_a == 1) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[1].a
        } else if (rand_a == 2) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[2].a
        } else if (rand_a == 3) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[3].a
        } else if (rand_a == 4) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[4].a
        } else if (rand_a == 5) {
            menu.classList.add('hidden')
            ta.innerHTML = a.item[5].a
            const aa = Math.floor(Math.random() * 2)
            if (aa == 0) {
                tb.innerHTML = "แห้ง"
                tc.innerHTML = ""
            } else if (aa == 1) {
                tb.innerHTML = "ทะเล"
                tc.innerHTML = ""
            }
        } else if (rand_a == 6) {
            menu.classList.add('hidden')
            tb.innerHTML = ""
            tc.innerHTML = ""
        }
    } else if (id == 3) {
        const item = data.shopname[3].item[0]
        const rand_a = Math.floor(Math.random() * 7)
        const rand_c = Math.floor(Math.random() * 2)

        menu.classList.add('hidden')
        document.getElementById('fix').innerHTML = item.fix

        if (rand_a == 0) {
            const a = Math.floor(Math.random() * 15)

            ta.innerHTML = item.a[0].a

            if (a == 0) {
                tb.innerHTML = item.b[0].a
            } else if (a == 1) {
                tb.innerHTML = item.b[1].a
            } else if (a == 2) {
                tb.innerHTML = item.b[2].a
            } else if (a == 3) {
                tb.innerHTML = item.b[3].a
            } else if (a == 4) {
                tb.innerHTML = item.b[4].a
            } else if (a == 5) {
                tb.innerHTML = item.b[5].a
            } else if (a == 6) {
                tb.innerHTML = item.b[6].a
            } else if (a == 7) {
                tb.innerHTML = item.b[7].a
            } else if (a == 8) {
                tb.innerHTML = item.b[8].a
            } else if (a == 9) {
                tb.innerHTML = item.b[9].a
            } else if (a == 10) {
                tb.innerHTML = item.b[10].a
            } else if (a == 11) {
                tb.innerHTML = item.b[11].a
            } else if (a == 12) {
                tb.innerHTML = item.b[12].a
            } else if (a == 13) {
                tb.innerHTML = item.b[13].a
            } else if (a == 14) {
                tb.innerHTML = item.b[14].a
            } else if (a == 15) {
                tb.innerHTML = item.b[15].a
            }
        }

        if (rand_c == 0) {
            menu.classList.add('hidden')
            tc.innerHTML = item.c[0].a
        } else if(rand_c == 1) {
            menu.classList.add('hidden')
            tc.innerHTML = item.c[1].a
        }
    }

    document.getElementById('rand').classList.add('hidden')
    document.getElementById('re').classList.remove('hidden')
}