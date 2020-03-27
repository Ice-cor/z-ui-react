import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';

import {scopedClassMaker} from '../_util/classes';
import classnames from '../helpers/classnames';
import Icon from '../icon/icon';
import './dialog.scss';

enum DialogType {
    confirm = 'confirm',
    info = 'info',
    error = 'error',
    warning = 'warning',
    modal = 'modal',
}

interface Props {
    visible: boolean;
    title?: string;
    onOk?: () => void;
    onCancel?: () => void;
    footer?: Array<ReactElement>;
    okText?: string;
    cancelText?: string;
    dialogType?: DialogType;
    closable?: Boolean;
}

const scopedClass = scopedClassMaker('zui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
    const modal = props.visible ?
        <Fragment>
            <div className={sc('mask')}>dialogWrap</div>
            <div className={classnames(sc(), sc(props.dialogType))}>
                <div className={sc('content')}>
                    {
                        props.closable ? null :
                            <Icon name="close" className={sc('close')} onClick={props.onCancel} />
                    }
                    <div
                        className={sc('header')}>
                        <h4 className={sc('title')}>{props.title || 'Title'}</h4>
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

const confirm = ({content, title, yes, no}: { content: string, title?: string, yes?: () => void, no?: () => void }) => {
    const hide = () => {
        // 不需要重新渲染component，直接移除div即可销毁
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    };
    const onYes = () => {
        hide();
        yes && yes();
    };
    const onNo = () => {
        hide();
        no && no();
    };
    const component = (<Dialog
        visible={true}
        onCancel={onNo}
        dialogType={DialogType.confirm}
        closable={true}
        title={title}
        onOk={onYes}
    >
        {content}
    </Dialog>);
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    document.body.appendChild(div);
    return hide;
};

const modal = ({content}: { content: ReactNode | ReactFragment }) => {
    const hide = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    };
    const component = <Dialog visible={true} dialogType={DialogType.modal}
                              closable={true}>{content}</Dialog>;
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    document.body.appendChild(div);
    return hide;
};
export {confirm, modal};
export default Dialog;