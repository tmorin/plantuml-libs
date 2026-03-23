# VimeoSquare


```text
fontawesome/Brands/VimeoSquare
```

```text
include('fontawesome/Brands/VimeoSquare')
```



| Illustration | VimeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/VimeoSquare.png) | ![illustration for VimeoSquare](../../fontawesome/Brands/VimeoSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VimeoSquareXs>`
- `<$VimeoSquareSm>`
- `<$VimeoSquareMd>`
- `<$VimeoSquareLg>`





## VimeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome/Brands/VimeoSquare')

' renders the element
VimeoSquare('VimeoSquare', 'Vimeo Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome/Brands/VimeoSquare')

' renders the element
VimeoSquare('VimeoSquare', 'Vimeo Square', 'an optional tech label', 'an optional description')
@enduml
```

