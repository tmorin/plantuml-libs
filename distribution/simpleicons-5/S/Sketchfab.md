# Sketchfab


```text
simpleicons-5/S/Sketchfab
```

```text
include('simpleicons-5/S/Sketchfab')
```



| Illustration | Sketchfab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sketchfab.png) | ![illustration for Sketchfab](../../simpleicons-5/S/Sketchfab.Local.png) |




## Sketchfab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sketchfab
include('simpleicons-5/S/Sketchfab')

' renders the element
Sketchfab('Sketchfab', 'Sketchfab', 'an optional tech label')
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

' loads the Item which embeds the element Sketchfab
include('simpleicons-5/S/Sketchfab')

' renders the element
Sketchfab('Sketchfab', 'Sketchfab', 'an optional tech label')
@enduml
```

