import classnames, {scopedClassMaker} from "../classes";

describe('classnames方法', () => {
    it('接受 1 个className', () => {
        const result = classnames('a');
        expect(result).toEqual('a');
    });
    it('接受 2 个className', () => {
        const result = classnames('a', 'b');
        expect(result).toEqual('a b');
    });
    it('接受 undefined, 结果不会有undefined', () => {
        const result = classnames('a', undefined);
        expect(result).toEqual('a');
    });
    it('不传值，得到空字符串', () => {
        const result = classnames();
        expect(result).toEqual('');
    });
});

describe('scopedClassMaker方法', () => {
    it('接受字符串或者对象 ', () => {
        const sc = scopedClassMaker('zui-layout');
        expect(sc()).toEqual('zui-layout');
        expect(sc('')).toEqual('zui-layout');
        expect(sc('x')).toEqual('zui-layout-x');
        expect(sc({x: true, y: false})).toEqual('zui-layout-x');
        expect(sc({x: true, y: true})).toEqual('zui-layout-x zui-layout-y');
        expect(sc({x: true, y: true}, {extra: 'active'})).toEqual('zui-layout-x zui-layout-y active');
    });
});