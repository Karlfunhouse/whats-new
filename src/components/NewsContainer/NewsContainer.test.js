import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import local from '../../data/local';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('NewsContainer', function(){
  it('renders correctly', () => {
    const {getByText, getAllByText} = render(<NewsContainer currentArticles={local}/>)

    const title = getByText('The Who postpones Denver Concert at the Pepsi Center')
    // console.log(title);


    const titles = getAllByText('Click Here To Read Full Article')

    expect(titles).toHaveLength(8)
  });



  });
