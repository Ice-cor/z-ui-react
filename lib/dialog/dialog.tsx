import React, {Fragment} from 'react';

import { scopedClassMaker } from '../_util/classes';
import './dialog.scss';

interface Props {
    visible: boolean;
}

const scopedClass = scopedClassMaker('zui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc('mask')}>dialogWrap</div>
                <div className={sc('wrap')}>
                    <div className={sc('title')}>111</div>
                </div>
            </Fragment>
            :
            null
    );
};

export default Dialog;