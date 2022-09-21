import "./mint.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { white } from "./whitelist.js";

import abi from "./abi.json";
const contract = "0x5460687A450450355722C489877CF6C2ef54374C";
const NETWORK = "1";
const NETWORKNAME = "Ethereum";

const leaf = white.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaf, keccak256, { sortPairs: true });

function checkWhitelist(a) {
  const check = keccak256(a);
  const proof = merkleTree.getHexProof(check);
  const root = merkleTree.getRoot();

  return merkleTree.verify(proof, check, root);
}

function getProof(a) {
  const check = keccak256(a);
  return merkleTree.getHexProof(check);
}

const Mint = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantity_free, setQuantity_free] = useState(1);
  const [maxallowed, setMaxallowed] = useState(1);
  const [price_common, setprice_common] = useState(0);
  const [price_oneOfone, setprice_oneOfone] = useState(0);
  const [address, setAddress] = useState(false);
  const [totalCommon, settotalCommon] = useState(0);
  const [totalOneofOne, settotalOneofOne] = useState(0);
  const [remainingMints, setRemainingMints] = useState(0);

  async function initialize() {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/97d9f5fedfa34db7a15d53259ffe34c2"
    );
    const ct = new ethers.Contract(contract, abi, provider);
    setMaxallowed((await ct.mint_perTxn()).toNumber());
    setprice_common((await ct.price()) / 10 ** 18);
    setprice_oneOfone((await ct.price_oneOfone()) / 10 ** 18);
    settotalCommon((await ct.totalSupply()).toNumber() - 10);
    settotalOneofOne((await ct.sale_Id()).toNumber() - 1);
  }

  useEffect(() => {
    initialize();
  }, []);

  async function connect() {
    console.log("0x" + merkleTree.getRoot().toString("hex"));

    if (!window.ethereum) {
      toast.error("Wallet not found!!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();

    if (chainId != NETWORK) {
      toast.error("Select " + NETWORKNAME + " to continue");
      return;
    }

    let m = await provider.send("eth_requestAccounts", []);
    m = m[0];

    setAddress(m);
    checkFree(m);
  }

  async function mint_common() {
    if (!window.ethereum) {
      toast.error("Wallet not found!!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();

    if (chainId != NETWORK) {
      toast.error("Select " + NETWORKNAME + " to continue");
      return;
    }

    let m = await provider.send("eth_requestAccounts", []);
    m = m[0];

    let balance = (await provider.getBalance(m)).toString() / 10 ** 18;

    const signer = provider.getSigner();
    const ct = new ethers.Contract(contract, abi, signer);

    const status = (await ct.status()).toNumber();

    if (status == 0) {
      toast.error("Sale Not Started!");
      return;
    }

    let p = (await ct.price()) * quantity;
    if (balance < price_common * quantity) {
      toast.error("Insufficient funds in wallet!");
      return;
    }
    if (status == 1) {
      if (!checkWhitelist(m)) {
        toast.error("Not Whitelisted!");
        return;
      }

      await toast.promise(
        ct.mint_common_WL(String(quantity), getProof(m), {
          value: String(p),
        }),
        {
          pending: "Waiting Confirmation on blockchain!!",
          success: "Success!!",
          error: "Failed!!",
        }
      );
      return;
    }
    if (status == 2) {
      await toast.promise(
        ct.mint_common(String(quantity), {
          value: String(p),
        }),
        {
          pending: "Waiting Confirmation on blockchain!!",
          success: "Success!!",
          error: "Failed!!",
        }
      );
    }
  }

  async function mint_oneOfone() {
    if (!window.ethereum) {
      toast.error("Wallet not found!!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();

    if (chainId != NETWORK) {
      toast.error("Select " + NETWORKNAME + " to continue");
      return;
    }

    let m = await provider.send("eth_requestAccounts", []);
    m = m[0];

    let balance = (await provider.getBalance(m)).toString() / 10 ** 18;

    if (balance < price_oneOfone) toast.error("Insufficient funds in wallet!");

    const signer = provider.getSigner();
    const ct = new ethers.Contract(contract, abi, signer);
    await toast.promise(
      ct.mint_oneOfone({
        value: String(price_oneOfone * 10 ** 18),
      }),
      {
        pending: "Waiting Confirmation on blockchain!!",
        success: "Success!!",
        error: "Failed!!",
      }
    );
  }

  async function checkFree(add) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/97d9f5fedfa34db7a15d53259ffe34c2"
    );
    const ct = new ethers.Contract(contract, abi, provider);
    setRemainingMints((await ct.freeMints(String(add))).toNumber());
  }

  async function claimFree() {
    if (!window.ethereum) {
      toast.error("Wallet not found!!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();

    if (chainId != NETWORK) {
      toast.error("Select " + NETWORKNAME + " to continue");
      return;
    }

    let m = await provider.send("eth_requestAccounts", []);
    m = m[0];

    const signer = provider.getSigner();
    const ct = new ethers.Contract(contract, abi, signer);
    await toast.promise(ct.claim_free_mint(String(quantity)), {
      pending: "Waiting Confirmation on blockchain!!",
      success: "Success!!",
      error: "Failed!!",
    });
  }

  return (
    <div className="mint container my-5">
      <div className="row my-5 text-white text-center">
        <div className="col-md-6">
          <h2>MINT COMMON</h2>
          <img
            src="https://bafybeifi5cy357uqbbcgotcztyvdkx4frmo4nqhewawrphihzasr6dzpvu.ipfs.nftstorage.link/"
            className="w-75 preview"
          />
          <br />
          <span className="price h4">
            PRICE: {(price_common * quantity).toFixed(2)} ETH + GAS
          </span>
          <br />
          <span className="minted h4">MINTED: {totalCommon}/10,000</span>
          <br />
          <br />
          <div className="quantityselector d-flex justify-content-center align-items-center ">
            <button
              className="button-pink mx-4 "
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="h4 m-0">{quantity}</span>
            <button
              className="button-pink mx-3 "
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity >= maxallowed}
            >
              +
            </button>
          </div>
          {address ? (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => mint_common()}
            >
              MINT
            </button>
          ) : (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => connect()}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
        <div className="col-md-6">
          <h2>MINT One of One</h2>
          <img src="./images/oneofone.gif" className="w-75 preview" />
          <br />
          <span className="price h4">
            PRICE: {price_oneOfone.toFixed(2)} ETH + GAS
          </span>
          <br />
          <span className="minted h4">MINTED: {totalOneofOne}/10</span>
          <br />
          <br />
          {/* <div className="quantityselector d-flex justify-content-center align-items-center ">
            <button
              className="button-pink mx-4 "
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="h4 m-0">{quantity}</span>
            <button
              className="button-pink mx-3 "
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity >= maxallowed}
            >
              +
            </button>
          </div> */}
          {address ? (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => mint_oneOfone()}
            >
              MINT
            </button>
          ) : (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => connect()}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
      <br />
      <br />
      <div className="row my-5 text-white text-center">
        <div className="col-md-6">
          <h5>
            CHECK YOUR REMAINING FREE MINTS
            <span className="minted h4">: {remainingMints}</span>
          </h5>
          <input
            className="form-control text-center w-75 mx-auto"
            placeholder="Wallet Address"
            id="addressId"
          />
          <button
            className="button-pink mx-auto mt-4"
            onClick={() =>
              checkFree(document.getElementById("addressId").value)
            }
          >
            CHECK
          </button>
        </div>
        <div className="col-md-6">
          <h5>CLAIM YOUR FREE MINTS</h5>
          <div className="quantityselector d-flex justify-content-center align-items-center ">
            <button
              className="button-pink mx-4 "
              onClick={() => setQuantity_free(quantity_free - 1)}
              disabled={quantity_free <= 1}
            >
              -
            </button>
            <span className="h4 m-0">{quantity_free}</span>
            <button
              className="button-pink mx-3 "
              onClick={() => setQuantity_free(quantity_free + 1)}
              disabled={quantity_free >= remainingMints}
            >
              +
            </button>
          </div>
          {address ? (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => claimFree()}
            >
              CLAIM
            </button>
          ) : (
            <button
              className="button-pink mx-auto mt-4"
              onClick={() => connect()}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mint;
