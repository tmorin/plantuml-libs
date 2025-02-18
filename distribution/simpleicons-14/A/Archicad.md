# Archicad


```text
simpleicons-14/A/Archicad
```

```text
include('simpleicons-14/A/Archicad')
```



| Illustration | Archicad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Archicad.png) | ![illustration for Archicad](../../simpleicons-14/A/Archicad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchicadXs>`
- `<$ArchicadSm>`
- `<$ArchicadMd>`
- `<$ArchicadLg>`





## Archicad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Archicad
include('simpleicons-14/A/Archicad')

' renders the element
Archicad('Archicad', 'Archicad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Archicad
include('simpleicons-14/A/Archicad')

' renders the element
Archicad('Archicad', 'Archicad', 'an optional tech label', 'an optional description')
@enduml
```

