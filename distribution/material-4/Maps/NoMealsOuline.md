# NoMealsOuline


```text
material-4/Maps/NoMealsOuline
```

```text
include('material-4/Maps/NoMealsOuline')
```



| Illustration | NoMealsOuline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/NoMealsOuline.png) | ![illustration for NoMealsOuline](../../material-4/Maps/NoMealsOuline.Local.png) |




## NoMealsOuline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoMealsOuline
include('material-4/Maps/NoMealsOuline')

' renders the element
NoMealsOuline('NoMealsOuline', 'No Meals Ouline', 'an optional tech label')
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

' loads the Item which embeds the element NoMealsOuline
include('material-4/Maps/NoMealsOuline')

' renders the element
NoMealsOuline('NoMealsOuline', 'No Meals Ouline', 'an optional tech label')
@enduml
```

