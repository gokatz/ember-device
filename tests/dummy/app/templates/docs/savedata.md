# Usage: Save Data user preferences

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='save-data-usage.hbs'}}
    {{!-- BEGIN-SNIPPET save-data-usage.hbs --}}
      Data Saver Mode: {{if this.device.saveData.isEnabled "ON" "OFF"}}
      {{#if this.device.saveData.isEnabled}}
        <!-- low-res images -->
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40" 
          style="height: 250px"
        >
      {{else}}
        <!-- high-res images -->  
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000&q=80" 
          style="height: 250px"
        >      
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'save-data-usage.hbs'}}
  {{demo.snippet 'save-data-usage.js' label='controller.js'}}
{{/docs-demo}}
