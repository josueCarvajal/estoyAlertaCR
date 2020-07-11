/*document.getElementById("list").addEventListener('click', function() {
    var getValue = document.getElementById('list').value;
    alert(getValue)
         for (let index = 0; index < DATA.length; index++) {
             const element = DATA[index];
             console.log(element.provincia)

         }
})*/
//get the information of the given province
function getDataByProvince(province_id) {
    for (let index = 0; index < DATA.length; index++) {
        const element = DATA[index];
        if (element.id === province_id) {
            renderData(element)
                //alert(element.provincia)
        }
    }
}

//Will render all the information in the index.html
function renderData(element) {
    clearScreen()
        //title
    createTitleElement(element.provincia, "results")
        //list container
    createResultContainer("results")
        //list
    createULElement("list-container")
        //list of elements
    createListElement(element.alerta.naranja, "my-list")

}

//Function that creates a tittle node ready to append
// @param text The text that the tittle node will show
// @param appentTo The id of the element to append
function createTitleElement(text, appendTo) {
    let title = document.createElement("h1")
    let title_text = document.createTextNode(text)
    title.classList.add("text-center");
    title.classList.add("mb-3");
    title.appendChild(title_text)
    document.getElementById(appendTo).appendChild(title)
}
//create a div container for the given element
// @param element_id element id of the parent node
function createResultContainer(element_id) {
    let container = document.createElement("div")
    container.classList.add("container");
    container.setAttribute("id", "list-container");
    document.getElementById(element_id).appendChild(container)
}

function createULElement(appendTo) {
    let masterList = document.createElement("UL")
    masterList.classList.add("col-12");
    masterList.setAttribute("id", "my-list");
    document.getElementById(appendTo).appendChild(masterList)
}
//Function that creates a list node of elements ready to append
// @param elementList It is the root of the child element list
// @param appentTo The id of the element to append
function createListElement(elementList, appendTo) {
    //content
    for (let index = 0; index < elementList.length; index++) {
        const result = elementList[index];
        //lists
        let list_gam = document.createElement("LI")
        let list_nogam = document.createElement("LI")
        let canton_name = document.createTextNode(result.canton)
        if (result.gam === true) {
            list_gam.setAttribute("style", "color:orange");
            list_gam.appendChild(canton_name)
            document.getElementById(appendTo).appendChild(list_gam)
        } else {
            list_nogam.appendChild(canton_name)
            document.getElementById(appendTo).appendChild(list_nogam)
        }
    }
}

//simple function to clear the added content on screen
function clearScreen() {
    const resultsNode = document.getElementById("results");
    while (resultsNode.firstChild) {
        resultsNode.firstChild.remove();
    }
}
//this DATA will be updated every day. 
DATA = [{
        "id": 1,
        "provincia": "San José",
        "alerta": {
            "naranja": [
                { "canton": "San José", "gam": true },
                { "canton": "Escazú", "gam": true },
                { "canton": "Aserrí", "gam": true },
                { "canton": "Mora", "gam": true },
                { "canton": "Goicoechea", "gam": true },
                { "canton": "Santa Ana", "gam": true },
                { "canton": "Alajuelita", "gam": true },
                { "canton": "Vásquez de Coronado", "gam": true },
                { "canton": "Tibás", "gam": true },
                { "canton": "Moravia", "gam": true },
                { "canton": "Montes de Oca", "gam": true },
                { "canton": "Curridabat", "gam": true },
                { "canton": "Desamparados", "gam": true },
                { "canton": "Puriscal", "gam": false }
            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 2,
        "provincia": "Alajuela",
        "alerta": {
            "naranja": [
                { "canton": "Alajuela", "gam": true },
                { "canton": "Poás", "gam": true },
                { "canton": "Atenas", "gam": true },
                { "canton": "Grecia", "gam": true },
                { "canton": "Sarchí", "gam": true },
                { "canton": "Palmares", "gam": true },
                { "canton": "Naranjo", "gam": true },
                { "canton": "San Ramón", "gam": true },
                { "canton": "Zarcero", "gam": true },
                { "canton": "Upala", "gam": false },
                { "canton": "Guatuso", "gam": false },
                { "canton": "Los Chiles", "gam": false },
                { "canton": "San Carlos (Tres Esquinas)", "gam": false },
                { "canton": "San Carlos (Los Ángeles)", "gam": false },
                { "canton": "San Carlos (Sonafluca)", "gam": false },
                { "canton": "San Carlos (La Perla)", "gam": false },
                { "canton": "San Carlos (San Isidro)", "gam": false },
                { "canton": "San Carlos (El Tanque)", "gam": false },
                { "canton": "San Carlos (San Jorge)", "gam": false },
                { "canton": "San Carlos (Santa Cecilia)", "gam": false },
                { "canton": "San Carlos (La Vega)", "gam": false },
                { "canton": "San Carlos (Bonanza)", "gam": false }
            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 3,
        "provincia": "Heredia",
        "alerta": {
            "naranja": [
                { "canton": "Heredia", "gam": true },
                { "canton": "Barva", "gam": true },
                { "canton": "Santo Domingo", "gam": true },
                { "canton": "Santa Bárbara", "gam": true },
                { "canton": "San Rafael", "gam": true },
                { "canton": "San Isidro", "gam": true },
                { "canton": "Belén", "gam": true },
                { "canton": "Flores", "gam": true },
                { "canton": "San Pablo", "gam": true }
            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 4,
        "provincia": "Cartago",
        "alerta": {
            "naranja": [
                { "canton": "Cartago", "gam": true },
                { "canton": "Paraíso", "gam": true },
                { "canton": "La Unión", "gam": true },
                { "canton": "Alvarado", "gam": true },
                { "canton": "Oreamuno ", "gam": true },
                { "canton": "El Guarco", "gam": true }
            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 5,
        "provincia": "Guanacaste",
        "alerta": {
            "naranja": [
                { "canton": "Bagaces", "gam": false },
                { "canton": "Liberia", "gam": false },
                { "canton": "Carrillo", "gam": false },
                { "canton": "Cañas", "gam": false }
            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 6,
        "provincia": "Puntarenas",
        "alerta": {
            "naranja": [
                { "canton": "Golfito", "gam": false },
                { "canton": "Garabito", "gam": false },
                { "canton": "Puntarenas (salvo los distritos de Cobano, Lepanto, Monteverde,  Isla Chira, Isla Caballo, Isla San Lucas, Isla del Coco e Isla Venado) y Corredores.", "gam": false }

            ]
        },
        "actualizado": "10/07/2020"
    },
    {
        "id": 7,
        "provincia": "Limón",
        "alerta": {
            "naranja": [
                { "canton": "Pococí", "gam": false },
                { "canton": "Talamanca", "gam": false },
                { "canton": "Guácimo", "gam": false }
            ]
        },
        "actualizado": "10/07/2020"
    }
]