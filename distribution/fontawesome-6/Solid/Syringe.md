# Syringe


```text
fontawesome-6/Solid/Syringe
```

```text
include('fontawesome-6/Solid/Syringe')
```



| Illustration | Syringe |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Syringe.png) | ![illustration for Syringe](../../fontawesome-6/Solid/Syringe.Local.png) |




## Syringe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Syringe
include('fontawesome-6/Solid/Syringe')

' renders the element
Syringe('Syringe', 'Syringe', 'an optional tech label')
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

' loads the Item which embeds the element Syringe
include('fontawesome-6/Solid/Syringe')

' renders the element
Syringe('Syringe', 'Syringe', 'an optional tech label')
@enduml
```

