let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => {
  return fetch("http://localhost:8088/computers")
    .then((r) => r.json())
    .then((parsedComputers) => {
      computers = parsedComputers;
    });
}