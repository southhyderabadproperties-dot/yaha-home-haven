function Update-Project ($file, $acres, $units, $name, $loc) {
    $content = Get-Content $file -Raw
    
    # Replace the facts array
    $content = $content -replace 'const facts = \[{big:"[^"]+",small:"Acres"},{big:"[^"]+",small:"Exclusive units"}(.*?)\];', "const facts = [{big:`"$acres`",small:`"Acres`"},{big:`"$units`",small:`"Exclusive units`"}`$1];"
    
    # Fix the description text
    $content = $content -replace 'Set across Premium acres at ([^,]+), [^\s]+ brings together Exclusive exclusive premium units', "Set across $acres acres at $loc, $name brings together $units exclusive premium units"
    
    # Replace the amenities array to exactly match the original 7 correctly-imaged amenities
    $content = $content -replace '(?s)const amenities = \[.*?\n\];', 'const amenities = [
  { icon: Waves, label: "Swimming pool & changing rooms", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop" },
  { icon: PartyPopper, label: "Party hall", img: "/party-hall.jpg" },
  { icon: Dumbbell, label: "Badminton & basketball courts", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" },
  { icon: Flower2, label: "Meditation & yoga room", img: "/yoga-room.png" },
  { icon: BriefcaseBusiness, label: "Work lounges", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
  { icon: BedDouble, label: "Guest rooms", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop" },
  { icon: Baby, label: "Children’s play area", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop" }
];'

    Set-Content $file -Value $content -Encoding utf8
}

Update-Project "src/routes/projects.anvay-avillas-kongara-kalan.tsx" "30" "300+" "Anvay" "Kongara Kalan"
Update-Project "src/routes/projects.vertex-florenza-tukkuguda.tsx" "16.5" "105" "Vertex Florenza" "Tukkuguda"
Update-Project "src/routes/projects.vertex-viva-calista-tukkuguda.tsx" "10.6" "123" "Vertex Viva Calista" "Tukkuguda"
Update-Project "src/routes/projects.riddhi-laxman-county-tukkuguda.tsx" "6.25" "58" "Riddhi Laxman County" "Tukkuguda"
Update-Project "src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx" "20" "208" "Kavuri Hills Lemon Leaf" "Mankhal"
Update-Project "src/routes/projects.kavuri-forest-nest-immaguda.tsx" "50" "450" "Kavuri Forest Nest" "Immaguda"

