# ROUTES

```
    $ npm i
```

## PURE POSTGRESQL - SEQUELIZE POSTGRESQL

#### Bütün kullanıcıları getirir / Get all users

```http
  GET /postgre/users
  GET /sq/users
```

#### Tek kullanıcıları getir / Get one user

```http
  GET /postgre/users/${id}
  GET /sq/users/${id}
```

| Parametre | Tip       | Açıklama                                      |
| :-------- | :-------- | :-------------------------------------------- |
| `id`      | `integer` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### Kullanıcı Oluşturma / Create User

```http
  POST /postgre/users
  POST /sq/users
```

| Parametre   | Tip      | Açıklama                  |
| :---------- | :------- | :------------------------ |
| `firstName` | `string` | Yeni kullanıcının ismi    |
| `lastName`  | `string` | Yeni kullanıcının şifresi |
| `email`     | `string` | Yeni kullanıcının emaili  |
| `password`  | `string` | Yeni kullanıcının şifresi |

#### Kullanıcı Güncelleme / Update user

```http
  PUT /postgre/users
  PUT /sq/users
```

| Parametre   | Tip      | Açıklama             |
| :---------- | :------- | :------------------- |
| `firstName` | `string` | kullanıcının ismi    |
| `lastName`  | `string` | kullanıcının şifresi |
| `email`     | `string` | kullanıcının emaili  |
| `password`  | `string` | kullanıcının şifresi |
| `userId`    | `string` | Kullancının ID'si    |

#### Kullanıcı Silme / Delete user

```http
  DELETE /postgre/users/${id}
  DELETE /sq/users/${id}
```

| Parametre | Tip       | Açıklama                                     |
| :-------- | :-------- | :------------------------------------------- |
| `id`      | `integer` | **Gerekli**. Silinecek öğenin anahtar değeri |
