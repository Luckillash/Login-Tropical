import { useEffect } from "react"

import Access from "./Access"

import Register from "./Register"

import ForgotPassword from "./ForgotPassword"

import anime from "animejs"

function App() {

	useEffect(() => {

		const text = document.getElementById("text")

		if (text) {

			let shadow = ''

			for (let i = 0; i < 30; i++) {

				shadow += (shadow ? "," : "") + -i * 1 + 'px ' + i * 1 + 'px 0 #d9d9d9'
				
			}

			text.style.textShadow = shadow

		}

	}, [])

	function moveEverything (section: "Access" | "Register" | "ForgotPassword") {

		let translation

		switch (section) {

			case "Access":

				translation = "0%"
			
				break

			case "Register":

				translation = "-100%"
			
				break

			case "ForgotPassword":

				translation = "100%"
			
				break

		}

		anime({

			targets: "#login",

			translateY: translation,

			easing: "easeInOutQuart"

		})

	}

	return (

		<main className='bg-gradient-to-bl from-blue-500 to-emerald-500 w-full h-screen flex'>

			<section className="w-1/2 flex items-center justify-center relative">

				<h1 
				
					className="text-white font-bold text-[12em] leading-4 tracking-wide rotate-[-28deg] skew-x-[25deg]"

					data-text="Login" 
					
					id="text"
					
				>
					
					Login
					
				</h1>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span>

				<span className="star"></span> 

			</section>

			<section className="w-1/2 bg-white flex items-center justify-center">

				<Register moveEverything={moveEverything} />

				<Access moveEverything={moveEverything} />

				<ForgotPassword moveEverything={moveEverything} />

			</section>

		</main>

	)

}

export default App
