import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
	const id = params.artist_id;
	const result = await db.deleteArtist(id);
	return json({ id: result });
}

export async function PUT({ request }) {
    const artist = await request.json();
	const result = await db.updateArtist(artist);
	return json({ id: result });
}
