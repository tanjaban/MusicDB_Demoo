import db from "$lib/db.js"

export async function load() {

    return {
        artists: db.getArtists()
    }
}
