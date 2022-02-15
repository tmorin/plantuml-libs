# VimeoSquare


```text
fontawesome-6/Brands/VimeoSquare
```

```text
include('fontawesome-6/Brands/VimeoSquare')
```



| Illustration | VimeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/VimeoSquare.png) | ![illustration for VimeoSquare](../../fontawesome-6/Brands/VimeoSquare.Local.png) |




## VimeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome-6/Brands/VimeoSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VimeoSquare
include('fontawesome-6/Brands/VimeoSquare')

' renders the element
VimeoSquare('VimeoSquare', 'Vimeo Square', 'an optional tech label')
@enduml
```

