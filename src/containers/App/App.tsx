import React from 'react';
import './App.css';
import { Button, ButtonType, ButtonSize } from 'components';

export function App() {
  return (
    <div className="App"
      style={{
        color:'white',
        margin:'0 30px'
      }}
    >
      <h1>NightTab v3</h1>

      <h6>yes, this page is very ugly. I'm aware :D</h6>

      <h2>THE PLAN</h2>

      <p>
        To begin rebuilding nightTab, I'm going to start with some of the UI kit. Taking as much as I can from the style-guide
        and nighttab extension srcs. This will also help me to learn how the inner workings of nightTab currently work,
        allowing me to possibly re-use more or take inspiration from the work done previously by Kombie.
      </p>

      <p>
        Once I have some essential components, I'm going to start working on the theme, layout and state of the app.
        Unsure if I'll use contexts or redux. We'll see.
      </p>

      <p>
        The goal with this UI-kit is to achieve something like this: 
        <a href="https://nighttab-styleguide.vercel.app/">NightTab V2 style-guide</a>
        <br/>
        Eventually once this UI-kit is more fleshed out, it will be moved to its own repository,
        powered by <a href="https://storybook.js.org/">storybookjs</a>
      </p>

      <br/><br/><br/>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gridGap: 'calc(var(--layout-spacer) / 2)',
        }}
      >
        <aside>
          <div style={{
            display:'flex'
          }}>
            <Button>Disable</Button>
            <Button>Enable</Button>
            <Button>Dark</Button>
            <Button>Light</Button>
          </div>

          Theme Colour
          <div style={{background:'gray',height:'35px', width:'300px'}}/>

          Accent Colour
          <div style={{background:'gray',height:'35px', width:'300px'}}/>

          Radius <br/>
          <input type="range" name="" id=""/>

        </aside>
        <div>
          <section>
            {/* icons */}
            icons go here
          </section>
          <section>
            {/* Buttons */}
            <Button>Hello</Button>
            <Button type={ButtonType.line}>Hello</Button>
            <Button type={ButtonType.ring}>Hello</Button>
            <br/><br/>
            <Button size={ButtonSize.small}>Hello</Button>
            <Button size={ButtonSize.medium}>Hello</Button>
            <Button size={ButtonSize.large}>Hello</Button>
          </section>
          <section>
            {/* checkbox button */}
          </section>
          <section>
            {/* radio button */}
          </section>
          <section>
            {/* input color button */}
          </section>
          <section>
            {/* checkbox */}
          </section>
          <section>
            {/* radio button */}
          </section>
          <section>
            {/* 3x3 matrix radio */}
          </section>
          <section>
            {/* 1x3 matrix radio */}
          </section>
          <section>
            {/* input text */}
          </section>
          <section>
            {/* textarea */}
          </section>
          <section>
            {/* input range */}
          </section>
          <section>
            {/* input colour */}
          </section>
          <section>
            {/* select */}
          </section>
          <section>
            {/* form group */}
          </section>
          <section>
            {/* form feedback */}
          </section>
        </div>
      </main>


    </div>
  );
}
