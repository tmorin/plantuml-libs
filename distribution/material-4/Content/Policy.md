# Policy


```text
material-4/Content/Policy
```

```text
include('material-4/Content/Policy')
```



| Illustration | Policy |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Policy.png) | ![illustration for Policy](../../material-4/Content/Policy.Local.png) |




## Policy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Policy
include('material-4/Content/Policy')

' renders the element
Policy('Policy', 'Policy', 'an optional tech label')
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

' loads the Item which embeds the element Policy
include('material-4/Content/Policy')

' renders the element
Policy('Policy', 'Policy', 'an optional tech label')
@enduml
```

