import React from 'react';
import { render } from '@testing-library/react';

import SummaryContainer from './SummaryContainer';

jest.mock('../../hooks/useFetch', () => ({
  useFetch: () => ({
    data: {
      salesTotal: 899,
      subscriptionsTotal: 344,
    },
  }),
}));

describe('SummaryContainer component', () => {
  it('should see sales and subscriptions totals', async () => {
    const { getByText, findByText } = render(<SummaryContainer />);

    await findByText('CellFast sales');
    await findByText('$ 899');

    expect(getByText('CellFast sales')).toBeInTheDocument();
    expect(getByText('$ 899')).toBeInTheDocument();

    expect(getByText('CellNow subscriptions')).toBeInTheDocument();
    expect(getByText('$ 344')).toBeInTheDocument();
  });
});
