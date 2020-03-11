export default function classnames(...names: (string | undefined)[]) { // arguments的解构
    return names.filter(value => value).join(' '); // 使用filter去除空值，不留空格
}