# Hardware concurrency

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='hw.hbs'}}
    {{!-- BEGIN-SNIPPET hw.hbs --}}
      <div>
        No. of logical processors: <b>{{this.device.hardwareConcurrency.numberOfLogicalProcessors}}</b>
      </div>
      {{#if this.highCoreMachine}}
        <!-- high-res images -->  
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000&q=80" 
          style="height: 250px"
        > 
      {{else}}  
        <!-- low-res images -->
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40" 
          style="height: 250px"
        > 
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'hw.hbs'}}
  {{demo.snippet 'hw.js' label='controller.js'}}
{{/docs-demo}}
