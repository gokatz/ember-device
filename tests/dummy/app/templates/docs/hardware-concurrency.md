# Hardware concurrency

{{simulator-pad 
  hwConcurrency=this.device.hardwareConcurrency.numberOfLogicalProcessors
  section="hardwareconcurrency"
}}

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='hw.hbs' name="demo"}}
    {{!-- BEGIN-SNIPPET hw.hbs --}}
      {{#let this.device.hardwareConcurrency.numberOfLogicalProcessors as |numberOfLogicalProcessors|}}
        <div>
          No. of logical processors: <b>{{numberOfLogicalProcessors}}</b>
        </div>
        {{#if (eq numberOfLogicalProcessors 8)}}
          <VideoLoader />
        {{else if (eq numberOfLogicalProcessors 4)}}
          <ImageLoader 
            @resolution="high"
          />
        {{else if (eq numberOfLogicalProcessors 2)}}
          <ImageLoader 
            @resolution="mid"
          />
        {{else}}
          <ImageLoader 
            @resolution="low"
          />
        {{/if}}
      {{/let}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'hw.hbs'}}
  {{demo.snippet 'hw.js' label='controller.js'}}
{{/docs-demo}}
