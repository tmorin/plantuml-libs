# Ship


```text
fontawesome-5/Solid/Ship
```

```text
include('fontawesome-5/Solid/Ship')
```



| Illustration | Ship |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ship.png) | ![illustration for Ship](../../fontawesome-5/Solid/Ship.Local.png) |




## Ship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ship
include('fontawesome-5/Solid/Ship')

' renders the element
Ship('Ship', 'Ship', 'an optional tech label')
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

' loads the Item which embeds the element Ship
include('fontawesome-5/Solid/Ship')

' renders the element
Ship('Ship', 'Ship', 'an optional tech label')
@enduml
```

