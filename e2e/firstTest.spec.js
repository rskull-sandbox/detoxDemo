describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('テキスト入力', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
    await element(by.id('textInput')).typeText('Hello!');
    await element(by.id('textInput')).clearText();
    await element(by.id('scrollview')).tap();
  });

  it('スクロールしてメニュー開閉', async () => {
    await element(by.id('scrollview')).scrollTo('bottom');
    await element(by.id('menuButton')).tap();
    await expect(element(by.id('menu'))).toBeVisible();
    await element(by.id('menuCloseButton')).tap();
    await expect(element(by.id('menu'))).toNotExist();
  });
})
