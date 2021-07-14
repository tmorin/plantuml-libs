# Assessment


```text
material-4/Action/Assessment
```

```text
include('material-4/Action/Assessment')
```



| Illustration | Assessment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Assessment.png) | ![illustration for Assessment](../../material-4/Action/Assessment.Local.png) |




## Assessment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Assessment
include('material-4/Action/Assessment')

' renders the element
Assessment('Assessment', 'Assessment', 'an optional tech label')
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

' loads the Item which embeds the element Assessment
include('material-4/Action/Assessment')

' renders the element
Assessment('Assessment', 'Assessment', 'an optional tech label')
@enduml
```

