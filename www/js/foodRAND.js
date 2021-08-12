
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
    
}

function re() {
    document.getElementById('warp').classList.add('hidden')
    document.getElementById('random').classList.remove('hidden')

}
