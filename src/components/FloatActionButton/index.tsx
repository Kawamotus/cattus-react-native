import { FloatingButton } from "./styles";
import { useTheme } from "@themes";
import { TouchableOpacityProps } from "react-native";
import React from "react";
import { View } from "react-native";
import { ListFilter, Menu, Plus, Search, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export const FloatActionButton = ({ ...rest }: TouchableOpacityProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      {menuOpen && (
        <>
          <FloatingButton
            bottom='100px'
            right='20px'
            onPress={() => navigation.navigate("petRegister")}>
            <Plus size={24} color={theme.text} />
          </FloatingButton>
          <FloatingButton
            bottom='170px'
            right='20px'
            onPress={() => navigation.navigate("petSearch")}>
            <Search color={theme.text} size={24} />
          </FloatingButton>
          <FloatingButton
            bottom='240px'
            right='20px'
            onPress={() => alert("Opção 3")}>
            <ListFilter size={24} color={theme.text} />
          </FloatingButton>
        </>
      )}

      <FloatingButton onPress={toggleMenu}>
        {!menuOpen ? (
          <Menu color={theme.text} size={24} />
        ) : (
          <X color={theme.text} size={24} />
        )}
      </FloatingButton>
    </View>
  );
};
