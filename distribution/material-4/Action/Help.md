# Help


```text
material-4/Action/Help
```

```text
include('material-4/Action/Help')
```



| Illustration | Help |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Help.png) | ![illustration for Help](../../material-4/Action/Help.Local.png) |




## Help

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Help
include('material-4/Action/Help')

' renders the element
Help('Help', 'Help', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Help
include('material-4/Action/Help')

' renders the element
Help('Help', 'Help', 'an optional tech label', 'an optional description')
@enduml
```

