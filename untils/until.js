const fs = require('fs');
const path = require('path');

/**
 * 文件夹遍历
 * @description 
 * 传入一个目录路径参数，开始遍历该目录下的文件
 * 如果遇到的是目录，则继续调用该函数
 * 直到所有的目录遍历完成
 * 
 * @param dir 目录路径
 * @param options 配置项
 *          {
 *              ignore：Array // 忽略项
 *          }
 */

function forEachDir(dir, options, list, level) {
    const files = fs.readdirSync(dir);
    for (let index = 0; index < files.length; index++) {
        const item = files[index];
        const fullpath = path.join(dir, item);
        const isREADME = 'README.md' === item;
        const isDir = fs.statSync(fullpath).isDirectory();
        if (options.ignore.includes(item) || 0 === level && !isDir) {
            continue;
        }
        if (0 === level) {
            list[`/${item}/`] = [];
            forEachDir(fullpath, options, list[`/${item}/`]);
        } else if (isDir) {
            let obj = {
                title: transGroup(item),
                collapsable: false,
                prefix: item,
                children: []
            };
            if (list instanceof Array) {
                list.push(obj);
            } else {
                list.children.push(obj);
            }
            forEachDir(fullpath, options, obj);
        } else {
            let childName = item;
            let children = list.children || list;
            if (list.prefix) {
                childName = list.prefix + '/' + item;
            }
            if (isREADME) {
                children.unshift('')
            } else {
                children.push(childName.replace('.md', ''));
            }
        }
    }
    return list;
}



function transGroup(dirName) {
    switch (dirName) {
        case 'service':
            return '服务器'
        default:
            return dirName
    }
}

module.exports = {
    forEachDir
}

