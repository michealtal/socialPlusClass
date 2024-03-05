import { Form, useLoaderData } from "react-router-dom";

export default function EditContact() {
	const { contact } = useLoaderData();
	return (
		<Form
			method='post'
			id='contact-form'>
			<p>
				<span>Name</span>
				<input
					placeholder='First'
					aria-label='First name'
					type='text'
					name='first'
					defaultValue={contact.firstname}
				/>
				<input
					placeholder='Last'
					aria-label='Last name'
					type='text'
					name='last'
					defaultValue={contact.lastname}
				/>
			</p>
			<label>
				<span>x</span>
				<input
					type='text'
					name='twitter'
					placeholder='@john'
					defaultValue={contact.x}
				/>
			</label>
			<label>
				<span>Avatar URL</span>
				<input
					placeholder='https://xyz.com/avatar.jpg'
					aria-label='Avatar URL'
					type='text'
					name='avatar'
					defaultValue={contact.avatar}
				/>
			</label>
			<label>
				<span>Notes</span>
				<textarea
					name='notes'
					defaultValue={contact.bio}
					rows={6}
				/>
			</label>
			<p>
				<button type='submit'> Save</button>
				<button type='button'> Cancel</button>
			</p>
		</Form>
	);
}
