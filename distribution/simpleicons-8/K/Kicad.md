# Kicad


```text
simpleicons-8/K/Kicad
```

```text
include('simpleicons-8/K/Kicad')
```



| Illustration | Kicad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kicad.png) | ![illustration for Kicad](../../simpleicons-8/K/Kicad.Local.png) |




## Kicad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kicad
include('simpleicons-8/K/Kicad')

' renders the element
Kicad('Kicad', 'Kicad', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kicad
include('simpleicons-8/K/Kicad')

' renders the element
Kicad('Kicad', 'Kicad', 'an optional tech label', 'an optional description')
@enduml
```

