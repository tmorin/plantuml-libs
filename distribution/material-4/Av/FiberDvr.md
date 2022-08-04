# FiberDvr


```text
material-4/Av/FiberDvr
```

```text
include('material-4/Av/FiberDvr')
```



| Illustration | FiberDvr |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FiberDvr.png) | ![illustration for FiberDvr](../../material-4/Av/FiberDvr.Local.png) |




## FiberDvr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FiberDvr
include('material-4/Av/FiberDvr')

' renders the element
FiberDvr('FiberDvr', 'Fiber Dvr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FiberDvr
include('material-4/Av/FiberDvr')

' renders the element
FiberDvr('FiberDvr', 'Fiber Dvr', 'an optional tech label', 'an optional description')
@enduml
```

