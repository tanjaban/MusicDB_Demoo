import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const artist = await request.json();
	const result = await db.createArtist(artist);
	return json({ id: result });
}
