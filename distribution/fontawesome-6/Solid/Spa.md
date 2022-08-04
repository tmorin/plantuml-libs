# Spa


```text
fontawesome-6/Solid/Spa
```

```text
include('fontawesome-6/Solid/Spa')
```



| Illustration | Spa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Spa.png) | ![illustration for Spa](../../fontawesome-6/Solid/Spa.Local.png) |




## Spa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Spa
include('fontawesome-6/Solid/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spa
include('fontawesome-6/Solid/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label', 'an optional description')
@enduml
```

