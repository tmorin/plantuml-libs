# System


```text
c4model/Element/System
```

```text
include('c4model/Element/System')
```



| System |
| :---: |
| ![illustration for System](../../c4model/Element/System.Local.png) |







## System

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element System
include('c4model/Element/System')

System('System', 'System', 'an optional description label', 'an optional tech label')
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
include('c4model/bootstrap')

' loads the Item which embeds the element System
include('c4model/Element/System')

System('System', 'System', 'an optional description label', 'an optional tech label')
@enduml
```

