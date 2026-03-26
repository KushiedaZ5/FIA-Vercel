import qrcode

print("Generando QR limpio (sin búho) para máxima legibilidad...")

# 1. Configurar QR. Versión baja para bloques bien grandes
qr = qrcode.QRCode(
    version=3,
    error_correction=qrcode.constants.ERROR_CORRECT_M, # M es suficiente si no hay logo
    box_size=25,
    border=1,
)

qr.add_data('https://calculadorafiausmp.com')
qr.make(fit=True)

# 2. Generar imagen con el azul marino fuerte extraído de "Calculadora" (#0A3B8E)
img_qr = qr.make_image(fill_color="#0A3B8E", back_color="white")

# 3. Guardar directamente sin pegar el búho
output_path = 'imagenes/qr_cyan.jpg'
img_qr.save(output_path, quality=100)
print(f"QR generado exitosamente en: {output_path}")
