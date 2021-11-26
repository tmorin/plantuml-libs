# Waze


```text
fontawesome-5/Brands/Waze
```

```text
include('fontawesome-5/Brands/Waze')
```



| Illustration | Waze |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Waze.png) | ![illustration for Waze](../../fontawesome-5/Brands/Waze.Local.png) |




## Waze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Waze
include('fontawesome-5/Brands/Waze')

' renders the element
Waze('Waze', 'Waze', 'an optional tech label')
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

' loads the Item which embeds the element Waze
include('fontawesome-5/Brands/Waze')

' renders the element
Waze('Waze', 'Waze', 'an optional tech label')
@enduml
```

