/**
 * 立方体类
 * 我们生活中很多的物体都可以归结为立方体类，比如墙体，地板，窗户等都可看成是立方体类
 * @param option
 * @constructor
 */
import * as THREE from "three";
import { reactive } from 'vue';
import { createMaterial } from "../utils/CommonFunction.js"


export default function(option) {
    let cubeOption = reactive({
        length: option.length || 1,
        width: option.width || 1,
        height: option.height || 1,
        Name: option.objName,
        positionX: option.position.x || 0,
        positionY: option.position.y || 0,
        positionZ: option.position.z || 0,
        style: option.style || {color: 0xFF0000},
        stypeType: option.style?.type || 0,
      })


    let curmaterial = createMaterial(cubeOption.width, cubeOption.height, cubeOption.style);
    //如果六个面需要单独处理材质的话

    if (cubeOption.stypeType == 1) {
        curmaterial = [];
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.up));
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.down));
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.right));
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.left));
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.fore));
        curmaterial.push(createMaterial(cubeOption.width, cubeOption.height, cubeOption.style.behind));
    }
    let cubeGeometry = new THREE.BoxGeometry(cubeOption.length, cubeOption.height, cubeOption.width);

    let cube = new THREE.Mesh(cubeGeometry, curmaterial);
    cube.name = cubeOption.Name;
    cube.position.x = cubeOption.positionX;
    cube.position.y = cubeOption.positionY;
    cube.position.z = cubeOption.positionZ;
    return cube;
}
