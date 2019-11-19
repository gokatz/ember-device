# Usage

Usage content

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='save-data-usage.hbs'}}
    {{!-- BEGIN-SNIPPET save-data-usage.hbs --}}
      Data Saver Mode: {{if this.device.saveData.isEnabled "ON" "OFF"}}
      <hr>

      {{#if this.device.saveData.isEnabled}}
        <img 
          src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" 
          style="height: 250px"
        >
      {{else}}
        <img 
          src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" 
          style="height: 250px"
        >      
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'save-data-usage.hbs'}}
  {{demo.snippet 'save-data-usage.js' label='controller.js'}}
{{/docs-demo}}
