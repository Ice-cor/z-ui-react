import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';

import classnames, {scopedClassMaker} from '../_util/classes';

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

const sc = scopedClassMaker('zui-dialog');

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
                    {
                        props.footer && props.footer.length > 0 ?
                            <div className={sc('footer')}>
                                {
                                    props.footer.map((item, index) =>
                                        React.cloneElement(item, {key: item.key || index})
                                    )
                                }
                            </div> : null
                    }
                </div>
            </div>
        </Fragment>
        :
        null;
    return ReactDOM.createPortal(modal, document.body);
};


const modal = ({content, buttons, dialogType = DialogType.modal}: { content: ReactNode, buttons?: Array<ReactElement>, dialogType?: DialogType }) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    };
    const component = (
        <Dialog
            visible={true}
            dialogType={dialogType}
            closable={true}
            footer={buttons}
        >
            {content}
        </Dialog>);
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    document.body.appendChild(div);
    return close;
};

const confirm = ({content, title, yes, no}: { content: string, title?: string, yes?: () => void, no?: () => void }) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [<button onClick={onYes}>确定</button>, <button onClick={onNo}>取消</button>];
    const close = modal({content, buttons, dialogType: DialogType.confirm});
};

export {confirm, modal, Dialog};
export default Dialog;