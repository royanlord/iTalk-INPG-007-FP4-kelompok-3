$(function() {
    $("#date").datepicker({                  
        maxDate: moment().toDate(),
        minDate: -7,
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        showButtonPanel: true,
        closeText: "Close",
    })
});

var btnSubmit = document.getElementById('btnSubmit');
var getCity = document.getElementById('inputCity');
var getDate = document.getElementById('date');

btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    var setCity = getCity.value;
    var setDate = getDate.value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    if (setCity === "" && setDate === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Location and date field can't be empty!"
        });
    } else if (setCity === "" && setDate != "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Location field can't be empty!"
        });
    } else if (setDate === "" && setCity != "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Date field can't be empty!"
        });
    } else {
        fetch(`https://weatherapi-com.p.rapidapi.com/history.json?q=${setCity}&dt=${setDate}&lang=en`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                document.getElementById('city').innerHTML = response.location.name+', '+response.location.country;
                var dates = new Date(response.forecast.forecastday[0].date);
                // var tahun = dates.getFullYear()
                var times = new Date()
                var jam = times.getHours()
                // var menit = times.getMinutes()
                // var detik = times.getSeconds()
                var hari = dates.getDay()
                var bulan = dates.getMonth()
                var tanggal = dates.getDate()
                
                var hariarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,")
                var bulanarray = new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec")
    
                document.getElementById('dates').innerHTML = hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]
    
                // day section
                document.getElementById('detailCity').innerHTML = response.location.name;
                document.getElementById('temp-day').innerHTML = response.forecast.forecastday[0].day.avgtemp_c + "&#8451;";
                document.getElementById('conditions-day').innerHTML = response.forecast.forecastday[0].day.condition.text;
                iconCond = response.forecast.forecastday[0].day.condition.icon;
                document.getElementById('imgCondition-day').setAttribute("src", `https://${iconCond}`)
                document.getElementById('sunrise').innerHTML = response.forecast.forecastday[0].astro.sunrise;
                document.getElementById('sunset').innerHTML = response.forecast.forecastday[0].astro.sunset;
    
                // hours section
                if (jam >= 0 && jam < 1) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[0].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[0].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[0].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[0].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[0].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[0].chance_of_rain + " %";
                } else if (jam >= 1 && jam < 2) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[1].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[1].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[1].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[1].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[1].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[1].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[1].chance_of_rain + " %";
                } else if (jam >= 2 && jam < 3) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[2].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[2].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[2].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[2].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[2].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[2].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[2].chance_of_rain + " %";
                } else if (jam >= 3 && jam < 4) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[3].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[3].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[3].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[3].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[3].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[3].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[3].chance_of_rain + " %";
                } else if (jam >= 4 && jam < 5) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[4].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[4].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[4].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[4].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[4].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[4].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[4].chance_of_rain + " %";
                } else if (jam >= 5 && jam < 6) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[5].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[5].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[5].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[5].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[5].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[5].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[5].chance_of_rain + " %";
                } else if (jam >= 6 && jam < 7) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[6].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[6].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[6].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[6].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[6].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[6].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[6].chance_of_rain + " %";
                } else if (jam >= 7 && jam < 8) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[7].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[7].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[7].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[7].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[7].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[7].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[7].chance_of_rain + " %";
                } else if (jam >= 8 && jam < 9) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[8].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[8].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[8].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[8].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[8].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[8].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[8].chance_of_rain + " %";
                } else if (jam >= 9 && jam < 10) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[9].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[9].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[9].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[9].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[9].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[9].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[9].chance_of_rain + " %";
                } else if (jam >= 10 && jam < 11) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[10].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[10].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[10].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[10].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[10].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[10].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[10].chance_of_rain + " %";
                } else if (jam >= 11 && jam < 12) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[11].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[11].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[11].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[11].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[11].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[11].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[11].chance_of_rain + " %";
                } else if (jam >= 12 && jam < 13) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[12].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[12].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[12].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[12].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[12].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[12].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[12].chance_of_rain + " %";
                } else if (jam >= 13 && jam < 14) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[13].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[13].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[13].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[13].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[13].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[13].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[13].chance_of_rain + " %";
                } else if (jam >= 14 && jam < 15) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[14].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[14].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[14].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[14].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[14].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[14].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[14].chance_of_rain + " %";
                } else if (jam >= 15 && jam < 16) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[15].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[15].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[15].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[15].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[15].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[15].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[15].chance_of_rain + " %";
                } else if (jam >= 16 && jam < 17) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[16].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[16].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[16].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[16].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[16].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[16].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[16].chance_of_rain + " %";
                } else if (jam >= 17 && jam < 18) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[17].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[17].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[17].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[17].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[17].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[17].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[17].chance_of_rain + " %";
                } else if (jam >= 18 && jam < 19) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[18].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[18].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[18].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[18].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[18].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[18].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[18].chance_of_rain + " %";
                } else if (jam >= 19 && jam < 20) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[19].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[19].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[19].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[19].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[19].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[19].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[19].chance_of_rain + " %";
                } else if (jam >= 20 && jam < 21) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[20].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[20].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[20].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[20].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[20].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[20].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[20].chance_of_rain + " %";
                } else if (jam >= 21 && jam < 22) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[21].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[21].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[21].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[21].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[21].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[21].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[21].chance_of_rain + " %";
                } else if (jam >= 22 && jam < 23) {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[22].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[22].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[22].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[22].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[22].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[22].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[22].chance_of_rain + " %";
                } else {
                    document.getElementById('temp-hours').innerHTML = response.forecast.forecastday[0].hour[23].temp_c + " &#8451;";
                    document.getElementById('conditions-hours').innerHTML = response.forecast.forecastday[0].hour[23].condition.text;
                    iconCond = response.forecast.forecastday[0].hour[23].condition.icon;
                    document.getElementById('imgCondition-hours').setAttribute("src", `https://${iconCond}`)
                    document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].hour[23].wind_kph + " kph";
                    document.getElementById('humidity').innerHTML = response.forecast.forecastday[0].hour[23].humidity + " %";
                    document.getElementById('pressure').innerHTML = response.forecast.forecastday[0].hour[23].pressure_mb + " mb";
                    document.getElementById('chanceRain').innerHTML = response.forecast.forecastday[0].hour[23].chance_of_rain + " %";
                }
                
                // time
                window.setInterval(hours, 500)
                function hours() {
                    var tms = new Date()
                    var hr = tms.getHours()
                    var mn = tms.getMinutes()
                    // var sc = tms.getSeconds()
                    var ampm = jam >= 12 ? 'PM' : 'AM';
                    hr = hr % 12;
                    hr = hr ? hr : 12;
                    mn = mn < 10 ? '0'+mn : mn;
                    document.getElementById('time').innerHTML = hr+":"+mn+' '+ampm;
    
                }
                // document.getElementById('time').innerHTML = jam+":"+menit+' '+ampm;
                // document.getElementById('time').innerHTML = hours(times)
    
                // document.getElementById('conditions').innerHTML = response.forecast.forecastday[0].day.condition.text;
                // iconCond = response.forecast.forecastday[0].day.condition.icon;
                // document.getElementById('imgCondition').setAttribute("src", `https://${iconCond}`)
                // document.getElementById('windSpeed').innerHTML = response.forecast.forecastday[0].day.maxwind_kph + " kph";
                getCity.value = null;
                getDate.value = null;
            })
            .catch(err => {
                if (setCity.length != 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Location doesn't exist!"
                        // footer: "Please input valid country"
                    });
                }
                console.error(err)
            });
    }
    
})