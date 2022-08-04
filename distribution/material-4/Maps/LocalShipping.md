# LocalShipping


```text
material-4/Maps/LocalShipping
```

```text
include('material-4/Maps/LocalShipping')
```



| Illustration | LocalShipping |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalShipping.png) | ![illustration for LocalShipping](../../material-4/Maps/LocalShipping.Local.png) |




## LocalShipping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalShipping
include('material-4/Maps/LocalShipping')

' renders the element
LocalShipping('LocalShipping', 'Local Shipping', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalShipping
include('material-4/Maps/LocalShipping')

' renders the element
LocalShipping('LocalShipping', 'Local Shipping', 'an optional tech label', 'an optional description')
@enduml
```

