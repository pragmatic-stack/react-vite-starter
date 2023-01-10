module.exports = {
    "root": true,
    env: {
        node: true,
        es2021: true,
    },
    parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: {
                react: { version: 'detect' },
                'import/resolver': {
                    typescript: {},
                },
            },
            env: {
                browser: true,
                node: true,
                es2021: true,
            },
        }
    ]
}