# Inkscape


```text
simpleicons-5/I/Inkscape
```

```text
include('simpleicons-5/I/Inkscape')
```



| Illustration | Inkscape |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Inkscape.png) | ![illustration for Inkscape](../../simpleicons-5/I/Inkscape.Local.png) |




## Inkscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Inkscape
include('simpleicons-5/I/Inkscape')

' renders the element
Inkscape('Inkscape', 'Inkscape', 'an optional tech label')
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

' loads the Item which embeds the element Inkscape
include('simpleicons-5/I/Inkscape')

' renders the element
Inkscape('Inkscape', 'Inkscape', 'an optional tech label')
@enduml
```

