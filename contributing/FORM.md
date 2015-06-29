
- add a new page template (Mustache)
  - `cd ./views/pages && touch <your-page-name>.html`
  - For details see: [Template mixins](https://github.com/UKHomeOffice/passports-template-mixins)

Example of a form page template
```html
{{<layout}}

  {{$propositionHeader}}
    {{> partials-navigation}}
  {{/propositionHeader}}

  {{$content}}
    <h2>{{#t}}steps.one.header{{/t}}</h2>

    {{<partials-form}}

      {{$form}}

        {{#input-text}}fullname{{/input-text}}

        {{#input-submit}}continue{{/input-submit}}
      {{/form}}

    {{/partials-form}}

  {{/content}}

{{/layout}}
```

- define the fields for your form
  - `open ./routes/fields.js

- define a new route for the page you've created
  - `open ./routes/steps.js`

```js
'use strict';

module.exports = {
  '/': {
    controller: require('../controllers/start'),
    template: 'index',
    next: '/name'
  },
  '/name': {
    fields: [
      'fullname',
      'continue'
    ],
    next: '/submit',
    backLink: '/'
  },
  '/submit': {
    controller: require('../controllers/submit'),
    next: '/done',
    backLink: '/name'
  },
  '/done': {
    backLink: null
  }
};
```

