import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import local from '../../data/local';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('SearchForm', () => {
  it('renders without crashing', () => {
    const mockSearchNews = jest.fn()
    const { getByText, toHaveBeenCalledWith } = render(<SearchForm  searchNews={mockSearchNews}/>)
    fireEvent.click(getByText('Search'))
    expect(mockSearchNews).toHaveBeenCalled()
  });

});
