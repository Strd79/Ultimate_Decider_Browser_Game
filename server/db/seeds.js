const { Db } = require("mongodb")

use ultimate_decider_game
db.dropDatebase()

db.players.insertMany([
    {
        name: "Bekah",
        mm_score: 0,
        ox_score: 0,
        rps_score: 0
    },
    {
        name: "Cam",
        mm_score: 0,
        ox_score: 0,
        rps_score: 0
    },
    {
        name: "David",
        mm_score: 0,
        ox_score: 0,
        rps_score: 0
    }
])