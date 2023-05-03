import {
  Badge,
  Box,
  Group,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { BrandGithub, Link, Star } from "tabler-icons-react";
import { getTagColor } from "../utils/getTagColor";

// ------------------------------------------------------

type CardProps = {
  title: string;
  description: string;
  url: string;
  stargazers_count: number;
  forks_count: number;
  language1: string | string[];
  created_at: string;
};

export default function Card({
  title,
  description,
  url,
  stargazers_count,
  forks_count,
  language1,
  created_at,
}: CardProps) {
  const handleLinkClick = (e: any, link: any) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.md,
          maxHeight: 175,
          minHeight: 150,
          borderRadius: 25,
          // marginTop: theme.spacing.sm,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          boxShadow: `${theme.shadows.md} !important`,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.white[0],
        })}
        onClick={(e: any) => handleLinkClick(e, url)}
      >
        <Group>
          <Group>
            <Group>
              <BrandGithub />
              <Text size="md">{title}</Text>
              <Link />
            </Group>
            <Group position="apart">
              <Group>
                {forks_count && <Group>{forks_count}</Group>}
                <Group>{stargazers_count}</Group>
              </Group>
              {language1 && (
                <>
                  {Array.isArray(language1) ? (
                    language1.map((lang) => (
                      <Badge key={lang} color={getTagColor(lang)} size="md">
                        <Text size="xs">{lang}</Text>
                      </Badge>
                    ))
                  ) : (
                    <Badge color={getTagColor(language1)} size="md">
                      <Text size="xs">{language1}</Text>
                    </Badge>
                  )}
                </>
              )}
            </Group>
          </Group>
          <Star size={18} color={"orange"} />
          <Text lineClamp={2}>
            <TypographyStylesProvider>
              <Text size="xs">{description}</Text>
            </TypographyStylesProvider>
          </Text>
        </Group>
      </Box>
    </motion.div>
  );
}
