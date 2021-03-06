import vm from 'vm';

import readAsset from './readAsset';

function getCodeFromBundle(stats, compiler, asset, options) {    
    let code = null;

    if (
        stats &&
        stats.compilation &&
        stats.compilation.assets &&
        stats.compilation.assets[asset || 'main.bundle.js']
    ) {
        code = readAsset(asset || 'main.bundle.js', compiler, stats);
    }

    if (!code) {
        throw new Error("Can't find compiled code");
    }

    const result = vm.runInNewContext(
        `${code};\nmodule.exports = globalThis.aNodeLoaderExports;`,
        {
            module: module,
            exports: exports,
        }
    );

    return options.testType === 'injs' ? result.code : eval(result.code);
}

export default getCodeFromBundle;
