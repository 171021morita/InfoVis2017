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

//    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var vertices = [ [-1,1,0],[-1,-1,0],[1,-1,0]//v0v1v2
		     , [-1,1,0],[1,1,0],[1,-1,2] ];//v0v1v2

    var faces = [ [0,1,2],[3,4,5] ];//f0
    
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

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.faces.push( f0 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.faces.push( f1 );

    geometry.computeFaceNormals();

    //var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
     var material = new THREE.MeshLambertMaterial({color: 0xffffff});
 /*  var material = new THREE.MeshPhongMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color(1,0,0);

    material.vertexColors = THREE.VertexColors;
    geometry.face[0].vertexColors.push(new TRHEE.Color(1,0,0));
    geometry.face[0].vertexColors.push(new TRHEE.Color(0,1,0));
    geometry.face[0].vertexColors.push(new TRHEE.Color(0,0,1));
 */
    material.side = THREE.DoubleSide;
    
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.DirectionalLight(0xffff0);
    light.position.set(0,0,1);
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
