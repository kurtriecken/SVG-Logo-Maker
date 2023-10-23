const Characters = require('./text');

describe('Characters', () => {
    describe('Instantiate', () => {
        it('should be an instance of Characters class', () => {
            const characters = new Characters('sh', 'blue', 'Circle');
            expect(characters).toBeInstanceOf(Characters);
        });
    });

    describe('Text', () => {
        it('should track the input text', () => {
            const characters = new Characters('sh', 'blue', 'Circle');
            expect(characters.text).toBe('SH');
        });
    });

    describe('Color', () => {
        it('should track the input color', () => {
            const characters = new Characters('sh', 'blue', 'Circle');
            expect(characters.color).toBe('blue');
        });
    });

    describe('Shape', () => {
        it('should track the input shape', () => {
            const characters = new Characters('sh', 'blue', 'Circle');
            expect(characters.shape).toBe('Circle');
        });
    });

    describe('Render', () => {
        it('should track the input text', () => {
            const characters = new Characters('sh', 'blue', 'Circle');
            expect(characters.render()).toBe('<text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle" fill="blue" style="font-size: 3.7em; font-weight: bolder">SH</text>');
        });
    });

    describe('Render Triangle 1 Character', () => {
        it('should track the input text', () => {
            const characters = new Characters('s', 'blue', 'Triangle');
            expect(characters.render()).toBe('<text x="50%" y="67%" text-anchor="middle" dominant-baseline="middle" fill="blue" style="font-size: 3.5em; font-weight: bolder">S</text>');
        });
    });

    describe('Render Triangle 2 Characters', () => {
        it('should track the input text', () => {
            const characters = new Characters('sh', 'blue', 'Triangle');
            expect(characters.render()).toBe('<text x="50%" y="68%" text-anchor="middle" dominant-baseline="middle" fill="blue" style="font-size: 2.7em; font-weight: bolder">SH</text>');
        });
    });

    describe('Render Triangle 3 Characters', () => {
        it('should track the input text', () => {
            const characters = new Characters('shq', 'blue', 'Triangle');
            expect(characters.render()).toBe('<text x="50%" y="78%" text-anchor="middle" dominant-baseline="middle" fill="blue" style="font-size: 2.7em; font-weight: bolder">SHQ</text>');
        });
    });
})