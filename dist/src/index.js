"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (_) try {
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
var db = __importStar(require("./db-connection"));
var body_parser_1 = __importDefault(require("body-parser"));
var Davidteamo = body_parser_1.default.json();
var app = express_1.default();
app.use(cors_1.default());
// preguntas - faciles
app.get('/preguntas_faciles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("recibido de GET /preguntas_faciles.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM preguntas_faciles";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log('Preguntas obtenidas:', db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log('No se encontraron preguntas');
                    res.json([]);
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// preguntas - dificil
app.get('/preguntas_imposibles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("recibido de GET /preguntas_imposibles.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM preguntas_imposibles";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log('Preguntas obtenidas:', db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log('No se encontraron preguntas');
                    res.json([]);
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// preguntas - medias
app.get('/preguntas_medias', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("recibido de GET /preguntas_medias.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM preguntas_medias";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log('Preguntas obtenidas:', db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log('No se encontraron preguntas');
                    res.json([]);
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error(err_3);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// crear usuario
app.post("/usuarios", Davidteamo, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var comprobacion, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                console.log("Comprobando usuario");
                return [4 /*yield*/, db.query("SELECT * FROM usuarios WHERE id = '" + req.body.id + "'")];
            case 2:
                comprobacion = _a.sent();
                console.log("Usuario comprobado");
                if (!(comprobacion.rows.length < 1)) return [3 /*break*/, 5];
                return [4 /*yield*/, db.query("INSERT INTO usuarios (id, nombre) VALUES ('" + req.body.id + "', '" + req.body.nombre + "')")];
            case 3:
                _a.sent();
                return [4 /*yield*/, db.query("SELECT * FROM usuarios WHERE id = '" + req.body.id + "'")];
            case 4:
                comprobacion = _a.sent();
                console.log("Usuario creado");
                _a.label = 5;
            case 5:
                res.json(comprobacion.rows[0]);
                return [3 /*break*/, 7];
            case 6:
                err_4 = _a.sent();
                console.error(err_4);
                res.status(500).send("Internal Server Error");
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
var port = 10000;
app.listen(port, function () {
    return console.log("App listening on PORT " + port + ".\n\n    ENDPOINTS:\n    - GET /preguntas_imposibles\n    - GET /preguntas_medias\n    - GET /preguntas_faciles\n    - POST /usuarios    \n    ");
});
