# LiveHelp


```text
material-4/Communication/LiveHelp
```

```text
include('material-4/Communication/LiveHelp')
```



| Illustration | LiveHelp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/LiveHelp.png) | ![illustration for LiveHelp](../../material-4/Communication/LiveHelp.Local.png) |




## LiveHelp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LiveHelp
include('material-4/Communication/LiveHelp')

' renders the element
LiveHelp('LiveHelp', 'Live Help', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LiveHelp
include('material-4/Communication/LiveHelp')

' renders the element
LiveHelp('LiveHelp', 'Live Help', 'an optional tech label', 'an optional description')
@enduml
```

