import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Drake"
					timeAgo="Today at 4:45PM"
					blogPost="Live streaming right now"
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Josh"
					timeAgo="Today at 2:00AM"
					blogPost="Like and subscribe"
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Zach"
					timeAgo="Yesterday at 5:00PM"
					blogPost="Check out my twitch channel"
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

// --------------------------------------------------------------------------------------------------------------------
// -NOTES-
// --------------------------------------------------------------------------------------------------------------------
// Component Nesting = A component can be shown inside of another
// Component Resuability = We want to make components that can be easily reused through out our application
// Component Configuration = We should be able to configure a component when it is created

// https://semantic-ui.com/  - Is a open source CSS framework
// semantic ui cdn to install
// {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" /> */} - copy into html file
// To check to see if semantic is working for our app, we check inside our network tab and choose CSS. It should show up if properly implemented

// Important Note about Faker Images
// In the next lecture, we will be adding images to our component using the Faker library. Faker itself used the uifaces.com API, which was recently shut down. One of our students found the issues thread here:

// https://github.com/Marak/faker.js/issues/464#issuecomment-729893751

// There are two options to resolve. The first is to use a different image other than "avatar" from the list Faker provides, such as image, animals, people, or cats.

// <img alt="avatar" src={faker.image.image()} />
// If the images are loading slow or not working, you also have the option of using the Unsplash API:

// <img alt="avatar" src='https://source.unsplash.com/random' />

// Note - The only endpoint that shows unique random images is faker.image.image(). Otherwise, you will instead see repeated images.

// If we want to show a component inside another component we're going to treat as a jsx tag. ex: <blah />

// Props: System for passing data from a parent component to a child component ----> Goa; is to customize or configure a child component
