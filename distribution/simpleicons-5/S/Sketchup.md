# Sketchup


```text
simpleicons-5/S/Sketchup
```

```text
include('simpleicons-5/S/Sketchup')
```



| Illustration | Sketchup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sketchup.png) | ![illustration for Sketchup](../../simpleicons-5/S/Sketchup.Local.png) |




## Sketchup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sketchup
include('simpleicons-5/S/Sketchup')

' renders the element
Sketchup('Sketchup', 'Sketchup', 'an optional tech label')
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

' loads the Item which embeds the element Sketchup
include('simpleicons-5/S/Sketchup')

' renders the element
Sketchup('Sketchup', 'Sketchup', 'an optional tech label')
@enduml
```

