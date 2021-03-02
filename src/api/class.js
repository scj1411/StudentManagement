import request from "@/utils/request";

export function queryAllClass(){
    return request.get('/class/findAll')
}

export function queryClassById(clno){
    return request.get('/class/'+clno)
}
export function saveClass(clazz) {
    return request.post('/class/',cla);
}

export function updateClass(clazz) {
    return request.put('/class/',clazz);
}
export function deleteClass(clazz) {
    return request.delete('/class/',clazz);
}

