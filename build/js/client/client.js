"use strict";
(() => {
    var s = t => new Promise(o => setTimeout(o, t));
    RegisterCommand("createveh", async (t, o, i) => {
        let [e] = o, l = GetHashKey(e);
        if (!IsModelInCdimage(l)) return;
        for (RequestModel(l); !HasModelLoaded(l);) await s(100);
        let [n, c, a] = GetEntityCoords(PlayerPedId(), !0), d = GetEntityHeading(PlayerPedId()), u = "Oui les amis, je suis beau", r = CreateVehicle(l, n, c, a, d, !0, !0);
        for (; !DoesEntityExist(r);) await s(100);
        SetPedIntoVehicle(PlayerPedId(), r, -1), console.log(l), console.log(u), SetVehicleColours(r, 65, 12), SetVehicleDoorsLocked(r, 2)
    }, !1);
    emit("chat:addSugestion", "/createveh", "spawncar with TypeScript", [{
        name: "Model",
        help: "Vehicle spawn code"
    }]);
    RegisterCommand("test", async (t, o, i) => {
        console.log({
            type: "Toyota",
            model: "Corolla",
            year: 2009
        })
    }, !1);
    RegisterCommand("repair", async (t, o, i) => {
        let e = GetVehiclePedIsIn(PlayerPedId(), !1);
        SetVehicleEngineHealth(GetVehiclePedIsIn(PlayerPedId(), !1), 1e3), SetVehicleFixed(e), SetVehicleDoorsLocked(e, 2), SetVehicleBodyHealth(e, 1e3), console.log("qpoisfrughb")
    }, !1);
    RegisterCommand("color", async (t, o, i) => {
        let e = GetVehiclePedIsIn(PlayerPedId(), !1);
        var l = {
            black: 0,
            white: 132,
            red: 27,
            blue: 79,
            green: 92
        };
        o == "black" && (emitNet("bite"), SetVehicleColours(e, l.black, l.black), console.log("couleur appliquer " + o), SetVehicleFixed(e)), o == "white" && (SetVehicleColours(e, l.white, l.white), console.log("couleur appliquer " + o), SetVehicleFixed(e)), o == "red" && (SetVehicleColours(e, l.red, l.red), console.log("couleur appliquer " + o), SetVehicleFixed(e)), o == "blue" && (SetVehicleColours(e, l.blue, l.blue), console.log("couleur appliquer " + o), SetVehicleFixed(e)), o == "green" && (SetVehicleColours(e, l.green, l.green), console.log("couleur appliquer " + o), SetVehicleFixed(e), SetVehicleWindowTint(e, WindowTints.WINDOWTINT_PURE_BLACK))
    }, !1);
    RegisterCommand("nui", async (t, o, i) => {
        SendNUIMessage({
            type: "open"
        }), SetNuiFocus(!0, !0)
    }, !1);
    RegisterNUICallbackType("close");
    on("truc:close", () => {
        console.log("NUICallbackType work successfully")
    });
})();