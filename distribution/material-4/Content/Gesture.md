# Gesture


```text
material-4/Content/Gesture
```

```text
include('material-4/Content/Gesture')
```



| Illustration | Gesture |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Gesture.png) | ![illustration for Gesture](../../material-4/Content/Gesture.Local.png) |




## Gesture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Gesture
include('material-4/Content/Gesture')

' renders the element
Gesture('Gesture', 'Gesture', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Gesture
include('material-4/Content/Gesture')

' renders the element
Gesture('Gesture', 'Gesture', 'an optional tech label')
@enduml
```

