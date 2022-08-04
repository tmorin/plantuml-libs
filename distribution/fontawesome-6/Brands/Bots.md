# Bots


```text
fontawesome-6/Brands/Bots
```

```text
include('fontawesome-6/Brands/Bots')
```



| Illustration | Bots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Bots.png) | ![illustration for Bots](../../fontawesome-6/Brands/Bots.Local.png) |




## Bots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bots
include('fontawesome-6/Brands/Bots')

' renders the element
Bots('Bots', 'Bots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bots
include('fontawesome-6/Brands/Bots')

' renders the element
Bots('Bots', 'Bots', 'an optional tech label', 'an optional description')
@enduml
```

