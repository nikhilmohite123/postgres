import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query = `
        INSERT INTO users (username, password, name)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const values = [username, password, name];
    const result = await client.query(query, values);
    return result.rows[0]; // Return the first row (should be the newly inserted user)
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = `
        SELECT * FROM users
        WHERE id=$1;
    `;
    const values = [userId];
    const result = await client.query(query, values);
    return result.rows[0]; // Return the first row (should be the user with the given ID)
}
