// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal alle squads uit de WHOIS API op
// const squadData = await fetchJson('https://fdnd.directus.app/items/squad')
// Ik ga dit misschien later nog gebruiken

const apiUrl = 'https:fdnd-agency.directus.app/items/f_houses'

// Maak een nieuwe express app aan
const app = express()

// notitie van rating pagina 
const messages = []


// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// ROUTES

app.get('/', function(request, response) {
        fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
            response.render('index', {data: apiData.data})
        });
})

app.get('/semester-2', function(request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
      response.render('semester-2', {data: apiData.data})
  });
})

    
// 

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})