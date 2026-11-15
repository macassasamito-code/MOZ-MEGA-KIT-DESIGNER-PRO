import React from "react";
import { PRODUCT_NAME } from "../config/product";
import { LegalModalType } from "./LegalModal";

interface FooterProps {
  onOpenLegalModal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="bg-[#050816] text-slate-300 border-t border-white/10 pt-12 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <a
            href="#inicio"
            className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white hover:text-[#FACC15] transition-colors"
          >
            {PRODUCT_NAME}
          </a>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            <a
              href="#inicio"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#recursos"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              O que está incluído
            </a>
            <a
              href="#beneficios"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Benefícios
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Perguntas frequentes
            </a>
            <button
              type="button"
              onClick={() => onOpenLegalModal("terms")}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Termos e condições
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal("privacy")}
              className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Política de privacidade
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 {PRODUCT_NAME}. Todos os direitos reservados.</p>
          <p>Produto digital · Comercialização oficial através da Tutora</p>
        </div>
      </div>
    </footer>
  );
};
