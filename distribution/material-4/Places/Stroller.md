# Stroller


```text
material-4/Places/Stroller
```

```text
include('material-4/Places/Stroller')
```



| Illustration | Stroller |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Stroller.png) | ![illustration for Stroller](../../material-4/Places/Stroller.Local.png) |




## Stroller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Stroller
include('material-4/Places/Stroller')

' renders the element
Stroller('Stroller', 'Stroller', 'an optional tech label')
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

' loads the Item which embeds the element Stroller
include('material-4/Places/Stroller')

' renders the element
Stroller('Stroller', 'Stroller', 'an optional tech label')
@enduml
```

