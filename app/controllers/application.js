import Controller from '@ember/controller';

export default Controller.extend({

	actions: {
		transitionToHome: function() {
			this.transitionToRoute('main');
		},

		transitionToFrameworks: function() {
			this.transitionToRoute('/frameworks');
		},

		transitionToAbout: function() {
			this.transitionToRoute('/about');
		},

		transitionToContributors: function() {
			this.transitionToRoute('/contributors');
		},

		transitionToGithub: function() {
			window.open("https://github.com/MitchellHines/Framework-Toolkit");
		},
	}
});
