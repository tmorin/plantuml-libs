# LocalActivity


```text
material-4/Maps/LocalActivity
```

```text
include('material-4/Maps/LocalActivity')
```



| Illustration | LocalActivity |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalActivity.png) | ![illustration for LocalActivity](../../material-4/Maps/LocalActivity.Local.png) |




## LocalActivity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalActivity
include('material-4/Maps/LocalActivity')

' renders the element
LocalActivity('LocalActivity', 'Local Activity', 'an optional tech label')
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

' loads the Item which embeds the element LocalActivity
include('material-4/Maps/LocalActivity')

' renders the element
LocalActivity('LocalActivity', 'Local Activity', 'an optional tech label')
@enduml
```

