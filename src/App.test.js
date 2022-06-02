import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

let getByTestId;

//Seolah2 aplikasi counter muncul/tampil
beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  const view = render(<App />);
  getByTestId = view.getByTestId;
});

//Definis test
test('header render with correct text', () => {
  //bentuk awal
  // const view = render(<App />);
  // const pickByTest = view.getAllByTestId

  //Untuk menunjuk komponen yang ditunjuk berdasarkan testid
  const headerEl = screen.getByTestId('header');

  expect(headerEl.textContent).toBe('Counter App');
});
