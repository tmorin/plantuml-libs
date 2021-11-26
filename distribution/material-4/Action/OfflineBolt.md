# OfflineBolt


```text
material-4/Action/OfflineBolt
```

```text
include('material-4/Action/OfflineBolt')
```



| Illustration | OfflineBolt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OfflineBolt.png) | ![illustration for OfflineBolt](../../material-4/Action/OfflineBolt.Local.png) |




## OfflineBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OfflineBolt
include('material-4/Action/OfflineBolt')

' renders the element
OfflineBolt('OfflineBolt', 'Offline Bolt', 'an optional tech label')
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

' loads the Item which embeds the element OfflineBolt
include('material-4/Action/OfflineBolt')

' renders the element
OfflineBolt('OfflineBolt', 'Offline Bolt', 'an optional tech label')
@enduml
```

