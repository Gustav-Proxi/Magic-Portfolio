"use client";
import React from "react";
import { Heading, Flex, Text, Button, Avatar, Column } from "@/once-ui/components";
import { about, person } from "@/app/resources/content";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <Flex fillHeight horizontal="center" vertical="center" padding="l">
      <Column maxWidth="m" gap="l" horizontal="center" style={{ textAlign: 'center' }}>
        <Heading wrap="balance" variant="display-strong-l">
          <TypeAnimation sequence={[
            'Design Engineer & Builder', 1000, 'AI/ML Developer', 1000, 
            'Data Science Enthusiast', 1000, 'Problem Solver', 1000, 
            'LLM Whisperer 🤫', 1000, 'Neural Net Tamer 🧠', 1000, 
            'Token Sorcerer ✨', 1000, 'Lost in Tensors ☕', 1000
          ]} speed={70} cursor={true} repeat={10} />
        </Heading>
        
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ textAlign: 'center', width: '100%', maxWidth: '800px' }}>
          Hey 👋, I'm Vaishak, an AI/ML developer passionate about building intelligent systems. 
          When I'm not coding, I'm exploring the world of generative AI or debugging life's mysteries.
        </Text>
        <Button id="about" data-border="rounded" href="/about" variant="secondary" size="l" arrowIcon>
          <Flex gap="8" vertical="center">
            {about.avatar.display && <Avatar style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }} src={person.avatar} size="m" />}
            {about.title}
          </Flex>
        </Button>
      </Column>
    </Flex>
  );
}