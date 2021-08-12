// fetch Json

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

function dataFuc(data) {
    console.log(data.shopname[0].shop)
}

// *** TEST เองนะ อิอิ ***
