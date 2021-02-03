async function DisplayData(){
    const data = await fetch('/images')
    const response = await data.json()

    document.getElementById('data box').innerHTML = JSON.stringify(response)
}

DisplayData()

function copyText(){
    var text = document.getElementById('data box')
    text.select()
    text.setSelectionRange(0, 99999)
    document.execCommand('copy')
}