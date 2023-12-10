"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("de62efed-4161-49a6-8c5d-0eadc0dc0819");
  }, []);

  return null;
};
