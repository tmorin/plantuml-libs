# Parking


```text
fontawesome-5/Solid/Parking
```

```text
include('fontawesome-5/Solid/Parking')
```



| Illustration | Parking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Parking.png) | ![illustration for Parking](../../fontawesome-5/Solid/Parking.Local.png) |




## Parking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Parking
include('fontawesome-5/Solid/Parking')

' renders the element
Parking('Parking', 'Parking', 'an optional tech label')
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

' loads the Item which embeds the element Parking
include('fontawesome-5/Solid/Parking')

' renders the element
Parking('Parking', 'Parking', 'an optional tech label')
@enduml
```

