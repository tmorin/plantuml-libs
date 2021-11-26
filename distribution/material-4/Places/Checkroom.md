# Checkroom


```text
material-4/Places/Checkroom
```

```text
include('material-4/Places/Checkroom')
```



| Illustration | Checkroom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Checkroom.png) | ![illustration for Checkroom](../../material-4/Places/Checkroom.Local.png) |




## Checkroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Checkroom
include('material-4/Places/Checkroom')

' renders the element
Checkroom('Checkroom', 'Checkroom', 'an optional tech label')
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

' loads the Item which embeds the element Checkroom
include('material-4/Places/Checkroom')

' renders the element
Checkroom('Checkroom', 'Checkroom', 'an optional tech label')
@enduml
```

