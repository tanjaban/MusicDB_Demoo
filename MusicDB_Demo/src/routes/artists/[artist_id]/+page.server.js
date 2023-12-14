import db from "$lib/db.js"

export async function load({ params }) {

    return {
        artist: db.getArtist(params.artist_id)
    };
}
