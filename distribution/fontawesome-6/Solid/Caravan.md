# Caravan


```text
fontawesome-6/Solid/Caravan
```

```text
include('fontawesome-6/Solid/Caravan')
```



| Illustration | Caravan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Caravan.png) | ![illustration for Caravan](../../fontawesome-6/Solid/Caravan.Local.png) |




## Caravan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Caravan
include('fontawesome-6/Solid/Caravan')

' renders the element
Caravan('Caravan', 'Caravan', 'an optional tech label')
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

' loads the Item which embeds the element Caravan
include('fontawesome-6/Solid/Caravan')

' renders the element
Caravan('Caravan', 'Caravan', 'an optional tech label')
@enduml
```

