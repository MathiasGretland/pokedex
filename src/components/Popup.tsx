import { Modal } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faHammer, faHeart, faShield, faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { IPokemon } from '../api/pokemon';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface PopupProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: IPokemon;
}

const Popup = (props: PopupProps) => {
    const { open, setOpen,  data} = props;

    const [selectedImage, setSelectedImage] = useState(data.sprites?.front_default)

    const newImageHandler = () => {
        switch(selectedImage) {
            case data.sprites.front_default:
                setSelectedImage(data.sprites.back_default);
                break;
            case data.sprites.back_default:
                setSelectedImage(data.sprites.front_shiny);
                break;
            case data.sprites.front_shiny:
                setSelectedImage(data.sprites.back_shiny);
                break;
            case data.sprites.back_shiny:
                setSelectedImage(data.sprites.front_default);
                break;
            default:
                setSelectedImage(data.sprites.front_default);
        }
    }
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{mr: 60, ml: 60, mt: 20, background: "rgb(255, 255, 255)", overflow: "hidden", overflowY: "auto", backgroundImage: "linear-gradient( to top, #e6b980 0%, #eacda3 100%)" }}>
                <Typography variant="h1" fontSize={"50px"} sx={{ WebkitTextStrokeWidth: '3px', WebkitTextStrokeColor: 'black', color: 'white', textAlign: 'center'}}>{data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}</Typography>
                <Button onClick={newImageHandler} variant="outlined" style={{display: "block", margin: "0 auto"}} >Next-Picture</Button>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} mt={3} mb={3}>
                    <Box sx={{padding: "10px", background:"rgb(255,255,255)", maxWidth: "20rem", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", borderRadius: "25px"}}>
                        <Box display={"flex"} justifyContent={"flex-start"} flexDirection={"column"}>
                            <h3><FontAwesomeIcon icon={faHeart} />HP</h3>
                            <h3><FontAwesomeIcon icon={faHammer} />ATTACK</h3>
                            <h3><FontAwesomeIcon icon={faShield} /> DEFENSE</h3>
                            <h3><FontAwesomeIcon icon={faWandMagicSparkles} />SPECIAL ATTACK</h3>
                            <h3><FontAwesomeIcon icon={faShieldHalved} />SPECIAL DEFENSE</h3>
                            <h3><FontAwesomeIcon icon={faGaugeHigh} />SPEED</h3>
                        </Box>
                        <Box display={"flex"} justifyContent={"flex-start"} flexDirection={"column"}>
                            <h3>{data.stats[0].base_stat}</h3>
                            <h3>{data.stats[1].base_stat}</h3>
                            <h3>{data.stats[2].base_stat}</h3>
                            <h3>{data.stats[3].base_stat}</h3>
                            <h3>{data.stats[4].base_stat}</h3>
                            <h3>{data.stats[5].base_stat}</h3>
                        </Box>
                    </Box>
                    <Box maxWidth={"100%"} >
                        <img src={selectedImage} alt={data.species.name} style={{width: "200%"}}/>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default Popup