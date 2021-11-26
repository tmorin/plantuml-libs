# Preview


```text
material-4/Action/Preview
```

```text
include('material-4/Action/Preview')
```



| Illustration | Preview |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Preview.png) | ![illustration for Preview](../../material-4/Action/Preview.Local.png) |




## Preview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Preview
include('material-4/Action/Preview')

' renders the element
Preview('Preview', 'Preview', 'an optional tech label')
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

' loads the Item which embeds the element Preview
include('material-4/Action/Preview')

' renders the element
Preview('Preview', 'Preview', 'an optional tech label')
@enduml
```

