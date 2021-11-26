# LocalAtm


```text
material-4/Maps/LocalAtm
```

```text
include('material-4/Maps/LocalAtm')
```



| Illustration | LocalAtm |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalAtm.png) | ![illustration for LocalAtm](../../material-4/Maps/LocalAtm.Local.png) |




## LocalAtm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalAtm
include('material-4/Maps/LocalAtm')

' renders the element
LocalAtm('LocalAtm', 'Local Atm', 'an optional tech label')
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

' loads the Item which embeds the element LocalAtm
include('material-4/Maps/LocalAtm')

' renders the element
LocalAtm('LocalAtm', 'Local Atm', 'an optional tech label')
@enduml
```

