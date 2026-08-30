
# Terminal Basics — Notes

## Different Terms

- **Command Line:** Text-based interface jahan commands type karke computer ko instructions dete hain.
- **Terminal:** Woh application/window jisme command line use hoti hai.
- **Console:** Terminal jaisa hi interface; aksar terminal ke liye interchangeably use hota hai.
- **Shell:** Program jo tumhari command ko samajhkar operating system tak pahunchata hai.
- **Bash:** Ek popular shell. Git Bash mein Bash shell use hota hai.
- **Zsh (Z Shell):** Bash ka alternative shell, extra customization ke saath.

## Basic Commands

### `pwd`

Current folder ka full path dikhata hai.

```bash
pwd
```

### `ls`

Current folder ke andar ki files aur folders dikhata hai.

```bash
ls
```

Useful flags:

```bash
ls -l    # Details ke saath list
ls -a    # Hidden files bhi dikhata hai
ls -la   # Details + hidden files
```

### `clear`

Terminal screen ko clean karta hai.

```bash
clear
```

### Up Arrow / Down Arrow

- **Up Arrow:** Pehle chalayi hui command wapas laata hai.
- **Down Arrow:** History mein next command par le jaata hai.

## Navigation

### `cd`

Ek folder se doosre folder mein jaane ke liye.

```bash
cd folder-name
```

Example:

```bash
cd JAVASCRIPT
```

### `cd ..`

Current folder se ek level bahar/parent folder mein jaane ke liye.

```bash
cd ..
```

### `cd ~`

Home folder mein jaane ke liye.

```bash
cd ~
```

## Paths

- **Absolute Path:** Computer ke root se complete path.

```bash
cd /c/Users/MOHIT\ KUMAR/Documents
```

- **Relative Path:** Current folder ke according path.

```bash
cd JAVASCRIPT/DAY01
```

Agar folder name mein space ho, to quotes use karo:

```bash
cd "My Folder"
```

## Making Directories

### `mkdir`

Naya folder/directory banata hai.

```bash
mkdir TERMINAL
```

Ek saath multiple folders:

```bash
mkdir DAY01 DAY02 DAY03
```

Nested folders banane ke liye:

```bash
mkdir -p TERMINAL/DAY01
```

## Flags

Flags commands ke extra options hote hain. Usually `-` ke saath likhe jaate hain.

```bash
ls -l
```

Yahan `-l` ek flag hai jo files ki detailed list dikhata hai.

## Touch Command

### `touch`

Nayi empty file banata hai.

```bash
touch notes.md
```

Multiple files:

```bash
touch index.html style.css app.js
```

## Deleting Files and Folders

### `rm`

File delete karta hai.

```bash
rm notes.md
```

### `rmdir`

Empty folder delete karta hai.

```bash
rmdir old-folder
```

### `rm -r`

Folder aur uske andar ki files delete karta hai.

```bash
rm -r old-folder
```

> `rm` aur especially `rm -r` carefully use karo—delete hui files normally Recycle Bin mein nahi jaati.