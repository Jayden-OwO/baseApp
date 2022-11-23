import mock from './index';

mock.onPost('/exampleApi').reply(200, {
  code: '200',
  message: 'Success.',
  result: {
    data: 1,
  },
});
