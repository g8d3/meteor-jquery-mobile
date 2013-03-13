Package.describe({
  summary: "jQuery Mobile packaged for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'jquery.mobile-1.3.0.css',
    'jquery.mobile-1.3.0.js'
  ], 'client'
  );
});
