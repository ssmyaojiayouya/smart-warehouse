/**
 * 墙体对象
 * @param option
 * @returns {Group|*}
 * @constructor
 */
import * as THREE from "three";
import { reactive } from 'vue';

import useCube from "./useCube.js"
import { hasObj } from "../utils/CommonFunction.js"
import { ObjectCombine } from "../utils/ObjectCombine.js"

export default function(option) {
    let group = new THREE.Group();
    let wallOption= reactive({
        objName: option.objName,
        objType: 'cube',
        length: option.length,
        width: option.width,
        height: option.height,
        position: {
            x: option.position.x,
            y: option.position.y,
            z: option.position.z
        },
        style: option.style,
    });
    let wall = useCube(wallOption);

    if(!hasObj(option.childrens))
    {
        wall.type="wall";
        return wall;
    }
    for(let i=0;i<option.childrens.length;i++)
    {
        let optionChildren=option.childrens[i];
        //如果是墙洞子，比如窗户洞，门洞等
        if(optionChildren.objectType=="wallHole")
        {
            let hole = useCube(optionChildren);
            wall = ObjectCombine(wall, hole, 2);
            optionChildren.name= option.objName;
        }
        else if(optionChildren.objectType=="doorFrame")
        {
            let doorFrame = useCube(optionChildren);
            doorFrame.type="doorFrame";
            group.add(doorFrame);
        }
        else if(optionChildren.objectType=="door")
        {
            let door = useCube(optionChildren);
            door.type="door";
            group.add(door);
        }
        else if(optionChildren.objectType=="windowFrame")
        {
            let windowFrame = useCube(optionChildren);
            windowFrame.type="windowFrame";
            group.add(windowFrame);
        }
    }
    wall.type="wall";
    group.add(wall);
    return group;
}