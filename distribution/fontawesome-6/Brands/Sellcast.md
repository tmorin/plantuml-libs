# Sellcast


```text
fontawesome-6/Brands/Sellcast
```

```text
include('fontawesome-6/Brands/Sellcast')
```



| Illustration | Sellcast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Sellcast.png) | ![illustration for Sellcast](../../fontawesome-6/Brands/Sellcast.Local.png) |




## Sellcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sellcast
include('fontawesome-6/Brands/Sellcast')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sellcast
include('fontawesome-6/Brands/Sellcast')

' renders the element
Sellcast('Sellcast', 'Sellcast', 'an optional tech label')
@enduml
```

