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

    var vertices = [ [-1,1,0],[-1,-1,0],[1,-1,0]//v0v1v2
		     ,[-1,1,0],[1,1,0],[1,1,2]//v3v4v5
		     ,[-1,1,0],[1,-1,0],[1,1,0]//v6v7v8
		     ,[1,1,2],[-1,1,2],[-1,1,0]//v9v10v11
		     ,[-1,-1,0],[-1,-1,2],[1,-1,0]//v12v13v14
		     ,[-1,-1,2],[1,-1,0],[1,-1,2]//v15v16v17
		     ,[-1,1,2],[-1,-1,2],[1,-1,2]//v18v19v20
		     ,[-1,1,2],[1,-1,2],[1,1,2]//v21v22v23
		     ,[1,1,0],[1,1,2],[1,-1,0]//v24v25v26
		     ,[1,1,2],[1,-1,2],[1,-1,0]//v27v28v29
		     ,[-1,1,0],[-1,1,2],[-1,-1,0]//v30v31v32
		     ,[-1,1,2],[-1,-1,2],[-1,-1,0]//v33v34v35
]; 


    var faces = [ [0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],
[18,19,20],[21,22,23],[24,25,26],[27,28,29],[30,31,32],[33,34,35] ];//f0-f11
    
    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var id = faces[1];
    var f1 = new THREE.Face3( id[0], id[1], id[2] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    var v8 = new THREE.Vector3().fromArray( vertices[8] );
    var id = faces[2];
    var f2 = new THREE.Face3( id[0], id[1], id[2] );
    var v9 = new THREE.Vector3().fromArray( vertices[9] );
    var v10 = new THREE.Vector3().fromArray( vertices[10] );
    var v11 = new THREE.Vector3().fromArray( vertices[11] );
    var id = faces[3];
    var f3 = new THREE.Face3( id[0], id[1], id[2] );
    var v12 = new THREE.Vector3().fromArray( vertices[12] );
    var v13 = new THREE.Vector3().fromArray( vertices[13] );
    var v14 = new THREE.Vector3().fromArray( vertices[14] );
    var id = faces[4];
    var f4 = new THREE.Face3( id[0], id[1], id[2] );
    var v15 = new THREE.Vector3().fromArray( vertices[15] );
    var v16 = new THREE.Vector3().fromArray( vertices[16] );
    var v17 = new THREE.Vector3().fromArray( vertices[17] );
    var id = faces[5];
    var f5 = new THREE.Face3( id[0], id[1], id[2] );
    var v18 = new THREE.Vector3().fromArray( vertices[18] );
    var v19 = new THREE.Vector3().fromArray( vertices[19] );
    var v20 = new THREE.Vector3().fromArray( vertices[20] );
    var id = faces[6];
    var f6 = new THREE.Face3( id[0], id[1], id[2] );
    var v21 = new THREE.Vector3().fromArray( vertices[21] );
    var v22 = new THREE.Vector3().fromArray( vertices[22] );
    var v23 = new THREE.Vector3().fromArray( vertices[23] );
    var id = faces[7];
    var f7 = new THREE.Face3( id[0], id[1], id[2] );
    var v24 = new THREE.Vector3().fromArray( vertices[24] );
    var v25 = new THREE.Vector3().fromArray( vertices[25] );
    var v26 = new THREE.Vector3().fromArray( vertices[26] );
    var id = faces[8];
    var f8 = new THREE.Face3( id[0], id[1], id[2] );
    var v27 = new THREE.Vector3().fromArray( vertices[27] );
    var v28 = new THREE.Vector3().fromArray( vertices[28] );
    var v29 = new THREE.Vector3().fromArray( vertices[29] );
    var id = faces[9];
    var f9 = new THREE.Face3( id[0], id[1], id[2] );
    var v30 = new THREE.Vector3().fromArray( vertices[30] );
    var v31 = new THREE.Vector3().fromArray( vertices[31] );
    var v32 = new THREE.Vector3().fromArray( vertices[32] );
    var id = faces[10];
    var f10 = new THREE.Face3( id[0], id[1], id[2] );
    var v33 = new THREE.Vector3().fromArray( vertices[33] );
    var v34 = new THREE.Vector3().fromArray( vertices[34] );
    var v35 = new THREE.Vector3().fromArray( vertices[35] );
    var id = faces[11];
    var f11 = new THREE.Face3( id[0], id[1], id[2] );



    var geometry = new THREE.Geometry();

    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.vertices.push( v8 );
    geometry.vertices.push( v9 );
    geometry.vertices.push( v10 );
    geometry.vertices.push( v11 );
    geometry.vertices.push( v12 );
    geometry.vertices.push( v13 );
    geometry.vertices.push( v14 );
    geometry.vertices.push( v15 );
    geometry.vertices.push( v16 );
    geometry.vertices.push( v17 );
    geometry.vertices.push( v18 );
    geometry.vertices.push( v19 );
    geometry.vertices.push( v20 );
    geometry.vertices.push( v21 );
    geometry.vertices.push( v22 );
    geometry.vertices.push( v23 );
    geometry.vertices.push( v24 );
    geometry.vertices.push( v25 );
    geometry.vertices.push( v26 );
    geometry.vertices.push( v27 );
    geometry.vertices.push( v28 );
    geometry.vertices.push( v29 );
    geometry.vertices.push( v30 );
    geometry.vertices.push( v31 );
    geometry.vertices.push( v32 );
    geometry.vertices.push( v33 );
    geometry.vertices.push( v34 );
    geometry.vertices.push( v35 );


    geometry.faces.push( f0 );
    geometry.faces.push( f1 );
    geometry.faces.push( f2 );
    geometry.faces.push( f3 );
    geometry.faces.push( f4 );    
    geometry.faces.push( f5 );
    geometry.faces.push( f6 );
    geometry.faces.push( f7 );
    geometry.faces.push( f8 );
    geometry.faces.push( f9 );   
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );

    geometry.computeFaceNormals();

    var material = new THREE.MeshPhongMaterial();
   material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color(1,0,0);

    material.side = THREE.DoubleSide;
  
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0,1,1);
    scene.add(light);



    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

}
