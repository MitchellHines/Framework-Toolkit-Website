import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' });
  this.route('frameworks', { path: '/frameworks' });
  this.route('about', { path: '/about' });
  this.route('contributors', { path: '/contributors' });
  this.route('ruby', { path: '/ruby' });
  this.route('java', { path: '/java' });
  this.route('python', { path: '/python' });
});

export default Router;
