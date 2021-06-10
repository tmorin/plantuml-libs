# Coins


```text
fontawesome-5/Solid/Coins
```

```text
include('fontawesome-5/Solid/Coins')
```



| Illustration | Coins |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Coins.png) | ![illustration for Coins](../../fontawesome-5/Solid/Coins.Local.png) |




## Coins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Coins
include('fontawesome-5/Solid/Coins')

' renders the element
Coins('Coins', 'Coins', 'an optional tech label')
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

' loads the Item which embeds the element Coins
include('fontawesome-5/Solid/Coins')

' renders the element
Coins('Coins', 'Coins', 'an optional tech label')
@enduml
```

