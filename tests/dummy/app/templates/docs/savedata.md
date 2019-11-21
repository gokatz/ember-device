# Data Saver Mode

{{simulator-pad 
  handleUpdate=this.refresh 
  isDataSaverModeOn=this.isDataSaverModeOn
  section="savedata"
}}

{{#docs-demo as |demo|}}
  {{#demo.example data-test-id='save-data-usage.hbs' name="demo"}}
    {{!-- BEGIN-SNIPPET save-data-usage.hbs --}}
      <div>
        Data Saver Mode: {{if this.isDataSaverModeOn "ON" "OFF"}}
      </div>
      {{#if this.isDataSaverModeOn}}
        <ImageLoader 
          @resolution="low"
        />
      {{else}}
        <ImageLoader 
          @resolution="high"
        />
      {{/if}}
    {{!-- END-SNIPPET --}}
  {{/demo.example}}

  {{demo.snippet 'save-data-usage.hbs'}}
  {{demo.snippet 'save-data-usage.js' label='controller.js'}}
{{/docs-demo}}
