const obtener_input = () => {
    let input_text = document.getElementById("input_ip")
    let ip = input_text.value
    peticion_api(ip)
}

const peticion_api = (ip) => {
    const apiKey = 'b68262902cac495096bde542261144a3';
    const ipAddress = `${ip}`;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipAddress}`;

    axios.get(url)
    .then(res => print_data(res.data))
    .catch(err => console.log(err))
}

const print_data = (data) => {
    let respuesta = document.getElementById("show_info");
    respuesta.innerHTML = `
    <label>País: <h3>${data['country_name']}</h3></label>
    <label>Ciudad: <h3>${data['city']}</h3></label>
    <label>Moneda: <h3>${data.currency.name}</h3></label>
    <label>Código postal: <h3>${data['calling_code']}</h3></label>
    <label>Hora actual: <h3>${data.time_zone.current_time}</h3></label>
    `
}