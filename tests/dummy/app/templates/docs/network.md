# Network

{{simulator-pad 
  handleUpdate=this.refresh 
  effectiveConnectionType=this.device.networkStatus.effectiveConnectionType
  section="network"
}}

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='network-connection.hbs' name="demo"}}
    {{#if this.canShow}}
    {{!-- BEGIN-SNIPPET network-connection.hbs --}}
      {{#let this.device.networkStatus.effectiveConnectionType as |effectiveConnectionType|}}
        <div>
          Connection Type: <b>{{effectiveConnectionType}}</b>
        </div>
        {{#if (eq effectiveConnectionType "slow-2g")}}
          <ImageLoader 
            @resolution="low"
          />
        {{else if (eq effectiveConnectionType "2g")}}
          <ImageLoader 
            @resolution="mid"
          />
        {{else if (eq effectiveConnectionType "3g")}}
          <ImageLoader 
            @resolution="hight"
          />
        {{else if (eq effectiveConnectionType "4g")}}
          <VideoLoader />
        {{else}}
          <!-- Fallback -->
          <ImageLoader 
            @resolution="mid"
          />
        {{/if}}
      {{/let}}
    {{!-- END-SNIPPET --}}
    {{/if}}
  {{/demo.example}}

  {{demo.snippet 'network-connection.hbs'}}
  {{demo.snippet 'network-connection.js' label='controller.js'}}
{{/docs-demo}}
