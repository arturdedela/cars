import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  test('should change pages correctly', () => {
    const handleChangePage = jest.fn();
    const FIRST_PAGE = 1;
    const CURRENT_PAGE = 3;
    const TOTAL_PAGES = 5;

    render(
      <Pagination
        firstPage={FIRST_PAGE}
        currentPage={CURRENT_PAGE}
        totalPages={TOTAL_PAGES}
        onChangePage={handleChangePage}
      />,
    );

    fireEvent.click(screen.getByText('First'));
    expect(handleChangePage).toBeCalledWith(FIRST_PAGE);

    fireEvent.click(screen.getByText('Previous'));
    expect(handleChangePage).toBeCalledWith(CURRENT_PAGE - 1);

    fireEvent.click(screen.getByText('Next'));
    expect(handleChangePage).toBeCalledWith(CURRENT_PAGE + 1);

    fireEvent.click(screen.getByText('Last'));
    expect(handleChangePage).toBeCalledWith(TOTAL_PAGES);
  });
});
