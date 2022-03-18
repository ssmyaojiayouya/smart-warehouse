let buildingObjects = {
    objects: [
        {
            objectName: 'floor',
            objectType: 'cube',
            length: 3400,
            width: 1200,
            height: 1,
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            style:{
                color: 0x5F7480,
            }
        },
        {
            objName: "wallfront",
            objectType: "wall",
            length: 3400,
            width:20,
            height: 160,
            position: {
                x: 0,
                y: 80,
                z: 600
            },
            style: {
                color: 0x96ABC8,
            },
            childrens: [
                //门洞
                {
                    objName: "doorHole",
                    objectType: "wallHole",
                    length: 120,
                    width: 30,
                    height: 140,
                    position: {
                        x: 0,
                        y: 70,
                        z: 600
                    },

                },
                //上门框
                {
                    objName: "doorFrameUp",
                    objectType: "doorFrame",
                    length: 120,
                    width: 10,
                    height:4,
                    position: {
                        x: 0,
                        y: 138,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //左门框
                {
                    objName: "doorFrameLeft",
                    objectType: "doorFrame",
                    length: 4,
                    width: 10,
                    height: 140,
                    position: {
                        x: -58,
                        y: 70,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //下门框
                {
                    objName: "doorFrameDown",
                    objectType: "doorFrame",
                    length: 120,
                    width: 10,
                    height:2,
                    position: {
                        x: 0,
                        y: 0,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //右门框
                {
                    objName: "doorFrameUp",
                    objectType: "doorFrame",
                    length: 4,
                    width: 10,
                    height: 140,
                    position: {
                        x: 58,
                        y: 70,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //左窗户洞
                {
                    objName: "WindowHoleLeft",
                    objectType: "wallHole",
                    length: 100,
                    width: 30,
                    height: 100,
                    position: {
                        x: -600,
                        y: 90,
                        z: 600
                    }
                },
                //左窗台
                {
                    objName: "WindowFrameBottom",
                    objectType: "windowFrame",
                    length: 100,
                    width: 20,
                    height: 3,
                    position: {
                        x: -600,
                        y: 40,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //左窗户
                {
                    show: true,
                    name: 'doorLeft',
                    uuid: "",
                    objectType: 'door',
                    length: 100,
                    width: 5,
                    height: 100,
                    position: {
                        x: -600,
                        y: 90,
                        z: 600
                    },
                    style: {
                        type:1,
                        opacity: 0.1,
                        up: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        left: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        fore: {
                            color: 0x51443e,
                            image: "../../res/window.png",
                            ifRepeat:0,
                            transparent:1,
                            opacity:0.6
                        },
                        behind: {
                            color: 0x51443e,
                            image: "../../res/window.png",
                            ifRepeat:0,
                            transparent:1,
                            opacity:0.6
                        },
                        down: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        right: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        }
                    },
                },

                //右窗户洞
                {
                    objName: "WindowHoleRight",
                    objectType: "wallHole",
                    length: 100,
                    width: 30,
                    height: 100,
                    position: {
                        x: 800,
                        y: 90,
                        z: 600
                    }
                },
                //右窗户
                {
                    show: true,
                    name: 'doorLeft',
                    uuid: "",
                    objectType: 'door',
                    length: 100,
                    width: 5,
                    height: 100,
                    position: {
                        x: 800,
                        y: 90,
                        z: 600
                    },
                    style: {
                        type:1,
                        opacity: 0.1,
                        up: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        left: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        fore: {
                            color: 0x51443e,
                            image: "../../res/window.png",
                            ifRepeat:0,
                            transparent:1,
                            opacity:0.6
                        },
                        behind: {
                            color: 0x51443e,
                            image: "../../res/window.png",
                            ifRepeat:0,
                            transparent:1,
                            opacity:0.6
                        },
                        down: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        },
                        right: {
                            color: 0x51443e,
                            transparent:1,
                            opacity:0.6
                        }
                    },
                },
                //右窗台
                {
                    objName: "WindowFrameBottom",
                    objectType: "windowFrame",
                    length: 100,
                    width: 20,
                    height: 5,
                    position: {
                        x: 800,
                        y: 40,
                        z: 600
                    },
                    style: {
                        color: 0x93B8BC,
                    },
                },
                //左边门
                {
                    show: true,
                    name: 'doorLeft',
                    uuid: "",
                    objectType: 'door',
                    length: 60,
                    width: 5,
                    height: 140,
                    position: {
                        x: -30,
                        y: 70,
                        z: 600
                    },
                    style: {
                        type:1,
                        opacity: 0.1,
                        up: {
                            color: 0x51443e,
                        },
                        left: {
                            color: 0x51443e,
                        },
                        fore: {
                            color: 0x51443e,
                            image: "../../res/door_left.png",
                            ifRepeat:0
                        },
                        behind: {
                            color: 0x51443e,
                            image: "../../res/door_right.png",
                            ifRepeat:0
                        },
                        down: {
                            color: 0x51443e,

                        },
                        right: {
                            color: 0x51443e,

                        }
                    },
                },
                //右边门
                {
                    show: true,
                    name: 'doorRight',
                    uuid: "",
                    objectType: 'door',
                    length: 60,
                    width: 5,
                    height: 140,
                    position: {
                        x: 30,
                        y: 70,
                        z: 600
                    },
                    style: {
                        type:1,
                        opacity: 0.1,
                        up: {
                            color: 0x51443e,

                        },
                        down: {
                            color: 0x51443e,

                        },
                        fore: {
                            color: 0x51443e,
                            image: "../../res/door_right.png",
                            ifRepeat:0
                        },
                        behind: {
                            color: 0x51443e,
                            image: "../../res/door_left.png",
                            ifRepeat:0
                        },
                        left: {
                            color: 0x51443e,
                        },
                        right: {
                            color: 0x51443e,


                        }
                    },
                },


            ]
        },
        //左面墙
        {
            objName: "wallLeft",
            objectType: "wall",
            length:20,
            width:1200,
            height: 160,

            position: {
                x: -1690,
                y: 80,
                z: 0
            },
            style: {
                color: 0x96ABC8,
            },
        },
        //后面墙
        {
            objName: "wallBehind",
            objectType: "wall",
            length:3400,
            width:20,
            height: 160,
            position: {
                x: 0,
                y: 80,
                z: -600
            },
            style: {
                color: 0x96ABC8,
            },
        },
        //右面墙1
        {
            objName: "wallRight",
            objectType: "wall",
            length:20,
            width:1200,
            height: 160,
            position: {
                x: 50,
                y: 80,
                z: 0
            },
            style: {
                color: 0x96ABC8,
            },
        },

        //右面墙2
        {
            objName: "wallRight",
            objectType: "wall",
            length:20,
            width:1200,
            height: 160,
            position: {
                x: 1690,
                y: 80,
                z: 0
            },
            style: {
                color: 0x96ABC8,
            },
        },
        //库区
        {
            objName: "storeArea",
            objectNo:"01001",
            objectType: "StoreArea",
            Length:1400,
            Width:1000,
            Position:{
                X:-800,
                Z:0,
            },
            Title:{
                TextColor:'DF1965',
                Text:'胶片库区',
                FontSize:20,
                Position:{
                    X:-20,
                    Z:550
                }
            }

        }
    ]
}

export const getBuildData=()=>{
  return buildingObjects;
}