
class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }
    
    
    // ctx:          canvas context
    drawSlide0(ctx) {
        var lb = new Point(100, 100);
        var rt = new Point(this.canvas.width-100, this.canvas.height-50);
        var red = [255, 0, 0, 255];
        this.drawRectangle(lb,rt, red, ctx);

    }


    // ctx:          canvas context
    drawSlide1(ctx) {
        var center = new Point(this.canvas.width/2, this.canvas.height/2);
        var red = [255,0,0,255]; //For readability 
        this.drawCircle(center, this.canvas.height/2.5, red, ctx);


    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        var color = [255,0,0,255];
        var p0 = new Point(this.canvas.width*.1,this.canvas.height*.1);
        var p1 = new Point(this.canvas.width*.1,this.canvas.height);
        var p2 = new Point(this.canvas.width*.9,this.canvas.height); 
        var p3 = new Point(this.canvas.width*.9,this.canvas.height*.1);

        this.drawBezierCurve(p0,p1,p2,p3,color,ctx);
    }

    // ctx:          canvas context
    drawSlide3(ctx) { 
        var n =this.num_curve_sections; 
        var color = [(255/n*7), n*6,n*7,255];
        //M
        this.drawLine(new Point(105,400), new Point(130,500), color, ctx);
        this.drawLine(new Point(130,500), new Point(155,450), color, ctx);
        this.drawLine(new Point(155,450), new Point(180,500), color, ctx);
        this.drawLine(new Point(180,500), new Point(205,400), color, ctx);

        //a
        this.drawCircle(new Point(255, 423),23,color, ctx);
        this.drawLine(new Point(278,415), new Point(278,400), color, ctx);
        this.drawBezierCurve(new Point(240,460),new Point(265,485),new Point(278,465),new Point(278,415), color, ctx);

        //t
        this.drawLine(new Point(325,400), new Point(325,500), color, ctx);
        this.drawLine(new Point(300,460), new Point(350,465), color, ctx);

        //t
        this.drawLine(new Point(390,400), new Point(390,500), color, ctx);
        this.drawLine(new Point(365,460), new Point(415,465), color, ctx);

        //h
        this.drawLine(new Point(445,400), new Point(445,500), color, ctx);
        this.drawBezierCurve(new Point(445,450),new Point(480,465),new Point(480,465),new Point(480,400), color, ctx);

        //e
        this.drawBezierCurve(new Point(545,450),new Point(505,500),new Point(500,380),new Point(545,400), color, ctx);
        this.drawBezierCurve(new Point(545,450),new Point(565,425),new Point(520,420),new Point(515,438), color, ctx);

        //w
        this.drawLine(new Point(570,470), new Point(585,400), color, ctx);
        this.drawLine(new Point(585,400), new Point(600,435), color, ctx);
        this.drawLine(new Point(600,435), new Point(615,400), color, ctx);
        this.drawLine(new Point(615,400), new Point(630,470), color, ctx);

        //W
        this.drawLine(new Point(70,300), new Point(95,200), color, ctx);
        this.drawLine(new Point(95,200), new Point(120,250), color, ctx);
        this.drawLine(new Point(120,250), new Point(145,200), color, ctx);
        this.drawLine(new Point(145,200), new Point(170,300), color, ctx);

        //e
        this.drawBezierCurve(new Point(215,250),new Point(185,300),new Point(170,180),new Point(215,200), color, ctx);
        this.drawBezierCurve(new Point(215,250),new Point(235,225),new Point(190,220),new Point(185,238), color, ctx);

        //s 
        this.drawBezierCurve(new Point(265,260),new Point(200,265),new Point(310,195),new Point(240,200), color, ctx);

        //t
        this.drawLine(new Point(305,200), new Point(305,300), color, ctx);
        this.drawLine(new Point(280,260), new Point(330,265), color, ctx);

        //e
        this.drawBezierCurve(new Point(365,250),new Point(335,300),new Point(320,180),new Point(365,200), color, ctx);
        this.drawBezierCurve(new Point(365,250),new Point(385,225),new Point(340,220),new Point(335,238), color, ctx);

        //r
        this.drawLine(new Point(390,200), new Point(390,260), color, ctx);
        this.drawBezierCurve(new Point(390,245),new Point(405,265),new Point(410,265),new Point(420,260), color, ctx);

        //h
        this.drawLine(new Point(445,200), new Point(445,300), color, ctx);
        this.drawBezierCurve(new Point(445,250),new Point(480,265),new Point(480,265),new Point(480,200), color, ctx);

        //a
        this.drawCircle(new Point(520, 223),23,color, ctx);
        this.drawLine(new Point(543,215), new Point(543,200), color, ctx);
        this.drawBezierCurve(new Point(505,260),new Point(530,285),new Point(543,265),new Point(543,215), color, ctx);

        //u
        this.drawBezierCurve(new Point(560,260),new Point(560,180),new Point(610,180),new Point(610,260), color, ctx);
        this.drawLine(new Point(610,200), new Point(610,260), color, ctx);
        //s
        this.drawBezierCurve(new Point(655,260),new Point(590,265),new Point(700,195),new Point(630,200), color, ctx);

        //fun squiggles
        this.drawBezierCurve(new Point(70,330),new Point(1500,340),new Point(-700,380),new Point(630,385), [0,100,0,255], ctx);
        this.drawBezierCurve(new Point(70,130),new Point(1500,140),new Point(-700,180),new Point(630,185), [0,100,0,255], ctx);



        if (this.show_points == true) {
            this.drawCirclePrivate(new Point(105,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(130,500), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(155,450), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(180,500), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(205,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(278,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(278,415), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(325,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(300,460), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(325,500), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(350,465), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(390,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(390,500), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(365,460), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(415,465), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(445,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(445,500), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(570,470), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(585,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(600,435), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(615,400), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(630,470), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(70,300), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(95,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(120,250), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(145,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(170,300), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(305,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(305,300), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(280,260), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(330,265), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(445,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(390,260), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(390,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(445,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(445,300), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(543,215), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(543,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(610,200), 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(new Point(610,260), 5, [0,0,0,255], ctx);

        }

    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        var n =this.num_curve_sections; 
        color = [(255/n*7), n*6,n*7,255];
        var right_bottom = new Point(right_top.x, left_bottom.y);
        var left_top = new Point(left_bottom.x, right_top.y);

        this.drawLine(left_bottom, right_bottom, color , ctx);
        this.drawLine(right_bottom, right_top, color, ctx);
        this.drawLine(right_top, left_top, color, ctx);
        this.drawLine(left_top, left_bottom, color, ctx); 

        //Checking if the user would like 
        if (this.show_points == true) {
            this.drawCirclePrivate(left_top, 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(right_bottom, 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(right_top, 5, [0,0,0,255], ctx);
            this.drawCirclePrivate(left_bottom, 5, [0,0,0,255], ctx);

        }
    }
    
    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        var n =this.num_curve_sections; 
        for(var i=0; i<n; i++) {
            color = [(255/n*7), n*6,n*7,255];
            // Each computed Cartesian x,y variable  
            var radian = this.degreesToRadians((360/n)*i);
            // Each computed Cartesian x,y variable  
            var x0 = (center.x + radius * Math.cos(radian));
            var y0 = (center.y + radius * Math.sin(radian));

            radian = this.degreesToRadians((360/n)*(i+1));

            var x1 = (center.x + radius * Math.cos(radian));
            var y1 = (center.y + radius * Math.sin(radian));
            
            
            var p0 = new Point(x0, y0);
            var p1 = new Point(x1, y1);

            if (this.show_points == true) {
                this.drawCirclePrivate(p0, 5, [0,0,0,255], ctx);
            }

            // draw line from calculated old x,y point to calculated new x,y point
            this.drawLine(p0, p1, color, ctx);
            
        }
    }

    degreesToRadians(degrees) {
        return degrees* Math.PI /180;
    }

    //Calling drawCircle to show points threw drawCircle into an infinite recursive call so this takes that away.
    drawCirclePrivate(center, radius, color, ctx) {
        var n =this.num_curve_sections; 
        for(var i=1; i<=n; i++) {
            var radian = this.degreesToRadians((360/n)*i);
            // Each computed Cartesian x,y variable  
            var x0 = (center.x + radius * Math.cos(radian));
            var y0 = (center.y + radius * Math.sin(radian));

            radian = this.degreesToRadians((360/n)*(i+1));

            var x1 = (center.x + radius * Math.cos(radian));
            var y1 = (center.y + radius * Math.sin(radian));
            
            
            var p1 = new Point(x0, y0);
            var p2 = new Point(x1, y1);
            this.drawLine(p1, p2, color, ctx);
            
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        var i = 1/this.num_curve_sections; 
        var n =this.num_curve_sections; 
        color = [(255/n*7), n*6,n*7,255];
        for(var t=i; t<=1+(.5*i); t+=i) {
            var x0 = Math.pow(1-t,3) * pt0.x + 3 * Math.pow(1-t,2) * t * pt1.x + 3 * (1-t) * Math.pow(t,2) * pt2.x + Math.pow(t,3) * pt3.x;
            var y0 = Math.pow(1-t,3) * pt0.y + 3 * Math.pow(1-t,2) * t * pt1.y + 3 * (1-t) * Math.pow(t,2) * pt2.y + Math.pow(t,3) * pt3.y;
            var point1 = new Point(x0,y0);
            
            var x1 = Math.pow(1-(t-i),3) * pt0.x + 3 * Math.pow(1-(t-i),2) * (t-i) * pt1.x + 3 * (1-(t-i)) * Math.pow(t-i,2) * pt2.x + Math.pow(t-i,3) * pt3.x;
            var y1 = Math.pow(1-(t-i),3) * pt0.y + 3 * Math.pow(1-(t-i),2) * (t-i) * pt1.y + 3 * (1-(t-i)) * Math.pow(t-i,2) * pt2.y + Math.pow(t-i,3) * pt3.y;
            var point2 = new Point(x1,y1);

            this.drawLine(point1, point2, color, ctx);

            if (this.show_points == true) {
                this.drawCirclePrivate(point1, 5, [0,0,0,255], ctx);
                this.drawCirclePrivate(point2, 5, [0,0,0,255], ctx);
            }
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
    
}



class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}