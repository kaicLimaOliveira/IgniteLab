import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        }).catch((e) => console.log(e))

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] bg-react bg-center bg-[length:1033px_869px] z-20 sm:bg-[length:533px_469px] bg-no-repeat flex items-center justify-between mt-20 mx-auto sm:block">
                <div className="sm:max-w-[640px] sm:text-center">
                    <div className="sm:inline-block">
                        <Logo />
                    </div>
                    <h1 className="mt-8 text-[2.5rem] leading-tight sm:mx-6 sm:text-[2rem]">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed sm:mx-5 sm:my-7">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 sm:p-4 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form action="" className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            className="bg-gray-900 rounded px-5 h-14"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />

                        <input
                            type="email"
                            className="bg-gray-900 rounded px-5 h-14"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            onClick={handleSubscribe}
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code.png" className="my-10" alt="" />
        </div>
    )
}