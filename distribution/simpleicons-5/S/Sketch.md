# Sketch


```text
simpleicons-5/S/Sketch
```

```text
include('simpleicons-5/S/Sketch')
```



| Illustration | Sketch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sketch.png) | ![illustration for Sketch](../../simpleicons-5/S/Sketch.Local.png) |




## Sketch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sketch
include('simpleicons-5/S/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label')
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

' loads the Item which embeds the element Sketch
include('simpleicons-5/S/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label')
@enduml
```

