module.exports = {
  name: 'reusable',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/reusable',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
