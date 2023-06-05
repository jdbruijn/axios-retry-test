import axios from 'axios';
import axiosRetry from 'axios-retry';

// 1: This gives compilation error `TS2349: This expression is not callable.`.
axiosRetry(axios, {retries: 3});

// 2: This compiles but gives runtime error `TypeError: axiosRetry.default is
// not a function`.
// axiosRetry.default(axios, {retries: 3});

// 3: Same issue as 2.
// const {default: ar} = axiosRetry;
// ar(axios, {retries: 3});


// 4: This compiles and runs, but shouldn't need to cast the import like this.
// type AxiosRetry = typeof axiosRetry.default;
// (axiosRetry as unknown as AxiosRetry)(axios, {retries: 3});
