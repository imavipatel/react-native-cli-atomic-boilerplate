module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: [
          { '@atoms': './src/components/atoms' },
          { '@molecules': './src/components/molecules' },
          { '@organisms': './src/components/organisms' },
          { '@templates': './src/components/templates' },
        ],
      },
    ],
  ],
};
