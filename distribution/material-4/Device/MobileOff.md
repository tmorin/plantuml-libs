# MobileOff


```text
material-4/Device/MobileOff
```

```text
include('material-4/Device/MobileOff')
```



| Illustration | MobileOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/MobileOff.png) | ![illustration for MobileOff](../../material-4/Device/MobileOff.Local.png) |




## MobileOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MobileOff
include('material-4/Device/MobileOff')

' renders the element
MobileOff('MobileOff', 'Mobile Off', 'an optional tech label')
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

' loads the Item which embeds the element MobileOff
include('material-4/Device/MobileOff')

' renders the element
MobileOff('MobileOff', 'Mobile Off', 'an optional tech label')
@enduml
```

