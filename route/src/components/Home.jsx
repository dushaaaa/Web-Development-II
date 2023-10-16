import React from 'react'

function Home() {
    return (
    <div>
        <div>
        <h1>Home Screen</h1>
        <a href='http://localhost:5175/'>
        <button>
        <span>Home</span>
        </button>
        </a>
        <a href='http://localhost:5175/profile'>
        <button>
        <span>Profile</span>
        </button>
        </a>
        <a href='http://localhost:5175/settings'>
        <button>
        <span>Settings</span>
        </button>
        </a>
        </div>
    </div>
    )
}
export default Home