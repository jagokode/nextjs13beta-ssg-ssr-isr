export default async function getUserPosts(userId: string) {
	const resp = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
		{ next: { revalidate: 60 } }
	);

	if (!resp.ok) return undefined;

	return resp.json();
}
