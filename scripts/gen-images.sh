#!/usr/bin/env bash
# Generate all images for hotshotinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/hotshotinsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — HOTSHOT TRUCKING insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a Class 5 hotshot truck — a heavy-duty one-ton pickup (F-550 style) with a dually rear, pulling a long loaded gooseneck flatbed trailer hauling steel pipe and oilfield equipment — on a long open desert highway at golden-hour dawn, West Texas landscape, big sky, warm sunlight. Bright professional commercial trucking photography, clean and modern, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated view of two hotshot trucks with loaded flatbed and gooseneck trailers parked at a Texas oilfield yard at midday, pipe and equipment staged nearby, pumps and wellheads in the background, blue sky with soft clouds. Clean professional industrial photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a friendly American hotshot owner-operator wearing a flannel shirt and cap, standing confidently beside his heavy-duty pickup truck and loaded gooseneck trailer at a fuel stop, warm natural light, trustworthy genuine expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic landscape of a hotshot truck — a dually one-ton pickup pulling a loaded gooseneck flatbed trailer down a long open highway through open rangeland at sunrise, big dramatic sky, warm golden light. Premium commercial trucking photography, clean and bold, no text, no watermark" 4 1216 640

gen "trucking-liability.jpg" \
  "Photorealistic photo of a clean modern hotshot truck — a white heavy-duty dually pickup with a flatbed — stopped at a highway on-ramp, professional commercial trucking photography, blue sky, motion implied by open road ahead, no text" 4

gen "cargo-insurance.jpg" \
  "Photorealistic close-up of bundled steel pipe and oilfield tubing strapped securely to a flatbed gooseneck trailer with heavy chains and binders, West Texas oilfield yard, bright midday light, shallow depth of field, professional industrial photography, no text" 4

gen "physical-damage.jpg" \
  "Photorealistic photo of a polished late-model heavy-duty one-ton dually pickup truck (F-550 style) and a clean gooseneck trailer parked at a truck stop, chrome and clean paint, blue sky, professional commercial automotive photography, no text" 4

gen "bobtail-insurance.jpg" \
  "Photorealistic photo of a hotshot pickup truck (dually one-ton) driving without a trailer attached on a long open highway at dusk, bobtailing, warm sky, professional commercial trucking photography, no text" 4

gen "trailer-interchange.jpg" \
  "Photorealistic photo of a hotshot pickup truck hooked up to a non-owned commercial flatbed step-deck trailer at a logistics yard, coupling and hitch detail, clean equipment, professional commercial photography, no text" 4

gen "occupational-accident.jpg" \
  "Photorealistic photo of a hotshot trucker in workwear safely strapping down a heavy load on a flatbed trailer with chains, focused and careful, warm natural light at a job site, professional commercial photography, no text" 4

gen "general-liability.jpg" \
  "Photorealistic photo of a hotshot truck and flatbed trailer backed up to a loading dock at a busy warehouse, a worker in a hi-vis vest directing the unload, professional commercial industrial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic wide aerial shot of a long open multi-lane interstate highway stretching to the horizon through open American rangeland, a hotshot truck with trailer visible far ahead, dramatic big sky, premium commercial photography conveying broad protection and scale, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
