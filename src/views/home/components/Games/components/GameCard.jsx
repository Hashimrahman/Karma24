import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => navigate(`/games/${game.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item"
      style={{
        backgroundImage: `url(${game.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white font-bold font-retroTeam text-3xl sm:text-5xl">
        {game.title}
      </h3>
    </motion.div>
  );
};

export default GameCard;
