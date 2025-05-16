import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Lukas Rammelmueller',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'A lot of work ;)'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Formerly Jenkins, GitLab, GitHub, FluxCD, ArgoCD, Tekton, ...',
		// What do you want to learn in this workshop? 
		expectations: [
			'Cloud CI systems!'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play chess', 
			'do skydiving', 
			'do my taxes'
		]
	}
});
