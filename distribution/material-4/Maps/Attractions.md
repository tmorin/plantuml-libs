# Attractions


```text
material-4/Maps/Attractions
```

```text
include('material-4/Maps/Attractions')
```



| Illustration | Attractions |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Attractions.png) | ![illustration for Attractions](../../material-4/Maps/Attractions.Local.png) |




## Attractions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Attractions
include('material-4/Maps/Attractions')

' renders the element
Attractions('Attractions', 'Attractions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Attractions
include('material-4/Maps/Attractions')

' renders the element
Attractions('Attractions', 'Attractions', 'an optional tech label', 'an optional description')
@enduml
```

