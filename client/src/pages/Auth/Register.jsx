import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import { auth } from "./../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

import "./Auth.css";
import MyInput from "./MyInput";

const Register = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [user, setUser] = useState(null);
    const [metaData, setMetaData] = useState({
        lastName: "",
        firstName: "",
        password: "",
        confirmPassword: "",
        isAccess: false,
    });

    function onCaptchaVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignUp();
                    },
                    "expired-callback": () => {
                        console.log("reCAPTCHA expired");
                    },
                },
                auth
            );
        }
    }

    function onSignUp(e) {
        e.preventDefault();
        setLoading(true);
        onCaptchaVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = `+${phone}`;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOtp(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    }

    function onOTPVerify(e) {
        e.preventDefault();

        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                setUser(res.user);
                toast.success("Welcome to our Website");
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });
    }

    const onMetaData = () => {
        console.log(metaData);
    };

    console.log(metaData);

    return (
        <div className="Register">
            <Toaster toastOptions={{ duration: 3000 }} />
            <div id="recaptcha-container" className="recaptcha-container"></div>
            <div className="form-user">
                <h1>Ro'yxatdan o'tish</h1>
                {!user ? (
                    <form>
                        {showOtp ? (
                            <>
                                <OtpInput
                                    value={otp}
                                    autoFocus
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    // secure
                                    onChange={setOtp}
                                    className="justify-center"
                                ></OtpInput>
                                <button
                                    onClick={onOTPVerify}
                                    className="bg-blue-500 flex items-center justify-center text-white px-6 py-2 rounded-md gap-4 hover:bg-blue-700"
                                >
                                    {loading && (
                                        <CgSpinner
                                            className="animate-spin"
                                            size={20}
                                        ></CgSpinner>
                                    )}
                                    Tasdiqlash
                                </button>
                            </>
                        ) : (
                            <>
                                <PhoneInput
                                    country={"uz"}
                                    value={phone}
                                    onChange={setPhone}
                                />
                                <button
                                    onClick={onSignUp}
                                    className="bg-blue-500 text-white flex items-center justify-center px-6 py-2 rounded-md gap-4 hover:bg-blue-700"
                                >
                                    {loading && (
                                        <CgSpinner
                                            className="animate-spin"
                                            size={20}
                                        ></CgSpinner>
                                    )}
                                    Davom Etish
                                </button>
                            </>
                        )}
                    </form>
                ) : (
                    <form
                        action=""
                        onSubmit={onMetaData}
                        className="main-request relative"
                    >
                        <div className="relative mb-4">
                            <label htmlFor="lastName relative">
                                <div className="input-entered-name relative">
                                    <MyInput
                                        type="text"
                                        value={metaData.lastName}
                                        legendName="Familiyangiz"
                                        className="first-input"
                                        required
                                        onChange={(e) =>
                                            setMetaData({
                                                lastName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="firstName relative">
                                <div className="input-entered-name relative">
                                    <MyInput
                                        type="text"
                                        value={metaData.firstName}
                                        legendName="Ismingiz"
                                        className="first-input"
                                        required
                                        onChange={(e) =>
                                            setMetaData({
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </label>
                        </div>
                        <button className="bg-blue-500 text-white flex items-center justify-center px-6 py-2 rounded-md gap-4 hover:bg-blue-700">
                            {loading && (
                                <CgSpinner
                                    className="animate-spin"
                                    size={20}
                                ></CgSpinner>
                            )}
                            Davom Etish
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
