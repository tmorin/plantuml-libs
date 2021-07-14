# LocalFireDepartment


```text
material-4/Maps/LocalFireDepartment
```

```text
include('material-4/Maps/LocalFireDepartment')
```



| Illustration | LocalFireDepartment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalFireDepartment.png) | ![illustration for LocalFireDepartment](../../material-4/Maps/LocalFireDepartment.Local.png) |




## LocalFireDepartment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalFireDepartment
include('material-4/Maps/LocalFireDepartment')

' renders the element
LocalFireDepartment('LocalFireDepartment', 'Local Fire Department', 'an optional tech label')
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

' loads the Item which embeds the element LocalFireDepartment
include('material-4/Maps/LocalFireDepartment')

' renders the element
LocalFireDepartment('LocalFireDepartment', 'Local Fire Department', 'an optional tech label')
@enduml
```

