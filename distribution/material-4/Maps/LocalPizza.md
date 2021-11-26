# LocalPizza


```text
material-4/Maps/LocalPizza
```

```text
include('material-4/Maps/LocalPizza')
```



| Illustration | LocalPizza |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPizza.png) | ![illustration for LocalPizza](../../material-4/Maps/LocalPizza.Local.png) |




## LocalPizza

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPizza
include('material-4/Maps/LocalPizza')

' renders the element
LocalPizza('LocalPizza', 'Local Pizza', 'an optional tech label')
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

' loads the Item which embeds the element LocalPizza
include('material-4/Maps/LocalPizza')

' renders the element
LocalPizza('LocalPizza', 'Local Pizza', 'an optional tech label')
@enduml
```

