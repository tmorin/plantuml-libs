# Sellcast


```text
fontawesome-5/Brands/Sellcast
```

```text
include('fontawesome-5/Brands/Sellcast')
```



| Illustration | Sellcast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sellcast.png) | ![illustration for Sellcast](../../fontawesome-5/Brands/Sellcast.Local.png) |




## Sellcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sellcast
include('fontawesome-5/Brands/Sellcast')

' renders the element
Sellcast('Sellcast', 'Sellcast', 'an optional tech label')
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

' loads the Item which embeds the element Sellcast
include('fontawesome-5/Brands/Sellcast')

' renders the element
Sellcast('Sellcast', 'Sellcast', 'an optional tech label')
@enduml
```

