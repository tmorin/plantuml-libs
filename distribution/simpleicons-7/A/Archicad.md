# Archicad


```text
simpleicons-7/A/Archicad
```

```text
include('simpleicons-7/A/Archicad')
```



| Illustration | Archicad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Archicad.png) | ![illustration for Archicad](../../simpleicons-7/A/Archicad.Local.png) |




## Archicad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Archicad
include('simpleicons-7/A/Archicad')

' renders the element
Archicad('Archicad', 'Archicad', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Archicad
include('simpleicons-7/A/Archicad')

' renders the element
Archicad('Archicad', 'Archicad', 'an optional tech label')
@enduml
```

