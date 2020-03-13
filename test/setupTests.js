const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});

// 测试用例点击事件生效