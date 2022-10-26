const url = "https://api.pinata.cloud/data/pinList?status=pinned";
const options = {
	method: "GET",
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMDUwYjNjOC1kZWQyLTRhZTQtYjg0Yi0zODRjNmFlNjE2ZWYiLCJlbWFpbCI6InJvaGFudmVybWEwMzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhhNjE2NmJhZTBlYjIwN2NiYWRjIiwic2NvcGVkS2V5U2VjcmV0IjoiYTlmMmZiMDkxMzA4MjQ1YzRlYjVmMmQ4OGRjZDA2YmIwYjk0OTk2ZGMxN2QzMGIwMTI1MjNlMDJjZTc5NjliZSIsImlhdCI6MTY2NjI4NTM1Nn0.zqF-kUiugs-ZvF3RfOzce03efS1CxWAvwSCWxSxGO80",
	},
};

const loader = selectElement(".loader");
const loadInfo = selectElement(".image-loading");
const image = selectElement(".image");
let zoom;
loader.style.display = "flex";

fetch(url, options)
	.then((res) => res.json())
	.then((data) => showImage(data.rows))
	.catch((err) => console.log(err));

const showImage = (data) => {
	loader.style.display = "none";
	loadInfo.style.display = "none";
	image.style.minHeight = "auto";

	data.forEach((element) => {
		let img = document.createElement("img");

		let src = `https://gateway.pinata.cloud/ipfs/${element.ipfs_pin_hash}`;

		img.src = src;

		img.classList.add("image-item");

		img.addEventListener("click", () => {
			zoom = src;

			console.log(zoom);
		});

		console.log(element.ipfs_pin_hash);

		image.appendChild(img);
	});
};

// API Key: 8a6166bae0eb207cbadc
//  API Secret: a9f2fb091308245c4eb5f2d88dcd06bb0b94996dc17d30b012523e02ce7969be
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMDUwYjNjOC1kZWQyLTRhZTQtYjg0Yi0zODRjNmFlNjE2ZWYiLCJlbWFpbCI6InJvaGFudmVybWEwMzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhhNjE2NmJhZTBlYjIwN2NiYWRjIiwic2NvcGVkS2V5U2VjcmV0IjoiYTlmMmZiMDkxMzA4MjQ1YzRlYjVmMmQ4OGRjZDA2YmIwYjk0OTk2ZGMxN2QzMGIwMTI1MjNlMDJjZTc5NjliZSIsImlhdCI6MTY2NjI4NTM1Nn0.zqF-kUiugs-ZvF3RfOzce03efS1CxWAvwSCWxSxGO80
