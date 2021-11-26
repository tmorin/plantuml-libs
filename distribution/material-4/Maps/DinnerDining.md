# DinnerDining


```text
material-4/Maps/DinnerDining
```

```text
include('material-4/Maps/DinnerDining')
```



| Illustration | DinnerDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DinnerDining.png) | ![illustration for DinnerDining](../../material-4/Maps/DinnerDining.Local.png) |




## DinnerDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DinnerDining
include('material-4/Maps/DinnerDining')

' renders the element
DinnerDining('DinnerDining', 'Dinner Dining', 'an optional tech label')
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

' loads the Item which embeds the element DinnerDining
include('material-4/Maps/DinnerDining')

' renders the element
DinnerDining('DinnerDining', 'Dinner Dining', 'an optional tech label')
@enduml
```

