/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  testTracePage,
  beforeAction,
} from '../../../utils/plugins/dashboards-assistant/shared/chatbot_interaction_trace';

if (Cypress.env('DASHBOARDS_ASSISTANT_ENABLED')) {
  describe('Interaction trace spec', () => {
    before(() => {
      // Set welcome screen tracking to false
      localStorage.setItem('home:welcome:show', 'false');
      // Set new theme modal to false
      localStorage.setItem('home:newThemeModal:show', 'false');

      beforeAction();
    });

    // clean up localStorage items
    after(() => {
      localStorage.removeItem('home:welcome:show');
      localStorage.removeItem('home:newThemeModal:show');
    });

    describe('Trace page', () => {
      testTracePage();
    });
  });
}
