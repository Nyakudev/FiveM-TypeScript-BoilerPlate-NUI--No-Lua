const Delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

RegisterCommand("createveh", async (source: number, args: string[], rawCommand: string) => {
    const [model] = args
    const modelHash = GetHashKey(model)

    if (!IsModelInCdimage(modelHash)) return

    RequestModel(modelHash)
    while (!HasModelLoaded(modelHash)) await Delay(100)

    const [x, y, z] = GetEntityCoords(PlayerPedId(), true)
    const h = GetEntityHeading(PlayerPedId())
    const a = "Oui les amis, je suis beau"
    const veh = CreateVehicle(modelHash, x, y, z, h, true, true)

    while (!DoesEntityExist(veh)) await Delay(100)

    SetPedIntoVehicle(PlayerPedId(), veh, -1)
    console.log(modelHash); console.log(a)

    SetVehicleColours(veh, 65, 12)
    SetVehicleDoorsLocked(veh, 2)


}, false)

emit("chat:addSugestion", "/createveh", "spawncar with TypeScript", [
    {
        name: "Model",
        help: "Vehicle spawn code"
    }
])

RegisterCommand("test", async (source: number, args: string[], rawCommand: string) => {
    const car: { type: string, model: string, year: number } = {
      type: "Toyota",
      model: "Corolla",
      year: 2009
    };
    console.log(car)
}, false)

RegisterCommand("repair", async (source: number, args: string[], rawCommand: string) => {
    const veh = GetVehiclePedIsIn(PlayerPedId(), false)
    SetVehicleEngineHealth(GetVehiclePedIsIn(PlayerPedId(), false), 1000);
    SetVehicleFixed(veh)
    SetVehicleDoorsLocked(veh, 2)
    SetVehicleBodyHealth(veh, 1000);
    console.log('qpoisfrughb')
}, false)

RegisterCommand("color", async (source: number, args: string[], rawCommand: string) => {
    const veh = GetVehiclePedIsIn(PlayerPedId(), false)
    var color = {
       black: 0,
       white: 132,
       red: 27,
       blue: 79,
       green: 92
    };

    if(args == 'black') {
           emitNet('bite')
           SetVehicleColours(veh, color.black, color.black)
           console.log('couleur appliquer ' + args)
            SetVehicleFixed(veh)
    }
    if(args == 'white')
    {
          SetVehicleColours(veh, color.white, color.white)
          console.log('couleur appliquer ' + args)
           SetVehicleFixed(veh)
    }
    if(args == 'red')
    {
           SetVehicleColours(veh, color.red, color.red)
           console.log('couleur appliquer ' + args)
           SetVehicleFixed(veh)

    }
    if(args == 'blue') {
           SetVehicleColours(veh, color.blue, color.blue)
           console.log('couleur appliquer ' + args)
           SetVehicleFixed(veh)
    }
    if(args == 'green') {
               SetVehicleColours(veh, color.green, color.green)
               console.log('couleur appliquer ' + args)
               SetVehicleFixed(veh)
               SetVehicleWindowTint(veh, WindowTints.WINDOWTINT_PURE_BLACK);
        }
}, false)

RegisterCommand('nui', async (source: number, args: number, rawCommand: string) => {

    SendNUIMessage({
    type: 'open'
    })

    SetNuiFocus(true, true)
}, false)

RegisterNuiCallbackType('close') // register the type

    // register a magic event name
    on('__cfx_nui:close', (data, cb) => {
        const veh = GetVehiclePedIsIn(PlayerPedId(), false)
        SetVehicleFixed(veh)
        SetNuiFocus(false, false)
        console.log(data.debug)
});