import React from 'react'

function Profile() {
    return (
        <div>
        <h1>Profile Screen</h1>
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
    )
}
export default Profile