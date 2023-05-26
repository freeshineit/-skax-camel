import { lowerCamel, upperCamel } from '../src';

/**
 * Dummy test
 */
describe('@skax/camel test', () => {
  it('lowerCamel test', () => {
    expect(lowerCamel('abcce_dddd_ffff')).toEqual('abcceDdddFfff'); // -> abcceDdddFfff
    expect(lowerCamel('abcce-dddd-ffff', '-')).toEqual('abcceDdddFfff'); // -> abcceDdddFfff
  });

  it('upperCamel test', () => {
    expect(upperCamel('abcce_dddd_ffff')).toEqual('AbcceDdddFfff'); // -> AbcceDdddFfff
    expect(upperCamel('abcce-dddd-ffff', '-')).toEqual('AbcceDdddFfff'); // -> abcceDdddFfff
  });
});
