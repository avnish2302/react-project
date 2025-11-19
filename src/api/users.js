const BASE = 'https://jsonplaceholder.typicode.com'


export async function fetchUsers() {
const res = await fetch(`${BASE}/users`)
if (!res.ok) throw new Error('Failed to fetch users')
return res.json()
}


export async function fetchUser(id) {
const res = await fetch(`${BASE}/users/${id}`)
if (!res.ok) throw new Error('Failed to fetch user')
return res.json()
}


export async function createUser(data) {
const res = await fetch(`${BASE}/users`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
})
if (!res.ok) throw new Error('Failed to create user')
return res.json()
}


export async function updateUser(id, data) {
const res = await fetch(`${BASE}/users/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
})
if (!res.ok) throw new Error('Failed to update user')
return res.json()
}


export async function deleteUser(id) {
const res = await fetch(`${BASE}/users/${id}`, { method: 'DELETE' })
if (!res.ok) throw new Error('Failed to delete user')
return {}
}