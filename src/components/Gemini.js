import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSpeechSynthesis } from 'react-speech-kit';

const API_KEY = "AIzaSyDHa2meK2nWqF9N3uh5EZDfBJhTsg6c_YY"; // Reemplaza con tu clave de API válida

const RetroText = styled(Typography)({
  fontFamily: 'Courier New, Courier, monospace',
  fontSize: '18px',
  color: '#00FF00',
  backgroundColor: '#000000',
  padding: '10px',
  borderRadius: '5px',
  whiteSpace: 'pre-line', // Para respetar saltos de línea
});

const ContainerWrapper = styled(Container)({
  marginTop: '20px',
  textAlign: 'center',
});

const TextFieldWrapper = styled(TextField)({
  marginBottom: '20px',
  backgroundColor: '#000000',
  color: '#00FF00',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00FF00',
    },
    '&:hover fieldset': {
      borderColor: '#00FF00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00FF00',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#00FF00',
  },
  '& .MuiInputBase-input': {
    color: '#00FF00',
  },
});

async function getCompletion(prompt) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return await res.json();
}

const Gemini = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleClick = async () => {
    if (!prompt) return;
    setOutput("Generando respuesta...");

    try {
      const response = await getCompletion(prompt);
      if (response.candidates && response.candidates.length > 0) {
        const generatedText = response.candidates[0].content.parts[0].text.replace(/\*\*/g, '').replace(/([.?!])\s*/g, '$1\n\n');
        setOutput(generatedText);
        speak({ text: generatedText, rate: 1.0 });
      } else {
        const noResponseText = "No se obtuvo respuesta válida.";
        setOutput(noResponseText);
        speak({ text: noResponseText, rate: 1.0 });
      }
    } catch (error) {
      const errorText = "Ocurrió un error al conectarse a la API.";
      setOutput(errorText);
      speak({ text: errorText, rate: 1.0 });
      console.error(error);
    }
  };

  return (
    <ContainerWrapper>
      <RetroText>¡AI Gemini 1.5!</RetroText>
      <TextFieldWrapper
        label="Introduce tu pregunta"
        variant="outlined"
        fullWidth
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generar
      </Button>
      <Box mt={2}>
        <RetroText>{output}</RetroText>
      </Box>
    </ContainerWrapper>
  );
};

export default Gemini;

