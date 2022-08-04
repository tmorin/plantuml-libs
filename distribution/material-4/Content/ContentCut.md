# ContentCut


```text
material-4/Content/ContentCut
```

```text
include('material-4/Content/ContentCut')
```



| Illustration | ContentCut |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/ContentCut.png) | ![illustration for ContentCut](../../material-4/Content/ContentCut.Local.png) |




## ContentCut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ContentCut
include('material-4/Content/ContentCut')

' renders the element
ContentCut('ContentCut', 'Content Cut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContentCut
include('material-4/Content/ContentCut')

' renders the element
ContentCut('ContentCut', 'Content Cut', 'an optional tech label', 'an optional description')
@enduml
```

