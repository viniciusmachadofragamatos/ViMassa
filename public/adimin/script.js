const form = document.getElementById("clientForm");
const clientList = document.getElementById("clientList");

const API_URL = "http://localhost:3000/api/clients";

// Função para listar clientes
async function fetchClients() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderClients(data);
  } catch (error) {
    console.error("Erro ao carregar clientes:", error);
  }
}

// Função para renderizar os clientes na tela
function renderClients(clients) {
  clientList.innerHTML = "";
  if (clients.length === 0) {
    clientList.innerHTML = "<p>Nenhum cliente cadastrado ainda.</p>";
    return;
  }
  clients.forEach((c) => {
    const card = document.createElement("div");
    card.classList.add("client-card");
    card.innerHTML = `
      <div>
        <strong>${c.nome}</strong><br>
        <small>${c.email}</small><br>
        <small>${c.telefone}</small>
      </div>
      <button class="btn btn-del" onclick="deleteClient(${c.id})">Excluir</button>
    `;
    clientList.appendChild(card);
  });
}

// Cadastrar cliente
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone }),
    });
    if (res.ok) {
      form.reset();
      fetchClients();
    } else {
      console.error("Erro ao cadastrar cliente");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
});

// Excluir cliente
async function deleteClient(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchClients();
  } catch (error) {
    console.error("Erro ao excluir:", error);
  }
}

// Inicializar
fetchClients();
