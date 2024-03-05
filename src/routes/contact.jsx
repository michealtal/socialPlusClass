import { Form, useLoaderData } from "react-router-dom";
import { getContacts } from "../contact";

export async function loader({ params }) {
	const contact = await getContacts(params.contactId);
	return { contact };
}

const Favorite = () => {
	const { contact } = useLoaderData();
	let favorite = contact.favorite;
	return (
		<Form method='post'>
			<button
				name='favorite'
				value={favorite ? "false" : "true"}
				aria-label={favorite ? "Remove from favorites" : "Add to favorites"}>
				{favorite ? "🧡" : "♥︎"}
			</button>
		</Form>
	);
};

const Contact = () => {
	return (
		<div id='contact'>
			<div>
				<img
					key={loader.avatar}
					src={loader.avatar || null}
				/>
			</div>
			<div>
				<h1>
					{loader.firstname || loader.lastname ? (
						<>
							{loader.firstname} {loader.lastname}
						</>
					) : (
						<i>No name</i>
					)}
					<Favorite />
				</h1>

				{loader.x && (
					<p>
						<a
							target='_blank'
							href={`https://twitter.com/${loader.x}`}>
							{loader.x}
						</a>
					</p>
				)}
				{loader.bio && <p>{loader.bio}</p>}
				<div>
					<Form action='edit'>
						<button type='submit'>Edit</button>
					</Form>
					<Form
						action='destroy'
						method='post'
						onSubmit={(event) => {
							if (!confirm("Please confirm you want to delete this comment")) {
								event.preventDefault();
							}
						}}>
						<button type='submit'>Delete</button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
