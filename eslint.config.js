import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    eslint.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                // Browser environment
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'storybook': storybookPlugin,
            'prettier': prettierPlugin
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...storybookPlugin.configs.recommended.rules,
            ...prettierPlugin.configs.recommended.rules
        }
    }
];