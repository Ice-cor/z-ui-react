import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';

import {scopedClassMaker} from '../_util/classes';
import Icon from '../icon/icon';
import './dialog.scss';

interface Props {
    visible: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    footer?: Array<ReactElement>;
    okText?: string;
    cancelText?: string;
}

const scopedClass = scopedClassMaker('zui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
    const modal = props.visible ?
        <Fragment>
            <div className={sc('mask')}>dialogWrap</div>
            <div className={sc()}>
                <div className={sc('content')}>
                    <Icon name="close" className={sc('close')} onClick={props.onCancel} />
                    <div className={sc('header')}>
                        <h4 className={sc('title')}>Title</h4>
                    </div>
                    <div className={sc('body')}>
                        {props.children}
                    </div>
                    <div className={sc('footer')}>
                        {
                            props.footer ? props.footer.map((item, index) =>
                                    React.cloneElement(item, {key: item.key || index})
                                ) :
                                <Fragment>
                                    <button onClick={props.onOk}>
                                        {props.okText || 'Ok'}
                                    </button>
                                    <button onClick={props.onCancel}>
                                        {props.cancelText || 'Cancel'}
                                    </button>
                                </Fragment>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
        :
        null;
    return ReactDOM.createPortal(modal, document.body);
};

const confirm = (content: string) => {
    const hide = () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    };
    const component = <Dialog visible={true} onCancel={hide}>{content}</Dialog>;
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    document.body.appendChild(div);
    return hide;
};
export {confirm};
export default Dialog;