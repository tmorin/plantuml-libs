# MoreTime


```text
material-4/Communication/MoreTime
```

```text
include('material-4/Communication/MoreTime')
```



| Illustration | MoreTime |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/MoreTime.png) | ![illustration for MoreTime](../../material-4/Communication/MoreTime.Local.png) |




## MoreTime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MoreTime
include('material-4/Communication/MoreTime')

' renders the element
MoreTime('MoreTime', 'More Time', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoreTime
include('material-4/Communication/MoreTime')

' renders the element
MoreTime('MoreTime', 'More Time', 'an optional tech label', 'an optional description')
@enduml
```

