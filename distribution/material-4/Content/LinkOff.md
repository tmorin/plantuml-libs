# LinkOff


```text
material-4/Content/LinkOff
```

```text
include('material-4/Content/LinkOff')
```



| Illustration | LinkOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/LinkOff.png) | ![illustration for LinkOff](../../material-4/Content/LinkOff.Local.png) |




## LinkOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LinkOff
include('material-4/Content/LinkOff')

' renders the element
LinkOff('LinkOff', 'Link Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinkOff
include('material-4/Content/LinkOff')

' renders the element
LinkOff('LinkOff', 'Link Off', 'an optional tech label', 'an optional description')
@enduml
```

