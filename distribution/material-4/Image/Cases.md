# Cases


```text
material-4/Image/Cases
```

```text
include('material-4/Image/Cases')
```



| Illustration | Cases |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Cases.png) | ![illustration for Cases](../../material-4/Image/Cases.Local.png) |




## Cases

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Cases
include('material-4/Image/Cases')

' renders the element
Cases('Cases', 'Cases', 'an optional tech label')
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

' loads the Item which embeds the element Cases
include('material-4/Image/Cases')

' renders the element
Cases('Cases', 'Cases', 'an optional tech label')
@enduml
```

