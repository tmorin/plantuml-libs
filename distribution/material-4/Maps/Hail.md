# Hail


```text
material-4/Maps/Hail
```

```text
include('material-4/Maps/Hail')
```



| Illustration | Hail |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Hail.png) | ![illustration for Hail](../../material-4/Maps/Hail.Local.png) |




## Hail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hail
include('material-4/Maps/Hail')

' renders the element
Hail('Hail', 'Hail', 'an optional tech label')
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

' loads the Item which embeds the element Hail
include('material-4/Maps/Hail')

' renders the element
Hail('Hail', 'Hail', 'an optional tech label')
@enduml
```

