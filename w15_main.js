function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    //cubeを作成。最初に表示。
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh( geometry, material );
    cube.visible = true;
    scene.add( cube );
    
    //sphereを作成。最初は非表示。
    var geometry1 = new THREE.SphereGeometry(1, 10, 10 );
    var material1 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var sphere = new THREE.Mesh( geometry1, material1 );
    scene.add( sphere );
    sphere.visible = false;
    
    
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0,1,1);
    scene.add(light);
    
    cubeloop();
    sphereloop();
    
    
    //sphereのボタンが押された時
    document.getElementById('Spherebutton')
    .addEventListener('click', function() {
                      
                      cube.visible = false;
                      sphere.visible = true;

                      });

    //cubeのボタンが押された時
    document.getElementById('Cubebutton')
    .addEventListener('click', function() {
                      
                      cube.visible = true;
                      sphere.visible = false;
                      
                      });

    
    function sphereloop()
    {
        requestAnimationFrame( sphereloop );
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    function cubeloop()
    {
        requestAnimationFrame( cubeloop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }


}
