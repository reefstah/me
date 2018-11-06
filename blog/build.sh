#!/bin/bash

echo '#!/bin/bash' > vim.sh
sed -nr '/```sh/,/```/{//b;p}' vim.md >> vim.sh
