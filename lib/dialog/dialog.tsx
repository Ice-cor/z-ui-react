import React, {Fragment} from 'react';

import {scopedClassMaker} from '../_util/classes';
import Icon from '../icon/icon';
import './dialog.scss';

interface Props {
    visible: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

const scopedClass = scopedClassMaker('zui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc('mask')}>dialogWrap</div>
                <div className={sc()}>
                    <div className={sc('content')}>
                        <div className={sc('header')}>
                            <h4 className={sc('title')}>Title</h4>
                            <Icon name="close" className={sc('close')} onClick={props.onCancel}/>
                        </div>
                        <div className={sc('body')}>
                            {props.children}
                        </div>
                        <div className={sc('footer')}>
                            <button onClick={props.onOk}>Ok</button>
                            <button onClick={props.onCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Fragment>
            :
            null
    );
};

export default Dialog;