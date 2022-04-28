const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

	test('1) Create an User object', () => {
        const user = new User(1, "omardrnp", "Omar", "Bio")
            expect(user.id).toBe(1)
            expect(user.username).toBe("omardrnp")
            expect(user.name).toBe("Omar")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
        });
     
        test('2) Add getters', () => {
            const user = new User(1, "omardrnp", "Omar", "Bio")
            expect(user.getUsername).toBe("omardrnp")
            expect(user.getBio).toBe("Bio")
            expect(user.getDateCreated).not.toBeUndefined()
            expect(user.getLastUpdated).not.toBeUndefined()
        });        


        test('3) Add setters', () => {
            const user = new User(1, "omardrnp", "Omar", "Bio")
            user.setUsername = "Duran"
            expect(user.username).toBe("Duran")
            user.setBio = "New bio"
            expect(user.bio).toBe("New bio")
            });

        
})