export default function classnames(...names: (string | undefined)[]) { // arguments的解构
    return names.filter(value => value).join(' '); // 使用filter去除空值，不留空格
}


// 简化类名的写法
interface Options {
    extra: string | undefined;
}

interface ClassToggles {
    [K: string]: boolean;
}

function scopedClassMaker(prefix: string) {
    return function (name?: string | ClassToggles, options?: Options) {
        if(name === undefined) name = '';
        const namesObject = (typeof name === 'string') ? {[name]: name} : name;
        // 拆分对象，拿到每项value: true的key值字符串数组
        const result = Object
            .entries(namesObject)
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            // 遍历数组，成员用-连接上前缀
            .map(name =>[prefix, name]
                .filter(Boolean)
                .join('-'))
            // 最后用' '组合成字符串
            .join(' ');

        if (options && options.extra) {
            return [result, options && options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {
    scopedClassMaker
};