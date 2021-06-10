# Hands


```text
fontawesome-5/Solid/Hands
```

```text
include('fontawesome-5/Solid/Hands')
```



| Illustration | Hands |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hands.png) | ![illustration for Hands](../../fontawesome-5/Solid/Hands.Local.png) |




## Hands

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hands
include('fontawesome-5/Solid/Hands')

' renders the element
Hands('Hands', 'Hands', 'an optional tech label')
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

' loads the Item which embeds the element Hands
include('fontawesome-5/Solid/Hands')

' renders the element
Hands('Hands', 'Hands', 'an optional tech label')
@enduml
```

