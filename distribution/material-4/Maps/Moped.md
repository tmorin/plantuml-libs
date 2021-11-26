# Moped


```text
material-4/Maps/Moped
```

```text
include('material-4/Maps/Moped')
```



| Illustration | Moped |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Moped.png) | ![illustration for Moped](../../material-4/Maps/Moped.Local.png) |




## Moped

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Moped
include('material-4/Maps/Moped')

' renders the element
Moped('Moped', 'Moped', 'an optional tech label')
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

' loads the Item which embeds the element Moped
include('material-4/Maps/Moped')

' renders the element
Moped('Moped', 'Moped', 'an optional tech label')
@enduml
```

