# LocalTaxi


```text
material-4/Maps/LocalTaxi
```

```text
include('material-4/Maps/LocalTaxi')
```



| Illustration | LocalTaxi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalTaxi.png) | ![illustration for LocalTaxi](../../material-4/Maps/LocalTaxi.Local.png) |




## LocalTaxi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalTaxi
include('material-4/Maps/LocalTaxi')

' renders the element
LocalTaxi('LocalTaxi', 'Local Taxi', 'an optional tech label')
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

' loads the Item which embeds the element LocalTaxi
include('material-4/Maps/LocalTaxi')

' renders the element
LocalTaxi('LocalTaxi', 'Local Taxi', 'an optional tech label')
@enduml
```

