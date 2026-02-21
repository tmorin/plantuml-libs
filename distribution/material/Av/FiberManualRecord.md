# FiberManualRecord


```text
material/Av/FiberManualRecord
```

```text
include('material/Av/FiberManualRecord')
```



| Illustration | FiberManualRecord |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FiberManualRecord.png) | ![illustration for FiberManualRecord](../../material/Av/FiberManualRecord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiberManualRecordXs>`
- `<$FiberManualRecordSm>`
- `<$FiberManualRecordMd>`
- `<$FiberManualRecordLg>`





## FiberManualRecord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FiberManualRecord
include('material/Av/FiberManualRecord')

' renders the element
FiberManualRecord('FiberManualRecord', 'Fiber Manual Record', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FiberManualRecord
include('material/Av/FiberManualRecord')

' renders the element
FiberManualRecord('FiberManualRecord', 'Fiber Manual Record', 'an optional tech label', 'an optional description')
@enduml
```

