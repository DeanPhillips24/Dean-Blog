---
comments: True
layout: post
title: Lopez Sprite Animation for OOP
description: Sprite Animation
type: hacks
courses: {'csse': {'week': 14}}
---

<body>
    <div>
        <canvas id="spriteContainer"> <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
            <img id="dogSprite" src="{{ site.baseurl }}/images/game/lopezspritesheet3.png">
        </canvas>
        <div id="controls"> <!--basic radio buttons which can be used to check whether each individual animaiton works -->
            <input type="radio" name="animation" id="DownWalk" checked>
            <label for="DownWalk">Down Walk</label><br>
            <input type="radio" name="animation" id="RightWalk">
            <label for="RightWalk">Right Walk</label><br>
            <input type="radio" name="animation" id="LeftWalk">
            <label for="LeftWalk">Left Walk</label><br>
            <input type="radio" name="animation" id="UpWalk">
            <label for="UpWalk">Up Walk</label><br>
        </div>
    </div>
</body>

%%html
<script>
    // start on page load
    window.addEventListener('load', function () {
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 46;  // matches sprite pixel width
        const SPRITE_HEIGHT = 52.5; // matches sprite pixel height
        const FRAME_LIMIT = 4;  // matches number of frames per sprite row, this code assume each row is same
        const SCALE_FACTOR = 20;  // control size of sprite on canvas
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class Dog {
            constructor() {
                this.image = document.getElementById("dogSprite");
                this.image.src = "{{ site.baseurl}}/images/gameimages/lopezspritesheet3.png";
                this.image.onload = () => {
                    this.x = 0;
                    this.y = 0;
                    this.minFrame = 0;
                    this.maxFrame = FRAME_LIMIT;
                    this.frameX = 0;
                    this.frameY = 0;
                    animate();
                };
            }

            // draw dog object
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * SPRITE_WIDTH,
                    this.frameY * SPRITE_HEIGHT,
                    SPRITE_WIDTH,
                    SPRITE_HEIGHT,
                    this.x,
                    this.y,
                    canvas.width,
                    canvas.height
                );
            }

            // update frameX of object
            update() {
                if (this.frameX < this.maxFrame) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
            }
        }

        // dog object
        const dog = new Dog();

        // update frameY of dog object, action from idle, bark, walk radio control
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                case 'DownWalk':
                dog.frameY = 0;
                break;
                case 'RightWalk':
                dog.frameY = 2;
                break;
                case 'LeftWalk':
                dog.frameY = 1;
                break;
                case 'UpWalk':
                dog.frameY = 3;
                break;
                default:
                break;
                }
            }
        });
    });
</script>