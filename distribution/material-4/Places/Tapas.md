# Tapas


```text
material-4/Places/Tapas
```

```text
include('material-4/Places/Tapas')
```



| Illustration | Tapas |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Tapas.png) | ![illustration for Tapas](../../material-4/Places/Tapas.Local.png) |




## Tapas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tapas
include('material-4/Places/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label')
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

' loads the Item which embeds the element Tapas
include('material-4/Places/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label')
@enduml
```

