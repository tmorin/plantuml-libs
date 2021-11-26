# BorderInner


```text
material-4/Editor/BorderInner
```

```text
include('material-4/Editor/BorderInner')
```



| Illustration | BorderInner |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderInner.png) | ![illustration for BorderInner](../../material-4/Editor/BorderInner.Local.png) |




## BorderInner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderInner
include('material-4/Editor/BorderInner')

' renders the element
BorderInner('BorderInner', 'Border Inner', 'an optional tech label')
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

' loads the Item which embeds the element BorderInner
include('material-4/Editor/BorderInner')

' renders the element
BorderInner('BorderInner', 'Border Inner', 'an optional tech label')
@enduml
```

