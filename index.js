import app from './server/server'

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  process.stdout.write(`server running on port ${PORT}`);
});

