# SetMeal


```text
material/Maps/SetMeal
```

```text
include('material/Maps/SetMeal')
```



| Illustration | SetMeal |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/SetMeal.png) | ![illustration for SetMeal](../../material/Maps/SetMeal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SetMealXs>`
- `<$SetMealSm>`
- `<$SetMealMd>`
- `<$SetMealLg>`





## SetMeal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SetMeal
include('material/Maps/SetMeal')

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
include('material/bootstrap')

' loads the Item which embeds the element SetMeal
include('material/Maps/SetMeal')

' renders the element
SetMeal('SetMeal', 'Set Meal', 'an optional tech label', 'an optional description')
@enduml
```

