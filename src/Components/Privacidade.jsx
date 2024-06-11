import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border-x border-slate-200"> 
        <h1 className="text-2xl font-bold mb-4">Política de Privacidade - WebServices</h1>
        <p className="mb-4">Data de Vigência: 11 de junho de 2024</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introdução</h2>
          <p className="mb-4">
            Bem-vindo ao WebServices! A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita o nosso site{" "}
            <a href="https://www.webservices.com" className="text-blue-500 underline">www.webservices.com</a> (o "Site"). Ao acessar ou usar o Site, você concorda com os termos desta Política de Privacidade.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Coleta de Informações</h2>
          <h3 className="text-lg font-semibold mb-2">Informações que Você nos Fornece</h3>
          <p className="mb-4">Coletamos informações que você nos fornece diretamente, tais como:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Dados de Cadastro:</strong> Quando você cria uma conta, registra-se para receber nossos serviços ou preenche formulários no nosso Site, coletamos informações pessoais, como seu nome, endereço de e-mail, número de telefone e outras informações necessárias para a prestação dos serviços.</li>
            <li className="mb-2"><strong>Comunicações:</strong> Se você nos enviar e-mails ou outras comunicações, poderemos manter um registro dessas correspondências.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Informações que Coletamos Automaticamente</h3>
          <p className="mb-4">Quando você acessa o Site, coletamos automaticamente certas informações sobre seu dispositivo e seu uso do Site, incluindo:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Dados de Uso:</strong> Coletamos informações sobre suas interações com o Site, incluindo as páginas que você visita, o tempo gasto em cada página, cliques e ações realizadas no Site.</li>
            <li className="mb-2"><strong>Dados de Dispositivo:</strong> Coletamos informações sobre o dispositivo que você usa para acessar o Site, incluindo o tipo de dispositivo, sistema operacional, navegador, endereço IP e identificadores de dispositivo.</li>
            <li className="mb-2"><strong>Cookies e Tecnologias Semelhantes:</strong> Utilizamos cookies e tecnologias semelhantes para coletar informações sobre seu uso do Site e para lembrar suas preferências. Para mais informações sobre o uso de cookies, consulte nossa <a href="#" className="text-blue-500 underline">Política de Cookies</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Uso das Informações</h2>
          <p className="mb-4">Utilizamos as informações coletadas para:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Fornecer e Melhorar Nossos Serviços:</strong> Utilizamos suas informações para fornecer, manter, melhorar e personalizar nossos serviços, incluindo a análise de uso e tendências para aprimorar a funcionalidade do Site.</li>
            <li className="mb-2"><strong>Comunicações:</strong> Utilizamos suas informações para enviar comunicações importantes, como atualizações de serviços, notificações de segurança e suporte ao cliente.</li>
            <li className="mb-2"><strong>Marketing e Promoções:</strong> Podemos usar suas informações para enviar materiais promocionais e ofertas que acreditamos ser de seu interesse, conforme permitido pela lei aplicável. Você pode optar por não receber essas comunicações a qualquer momento.</li>
            <li className="mb-2"><strong>Segurança e Conformidade:</strong> Utilizamos suas informações para proteger a segurança do Site, detectar e prevenir fraudes e cumprir nossas obrigações legais.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Compartilhamento de Informações</h2>
          <p className="mb-4">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta Política de Privacidade ou com o seu consentimento.</p>
          <p className="mb-4">Podemos compartilhar suas informações:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Com Prestadores de Serviços:</strong> Compartilhamos suas informações com prestadores de serviços que nos auxiliam na operação do Site e na prestação de nossos serviços, como serviços de hospedagem, análise de dados, processamento de pagamentos e comunicações.</li>
            <li className="mb-2"><strong>Para Cumprimento Legal:</strong> Podemos divulgar suas informações para cumprir a lei, regulamentos aplicáveis, processos legais ou solicitações governamentais, ou para proteger nossos direitos, propriedade ou segurança.</li>
            <li className="mb-2"><strong>Transferências de Negócios:</strong> Em caso de fusão, aquisição, venda de ativos ou outra transação comercial, suas informações podem ser transferidas como parte dessa transação.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Segurança das Informações</h2>
          <p className="mb-4">Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, uso, alteração e destruição. No entanto, nenhum sistema de segurança é infalível e não podemos garantir a segurança absoluta de suas informações.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Seus Direitos e Escolhas</h2>
          <p className="mb-4">Você tem o direito de acessar, corrigir, atualizar e excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos dados de contato fornecidos abaixo.</p>
          <p className="mb-4">Você também pode optar por não receber comunicações promocionais seguindo as instruções de cancelamento de inscrição incluídas em cada comunicação.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Alterações a Esta Política de Privacidade</h2>
          <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Publicaremos a política revisada no Site e indicaremos a data da última atualização.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contato</h2>
          <p className="mb-4">Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco através do e-mail: <a href="mailto:privacidade@webservices.com" className="text-blue-500 underline">privacidade@webservices.com</a>.</p>
        </section>

        <p className="mt-8">Agradecemos por confiar no WebServices para suas necessidades de serviços na web. Sua privacidade é nossa prioridade.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
