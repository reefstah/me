# Vim as an IDE

Setting up vim dir
```sh
echo 'Creating vim dir'
mkdir ~/.vim/repo -p
```

[gruvbox](https://github.com/morhetz/gruvbox) colorscheme
```sh
echo 'Installing colorscheme'
git clone https://github.com/morhetz/gruvbox.git ~/.vim/pack/default/start/gruvbox
echo -e \
	'colorscheme gruvbox \n' \
	'set background=dark \n' > ~/.vimrc
```

Installing [vim-airline](https://github.com/vim-airline/vim-airline)
```sh
echo 'Installing airline...'
git clone https://github.com/vim-airline/vim-airline ~/.vim/pack/dist/start/vim-airline
```
