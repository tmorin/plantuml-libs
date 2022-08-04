# Work


```text
material-4/Action/Work
```

```text
include('material-4/Action/Work')
```



| Illustration | Work |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Work.png) | ![illustration for Work](../../material-4/Action/Work.Local.png) |




## Work

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Work
include('material-4/Action/Work')

' renders the element
Work('Work', 'Work', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Work
include('material-4/Action/Work')

' renders the element
Work('Work', 'Work', 'an optional tech label', 'an optional description')
@enduml
```

