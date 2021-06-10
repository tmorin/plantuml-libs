# Futbol


```text
fontawesome-5/Regular/Futbol
```

```text
include('fontawesome-5/Regular/Futbol')
```



| Illustration | Futbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Futbol.png) | ![illustration for Futbol](../../fontawesome-5/Regular/Futbol.Local.png) |




## Futbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Futbol
include('fontawesome-5/Regular/Futbol')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Futbol
include('fontawesome-5/Regular/Futbol')

' renders the element
Futbol('Futbol', 'Futbol', 'an optional tech label')
@enduml
```

