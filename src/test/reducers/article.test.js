import { expect } from 'chai';
import reducer from 'reducers/article';
import {
  REQUEST_ARTICLES,
  ERROR_REQUESTING_ARTICLES
} from 'actions/Article';

describe('Article reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, {});
  });

  it('should set flags on request start', () => {
    const action = { type: REQUEST_ARTICLES };
    const state = reducer(initialState, action);

    expect(state.get('isLoading')).to.equal(true);
    expect(state.get('isError')).to.equal(false);
  });

  it('should reset flags on subsequent requests', () => {
    const requestAction = { type: REQUEST_ARTICLES };
    const errorAction = { type: ERROR_REQUESTING_ARTICLES };

    const state = reducer(initialState, requestAction);
    const errorState = reducer(state, errorAction);
    const finalState = reducer(errorState, requestAction);

    expect(finalState.get('isLoading')).to.equal(true);
    expect(finalState.get('isError')).to.equal(false);
  });
});
