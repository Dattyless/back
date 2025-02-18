"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_connection_1 = require("./db-connection"); // Importa la función query desde db-connection.ts
var body_parser_1 = __importDefault(require("body-parser"));
var Davidteamo = body_parser_1.default.json();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Endpoint para obtener preguntas fáciles
app.get('/preguntas_faciles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryText, db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                queryText = "SELECT * FROM preguntas_faciles";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText)];
            case 1:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    res.status(200).json(db_response.rows);
                }
                else {
                    res.status(404).json({ error: 'No se encontraron preguntas' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).json({ error: 'Error al obtener preguntas' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Endpoint para obtener preguntas medias
app.get('/preguntas_medias', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryText, db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                queryText = "SELECT * FROM preguntas_medias";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText)];
            case 1:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    res.status(200).json(db_response.rows);
                }
                else {
                    res.status(404).json({ error: 'No se encontraron preguntas' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).json({ error: 'Error al obtener preguntas' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Endpoint para obtener preguntas difíciles
app.get('/preguntas_imposibles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryText, db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                queryText = "SELECT * FROM preguntas_imposibles";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText)];
            case 1:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    res.status(200).json(db_response.rows);
                }
                else {
                    res.status(404).json({ error: 'No se encontraron preguntas' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                res.status(500).json({ error: 'Error al obtener preguntas' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Endpoint para obtener un usuario por email
app.get('/usuarios/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, queryText, db_response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.params.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                queryText = "SELECT * FROM usuarios WHERE email = $1";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText, [email])];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    res.status(200).json(db_response.rows[0]); // Devuelve el usuario encontrado
                }
                else {
                    res.status(404).json({ error: 'Usuario no encontrado' }); // Usuario no existe
                }
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error('Error en la consulta SQL:', err_4);
                res.status(500).json({ error: 'Error interno del servidor al obtener el usuario' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Endpoint para crear un nuevo usuario
app.post('/adduser', Davidteamo, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, checkUserQuery, checkUserResponse, insertUserQuery, insertUserResponse, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                checkUserQuery = "SELECT * FROM usuarios WHERE email = $1";
                return [4 /*yield*/, (0, db_connection_1.query)(checkUserQuery, [email])];
            case 2:
                checkUserResponse = _b.sent();
                if (checkUserResponse.rows.length > 0) {
                    res.status(400).json({ error: 'El usuario ya existe' });
                    return [2 /*return*/];
                }
                insertUserQuery = "INSERT INTO usuarios (email, name) VALUES ($1, $2)";
                return [4 /*yield*/, (0, db_connection_1.query)(insertUserQuery, [email, name])];
            case 3:
                insertUserResponse = _b.sent();
                if (insertUserResponse.rowCount === 1) {
                    res.status(200).json({ message: 'Usuario creado correctamente' });
                }
                else {
                    res.status(400).json({ error: 'El registro no ha sido creado' });
                }
                return [3 /*break*/, 5];
            case 4:
                err_5 = _b.sent();
                console.error('Error al crear el usuario:', err_5);
                res.status(500).json({ error: 'Error interno del servidor al crear el usuario' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Endpoint para actualizar puntos de un usuario
app.post('/usuarios/:email/puntos', Davidteamo, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, puntos, queryText, db_response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.params.email;
                puntos = req.body.puntos;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                queryText = "UPDATE usuarios SET puntos = puntos + $1 WHERE email = $2";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText, [puntos, email])];
            case 2:
                db_response = _a.sent();
                if (db_response.rowCount === 1) {
                    res.status(200).json({ message: 'Puntos actualizados correctamente' });
                }
                else {
                    res.status(404).json({ error: 'Usuario no encontrado' });
                }
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error(err_6);
                res.status(500).json({ error: 'Error al actualizar puntos' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Endpoint para obtener el ranking de usuarios
app.get('/ranking', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryText, db_response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                queryText = "SELECT name, puntos FROM usuarios ORDER BY puntos DESC";
                return [4 /*yield*/, (0, db_connection_1.query)(queryText)];
            case 1:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    res.status(200).json(db_response.rows);
                }
                else {
                    res.status(404).json({ error: 'No hay usuarios registrados' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                console.error(err_7);
                res.status(500).json({ error: 'Error al obtener el ranking' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("App listening on PORT ".concat(port, ".\n\n    ENDPOINTS:\n    - GET /preguntas_faciles\n    - GET /preguntas_imposibles\n    - GET /preguntas_medias\n    - GET /usuarios/:email\n    - POST /adduser\n    - POST /usuarios/:email/puntos\n    - GET /ranking\n    "));
});
