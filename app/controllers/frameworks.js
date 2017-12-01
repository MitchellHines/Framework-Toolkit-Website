import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		transitionToRuby: function() {
			this.transitionToRoute('ruby');
		},

		transitionToJava: function() {
			this.transitionToRoute('java');
		},

		transitionToPython: function() {
			this.transitionToRoute('python');
		},
	}
});
