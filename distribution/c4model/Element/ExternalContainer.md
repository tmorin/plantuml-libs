# ExternalContainer


```text
c4model/Element/ExternalContainer
```

```text
include('c4model/Element/ExternalContainer')
```



| ExternalContainer |
| :---: |
| ![illustration for ExternalContainer](../../c4model/Element/ExternalContainer.Local.png) |







## ExternalContainer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element ExternalContainer
include('c4model/Element/ExternalContainer')

ExternalContainer('ExternalContainer', 'External Container', 'an optional description label', 'an optional tech label')
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

' loads the Item which embeds the element ExternalContainer
include('c4model/Element/ExternalContainer')

ExternalContainer('ExternalContainer', 'External Container', 'an optional description label', 'an optional tech label')
@enduml
```

