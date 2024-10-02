import React from 'react'

// in case you want something else on the first page
export default function HomePage(): React.JSX.Element {
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Welcome to the Recipe Manager</h1>
      <p className="text-lg text-center">Manage your recipes with ease.</p>
    </div>
  )
}
