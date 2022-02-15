# Aseprite


```text
simpleicons-6/A/Aseprite
```

```text
include('simpleicons-6/A/Aseprite')
```



| Illustration | Aseprite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aseprite.png) | ![illustration for Aseprite](../../simpleicons-6/A/Aseprite.Local.png) |




## Aseprite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aseprite
include('simpleicons-6/A/Aseprite')

' renders the element
Aseprite('Aseprite', 'Aseprite', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aseprite
include('simpleicons-6/A/Aseprite')

' renders the element
Aseprite('Aseprite', 'Aseprite', 'an optional tech label')
@enduml
```

