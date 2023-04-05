export default async function getUser(userId: string) {
	const resp = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);

	if (!resp.ok) return undefined;

	return resp.json();
}
