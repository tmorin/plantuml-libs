# BorderBottom


```text
material-4/Editor/BorderBottom
```

```text
include('material-4/Editor/BorderBottom')
```



| Illustration | BorderBottom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderBottom.png) | ![illustration for BorderBottom](../../material-4/Editor/BorderBottom.Local.png) |




## BorderBottom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderBottom
include('material-4/Editor/BorderBottom')

' renders the element
BorderBottom('BorderBottom', 'Border Bottom', 'an optional tech label')
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

' loads the Item which embeds the element BorderBottom
include('material-4/Editor/BorderBottom')

' renders the element
BorderBottom('BorderBottom', 'Border Bottom', 'an optional tech label')
@enduml
```

