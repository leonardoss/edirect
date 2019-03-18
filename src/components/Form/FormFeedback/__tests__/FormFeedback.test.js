import React from 'react';
import ReactDOM from 'react-dom';
import FormFeedback from '../FormFeedback';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

describe('Testing HashRouter', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HashRouter>
        <FormFeedback />
      </HashRouter>,
      div
    );
  });

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <HashRouter>
          <FormFeedback />
        </HashRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
