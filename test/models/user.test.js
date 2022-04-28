const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

	test(' Create an User object', () => {
        const user = new User(1, "omardrnp", "Omar", "Bio")
            expect(user.id).toBe(1)
            expect(user.username).toBe("omardrnp")
            expect(user.name).toBe("Omar")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
        });

})