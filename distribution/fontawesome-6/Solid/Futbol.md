# Futbol


```text
fontawesome-6/Solid/Futbol
```

```text
include('fontawesome-6/Solid/Futbol')
```



| Illustration | Futbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Futbol.png) | ![illustration for Futbol](../../fontawesome-6/Solid/Futbol.Local.png) |




## Futbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Futbol
include('fontawesome-6/Solid/Futbol')

' renders the element
Futbol('Futbol', 'Futbol', 'an optional tech label')
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

' loads the Item which embeds the element Futbol
include('fontawesome-6/Solid/Futbol')

' renders the element
Futbol('Futbol', 'Futbol', 'an optional tech label')
@enduml
```

