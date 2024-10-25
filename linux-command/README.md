## Linux 
To change the permissions of a file so that only the owner can read and write to it, we can use the chmod command in a Unix-like operating system.

Command:
```sh
chmod 600 <filename>
```
### Explanation:
* chmod: Command to change file permissions.
* 600: Sets the permissions so that:
* The owner has read (4) and write (2) permissions, totaling 6.
* Group and others have no permissions (0).
* filename: Replace this with the actual name of the file you want to modify.
* This command ensures that only the file owner can read and write the file, keeping it secure from other users.

## Step-by-Step Example
### Check the current permissions:

To see the current permissions of example.txt, use:
```sh
ls -l styles.css
```
This output looks like:
```sh
-rw-r--r--@ 1 maxy  staff  1361 Oct 25 10:53 styles.css
```
Here, **-rw-r--r--** indicates that the owner has read and write permissions, while group and others have read permissions.
### Change the permissions:

Use chmod 600 to restrict permissions so that only the owner has read and write access:
```sh
chmod 600 styles.css
```
### Verify the permissions:

Run ls -l example.txt again to confirm the change:
```sh
ls -l styles.css
```
The output should now show:
```sh
-rw-------@ 1 maxy  staff  1361 Oct 25 10:53 styles.css
```
**-rw-------** means that only the owner can read and write to the file, while the group and others have no access.

This command ensures that only the file’s owner can read and write to styles.css, keeping it private and secure from other users.