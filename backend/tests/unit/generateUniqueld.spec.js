const genrateUniqueId = require('../../src/utils/generateUniqueld');

describe('Generate Unique ID', () => {
    it('should genrate an unique ID', () => {
        const id  = genrateUniqueId();
        expect(id).toHaveLength(8);
    })
})