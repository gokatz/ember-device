# Memory

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='memory.hbs'}}
    {{!-- BEGIN-SNIPPET memory.hbs --}}
      <div>
        Memory: <b>{{if this.device.memory.unsupported "Unsupported" (concat this.device.memory.deviceMemory " GiB of RAM")}}</b>
      </div>
      {{#if this.device.memory.unsupported}}
        <!-- fallback to medium-res images -->
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400" 
          style="height: 250px"
        > 
      {{else}}
        {{#if this.highMemoryMachine}}
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
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'memory.hbs'}}
  {{demo.snippet 'memory.js' label='controller.js'}}
{{/docs-demo}}
