# VimeoSquare


```text
fontawesome-5/Brands/VimeoSquare
```

```text
include('fontawesome-5/Brands/VimeoSquare')
```



| Illustration | VimeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/VimeoSquare.png) | ![illustration for VimeoSquare](../../fontawesome-5/Brands/VimeoSquare.Local.png) |




## VimeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome-5/Brands/VimeoSquare')

' renders the element
VimeoSquare('VimeoSquare', 'Vimeo Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome-5/Brands/VimeoSquare')

' renders the element
VimeoSquare('VimeoSquare', 'Vimeo Square', 'an optional tech label')
@enduml
```

