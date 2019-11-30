# Memory

{{simulator-pad 
  handleUpdate=this.refresh 
  deviceMemory=this.device.memory.deviceMemory 
  section="memory"
}}

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='memory.hbs' name="demo"}}
    {{#if this.canShow}}
      {{!-- BEGIN-SNIPPET memory.hbs --}}
        {{#let
          this.device.memory.deviceMemory 
          this.device.memory.unsupported 
          as |deviceMemory unsupported|
        }}
          <div>
            Memory: 
            <b>{{if unsupported "Unsupported" (concat deviceMemory " GiB of RAM")}}</b>
          </div>
          {{#if unsupported}}
            <ImageLoader 
              @resolution="mid"
            />
          {{else}}
            {{#if (eq deviceMemory 8)}}
              <VideoLoader />
            {{else if (gte deviceMemory 2)}}
              <ImageLoader 
                @resolution="high"
              />
            {{else if (eq deviceMemory 1)}}
              <ImageLoader 
                @resolution="mid"
              />
            {{else}}
              <ImageLoader 
                @resolution="low"
              />
            {{/if}}
          {{/if}}
        {{/let}}
      {{!-- END-SNIPPET --}}
    {{/if}}
  {{/demo.example}}

  {{demo.snippet 'memory.hbs'}}
  {{demo.snippet 'memory.js' label='controller.js'}}
{{/docs-demo}}
