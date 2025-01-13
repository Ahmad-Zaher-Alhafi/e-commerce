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

async function doPUT(path: string, data: object): Promise<Response> {
  try {
    const response = await fetch(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to do PUT fetch", response);
    }

    return response;
  } catch (error) {
    console.error("Update failed", error);
    return new Response(null, { status: 500 });
  }
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

export { doPOST, doDELETE, doPUT };
