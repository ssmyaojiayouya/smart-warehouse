<template>
  <div>你好</div>
  <div id="canvas-show"></div>
</template>

<script>
  import * as THREE from "three";
  import { getBuildData } from "../../buildingData/BuildingData.js"
  import useCube from "../../buildingModel/useCube"
  import useWall from "../../buildingModel/useWall"
  import { onMounted } from 'vue';

  let scene = null;//场景
  let camera = null;//相机
  let renderer = null;//渲染器

  export default {
    name: 'threeD',
    setup() {
      /** 初始化场景 **/
      function initScene() {
        scene = new THREE.Scene();
      }

      /** 初始化相机，因为我们做的工厂模型，尽可能的接近于真实情景，采用透视相机 **/
      function initCamera() {
        //声明一个透视相机，
        // 视角：60，
        // 纵横比aspect:全屏，使用的是浏览器的宽度/高度
        //近平面near：0.1
        //远平面视角far:10000
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
        /*
          设置相机位置，注意threejs中的坐标系采用的是右手坐标系
        */
        camera.position.x = 0;
        camera.position.y = 1600;
        camera.position.z = 1000;
        //相机的朝向
        camera.lookAt(0, 0, 0);
        //将相机放到场景中
        scene.add(camera);
      }

      /** 声名渲染器 **/
      function initRenderer() {
        renderer = new THREE.WebGLRenderer(
            {
                antialias: true,//是否开启反锯齿，设置为true开启反锯齿。
                // alpha: true,//是否可以设置背景色透明。
                // logarithmicDepthBuffer: true//模型的重叠部位便不停的闪烁起来。这便是Z-Fighting问题，为解决这个问题，我们可以采用该种方法
            }
        );
        renderer.alpha = true;
        renderer.logarithmicDepthBuffer = true;
        renderer.setSize(window.innerWidth, window.innerHeight);//渲染器的尺寸与windows的尺寸相同
        renderer.setClearColor(0x39609B);//设置渲染的背景颜色
        renderer.setPixelRatio(window.devicePixelRatio);//设置渲染器的分辨率与浏览器电脑本身的分辨率相同
        //将渲染器添加到我们的网页中，可以将渲染的内容在网页中显示出来
        let container = document.getElementById("canvas-show");
        console.log(container)
        container.appendChild(renderer.domElement);
      }

      /** 初始化灯光 */
      function initLight(){
        //首先添加个环境光
        let ambient = new THREE.AmbientLight(0xffffff, 1); //AmbientLight,影响整个场景的光源
        ambient.position.set(0, 0, 0);
        scene.add(ambient);
        //添加平行光,平行光类似于太阳光
        let directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);//模拟远处类似太阳的光源
        directionalLight.position.set(0, 200, 0);
        scene.add(directionalLight);
        //设置点光源
        let pointLight1=new THREE.PointLight(0xffffff, 0.3);
        pointLight1.position.set(-500,200,0);
        let pointLight2=new THREE.PointLight(0xffffff, 0.3);
        pointLight2.position.set(500,200,0);
        scene.add(pointLight1);
        scene.add(pointLight2);
      }

      /** 定时重复刷新 */
      function animate() {
        requestAnimationFrame(animate.bind(this));
        renderer.render(scene, camera);
      }

      function initBuilding() {
        let buildingData = getBuildData();
        let buildingObjects = buildingData.objects;
        for (let i = 0; i < buildingObjects.length; i++) {
          let objectOption = buildingObjects[i];
          switch (objectOption.objectType) {
            case "cube":
              let cube = useCube(objectOption);
              scene.add(cube);
              break;
            case "wall":
              let wall = useWall(objectOption);
              scene.add(wall);
              break;
            }
        }
      }

      function threeStart(){
        //初始化渲染器
        initRenderer();
        //初始化场景
        initScene();
        //初始化相机
        initCamera();
        //初始化灯光
        initLight();
        //循环渲染
        animate();
        initBuilding();
      }

      onMounted( () => {
        threeStart();
      })
      
      return {

      }
    }
  }


</script>

<style lang="less" scoped>

</style>
