# SetMeal


```text
material-4/Maps/SetMeal
```

```text
include('material-4/Maps/SetMeal')
```



| Illustration | SetMeal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/SetMeal.png) | ![illustration for SetMeal](../../material-4/Maps/SetMeal.Local.png) |




## SetMeal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SetMeal
include('material-4/Maps/SetMeal')

' renders the element
SetMeal('SetMeal', 'Set Meal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SetMeal
include('material-4/Maps/SetMeal')

' renders the element
SetMeal('SetMeal', 'Set Meal', 'an optional tech label', 'an optional description')
@enduml
```

