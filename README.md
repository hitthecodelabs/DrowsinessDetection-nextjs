# DrowsinessDetection-nextjs

## Description
This project implements a real-time drowsiness detection system using Next.js and `face-api.js`. The system utilizes a webcam to monitor the user and detect signs of drowsiness through the calculation of the Eye Aspect Ratio (EAR), a common indicator of eye fatigue and drowsiness.

## Features
- Real-time face detection using a webcam.
- Calculation of EAR to determine if the user's eyes are closed.
- Audible alarm alert when drowsiness is detected.
- Implemented using Next.js for a smooth and modern user experience.

## Technologies Used
- Next.js
- React
- TypeScript
- `face-api.js` for face detection and EAR calculation.
- Web Audio API for alarm generation.

## Installation and Usage
To use this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/hitthecodelabs/DrowsinessDetection-nextjs.git
```
2. Navigate to the project directory:
```bash
cd DrowsinessDetection-nextjs
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and go to `http://localhost:3000`.

## Additional Setup
- Ensure the `face-api.js` model files are placed in the `public/models` directory.
- Models include `tiny_face_detector_model-weights_manifest.json`, `face_landmark_68_model-weights_manifest.json`, and associated shard files for each model.

## Contributions
Contributions are welcome. Please create a pull request to propose improvements or open an issue to discuss what you would like to change.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
