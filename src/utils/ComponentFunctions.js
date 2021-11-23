import PhoneCodesList from "@/enums/PhoneCodesList";

export function searchCountry(v) {
  // Simula pesquisa em uma api
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(
        PhoneCodesList.filter((e) => {
          return (
            (e.country || "").toLowerCase().indexOf((v || "").toLowerCase()) >
            -1
          );
        }));
    }, 500);

  })
}