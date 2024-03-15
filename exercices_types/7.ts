// Crie um tipo genérico que represente uma resposta de API, que pode conter uma
// propriedade de dados de qualquer tipo e uma propriedade de mensagem que é uma string.

type ApiResponse<T> = {
  data: T;
  message: T;
};

type ApiResponse2<T, G> = {
  data: T;
  message: G;
};

const response: ApiResponse<string> = {
  data: "test",
  message: "teste",
};

const response2: ApiResponse2<string, number> = {
  data: "test",
  message: 2,
};
