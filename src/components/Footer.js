import React from 'react'

export default function Footer() {
    return (
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button onClick={() => window.location.href = 'https://www.workana.com/freelancer/0e4ed7aa5719ac3e8e4835b4dd4a9c92'} class="btn btn-dark btn-lg" type="button">Workana</button>
        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/fernando-carretto/'} class="btn btn-dark btn-lg" type="button">LinkedIn</button>
        <button onClick={() => window.location.href = 'https://github.com/Fernando9200?tab=repositories'} class="btn btn-dark btn-lg" type="button">GitHub</button>
        </div>
    )
}