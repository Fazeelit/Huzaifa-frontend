"use client";

import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "./authStorage";
import { getCrudPermissions, hasPermission, parseStoredPermissions } from "./permissions";

export const usePermissions = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    setPermissions(parseStoredPermissions());

    const sync = () => setPermissions(parseStoredPermissions());
    return onAuthStateChanged(sync);
  }, []);

  const can = useMemo(
    () => (permission) => hasPermission(permission, permissions),
    [permissions]
  );

  const crud = useMemo(
    () => (moduleKey) => getCrudPermissions(moduleKey, permissions),
    [permissions]
  );

  return { permissions, can, crud };
};
