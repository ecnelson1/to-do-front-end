import request from 'superagent';

const URL = 'https://hidden-basin-91952.herokuapp.com'

export async function signUpUser(email, password){
    const NewUser = await request
    .post(`${URL}/auth/signup`)
    .send({email, password})
    return NewUser.body.token;
}

export async function loginUser(email, password){
    const loggedInUser = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
        return loggedInUser.body.token
}

export async function getTodos(token){
    const todos = await request
    .get(`${URL}/api/todos`)
    .set('Authorization', token)
    return todos.body
};

export async function makeTodo(todo, token) {
    const task = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({todo});

        return task.body;
};
export async function CompleteTask(todoid, token) {
    const CompletedTask = await request
        .put(`${URL}/api/todos/${todoid}`)
        .set('Authorization', token)

        return CompletedTask.body;
};
