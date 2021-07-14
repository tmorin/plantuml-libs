# CancelScheduleSend


```text
material-4/Action/CancelScheduleSend
```

```text
include('material-4/Action/CancelScheduleSend')
```



| Illustration | CancelScheduleSend |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CancelScheduleSend.png) | ![illustration for CancelScheduleSend](../../material-4/Action/CancelScheduleSend.Local.png) |




## CancelScheduleSend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CancelScheduleSend
include('material-4/Action/CancelScheduleSend')

' renders the element
CancelScheduleSend('CancelScheduleSend', 'Cancel Schedule Send', 'an optional tech label')
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

' loads the Item which embeds the element CancelScheduleSend
include('material-4/Action/CancelScheduleSend')

' renders the element
CancelScheduleSend('CancelScheduleSend', 'Cancel Schedule Send', 'an optional tech label')
@enduml
```

