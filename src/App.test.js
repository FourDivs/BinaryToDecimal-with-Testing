import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders Binary to Decimal Converter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Binary to Decimal Converter/i);
  expect(linkElement).toBeInTheDocument();
});

test('decimal input Check', () => {
  render(<App />);
  const linkElement = screen.getByTestId('deci-input');
  expect(linkElement).toBeInTheDocument();
});

test('binary input Check', () => {
  render(<App />);
  const linkElement = screen.getByTestId('binary-input');
  expect(linkElement).toBeInTheDocument();
});

test('binary to decimal Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(BinaryElement, "101");
  expect(DeciElement.value).toBe("5");
});

test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "13");
  expect(BinaryElement.value).toBe("1101");
});


test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "520708");
  expect(BinaryElement.value).toBe("1111111001000000100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "182766");
  expect(BinaryElement.value).toBe("101100100111101110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2037439");
  expect(BinaryElement.value).toBe("111110001011010111111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1097380");
  expect(BinaryElement.value).toBe("100001011111010100100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1234648");
  expect(BinaryElement.value).toBe("100101101011011011000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1590dsasd983");
  expect(BinaryElement.value).not.toBe("110000100011011000111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1076206");
  expect(BinaryElement.value).toBe("100000110101111101110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1634370");
  expect(BinaryElement.value).toBe("110001111000001000010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "812988");
  expect(BinaryElement.value).toBe("11000110011110111100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1319848");
  expect(BinaryElement.value).toBe("101000010001110101000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1905836");
  expect(BinaryElement.value).toBe("111010001010010101100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1678900");
  expect(BinaryElement.value).toBe("110011001111000110100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1192571");
  expect(BinaryElement.value).toBe("100100011001001111011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "914126");
  expect(BinaryElement.value).toBe("11011111001011001110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "587944");
  expect(BinaryElement.value).toBe("10001111100010101000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1755789");
  expect(BinaryElement.value).toBe("110101100101010001101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2082554");
  expect(BinaryElement.value).toBe("111111100011011111010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1661895");
  expect(BinaryElement.value).toBe("110010101101111000111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "91911");
  expect(BinaryElement.value).toBe("10110011100000111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "318330");
  expect(BinaryElement.value).toBe("1001101101101111010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1707112");
  expect(BinaryElement.value).toBe("110100000110001101000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1365077");
  expect(BinaryElement.value).toBe("101001101010001010101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "535359");
  expect(BinaryElement.value).toBe("10000010101100111111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "428757");
  expect(BinaryElement.value).toBe("1101000101011010101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1805195");
  expect(BinaryElement.value).toBe("110111000101110001011");
});

test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "135929");
  expect(BinaryElement.value).toBe("100001001011111001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "801541");
  expect(BinaryElement.value).toBe("11000011101100000101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "320254");
  expect(BinaryElement.value).toBe("1001110001011111110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2209253");
  expect(BinaryElement.value).toBe("1000011011010111100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1444356");
  expect(BinaryElement.value).toBe("101100000101000000100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1213440");
  expect(BinaryElement.value).toBe("100101000010000000000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1563133");
  expect(BinaryElement.value).toBe("101111101100111111101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1643493");
  expect(BinaryElement.value).toBe("110010001001111100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1182989");
  expect(BinaryElement.value).toBe("100100000110100001101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2050457");
  expect(BinaryElement.value).toBe("111110100100110011001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "950981");
  expect(BinaryElement.value).toBe("11101000001011000101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1677343");
  expect(BinaryElement.value).toBe("110011001100000011111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "227747");
  expect(BinaryElement.value).toBe("110111100110100011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1387666");
  expect(BinaryElement.value).toBe("101010010110010010010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "577126");
  expect(BinaryElement.value).toBe("10001100111001100110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1777870");
  expect(BinaryElement.value).toBe("110110010000011001110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1799499");
  expect(BinaryElement.value).toBe("110110111010101001011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2039269");
  expect(BinaryElement.value).toBe("111110001110111100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1885219");
  expect(BinaryElement.value).toBe("111001100010000100011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1740362");
  expect(BinaryElement.value).toBe("110101000111001001010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "160144");
  expect(BinaryElement.value).toBe("100111000110010000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1201599");
  expect(BinaryElement.value).toBe("100100101010110111111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "915238");
  expect(BinaryElement.value).toBe("11011111011100100110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "708486");
  expect(BinaryElement.value).toBe("10101100111110000110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1705052");
  expect(BinaryElement.value).toBe("110100000010001011100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1502590");
  expect(BinaryElement.value).toBe("101101110110101111110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "747242");
  expect(BinaryElement.value).toBe("10110110011011101010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2229127");
  expect(BinaryElement.value).toBe("1000100000001110000111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1977261");
  expect(BinaryElement.value).toBe("111100010101110101101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "131883");
  expect(BinaryElement.value).toBe("100000001100101011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "581442");
  expect(BinaryElement.value).toBe("10001101111101000010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "727944");
  expect(BinaryElement.value).toBe("10110001101110001000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1125210");
  expect(BinaryElement.value).toBe("100010010101101011010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1656063");
  expect(BinaryElement.value).toBe("110010100010011111111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "639546");
  expect(BinaryElement.value).toBe("10011100001000111010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1919422");
  expect(BinaryElement.value).toBe("111010100100110111110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2199755");
  expect(BinaryElement.value).toBe("1000011001000011001011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1575358");
  expect(BinaryElement.value).toBe("110000000100110111110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1390613");
  expect(BinaryElement.value).toBe("101010011100000010101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "690855");
  expect(BinaryElement.value).toBe("10101000101010100111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1555797");
  expect(BinaryElement.value).toBe("101111011110101010101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1166131");
  expect(BinaryElement.value).toBe("100011100101100110011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "4649");
  expect(BinaryElement.value).toBe("1001000101001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1961452");
  expect(BinaryElement.value).toBe("111011110110111101100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "768323");
  expect(BinaryElement.value).toBe("10111011100101000011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1389089");
  expect(BinaryElement.value).toBe("101010011001000100001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2200901");
  expect(BinaryElement.value).toBe("1000011001010101000101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1251947");
  expect(BinaryElement.value).toBe("100110001101001101011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "907297");
  expect(BinaryElement.value).toBe("11011101100000100001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1123122");
  expect(BinaryElement.value).toBe("100010010001100110010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "365737");
  expect(BinaryElement.value).toBe("1011001010010101001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1195914");
  expect(BinaryElement.value).toBe("100100011111110001010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "879049");
  expect(BinaryElement.value).toBe("11010110100111001001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "444695");
  expect(BinaryElement.value).toBe("1101100100100010111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2095926");
  expect(BinaryElement.value).toBe("111111111101100110110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "114623");
  expect(BinaryElement.value).toBe("11011111110111111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "490543");
  expect(BinaryElement.value).toBe("1110111110000101111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1862022");
  expect(BinaryElement.value).toBe("111000110100110000110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "637489");
  expect(BinaryElement.value).toBe("10011011101000110001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "47011");
  expect(BinaryElement.value).toBe("1011011110100011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1279968");
  expect(BinaryElement.value).toBe("100111000011111100000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1529732");
  expect(BinaryElement.value).toBe("101110101011110000100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "510412");
  expect(BinaryElement.value).toBe("1111100100111001100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1329970");
  expect(BinaryElement.value).toBe("101000100101100110010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1320926");
  expect(BinaryElement.value).toBe("101000010011111011110");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1390981");
  expect(BinaryElement.value).toBe("101010011100110000101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1814883");
  expect(BinaryElement.value).toBe("110111011000101100011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "572549");
  expect(BinaryElement.value).toBe("10001011110010000101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1800592");
  expect(BinaryElement.value).toBe("110110111100110010000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1384804");
  expect(BinaryElement.value).toBe("101010010000101100100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1171752");
  expect(BinaryElement.value).toBe("100011110000100101000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "301093");
  expect(BinaryElement.value).toBe("1001001100000100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "925929");
  expect(BinaryElement.value).toBe("11100010000011101001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1997032");
  expect(BinaryElement.value).toBe("111100111100011101000");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "902909");
  expect(BinaryElement.value).toBe("11011100011011111101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "281018");
  expect(BinaryElement.value).toBe("1000100100110111010");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2116973");
  expect(BinaryElement.value).toBe("1000000100110101101101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "59871");
  expect(BinaryElement.value).toBe("1110100111011111");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "629372");
  expect(BinaryElement.value).toBe("10011001101001111100");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "546405");
  expect(BinaryElement.value).toBe("10000101011001100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "313061");
  expect(BinaryElement.value).toBe("1001100011011100101");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "421193");
  expect(BinaryElement.value).toBe("1100110110101001001");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "2026603");
  expect(BinaryElement.value).toBe("111101110110001101011");
});




test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "1094504");
  expect(BinaryElement.value).toBe("100001011001101101000");
});