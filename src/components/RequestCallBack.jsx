import React from 'react'
import '../style/components/_requestCallBack.scss'

export default function RequestCallBack() {
  return (
    <main className="mainOfRequestCallBack">
      <h1 className="h1Request">Request a call back</h1>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Business Planning" />
        <input type="tel" placeholder="Phone Number" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
