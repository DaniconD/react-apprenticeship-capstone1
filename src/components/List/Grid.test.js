import Grid from "./Grid";
import React from "react";
import { screen, render } from '@testing-library/react';

import MockData from '../../data/youtube-videos-mock.json';

describe('Testing the component elements', () => {
  test('Video preview title is displayed', () => {
    const { getAllByText } = render(<Grid items={ MockData.items }/>)
    const title = getAllByText('Wizeline')[0];
    expect(title).toBeInTheDocument();
    // debug()
  });
  test('Video preview thumbnail is displayed', () => {
    const { getAllByRole } = render(<Grid items={ MockData.items }/>)

    const thumbnail = getAllByRole('img')[0];
    expect(thumbnail.src).toMatch('https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo');
  });
  // test('Number of items to be greater than or equal to 25', () => {
  //   expect(numItems).toBeGreaterThanOrEqual(25);
  // });
});