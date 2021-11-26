# FiberPin


```text
material-4/Av/FiberPin
```

```text
include('material-4/Av/FiberPin')
```



| Illustration | FiberPin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FiberPin.png) | ![illustration for FiberPin](../../material-4/Av/FiberPin.Local.png) |




## FiberPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FiberPin
include('material-4/Av/FiberPin')

' renders the element
FiberPin('FiberPin', 'Fiber Pin', 'an optional tech label')
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

' loads the Item which embeds the element FiberPin
include('material-4/Av/FiberPin')

' renders the element
FiberPin('FiberPin', 'Fiber Pin', 'an optional tech label')
@enduml
```

