# Data Saver Mode

{{simulator-pad 
  isDataSaverModeOn=this.device.saveData.isEnabled
  section="savedata"
}}

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='save-data-usage.hbs' name="demo"}}
    {{!-- BEGIN-SNIPPET save-data-usage.hbs --}}
      {{#let this.device.saveData.isEnabled as |isDataSaverModeOn|}}
        <div>
          Data Saver Mode: {{if isDataSaverModeOn "ON" "OFF"}}
        </div>
        {{#if isDataSaverModeOn}}
          <ImageLoader 
            @resolution="low"
          />
        {{else}}
          <ImageLoader 
            @resolution="high"
          />
        {{/if}}
      {{/let}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'save-data-usage.hbs'}}
  {{demo.snippet 'save-data-usage.js' label='controller.js'}}
{{/docs-demo}}
