# ResetTv


```text
material-4/Device/ResetTv
```

```text
include('material-4/Device/ResetTv')
```



| Illustration | ResetTv |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/ResetTv.png) | ![illustration for ResetTv](../../material-4/Device/ResetTv.Local.png) |




## ResetTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ResetTv
include('material-4/Device/ResetTv')

' renders the element
ResetTv('ResetTv', 'Reset Tv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ResetTv
include('material-4/Device/ResetTv')

' renders the element
ResetTv('ResetTv', 'Reset Tv', 'an optional tech label', 'an optional description')
@enduml
```

