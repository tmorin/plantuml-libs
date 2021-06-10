# Vial


```text
fontawesome-5/Solid/Vial
```

```text
include('fontawesome-5/Solid/Vial')
```



| Illustration | Vial |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Vial.png) | ![illustration for Vial](../../fontawesome-5/Solid/Vial.Local.png) |




## Vial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Vial
include('fontawesome-5/Solid/Vial')

' renders the element
Vial('Vial', 'Vial', 'an optional tech label')
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

' loads the Item which embeds the element Vial
include('fontawesome-5/Solid/Vial')

' renders the element
Vial('Vial', 'Vial', 'an optional tech label')
@enduml
```

