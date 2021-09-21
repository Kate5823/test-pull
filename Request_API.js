// {Name: Request_API}
// {Description: Example of using api.request to make http requests}
// {Visibility: Admin}

// For http requests use Simplified HTTP request client which is available through `api.request`
// See more https://github.com/request/request

// Let's get weather data from openweathermap.org
const SERVICE_URL = "http://api.openweathermap.org/data/2.5/weather"

// Note. Do not use this appid from example in your own projects.
const appid = "4acdb6432d18884ebc890c13a9c3cc85";

intent("what is the weather in $(LOC)", p => {
    const request_url = `${SERVICE_URL}?appid=${appid}&q=${p.LOC}&units=imperial`

    api.request(request_url, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(`Could not get weather information`)
        } else {
            let data = JSON.parse(body);
            // Output json for exploring response data structure in debugging chat window in Alan Studio
            p.play({data})
            // Voice response
            p.play(`The temperature in ${p.LOC} is ${Math.floor(data.main.temp)} degrees in Fahrenheit`);
        }
    });
})

// Using Basic HTTP Authentication
intent("use basic authentication", p => {
    api.request.get('https://some.server.com/', {
        'auth': {
            'user': 'admin',
            'pass': 'password'
        }
    }, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(res)
        } else {
            p.play(body)
        }
    })
})

// Using Bearer Authentication token
intent("use bearer authentication", p => {
    api.request.get('http://some.server.com/', {
        'auth': {
            'bearer': 'bearerToken'
        }
    }, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(res)
        } else {
            p.play(body)
        }
    })
})