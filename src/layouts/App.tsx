import store from '@/mobx';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { Provider } from 'mobx-react';
import React from 'react';

export default function (props: any) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        {/* <Header /> */}
        {React.cloneElement(props.children, { ...store })}
        {/* <Footer /> */}
      </ConfigProvider>
    </Provider>
  );
}
