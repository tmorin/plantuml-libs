# FiberManualRecord


```text
material-4/Av/FiberManualRecord
```

```text
include('material-4/Av/FiberManualRecord')
```



| Illustration | FiberManualRecord |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FiberManualRecord.png) | ![illustration for FiberManualRecord](../../material-4/Av/FiberManualRecord.Local.png) |




## FiberManualRecord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FiberManualRecord
include('material-4/Av/FiberManualRecord')

' renders the element
FiberManualRecord('FiberManualRecord', 'Fiber Manual Record', 'an optional tech label')
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

' loads the Item which embeds the element FiberManualRecord
include('material-4/Av/FiberManualRecord')

' renders the element
FiberManualRecord('FiberManualRecord', 'Fiber Manual Record', 'an optional tech label')
@enduml
```

