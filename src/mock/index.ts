// import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import utRequest from '../request/instance';

//api
// const mock = new MockAdapter(axios);

//mock
const mock = new MockAdapter(utRequest);

export default mock;
