function main()
{
    //giometry : 幾何学　形にまつわるデータ　ex)辺、点、色
    //volume : スカラー量
    //isosurface : 等値面
    //var volume = new KVS.SingleCubeData();
    //var volume = new KVS.CreateHydrogenData( 64, 64, 64 );
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    var mesh;
    
    var scene = new THREE.Scene();
    var fov = 45;
    var aspect = window.innerWidth * 0.8 / window.innerHeight * 0.1;
    var near = 2;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 30 );
    scene.add( camera );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth * 0.8, window.innerHeight * 0.1 );

//

    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }
    var lut = new THREE.Lut( 'rainbow', cmap.length );
    lut.addColorMap( 'mycolormap', cmap );
    lut.changeColorMap( 'mycolormap' );
    colormap = lut.setLegendOn( {
                               'layout':'horizontal',
                               'position': { 'x': 0, 'y': 0, 'z': 0.5 },
                               'dimensions': { 'width': 10, 'height': 1.2 }
                               } ) ;
    scene.add(colormap);
    renderer.render( scene, camera );
    
    screen.init(volume, {
                width: window.innerWidth * 0.8,    //全体の80パーセントの横
                height: window.innerHeight * 0.9,         // 全体の縦
                targetDom: document.getElementById('display'),　//id = display　を変更する。
                enableAutoResize: false
                });
    var now_implement = 0;// 0 : 元の状態　1 : phone shading 2: gouraud 3: slice 
    setup();
    screen.loop();
    
    function setup()
    {
        //________________________________________________________________________
        //初期設定
        var color = new KVS.Vec3( 0, 0, 0 );　 //黒
        var box = new KVS.BoundingBox();　// ロブスターを囲む箱を初期化
        box.setColor( color );     //箱を黒に設定
        box.setWidth( 2 );      //箱の線の太さを設定
        
        var smin = volume.min_value;    // 0
        var smax = volume.max_value;    //255
        var isovalue = parseInt(KVS.Mix( smin, smax, 0.5 )); //isovalue = (smin + smax )/2 = 255/2 = 127.5
        var x = 0;
        var y = 0;
        var z = 100;
        var pre_direction = [x,y,z];
        var differ_100 = 50;
        var differ = differ_100/100;
        var isosurface = new KVS.Isosurface();
        isosurface.setIsovalue( isovalue );
        var cmap = [];
        var nowcolor;
        for ( var i = 0; i < 256; i++ )
        {
            var S = i / 255.0; // [0,1]
            var R = Math.max( Math.cos( ( S - 1 ) * Math.PI ), 0.0 );
            var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
            var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
            var color = new THREE.Color( R, G, B );
            cmap.push( [ S, '0x' + color.getHexString() ] );
        }
        display_color_data(differ);
        nowcolor = cmap[parseInt(isovalue)][1];
        nowcolor = nowcolor.slice(2);
        nowcolor = "#"+nowcolor;
        document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
        document.getElementById('change-isovalue-button').style.color = nowcolor;
        document.getElementById('x_label').innerHTML = "x: " + x;
        document.getElementById('y_label').innerHTML = "y: " + y;
        document.getElementById('z_label').innerHTML = "z: " + z;
        var line = KVS.ToTHREELine( box.exec( volume ) );
        mesh = KVS.ToTHREEMesh( isosurface.exec( volume ) );
        screen.scene.add( line );//箱の枠
        screen.scene.add( mesh );//ロブスター
