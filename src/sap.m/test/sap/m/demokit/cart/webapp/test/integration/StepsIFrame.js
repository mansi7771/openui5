sap.ui.define([
	"sap/ui/test/gherkin/StepDefinitions",
	"Startup"
], function(StepDefinitions, Startup) {
	"use strict";
	Startup = new Startup();

	var Steps = StepDefinitions.extend("GherkinWithOPA5.Steps", {
		init: function() {
			this.register(/^I start my App with the hash "(.*)" (.*)/i,
				function(sHash, sStorage) {
					var bKeepStorage = sStorage.indexOf("keeping") >= 0;
					Startup.iStartMyApp(bKeepStorage, {
						hash: sHash
					});
				});
		}
	});

	return Steps;

});
