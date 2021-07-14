# Neovim


```text
simpleicons-5/N/Neovim
```

```text
include('simpleicons-5/N/Neovim')
```



| Illustration | Neovim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Neovim.png) | ![illustration for Neovim](../../simpleicons-5/N/Neovim.Local.png) |




## Neovim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Neovim
include('simpleicons-5/N/Neovim')

' renders the element
Neovim('Neovim', 'Neovim', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Neovim
include('simpleicons-5/N/Neovim')

' renders the element
Neovim('Neovim', 'Neovim', 'an optional tech label')
@enduml
```

