const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "omardrnp", "Omar")
    expect(user.username).toBe("omardrnp")
    expect(user.name).toBe("Omar")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

})