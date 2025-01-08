async function doPOST(path: string, data: object): Promise<Response> {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Failed to do POST fetch", response);
  }

  return response;
}

async function doDELETE(path: string, data?: object): Promise<Response> {
  const response = await fetch(path, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Failed to do DELETE fetch", response);
  }

  return response;
}

export { doPOST, doDELETE };
