// --- KGF: Paths of Gold (logic) ---
// Fictional adventure inspired by the Kolar Gold Fields setting.
// All names and events are original. Provide your own images in /assets (see IMAGES.md).
const NODES = {
  start: {
    id: "start",
    title: "Dust and Dusk at Kolar",
    text: "Red earth hangs in the air as the sun dips behind the headframes. You arrive with a simple goal: uncover the truth about a hidden gold ledger rumored to control the fields.",
    image: "https://static.india.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-28-at-4.10.06-PM.jpeg?impolicy=Medium_Resize&w=1200&h=800",
    choices: [
      { text: "Enter the main shaft", next: "shaftFork" },
      { text: "Scout the workers' quarters", next: "quarters" }
    ]
  },
  shaftFork: {
    id: "shaftFork",
    title: "Fork Beneath",
    text: "The lift clanks down to Level 3. Two tunnels diverge—one hums with generators, the other reeks of blasting powder.",
    image: "https://static.toiimg.com/thumb/67177607.cms?resizemode=4&width=400",
    choices: [
      { text: "Head to generators", next: "generatorRoom" },
      { text: "Follow the blasting charges", next: "blastPlan" }
    ]
  },
  quarters: {
    id: "quarters",
    title: "Quiet Quarters",
    text: "Empty mugs, a deck of cards, and a wall of notices. A map corner is torn—someone didn’t want others to see a route.",
    image: "https://variety.com/wp-content/uploads/2022/04/KGF22.jpg",
    choices: [
      { text: "Search for the missing map", next: "canteenLead" },
      { text: "Eavesdrop in the courtyard", next: "courtyardTalk" }
    ]
  },
  generatorRoom: {
    id: "generatorRoom",
    title: "Purr of Power",
    text: "Generators thrum. A locked panel glows faintly; a ledger icon blinks on a small monitor.",
    image: "https://i.pinimg.com/236x/47/df/e8/47dfe8a4b52bea2f185fa7d4d5d318d6.jpg",
    choices: [
      { text: "Bypass the panel (tech)", next: "vaultData" },
      { text: "Cut the power and force it", next: "alarmTrip" }
    ]
  },
  blastPlan: {
    id: "blastPlan",
    title: "Chalk Lines",
    text: "Fresh chalk marks show a controlled blast pattern forming a crude arrow deeper in. A satchel of charges sits unattended.",
    image: "https://www.behindwoods.com/kannada-movies/kgf/stills-photos-pictures/kgf-stills-photos-pictures-13.jpg",
    choices: [
      { text: "Rig the charges to open a new path", next: "hiddenAdit" },
      { text: "Leave them and proceed quietly", next: "guardEncounter" }
    ]
  },
  canteenLead: {
    id: "canteenLead",
    title: "Canteen Clues",
    text: "A cook slides you a folded paper: 'Ledger's keeper meets at the helipad by midnight.'",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Y3-vFX8hS26DAd05X7nBOM0Icva5F7DvfA&s",
    choices: [
      { text: "Head to the helipad", next: "helipadMeet" },
      { text: "Cross-check at convoy yard", next: "convoyYard" }
    ]
  },
  courtyardTalk: {
    id: "courtyardTalk",
    title: "Courtyard Whispers",
    text: "Two foremen speak of a 'vault below the old boss's den.' A keycard glints in a coat pocket.",
    image: "https://i.ytimg.com/vi/jXEVlrjc6Os/maxresdefault.jpg",
    choices: [
      { text: "Lift the keycard", next: "bossDen" },
      { text: "Shadow them underground", next: "shaftFork" }
    ]
  },
  bossDen: {
    id: "bossDen",
    title: "The Old Boss’s Den",
    text: "Faded portraits, a heavy desk, and a floor safe. A ventilation grate hums.",
    image: "https://i.ytimg.com/vi/M97CEfDPgpw/sddefault.jpg",
    choices: [
      { text: "Open floor safe", next: "safeFind" },
      { text: "Crawl through vent", next: "ventDrop" }
    ]
  },
  // --- Endings & late-game branches ---
  vaultData: {
    id: "vaultData",
    title: "Ending • The Data Ledger",
    text: "You bypass the panel and pull the digital ledger. Names, payouts, routes—exposed. You leak it to the world.",
    image: "https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2022/05/16152139/KGF-2-ROCKY-FB.jpg",
    ending: true
  },
  alarmTrip: {
    id: "alarmTrip",
    title: "Ending • Siren’s Embrace",
    text: "Power cut. Sirens wail. Doors slam shut. You’re sealed in until the morning crew finds you—if they do.",
    image: "data:image/jpeg;base64,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",
    ending: true
  },
  hiddenAdit: {
    id: "hiddenAdit",
    title: "Hidden Adit",
    text: "The blast opens a forgotten adit. The air is cold and sweet. A rail line vanishes into dark.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWFxgXFxgYFxgdGBUXFxcXGBcXFxUYHSggGBolHRcVITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tLS0rLS0rLS0tLS0tKy0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABAEAACAQIEAwYDBQYGAQUBAAABAhEAAwQSITEFQVEGEyJhcYEykaEUI1KxwRVCYpLR8FNUcoLh8TMHQ6Ky02P/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHxEBAQEAAwACAwEAAAAAAAAAAAERAhIhMUEDUWET/9oADAMBAAIRAxEAPwDw6lXrv7Cwx2w9v+Qf0pz9nsOImxa1/hX9Kz2b6V5BSr179hYb/AtfyCnLwHC/4Fr+RadjpXj9KvZV4Bhf8va/kFdbgGF/y9r+QU7HR4zSr2P9g4X/AC9r+QVw8Bwv+XtfyCnY6V47Sr2H9gYX/L2v5BXf2Fhf8va/kFOx0eO0q9jbgWF/y9r+QVFxPAcNys2x6IKdjo8mpV6unA8N/gW/5RRhwXC/4Fr+QU7HR5FSr2ThvZzCXLq2zZtjNIBCDQwSOXlHvQ8T2cwajMVtKASNLYKmJnXntuI507HR4/Sr1A8LwLCAbSnXXuuhaPnAPvUNuB4TMsOhUzmPdxlM6acxV1nHndKvQ8Tw7h6/+5bMnLPd6eeu1Sh2ZwXxd6mXMBrb31E+mn6U0x5lSr1G3wfAOwC93qPwc5WBr1Bb5VKXg2Cz5ctmI/w+cmdfSPnU7L1eSUq9O4pwjDCQlu0fMKB+dU54Mkf+Nf5RTsdWJpVtBw6zsbQHnFPGDw6r/wCJTPMirp1YilWru2bAn7tfkKh3e6J0RB/tFNTFBSrR2msj4raHX8Ipi4i1mP3NvL/pEimmM/Sq8vhGPhtqB6CoxsL0HyqmKylVgVX8I+VcW2p5D5URApVaCwv4RRm4fChikBpykjQwYMHnBqauKWlVy2AKgMUgHYkb+nWhm2n4R8qaY9V4XdAYFpAGogA6zpoeVWmKu2TADudBrkHxH4iZM9KrLYEUilc3VZmxbJ8OYzMCOsZI9JnfXTqYi3lAYxMaRO8Eb7Co4ucqPboHB9K4WobUkNA6aehmkFpFYoEwrgWnKaeBQCIoTrRm0oFxqATmgd7Fdu3YGtWj8CIsd40CYaSYAX03k0EXh1k3jlDFc3hJBIbKQe8gjUeCR6svWi9qrKiygUADOVA2CjIQABy0FQuzXEnNy4baju0GQEyCSSC0naNidOlXXEVF0WRA1JYgn+C4dT7VL8rPhgbtrLt0qp49jAiIgMMxJbbRRt8zPyre8SwajxHTSNp/KvPe21oC5bYKVBSNeeVjrHLet8brHKYm9lMDadTiMQGZVMIinVQNzlzAt6CT5VreOpg+5uGxaa3dRkF0nwrcV4ysELSWkp4o2ciZis52Z7R2rOFFoW0e8TCAwCCx3znRQNTPkK03DeOi7hruHu91cuXLaLbdAILWbisVYASMn7rbGQKX5JmMe4IPSjDHkCFmdpO//FWn7HuOxCqTHOn4bs+6mXC+k6/8U2GKG7duDUk+tHtcacD4QdNzWifhauZeI6BhUfG8ItgEqgjmTr7y2gqbDKbYIupmCiedVuPw8H8/Kh4gKoksQvIDy8qbbvq6NAjQjXcaaUEK5bWq+7ZipjXAKis0+laZR3AoRai3Epi26qHIxrrA062IogcCio2SnIsU7vaJZE0RYcJxlq2CbltXMnRrYYQQI1kEEEHbqZnSD8T4qt1LaCBkmItIu5H7y7Df51DNvQiKjZIO1FW2Kxymx3I0+A7mCyBhIWPDmzSddxPOqEpU8gc6C7CaD0hGoneaVWpfqXbuVzb1ITzpr3hUPEYiowuEmqasxdottjUa22lPGIFRUrvqT3KBbM082iaB9t4ove9KisSNI1p6P7GgK12ai33od8nkaC70BLNrMcxIhZJ9tah9re0LsRh0JJjxdQ3Ib8hv6mgcY4sbCD/EYeARsJ+Mjnrt6eVVfZ7Cu9yTJdz6kk6nfmfM1f6m/TW9n7zWMHdtrlJAd4aTmbLy9xUrHMrcyACT8tNANOf0oAtuPB3cHkfCxIAE/vDrUbi1swBqAol26AA8gTJ00E61lr6RrvFMpABkDaapu2mEe/bVlQgqxIB0YiBmgcgND8qLYxeJtFns3SoDPH3dt9ASJGdWjQcqtuFLiMV3yYgTcslC9wQDcsuzSFRVAEZRJHXrW8xjd8eVWwQdjI+kGvQ//TThBu3BmMeFwpZYU6hvijWSRMbA/PK/ZSuKvJtluOPSGIivQuE4N1w5xKk5hbbKJIUWwciLP4rjBjIGwX3vKs8Y1dnAtatZShDkmQdxr9fXaOtUPF7qWtbpJLTkt2wCxiJZpIAUSNSQNQKgcH7cYp1YYlEeCQHXwsJkhMmodVGgMqw0111D2gxTNhvtOHLWnL21uGcxCKWyFZ1y5mIgzOffSKxnrp28WeGxeIALJYtqpEjvGsgkHZhlYxz6gxoRNcx2ExL6YjD5QJi7aUXMp6uiMdN9fTznO8Mx9oWne9d8Mhmt2wwOb95pDCC25VSTz51dcK7R2lyG1inVW8K5jO5EZg8nQqRA1gCKerMYzHKQzA6kMRPWNJB6dKPgLUhgJkCfXrNWva/AZMTfZdVL5gAOTgMFWOQzQPICqvhl0hpiNNjzEitfTmo2euGKPibYDMOjEe01xUUjzqoAw0rlNvtyoQuHaqJaCaY9uTRLBIpwua1AD7PUi1aimqZNSFEVQmvxUe5eJotxRQoFQMJmmEU67Q6o2aXqL9tFZ/7UaYb5rOLrQd+DT1uCqG1eo4vedMNXDYmkL1VDXaZ3xHOmLrU4LFTvU98Qg3IFYpcYRtUi5jSwB3NTDWpOJtgFiwA6nQfM1W4njVuCUYMBu5MIP98anyUE1QTbac6kkfDqYU+nP6fpUW61wottLZKDUScxPmVXb/urhqxxfFmfS2xEc4AB9BqY96gYjjGJVf8AyhZ6AZj6GoFxVI+HL7RSw+GEydtyeQiriadhrD3GzNLE/vMd/wCtb/sbgxbOdtIB1Ow01NYIYq+7ZbIIEwG21/1cvQUexxHEW2SyXygn7wkZg2vMkE9BodTFSzSXHq91UKlgZJ0+7BJ9JPtXnnaPiFxVYBjE8wPeYMctpJ9K1mHuk4Zr1vu3yD4AImAZALE5vQZZ/FXneJxuJxztGidSSQo/CpbXn8P/AHU4xeVSey/aAKvdXACASVzGFE7l23yjXQanatx+0Ps74PE2/vEuLbtvAjvLd2EYCRO+VgOqAV5Ve4ZN5LNuZYhddy0xP12r0riGLBuYazaRnt2O8Ld2ASq2XuICA2hhsmnPlrVqRmu02FCcQdLbT9ouWjbYc1u5RPrIb5Vs+0vE1LWbdohMOttgi/jK5VFxvYmByB61nTwg3Cl5Lq3Vti6tsjR/HAW2yfECrO56gkjpT+M4Ai/h8PJa7lNy5r8ILKAANgND8qKNwTBEm4oywinMxE+K54iM06eHID6jprbdi7NrENdsXAD3iCFIIyoIyb6iIXWs79vK4a7bXw3L902w3RDIJI0/dHzIq/7BYcWbyoCTk82PSTGUKv8AtLbb1KRlL3DLdi/eLXLaogKsgth2ugbKobQTE59IgnlVvbXD4jB2beGZS9i82ZM5U5boZmNpjlkgjMuYczz0oPbO4ftN27h7Yy6KzH4RoQ2UaA/FBn9a52e4eSLSFVfOwu94qZXtuZUAnUOG8SxpGX0NWk/SH2ixc4i54iQCFE88qhZIOxMT71V4K+A5LdNK2naDspjUvXbgwzMruzBrYV9CxI0WW2PSsZx53UQRBBjzB10I5GkSo+JSXYjYmactjYiq63iDFSbV87Cqgz4IdajnCgc5qQ6tEmmqhGsUDRbNBuCKlnE1GuNOpoC2SIp186UOwRzNTUyDfXyoqrcmi2mii4kA7CgstEK4woTUshpTVE0NSmg5qcGoDrRQaChogaoCl9KYHrjGhmgL3ldW9FCmmNQP+0tNTLGM05SKrgwFOV6Kse9U9J9KDxIqLFwqPFAgyZ+ITpPSajk+dOCyDJ3BB9xB/OmDZvxGx3drBLZg2bbnvAwhiiMXGggmVeTJ1UgTGmGx983UOYFc2q5QYEE6OTykb+YMVu24laFnOlmxmZGW7cYEZgRkyqE8TFpbToPKsXjsYfs2SRI02II6AhtQfXrWYtTux3H+5BtX9EYQJaI9gGJ9IqzucM70fcHQS2UBpO5MAqsnUmInpO1ZfjXDpY3U8JbKygH41iC2mzMysfer3sPxNAG766QlsFnBGqgcgYksToF5mrf2k/RYPu8Mj3zBvEFbQ5rmAGb1PLy9ad2ZtYi0nfr382syutrIxzM7OVvWnIlCCp6/FVhxjB4bF23xNgm3dILLbLfFcGzSIOckaEaEnltVlwbArhrAOHGa+4+8cHVpgkEk5SAdczHTlNNWQ/C8YwrpevNZVQy2wIGV7bZ4uKTAYPJEc4jkTWUxNxbXEbYw5e4+R9LhUn4GZEkEzrB1AO3WtLwoYZkv2790PccqQFuMwDjcC5cMO8xqAAPLnn+0tu3hGtOlvLctMrqXuWzdYq2bxBDmynbXlzpCs/gMa73lXUawoDFY21JGvKvTOGXTZuKzyyxDkuWyyIDS0MAScsGYLrtmzCu4bgkuv35thCxYpCkNlYgp3k6AiOQ5neKmcSxlqxYvSc7kBFQiCrlj4iBocuXMI6L5gS+kmMtj+0aoblu2zNngowAg5hqrDcan+tXvZ1rq4dx3g7yMttk8RtgmS2YgLKgkwOhjXSsVfw8uzMIzSBtppuNNDWi4JigupmSZJ1gfdjf5DUCrSD4jjXFbF9LhxNy5aSAVBMZDofuxGYiCZ3+lau3grXF7Z+0xsO7vWxDq3i1Fz/3UgjRlgGaqMPilaZGhU+QzZGnlpsPlyrEPjXwmNY2WKr3gUqCQpzLrtsCSdutZzfhdz5P7W9j7+AY5wXtE+C8qnIeWVvwP/CT6TVFYvwZr1Szx7uLN37rwPJuJeYsr5wBAOZiRpBGUCPwkeLGdpOzaIBfwsmy4nIWDNb56MPiSI13HPrVnLflLxz4VNziBYQfpTDiTEDSo1pNasMNhVOszW2SwthTqxp98K0BRtT79vkNaalkqJqKHikCjbWhYMEmuXWJO81y3cy+VEWTAAVXYjTaufaSaBeeTQI3DQ2vUmuQKATVRLR+VHUGotonSpKk5hzP9/wB+9AYNGlFU0MWyTpRrNuf+6jRVwpUtcMelE7mgr8hpjqantZqNeQg+1BDIooOlcYaGkRRCTExypG9NR2WrPA8BusqXG8COYQkEl408CDcTpJj3oJXAsa0913aXJnKGJABg8x1/Woq4TEYnxW8MO7Qx+GyCORYnxf6ZmtHguC4exauPiLr22KwjSAyMrK6kWVkkyq6Ftug1qRjuMD7JZsmLaooBCmHuknMS4/cDMXPd6zILH92o0qPs7taQFg91MwZV1MFiwcCJIlmBgaQOoAzHE8MWuhFHjOnnOu/y+lWpZAc4EEyV6gjmPMdaj4e+xxVtgSxzoAW38Wmp9TViU29j72FC2xccNlBKhmVVLAaEIfEQdxMabGpNzGNcXIr/AHehFtbChQYgzlZZ+VVXafFC7i7zL8PeFVjbKvhEesT71P8At3drngBv3YGg/iI5noNqJqfwvvNFLLbBMC3bsoWaApMjJpmgbtOmxq3sdmHuhVuYjJbXKy2mfM2UyQWEZQDlJgaHkCINQOzvELqo1y0uVWBV3YBpYaiAdzqfIkrMgEHScJYPcBIYurEqJkq0wzm42j4hgNbrEqggLJGkrUQm4libL93KXWcBrcoiMuR0LszW0XwMhdYMmYiIk2eJa3ey3MTatuxWQxZrZ7tJlyUIi2JMM0k8pqHxVVvYsEMCNm8UKNs2o0A0AAE6Ac97HFYRMRct2A69yXzX7sx3rJ8NhPJI+EbczOaYKPiuAwj2HuYfvEuKucIWzKUGcruM0t3Txr0rMYfGDTXpz6T5+Z+darsllxOLx8wECRbA2XuW8GUeS/nWEVMjsn4GZfWCRP0qxGs4djoIPvy11G/0Hy9ape1rjv8AMIhgjDzIA+mlDw9wgyP1oXGJYofX9auelvjVdmbiMM9yCg1BkhQBoNFHMmD5U27YY4hVUEayUBOUCCS0bCdTA6+dYhSwBUGB1EyAOXnVlxCwUAKEgMCrgaAkNMEcxrp5AdanVexhsLmPqY9J2o+EgH+lVqueVWOEDHUgafWqzE+4NBFDu25FdLEjalsKioAQa1CxC61Ztb51HvKPeqiGluBSCzXbl5ANWHoNT9KiPjvwj5/0qg11KGQPKoty8x5/Kh5aIuMPb8XpUpU1oOHOm4+f51ZcHbPmFsIxIg5xtM6jnOlSrEe2wOo2HPbbmOoqPi8OC46yDP56b1cXCc/cololVJIy+GMoiTy/d0/i0qLjcZcw5AKWZfkM3hGVUMbaeE+5amxbKsLbEREx06elTHSY0DcpGhFZ6zikdy7qQ/eMZXNBBhobyBER51eYK4XGZQQo5kET/pG5840qXxZ6DesEa7CY1/WojLrrVniLbqDtOvhzDMQGKmBz8uZkVVHF5vxaaiVP0kVJdLEe5ZaYKn5GhvYb8JHr/Wp1hWchVB1PmFiJJ0/vSpH2AyRIkLO+nLQnluOXWr2kJLVdgMMGuIH1WRm81GpHyBrQcb7V3BcZbck6ACfCFHhUBVAPXQkjyqsNsqHPh8A5HUknYbcqD36iTl5xuNo8LHqZO3QH3eU+AbVq9ccO4YnNoDy+LlyHwmuYoeIljqMpganSZMcpnSj3cdoSCsSAAQJ01Zs0nfp6VG76G0hgRqQMviERz58/05kBDKDqSILbiNGPXrQO/a2BkOpETHQEAjU7SfeppvMwUOBA1jSM4JAjQ5hlJ099YqHfaIgDTnmJM9RoPY71UVLW8taDhGNsKo75M4jUeZqpdNQCBB057n184oGHtzOu1VGuu40XMPcW14UUCFXlJ5+9UuFxeJta69YYkzPi1+f1rQdm+HhLdwwIcLObXZk5f7hUXiDTeux8Od8p/hDEL9AKjSr/AG7iCIA+QiKZY4neW415iM4tsoJEkBt46HU6+Z61PIXqD7Gq27vcO8IT/wDJB+tEbT/0fMNcY6lj9CVB/Wsxx6wFxl5V2DCPdFP61edh0Nt8KQYzpccj0fT6RUHi+HzYq8x/HHyAH6VPtfpDsWhFFv2swFSFtKNNfn/xUmxh1PMj5U0VYwYJqWljMuXzB+UifkasvsoA+ID+n6UrFlT+8Pr/AEpq4pXwgDVOtZEEn5dalYjAg7XEn1P9Kjjhzg6XE9jH6UME70EaKddNBMevSmOBz8Plz9fzqPiMObSks4VfJt/QDc1VjEq0ySonp4m9+VEFxWMBYIksZEQJPXYbmqvFI7KGOsk7ERl0jYxEzU5xbI+7cluWZig+ggnTqKgYgMyidCDB16CJB6VqJUE2/fl5e3WnlN/71oxQDXpQmuietVl1kgUPu64140wmglWzWo4Fbi0HysQWJLQYWfAAW5TGnrWVidAJJ0A6k7CvTLnBytnuYICFVLTuTlQGIg7K3oDFc/yWTyun45flUvfyl3W2zkjOYUlo0Cg6eFQMonlJ6xWVuXXvOrGXdmUADc8lVRr5CtHxe++GS4rAk3w1saiLY3OnLMH0PPux0qi4LxBbN0XSJKjw+KMpOmbYzpPzpwkzTnbuH8OXMsaSzb5tYMCY9q0OJ4ibQEoVY5cilTGpEALvsGA5VUdk+HG7dVQMwVZbLzk5QJHUE/I1a9obJGLs23nvLhBIXYFmyLudNVY895qcstxeOyaY91soLIYCaNlfKFBGswRIAOs9KiW0zDMFuHqcghdfxHrrFTeOsbShfEoIVAcoO4ltC3PxH/caqHxtg2+6zXZ7wsW7u2Z0CgLLgrAXr+8fKLwy+w5eeVa8ODs7AI0AABQOZIJPmRl+tDxuLYP4FnSPhYkncfCR1FTOzuHhG7vvWLjKCyKMmYiG+NuYUgzVRhuM2VYMVdwDOyjSfXbX8qz83z1d8/Sy+z57Ny41xRkMFcrZviTKGBMrJaQIM5W5CaqvtAJaFPKNBJ+mlP41x0XlUWxcTISSMylJMksFic2sTJ0AGlUounXUn510kc7VjcbyBPmYmTrp8qV91XfKZPmT9RUCG86aS46/KrhqeGXMDEzp5cvLSm3LgOynzLEAe2utQCxO7fMn8qY4HX5CmJo2MuAjQjen8NtTcLESBrH4idVWfPeeQBNRbr6QBtz/AOKseHYYO4zBlQQAP3m20B56Db0mg2DX8tq2FIIMt5MtlLlx28g1wp7AVlrOKEDQk+gq3xeJDm+BAFnCOgjk9yDA9AsVlBeMbmpItq47+eQHmco/OKg3pIeCNVywNz4lJ2/00Gze6CT/AH0qTgbg7xSyDLOuh2IO1Uavs74cZaXlaTKY/hyE/rVZjcane3PER94//wBjyNF7D8St96xdoulpAMZXUr4hPXy+VU3dliWyjqTr4idTpUXVnbKt8Lhvz/l3qWMSAp8IJAn/ALqkTLIhfXcRrtrvRhxOCQYKKDqfLkDv5dKmGpdviuoBCx6Gfzpl/Ftm8Ige1R7d5H1UwSRowG3Sdj703EMwOxgbDr59KCahzbmm49iltnADEdT5xsN96rWxTg7flQ1v3PidfByEqJJB9z61cTULJduNmM6c40HkByoxwkau+nh5+7A8vKiXMZcKQAF6AbgbSSfp6Gq9rRnxGPWedVElsWizkXnPltFBa/4ekk+ewH9fpXRhfP8AKmNZMbcztr0oAMPOfnXMtEyGuMkVUDIrlPR4rpAoLbs29pcVZa+SLSOHYgE/DLKIUE6sFHvWo7TdqrbtaawxYpcR2+MZlSTkbMBIJP0rHcOs57gUJ3mhOXNlkBST4uW0+1XF/h+S2XOF0UeI/aCY1/DHppWOXCW7WpysmLjtVxbC4iy4W6C4KNbHdXQTHhKkkQBlZtydvSHdmuK4Ozh7aXG8ZzG4O7ckMWbKM2Ug+HLVPg8LcVVLYVbgHiHiTxBs0BhlJIhhp/CKLg84Z0+yI7wjxmSVUoBoMsGSC3vU/wAp16tf6XdH7Gdokw2Je5eUhLupIkhDmLaqPiHiI020860+L7X4J7gY3CCtvKGFu4PEzfeD4JiFtx6Gs2quRmXA241k57ZBysxIHg6zpry5QKg8QtXL7m1bwqW3tRnhk1zgRqFUfnvU5fi48rqT8lg/FO0Av3rSmRYtuCSwJZhJlmiTsWAGp1PXSX2p49hrlgpaYs7MhYlCDCgsdSo1zBBppqap7XB3gK+HzOcxDd8FEDIPhHQuvz8qb+zSt22vcAMzhkBuSGVApZDy1g6n8URpWv8AOefw733+tO/HcDZwl+3YvO91rYt2/A4jRUBBKiIEnU/u+dYBQT5DryrYC3cG2AtHSNGtwSAqkgFSV1EwTzMzUPG33DGycGitdttkGZJXMbkNITQjXTTRBTjwnFOXK1nw4G2v0pG+egrS4yy/d3JwdtQF1IdBkyBySPDr1Mfh+WX708q2yJJOp+e1Bcec08Wyep9ASdieXofka4EP4SfY9YoBgUqMbDcwR7HoW5DoCfQE0KR5/lQNIq44Y+UhydSMiT+6iwHf3iB6npVQT5UXOWZR6D2H9k+9BdYtAuFuPsbtxT/tnw/QH61QqP7/AO6v+Ov90FH7rIPfK5P51nyakWjqY5gf35VzPznbp1oPeeX1/wCKcrjUFT7Nr+UfSqg/CcKzXE6M0NpJCz4jt0qTesNbdlLDMrZSBygx+lOweOCADKfDsSwkHyIWdgB7Cn4niIdYdc2sg5/EOUAlDp5eQqKi3MS8nQxt6UlxJ5iR5jT6UxXTkrj0uL/+VTMLkfQh+mtxSfb7mgj3L6zMH5/SKIcXlA1MH92AR8jU/iuFSyisBqWiSdRoTyAHLpVJcug0BftKjZNZ5HT5GaT415JnXTpppyjT/uovvT+6nn9KoJbxxAgydT/ZoGKvlzPIbUjZI5UMAjlRHUvECKeb+mwoTtNcO1A43jTHea5FHt4K4wlbbkHYhGIPuBQR67NHfBXVEm24A3JVgB7kUCKA8V2m5h1FLOOtUOrlczjrSzjrQOAq34PhLLJcNz4gVy+IjTn61T94OtczDqKg1OP4XhglwpPh7yJfmttmAiddRHtWYim5l8q6XHUUHRSJNczjqK5nHWqHRWr7GXcALeKOPUFMq92FgXe8kxkjxREyRptNZMOOormcdRWbNlhk+3oXZPieDt2snc34N5nzju+8KhYRX+8UNE3OWmaZ3q5wHE8CMtw27ysGEpJzMZeXXI+Qki8+bMR8bFdQFfyQlfKkGHlVwr1bD8ZwfhU2cUFQAA5lLMe7ZTmJvQGlkIPXfqPLFUACddOVNLjqK5mHUUBC45Cj8PYB5aoucdRTluiZkUFjxK5NsedzN/8AE/1FVdS8XiFKqJG55+QioeYdaDkU5abmHWkGHUUBSfOkWHWuC4PxCni5/GvyoOKw6gVIwd4ZhJ58hTbd3/8Aqo/2/wDFEs4uD/5vktFW3aG+O7SJ35j+Hz9az5fyFWXF8erKoD5oOsx0qqNweVSFP7zyH0rveUPOtczjrVQ+kXoeYdRSzjqKDpI6U0rSzjrXMw60CK19BdjeJ2P2Rgrf2rDI6K4dLl1AVm4SDlzghhy8ietfPmYVwkeVSyWZSPo3tjxiyeG49TjbFwvZyoou2y5Id9YDEliptjT8E8yB85UtPKuyKuLbb7QqVKlRCpUqVAqVKlQKlSpUCpUqVAqVKlQKlSpUCpUqVAqVKlQKlSpUCpUqVAqVKlQKlSpUCpUqVAqVKlQKlSpUCpUqVAqVKlQKlSpUH//Z",
    choices: [
      { text: "Follow the rails", next: "vaultGold" },
      { text: "Plant evidence and collapse it", next: "coverBlow" }
    ]
  },
  guardEncounter: {
    id: "guardEncounter",
    title: "Footsteps in Gravel",
    text: "A guard rounds the corner. Your flashlight beam freezes on his badge.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEumuEjAWdNZHEWtRe4ZIEaOerobkZhLGRyQ&s",
    choices: [
      { text: "Talk your way out", next: "escortOut" },
      { text: "Run!", next: "chaseCollapse" }
    ]
  },
  convoyYard: {
    id: "convoyYard",
    title: "Convoy Yard",
    text: "Trucks idle. A container is labeled only with a gold stencil. A manifest hangs loosely on a clipboard.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFDXW_AOCGY0w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673153971057?e=2147483647&v=beta&t=mLhN87BHJDUbtfBS6XOgJjO-UXymkez478JkihksMkk",
    choices: [
      { text: "Inspect the container", next: "goldDiversion" },
      { text: "Hide in a truck", next: "convoyEscape" }
    ]
  },
  helipadMeet: {
    id: "helipadMeet",
    title: "Helipad at Midnight",
    text: "Rotor wash stings your eyes. A figure offers a trade: your silence for the ledger’s location.",
    image: "https://i.ytimg.com/vi/VVqlCN6TJkw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgVihNMA8=&rs=AOn4CLAppB6AMTnRHWDiiA7L9NPz-WLVtQ",
    choices: [
      { text: "Accept the trade", next: "ledgerTrade" },
      { text: "Refuse and record", next: "broadcastExpose" }
    ]
  },
  safeFind: {
    id: "safeFind",
    title: "Ending • Paper Ledger",
    text: "The safe clicks open. A paper ledger documents every shadow deal. You disappear with it before dawn.",
    image: "https://i.ytimg.com/vi/VvJU_Up6H4Q/maxresdefault.jpg",
    ending: true
  },
  ventDrop: {
    id: "ventDrop",
    title: "Ending • Into the Unknown",
    text: "The vent drops you into a rolling ore chute. You emerge scraped but free—without proof.",
    image: "https://m.media-amazon.com/images/M/MV5BZjdlOGQyNzgtODIzZC00Mjk0LTk2ZWItMTkxOWI1MjhlNTc5XkEyXkFqcGc@._V1_.jpg",
    ending: true
  },
  vaultGold: {
    id: "vaultGold",
    title: "Ending • Veins of Fire",
    text: "The rails lead to a hidden vault: bars stacked like books. You choose the dangerous path—redistribution.",
    image: "https://wallpapers.com/images/thumbnail/kgf-chapter-2-dock-scene-nd21t5fage6056m6.webp",
    ending: true
  },
  coverBlow: {
    id: "coverBlow",
    title: "Ending • Burn the Trail",
    text: "You collapse the adit after scattering marked papers. Investigations begin; the ledger surfaces without your name.",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/06/kgf-chapter-3-after-srinidhi-shettys-exit-from-the-franchise-an-a-listed-bollywood-actress-to-romance-rocky-bhai-yash-in-next-001.jpg",
    ending: true
  },
  escortOut: {
    id: "escortOut",
    title: "Ending • Walk of Calm",
    text: "You flash a borrowed pass and a steady smile. The guard escorts you out. Not tonight—but you’ll be back.",
    image: "https://i.ytimg.com/vi/HsXpoTM2N8o/maxresdefault.jpg",
    ending: true
  },
  chaseCollapse: {
    id: "chaseCollapse",
    title: "Ending • Cave-In",
    text: "You sprint. The tunnel answers with a groan. Dust blooms; beams snap. You survive—but the trail goes cold.",
    image: "https://i.ytimg.com/vi/b3KkGErmiKo/maxresdefault.jpg",
    ending: true
  },
  goldDiversion: {
    id: "goldDiversion",
    title: "Ending • The Diversion",
    text: "The container holds smelted plates swapped for brass. Your photos trigger audits across the supply chain.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguLImSzVug9iGCgRPBzZUy8VwMYPKynpQ1A&s",
    ending: true
  },
  convoyEscape: {
    id: "convoyEscape",
    title: "Ending • Night Convoy",
    text: "Hidden under tarps, you ride out into the highway dark. A new lead, a new city, the hunt continues.",
    image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/odishatv/media/post_attachments/uploadimage/library/16_9/16_9_0/IMAGE_1630324158.jpg",
    ending: true
  },
  ledgerTrade: {
    id: "ledgerTrade",
    title: "Ending • Poisoned Deal",
    text: "The trade is a trap. A blank folder, a vanishing helicopter, a lesson etched by rotor thunder.",
    image: "https://pbs.twimg.com/media/FTLZds1aIAAvRDq.jpg",
    ending: true
  },
  broadcastExpose: {
    id: "broadcastExpose",
    title: "Ending • Open Air",
    text: "You stream the offer and the threats. By dawn, the story trends. Sunlight pries open old doors.",
    image: "https://bangaloremirror.indiatimes.com/photo/67189168.cms",
    ending: true
  }
};

const storyEl = document.getElementById('story');
const choicesEl = document.getElementById('choices');
const imageEl = document.getElementById('image');
const statusEl = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

function render(id){
  const node = NODES[id];
  currentNode = id;
  statusEl.textContent = node.ending ? "Stage: Ending" : `Stage: ${node.title}`;
  storyEl.innerHTML = `<h2 style="margin:0 0 .5rem 0">${node.title}</h2><p style="line-height:1.6">${node.text}</p>`;
  if(node.image){ imageEl.src = node.image; imageEl.alt = node.title; } else { imageEl.removeAttribute('src'); imageEl.alt = "No scene image"; }
  choicesEl.innerHTML = "";
  if(node.ending){
    const b = document.createElement('button'); b.className = 'choice'; b.textContent = 'Play again'; b.addEventListener('click', start); choicesEl.appendChild(b);
    return;
  }
  (node.choices||[]).forEach(ch=>{
    const btn = document.createElement('button'); btn.className = 'choice'; btn.textContent = ch.text; btn.addEventListener('click', ()=>render(ch.next)); choicesEl.appendChild(btn);
  });
}
function preloadImages(){
  const urls = Object.values(NODES).map(n=>n.image).filter(Boolean);
  urls.forEach(u=>{ const i=new Image(); i.src=u; });
}
function start(){ render('start'); preloadImages(); }
let currentNode = 'start';
restartBtn.addEventListener('click', start);
window.addEventListener('DOMContentLoaded', start);
