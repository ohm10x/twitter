const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

	test(' Create an User object', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
            expect(user.id).toBe(1)
            expect(user.username).toBe("carlogilmar")
            expect(user.name).toBe("Carlo")
            expect(user.bio).toBe("Bio")
        });

})