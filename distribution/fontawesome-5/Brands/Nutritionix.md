# Nutritionix


```text
fontawesome-5/Brands/Nutritionix
```

```text
include('fontawesome-5/Brands/Nutritionix')
```



| Illustration | Nutritionix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Nutritionix.png) | ![illustration for Nutritionix](../../fontawesome-5/Brands/Nutritionix.Local.png) |




## Nutritionix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Nutritionix
include('fontawesome-5/Brands/Nutritionix')

' renders the element
Nutritionix('Nutritionix', 'Nutritionix', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Nutritionix
include('fontawesome-5/Brands/Nutritionix')

' renders the element
Nutritionix('Nutritionix', 'Nutritionix', 'an optional tech label')
@enduml
```

