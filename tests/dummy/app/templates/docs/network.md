# Network stats

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='network-connection.hbs'}}
    {{!-- BEGIN-SNIPPET network-connection.hbs --}}
      <div>
        Connection Type: <b>{{this.device.networkStatus.effectiveConnectionType}}</b>
      </div>
      {{#if this.is2G}}
        <!-- low-res images -->
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=40" 
          style="height: 250px"
        > 
      {{else if this.is3G}} 
        <!-- medium-res images -->  
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200&q=80" 
          style="height: 250px"
        > 
      {{else if this.is4G}} 
        <!-- high-res images -->  
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000&q=80" 
          style="height: 250px"
        > 
      {{else}}  
        <!-- fallback to medium-res images -->  
        <img 
          src="https://images.unsplash.com/photo-1427847907429-d1ba99bf013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100" 
          style="height: 250px"
        > 
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'network-connection.hbs'}}
  {{demo.snippet 'network-connection.js' label='controller.js'}}
{{/docs-demo}}
