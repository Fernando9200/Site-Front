import React from 'react'
import useSanity from '../hooks/useSanity'
import { useState } from 'react'

export default function Gaveta({keyword}) {
    const data = useSanity(keyword)
    const result = data && data.result

    return (
        <div className="row gaveta">
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target={"#" + keyword} aria-expanded="false" aria-controls={keyword}>
                {keyword}
            </button>
            <div className="collapse" id={keyword}>
                <div className="card card-body">
                    <ul>
                        {result && result.map(res => {
                            return (
                                <li key={res._id}>
                                    <h2>{res.title}</h2>
                                    {res.body && res.body.map(body => {
                                        return (
                                            <div key={body._key}>
                                                {body.children && body.children.map(child => {
                                                    return (
                                                        <div key={child._key}>{child.text}</div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
