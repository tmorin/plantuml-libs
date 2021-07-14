# LocalPostOffice


```text
material-4/Maps/LocalPostOffice
```

```text
include('material-4/Maps/LocalPostOffice')
```



| Illustration | LocalPostOffice |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPostOffice.png) | ![illustration for LocalPostOffice](../../material-4/Maps/LocalPostOffice.Local.png) |




## LocalPostOffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPostOffice
include('material-4/Maps/LocalPostOffice')

' renders the element
LocalPostOffice('LocalPostOffice', 'Local Post Office', 'an optional tech label')
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

' loads the Item which embeds the element LocalPostOffice
include('material-4/Maps/LocalPostOffice')

' renders the element
LocalPostOffice('LocalPostOffice', 'Local Post Office', 'an optional tech label')
@enduml
```

