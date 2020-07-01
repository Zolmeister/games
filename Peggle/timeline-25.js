/*==========================================================================*
  Filename: timeline-25.js
  Rev: 25
  By: A.R.Collins

  Description: JavaScript animation library. Multiple objects are controlled
  by a master timeline. Each Animation object can have its own path and draw
  methods.
  Latest version:  <www.arc.id.au/JsAnimation.html>
  Kindly give credit to ARC and reference <http://www.arc.id.au/>

  Date   |Description                                                   |By
  --------------------------------------------------------------------------
  03Sep10 First public release combining canvas and DOM animation        ARC
  04Sep10 Allow 'nextState' object reference to be a property so it is
          saved between calls to 'path' functions which can thus access
          previous state values.                                         ARC
          Fix comments remove a couple of unnecessary lines              ARC
  05Sep10 Only save the Animation state after its checked as not null    ARC
  06Dec10 Pass the parms from creation to the moveFn (same as drawFn)    ARC
 *==========================================================================*/

var modes = { PAUSED : 1, STOPPED : 2, PLAYING : 3 }

function Timeline(animationsArray, numFrames, loop)
{
  this.anims = animationsArray;     // anims is an array of animation objects
  for (var i=0; i<this.anims.length; i++)
  {
    if (this.anims[i])        // make sure it hasn't been removed
      this.anims[i].timeline = this;
  }
  if (numFrames > 0)
    this.lastFrame = numFrames - 1;
  else
    this.lastFrame = -1;      // if 0 or negative value entered: go forever
  this.loop = (loop == true)? true: false;    // convert to boolean
  this.timer = null;
  this.tickLen = 50;       // default value 50msec
  this.mode = modes.STOPPED;
  // now move to frame 0
  this.frameCounter = 0;
  this.stepper(0);
}

Timeline.prototype.play = function(startFrame)    // optional startFrame
{
  if (this.mode == modes.PLAYING)
    return;

  var savThis = this;

  if ((startFrame >= 0) && (startFrame < this.lastFrame))
    this.frameCounter = startFrame;
  if (this.mode == modes.STOPPED)   // re-starting after stop
  {
    this.frameCounter = 0;     // stop() resets framecounter
    this.stepper(0);           // so draw it
  }
  else
    this.stepper(1);
  this.mode = modes.PLAYING;
  this.timer = setInterval(function(){savThis.stepper(1)}, savThis.tickLen);
}

Timeline.prototype.step = function()
{
  if (this.mode == modes.PLAYING)
    return;

  if (this.mode == modes.STOPPED)   // re-starting after stop
  {
    this.frameCounter = 0;     //  stop() resets framecounter
    this.stepper(0);           // so draw it
  }
  else
    this.stepper(1);
  this.mode = modes.PAUSED;
}

Timeline.prototype.pause = function()
{
  if (this.timer)
    clearInterval(this.timer);
  this.mode = modes.PAUSED;
}

Timeline.prototype.stop = function()
{
  if (this.timer)
    clearInterval(this.timer);
  this.mode = modes.STOPPED;
}

Timeline.prototype.stepper = function(inc)    // inc = +1, 0
{
  if (inc != 0)
  {
    if ((this.frameCounter < this.lastFrame) || (this.lastFrame <= 0))
      this.frameCounter++;
    else if (this.loop)
      this.frameCounter = 0;
    else
    {
      this.stop();
      return;
    }
  }
  // now draw each animated object for the new frame
  for (var i=0; i<this.anims.length; i++)
  {
    if (this.anims[i])
      this.anims[i].nextFrame(this.frameCounter);
  }
}

Timeline.prototype.setTickInterval = function(tickInt)    // in msec
{
  if (tickInt > 0)
    this.tickLen = tickInt;
}

function Animation(draw, path) // additional arguments are passed to drawFn and pathFn
{
  var args = Array.prototype.slice.call(arguments); // grab array of arguments

  this.timeline = null;  // Initialised by the parent Timeline constructor
  this.drawFn = draw;    // This is the method draws the image it is passed the
                         // state object returned by the pathFn and all other
                         // parameters passed.
  this.pathFn = path;    // pathFn takes frameCounter and returns a state object
                         // representing x, y, z, translations and rotations
  this.state = null;     // store pointer to state vector object, path() should
                         // reuse this object avoid creating new object each step
  this.parms = args.slice(2);   // skip draw and path parameters and save the
                                // rest to pass to drawFn and pathFn
}

Animation.prototype.nextFrame = function(frameCounter)
{
  var nextState = this.pathFn.call(this, frameCounter, this.parms);
  if (nextState == null)  // might be null if this is a static frame
    return;
  this.drawFn(nextState, this.parms); // pass the new state
  this.state = nextState; // save ref to current state vector, pathFn should use it
}
