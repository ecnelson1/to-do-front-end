import request from 'superagent';

const URL = 'https://serene-bayou-70686.herokuapp.com'

export async function signUpUser(email, password){
    const NewUser = await request
    .post(`${URL}/auth/signup`)
    .send({email, password})
    return NewUser.body;
}

export async function loginUser(email, password){
    const loggedInUser = await request
        .post(`${URL}/signin`)
        .send({ email, password })
        return loggedInUser.body
}

export async function getTodos(token){
    const todos = await request.get(`${URL}/todos`)
    .set('Authorization', token)
    return todos.body
};

export async function makeTodo(todo, token) {
    const task = await request
        .post(`${URL}/todos`)
        .set('Authorization', token)
        .send(todo);

        return task.body;
};
export async function CompleteTask(todoid, token) {
    const CompletedTask = await request
        .put(`${URL}/todos/${todoid}`)
        .set('Authorization', token)

        return CompletedTask.body;
};