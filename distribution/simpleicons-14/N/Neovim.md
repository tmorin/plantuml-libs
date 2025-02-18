# Neovim


```text
simpleicons-14/N/Neovim
```

```text
include('simpleicons-14/N/Neovim')
```



| Illustration | Neovim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Neovim.png) | ![illustration for Neovim](../../simpleicons-14/N/Neovim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeovimXs>`
- `<$NeovimSm>`
- `<$NeovimMd>`
- `<$NeovimLg>`





## Neovim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Neovim
include('simpleicons-14/N/Neovim')

' renders the element
Neovim('Neovim', 'Neovim', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Neovim
include('simpleicons-14/N/Neovim')

' renders the element
Neovim('Neovim', 'Neovim', 'an optional tech label', 'an optional description')
@enduml
```

