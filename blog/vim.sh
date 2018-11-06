#!/bin/bash
echo 'Creating vim dir'
mkdir ~/.vim/repo -p
echo 'Installing theme'
git clone https://github.com/morhetz/gruvbox.git ~/.vim/pack/default/start/gruvbox
echo -e \
	'colorscheme gruvbox \n' \
	'set background=dark \n' > ~/.vimrc
echo 'Installing airline...'
git clone https://github.com/vim-airline/vim-airline ~/.vim/pack/dist/start/vim-airline
