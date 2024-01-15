import streamlit as st
import pandas as pd
import joblib

# Load the pre-trained model and scaler
model = joblib.load("tools/model_joblib")
scaler = joblib.load("tools/scaler_joblib")

# Function to predict Parkinson's disease
def predict_parkinsons(data):
    # Transform the input data using the pre-trained scaler
    scaled_data = scaler.transform(data)
    # Make predictions
    prediction = model.predict(scaled_data)
    return prediction[0]

st.title("Parkinson's Disease Prediction")

st.write("Enter the following medical record values:")

# Create input fields for medical record parameters
mdvp_fo = st.number_input("MDVP:Fo (Hz)")
mdvp_fhi = st.number_input("MDVP:Fhi (Hz)")
mdvp_flo = st.number_input("MDVP:Flo (Hz)")
mdvp_jitter = st.number_input("MDVP:Jitter (%)")
mdvp_jitter_abs = st.number_input("MDVP:Jitter(Abs)")
mdvp_rap = st.number_input("MDVP:RAP")
mdvp_ppq = st.number_input("MDVP:PPQ")
jitter_ddp = st.number_input("Jitter:DDP")
mdvp_shimmer = st.number_input("MDVP:Shimmer")
mdvp_shimmer_db = st.number_input("MDVP:Shimmer(dB)")
shimmer_apq3 = st.number_input("Shimmer:APQ3")
shimmer_apq5 = st.number_input("Shimmer:APQ5")
mdvp_apq = st.number_input("MDVP:APQ")
shimmer_dda = st.number_input("Shimmer:DDA")
nhr = st.number_input("NHR")
hnr = st.number_input("HNR")
rpde = st.number_input("RPDE")
dfa = st.number_input("DFA")
spread1 = st.number_input("spread1")
spread2 = st.number_input("spread2")
d2 = st.number_input("D2")
ppe = st.number_input("PPE")

# Create a button to predict
if st.button("Predict"):
    # Create a DataFrame from the user input
    user_data = pd.DataFrame({
        "MDVP:Fo(Hz)": [mdvp_fo],
        "MDVP:Fhi(Hz)": [mdvp_fhi],
        "MDVP:Flo(Hz)": [mdvp_flo],
        "MDVP:Jitter(%)": [mdvp_jitter],
        "MDVP:Jitter(Abs)": [mdvp_jitter_abs],
        "MDVP:RAP": [mdvp_rap],
        "MDVP:PPQ": [mdvp_ppq],
        "Jitter:DDP": [jitter_ddp],
        "MDVP:Shimmer": [mdvp_shimmer],
        "MDVP:Shimmer(dB)": [mdvp_shimmer_db],
        "Shimmer:APQ3": [shimmer_apq3],
        "Shimmer:APQ5": [shimmer_apq5],
        "MDVP:APQ": [mdvp_apq],
        "Shimmer:DDA": [shimmer_dda],
        "NHR": [nhr],
        "HNR": [hnr],
        "RPDE": [rpde],
        "DFA": [dfa],
        "spread1": [spread1],
        "spread2": [spread2],
        "D2": [d2],
        "PPE": [ppe]
    })

    # Make a prediction
    prediction = predict_parkinsons(user_data)

    # Display the prediction result
    if prediction == 1:
        st.error("Based on the input data, the person is likely to have Parkinson's disease.")
    else:
        st.success("Based on the input data, the person is not likely to have Parkinson's disease.")

st.write("Please enter the medical record values in the input fields above and click the 'Predict' button.")
