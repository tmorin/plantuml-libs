# Sketch


```text
simpleicons-8/S/Sketch
```

```text
include('simpleicons-8/S/Sketch')
```



| Illustration | Sketch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sketch.png) | ![illustration for Sketch](../../simpleicons-8/S/Sketch.Local.png) |




## Sketch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sketch
include('simpleicons-8/S/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sketch
include('simpleicons-8/S/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label', 'an optional description')
@enduml
```

