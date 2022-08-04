# Utensils


```text
fontawesome-6/Solid/Utensils
```

```text
include('fontawesome-6/Solid/Utensils')
```



| Illustration | Utensils |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Utensils.png) | ![illustration for Utensils](../../fontawesome-6/Solid/Utensils.Local.png) |




## Utensils

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Utensils
include('fontawesome-6/Solid/Utensils')

' renders the element
Utensils('Utensils', 'Utensils', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Utensils
include('fontawesome-6/Solid/Utensils')

' renders the element
Utensils('Utensils', 'Utensils', 'an optional tech label', 'an optional description')
@enduml
```

