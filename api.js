import axios from "axios";

const name = "andtop";
export const API_URL = `http://sb-cats.herokuapp.com/api/2/${name}`;

export const getCats = async () => {
    try {
        const res = await axios.get(`${API_URL}/show`);
        return res.data.data;
    } catch (e) {
        console.log('Едрить колотить! Ошибка СТОП 000000 =>' ,e);
    }
};

export const getCat = (id) => {
    axios
        .get(`${API_URL}/show/${id}`)
        .then((res) => console.log(res.data.data))
        .catch((e) => console.log(e));
};

export const addCat = (body) => {
    axios.post(`${API_URL}/add`, body).then((res) => {
        if (res.data.message === "cat with this id already exist") {
            alert("Кот с паспортными данными уже существует, попробуй другой номер паспорта(ID)");
        } else {
            alert(
                "Ваш кот добавлен, перезагрузи страничку дружище!"
            );
        }
    });
};

export const updCat = (id, body) => {
    axios.put(`${API_URL}/update/${id}`, body).then((res) => {
        if (res.data.message !== "ok") {
            alert("РукаЛицо просто **ВАША МОБИЛОЧКА ПРЕВРАТИЛАСЬ В КИРПИЧ ИЗ-ЗА ОШИБКИ**");
        } else {
            alert(
                "Паспортные данные вашей кота(кошки) изменены."
            );
        }
    });
};

export const delCat = (id) => {
    axios
        .delete(`${API_URL}/delete/${id}`)
        .then((res) =>
            alert(
                "Ваш кот был удален из нашего приложения"
            )
        )
        .catch((e) => alert("ОШИБКА: Ваш кот пытался уехать из Саратова, но у него не получилось. **Не пытайтесь покинуть Саратов**"));
};
