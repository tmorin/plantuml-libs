# LocalHotel


```text
material-4/Maps/LocalHotel
```

```text
include('material-4/Maps/LocalHotel')
```



| Illustration | LocalHotel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalHotel.png) | ![illustration for LocalHotel](../../material-4/Maps/LocalHotel.Local.png) |




## LocalHotel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalHotel
include('material-4/Maps/LocalHotel')

' renders the element
LocalHotel('LocalHotel', 'Local Hotel', 'an optional tech label')
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

' loads the Item which embeds the element LocalHotel
include('material-4/Maps/LocalHotel')

' renders the element
LocalHotel('LocalHotel', 'Local Hotel', 'an optional tech label')
@enduml
```

