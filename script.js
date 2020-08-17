//get the information of the given province
function getDataByProvince(myData, province_id, resultDivName) {
    for (let index = 0; index < myData.length; index++) {
        const element = myData[index];
        if (element.id === province_id) {
            renderData(element, resultDivName)
                //alert(element.provincia)
        }
    }
}

//Will render all the information in the index.html
function renderData(element, resultDivName) {
    //clear both screens to avoid issues with the two results div
    clearScreen("results")
        //clearScreen("results2")
        //title
    createTitleElement(element.provincia, resultDivName)
        //list container
    createResultContainer(resultDivName)
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
function clearScreen(resultDivName) {
    const resultsNode = document.getElementById(resultDivName);
    while (resultsNode.firstChild) {
        resultsNode.firstChild.remove();
    }
}
//this DATA will be updated every month. 
DATA = [{
        "id": 1,
        "provincia": "San José",
        "alerta": {
            "naranja": [
                { "canton": "San José", "gam": true },
                { "canton": "Escazú", "gam": true },
                { "canton": "Desamparados", "gam": true },
                { "canton": "Aserrí", "gam": true },
                { "canton": "Mora", "gam": true },
                { "canton": "Goicoechea", "gam": true },
                { "canton": "Santa Ana", "gam": true },
                { "canton": "Alajuelita", "gam": true },
                { "canton": "Tibás", "gam": true },
                { "canton": "Moravia", "gam": true },
                { "canton": "Montes de Oca", "gam": true },
                { "canton": "Curridabat", "gam": true },
                { "canton": "Puriscal", "gam": true }
            ]
        }
    },
    {
        "id": 2,
        "provincia": "Alajuela",
        "alerta": {
            "naranja": [
                { "canton": "Alajuela (excepto el distrito Sarapiquí)", "gam": true },
                { "canton": "Naranjo", "gam": true }
            ]
        }
    },
    {
        "id": 3,
        "provincia": "Heredia",
        "alerta": {
            "naranja": [
                { "canton": "Heredia (distritos Heredia, Mercedes, San Francisco, Ulloa)", "gam": true },
                { "canton": "Santo Domingo", "gam": true },
                { "canton": "San Isidro", "gam": true },
                { "canton": "Flores", "gam": true },
                { "canton": "San Pablo", "gam": true },
                { "canton": "Belén", "gam": true }
            ]
        }
    },
    {
        "id": 4,
        "provincia": "Cartago",
        "alerta": {
            "naranja": [
                { "canton": "La Unión", "gam": true }
            ]
        }
    },
    {
        "id": 5,
        "provincia": "Guanacaste",
        "alerta": {
            "naranja": [
                { "canton": "No hay cantones en alerta naranja :)", "gam": false }
            ]
        }
    },
    {
        "id": 6,
        "provincia": "Puntarenas",
        "alerta": {
            "naranja": [
                { "canton": "Corredores (distritos Canoas, La Cuesta, Laurel)", "gam": false },
                { "canton": "Parrita", "gam": false }

            ]
        }
    },
    {
        "id": 7,
        "provincia": "Limón",
        "alerta": {
            "naranja": [
                { "canton": "No hay cantones en alerta naranja :)", "gam": false }
            ]
        }
    }
]