# Avatar (Unity)

Optional virtual-patient avatar. Start ONLY after text chat + voice work.

Flow: backend TTS audio -> frontend (React) -> Unity WebGL -> lip-sync.
Build target: **WebGL**. Copy the build output to `frontend/public/avatar/`.
React <-> Unity communication via `react-unity-webgl`.
