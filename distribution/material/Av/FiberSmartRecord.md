# FiberSmartRecord


```text
material/Av/FiberSmartRecord
```

```text
include('material/Av/FiberSmartRecord')
```



| Illustration | FiberSmartRecord |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/FiberSmartRecord.png) | ![illustration for FiberSmartRecord](../../material/Av/FiberSmartRecord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiberSmartRecordXs>`
- `<$FiberSmartRecordSm>`
- `<$FiberSmartRecordMd>`
- `<$FiberSmartRecordLg>`





## FiberSmartRecord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FiberSmartRecord
include('material/Av/FiberSmartRecord')

' renders the element
FiberSmartRecord('FiberSmartRecord', 'Fiber Smart Record', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FiberSmartRecord
include('material/Av/FiberSmartRecord')

' renders the element
FiberSmartRecord('FiberSmartRecord', 'Fiber Smart Record', 'an optional tech label', 'an optional description')
@enduml
```

