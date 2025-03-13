<template>
  <header class="mt-4 mb-4 relative z-10 flex justify-between items-end">
    <div>
      <p class="text-2xl font-semibold">
        <NuxtLink to="/">Blogee</NuxtLink>
      </p>
    </div>
    <div class="flex">
      <!-- <Minisearch /> -->
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline" class="h-8">Search</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right"> Username </Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <Moon
          :size="16"
          @click="colorMode.preference = 'dark'"
          class="icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Sun
          :size="16"
          @click="colorMode.preference = 'light'"
          class="icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  </header>
</template>
<script setup>
import { Moon, Sun } from "lucide-vue-next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const colorMode = useColorMode();
</script>
<style></style>
