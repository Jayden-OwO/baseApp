// import { useTranslateKeysToMaps } from 'iscommon/i18n/utils';
import { getExampleInfo } from '@/api/exampleApi';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
interface Props {
  store?: any;
}

const TestPage = inject('store')(
  observer((props: Props) => {
    const {
      store: { WebHome },
    } = props;
    const { testParams } = WebHome;

    useEffect(() => {
      getExampleInfo().then((item: any) => {
        console.log(item);
      });
    }, []);

    return <div>1</div>;
  }),
);

export default TestPage;
