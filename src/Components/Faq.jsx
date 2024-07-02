import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "./FAQ.css";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      number: "01",
      question: "Existe alguma cobrança para criar uma conta nos WebServices?",
      answer:
        "Não, criar uma conta nos WebServices é totalmente gratuito. Você pode começar a utilizar nossos serviços sem nenhum custo inicial.",
    },
    {
      number: "02",
      question: "Vendo um produto físico, posso usar os WebServices?",
      answer:
        "Sim, os WebServices suportam a venda de produtos físicos. Você pode configurar sua loja para comercializar produtos físicos com facilidade.",
    },
    {
      number: "03",
      question: "Para quem são os WebServices?",
      answer:
        "Os WebServices são ideais para empreendedores e pequenas empresas que desejam iniciar ou expandir suas vendas online de forma eficiente e acessível.",
    },
    {
      number: "04",
      question: "Quantos produtos posso vender pelos WebServices?",
      answer:
        "Você pode vender quantos produtos desejar pelos WebServices. Não há limite no número de produtos que você pode listar em sua loja.",
    },
    {
      number: "05",
      question: "Qual a taxa para vendas realizadas pelos WebServices?",
      answer:
        "A taxa para vendas realizadas pelos WebServices varia de acordo com o plano escolhido. Consulte nossos planos para mais detalhes sobre as taxas aplicáveis.",
    },
    {
      number: "07",
      question: "Qual a taxa para vendas realizadas pelos WebServices?",
      answer:
        "A taxa para vendas realizadas pelos WebServices varia de acordo com o plano escolhido. Consulte nossos planos para mais detalhes sobre as taxas aplicáveis.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg p-6">
              <div
                className="flex justify-between items-start cursor-pointer mb-4"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-bold  mb-2">
                    {question.number}
                  </span>
                  <h3 className="text-lg ">{question.question}</h3>
                </div>
                <div className="ml-auto">
                  {activeQuestion === index ? (
                    <FaChevronUp className="text-gray-600 transition-transform duration-300 transform" />
                  ) : (
                    <FaChevronDown className="text-gray-600 transition-transform duration-300 transform" />
                  )}
                </div>
              </div>
              <CSSTransition
                in={activeQuestion === index}
                timeout={300}
                classNames="faq-answer"
                unmountOnExit
              >
                <div>
                  <p className="text-gray-600">{question.answer}</p>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to= "/Em-Breve"
            className="second-btn  flex items-center gap-2"
          >
            Central De Ajuda <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
