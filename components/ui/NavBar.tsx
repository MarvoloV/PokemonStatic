import { useTheme, Text, Spacer, Link as LinkUi } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la pagina"
        width={70}
        height={70}
      />
      <Link href="/" passHref>
        <LinkUi>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </LinkUi>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" passHref>
        <LinkUi>
          <Text color="white">Favoritos</Text>
        </LinkUi>
      </Link>
    </div>
  );
};
