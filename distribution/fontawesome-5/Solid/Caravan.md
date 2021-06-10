# Caravan


```text
fontawesome-5/Solid/Caravan
```

```text
include('fontawesome-5/Solid/Caravan')
```



| Illustration | Caravan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Caravan.png) | ![illustration for Caravan](../../fontawesome-5/Solid/Caravan.Local.png) |




## Caravan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Caravan
include('fontawesome-5/Solid/Caravan')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Caravan
include('fontawesome-5/Solid/Caravan')

' renders the element
Caravan('Caravan', 'Caravan', 'an optional tech label')
@enduml
```

