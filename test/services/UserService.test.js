const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "omardrnp", "Omar")
    expect(user.username).toBe("omardrnp")
    expect(user.name).toBe("Omar")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "omardrnp", "Omar")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("omardrnp")
    expect(userInfoInList[2]).toBe("Omar")
    expect(userInfoInList[3]).toBe("Sin bio")
  })

  test("3. Update username", () => {
    const user = UserService.create(1, "omardrnp", "Omar")
    UserService.updateUserUsername(user, "ohm10x")
    expect(user.username).toBe("ohm10x")
  })

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "ohm10x", "Omar")
    const user2 = UserService.create(1, "cr7", "Ronaldo")
    const user3 = UserService.create(1, "hawking", "Stephen")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("ohm10x")
    expect(usernames).toContain("cr7")
    expect(usernames).toContain("hawking")
  })


})