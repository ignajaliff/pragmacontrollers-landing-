'use client';

import { useState, type FormEvent } from 'react';
import { contact } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Contact() {
  const [sent, setSent] = useState(false);

  // Formulario DEMO: valida nombre+email y muestra el mensaje de éxito.
  // TODO: conectar a un envío real (API route / Server Action / Resend, Formspree...).
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    if (!nombre || !email) {
      form.reportValidity();
      return;
    }
    setSent(true);
  };

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <span className="eyebrow on-dark">{contact.eyebrow}</span>
            <h2>{contact.title}</h2>
            <p className="lead">{contact.lead}</p>
            <div className="contact-info">
              {contact.info.map((item) => (
                <div className="cinfo" key={item.label}>
                  <Icon name={item.icon} />
                  <div>
                    <div className="l">{item.label}</div>
                    <div className="v">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal d2">
            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="nombre@empresa.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="empresa">Empresa</label>
                <input id="empresa" name="empresa" type="text" placeholder="Razón social" />
              </div>
              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Contanos brevemente sobre tu operación y tu nómina de contratistas."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {sent ? contact.form.sentLabel : (
                  <>
                    {contact.form.submitLabel} <span className="arrow">→</span>
                  </>
                )}
              </button>
              <p className="form-note">{contact.form.note}</p>
              <div className={`form-ok${sent ? ' show' : ''}`}>{contact.form.success}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
