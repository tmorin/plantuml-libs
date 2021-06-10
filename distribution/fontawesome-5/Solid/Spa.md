# Spa


```text
fontawesome-5/Solid/Spa
```

```text
include('fontawesome-5/Solid/Spa')
```



| Illustration | Spa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Spa.png) | ![illustration for Spa](../../fontawesome-5/Solid/Spa.Local.png) |




## Spa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Spa
include('fontawesome-5/Solid/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label')
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

' loads the Item which embeds the element Spa
include('fontawesome-5/Solid/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label')
@enduml
```

