import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import jwt from "./token.js";

const router = Router();

// Doctors...
router.get("/doctors", jwt.ValidateToken, controllerDoctor.Listar);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Excluir);
router.get("/doctors/:id_doctor/services", jwt.ValidateToken, controllerDoctor.ListarServicos);

// Users...
router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);


// Reservas (appointments)...
router.get("/appointments", jwt.ValidateToken, controllerAppointment.ListarByUser);
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Inserir);
router.delete("/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.Excluir);


// Rotas do Admin...
router.post("/admin/register", controllerUser.InserirAdmin);
router.post("/admin/login", controllerUser.LoginAdmin);
router.get("/admin/appointments", jwt.ValidateToken, controllerAppointment.Listar);
router.get("/admin/users", jwt.ValidateToken, controllerUser.Listar);
router.get("/admin/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.ListarId);
router.post("/admin/appointments", jwt.ValidateToken, controllerAppointment.InserirAdmin);
router.put("/admin/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.EditarAdmin);



export default router;