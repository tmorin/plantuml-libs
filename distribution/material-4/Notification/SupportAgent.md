# SupportAgent


```text
material-4/Notification/SupportAgent
```

```text
include('material-4/Notification/SupportAgent')
```



| Illustration | SupportAgent |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SupportAgent.png) | ![illustration for SupportAgent](../../material-4/Notification/SupportAgent.Local.png) |




## SupportAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SupportAgent
include('material-4/Notification/SupportAgent')

' renders the element
SupportAgent('SupportAgent', 'Support Agent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SupportAgent
include('material-4/Notification/SupportAgent')

' renders the element
SupportAgent('SupportAgent', 'Support Agent', 'an optional tech label', 'an optional description')
@enduml
```

