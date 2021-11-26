# Apps


```text
material-4/Navigation/Apps
```

```text
include('material-4/Navigation/Apps')
```



| Illustration | Apps |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/Apps.png) | ![illustration for Apps](../../material-4/Navigation/Apps.Local.png) |




## Apps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Apps
include('material-4/Navigation/Apps')

' renders the element
Apps('Apps', 'Apps', 'an optional tech label')
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

' loads the Item which embeds the element Apps
include('material-4/Navigation/Apps')

' renders the element
Apps('Apps', 'Apps', 'an optional tech label')
@enduml
```

