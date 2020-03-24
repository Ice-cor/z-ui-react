// 简化类名的写法
function scopedClassMaker(prefix: string) {
    return function(name?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}

export {
    scopedClassMaker
}