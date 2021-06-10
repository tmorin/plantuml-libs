# Monero


```text
fontawesome-5/Brands/Monero
```

```text
include('fontawesome-5/Brands/Monero')
```



| Illustration | Monero |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Monero.png) | ![illustration for Monero](../../fontawesome-5/Brands/Monero.Local.png) |




## Monero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Monero
include('fontawesome-5/Brands/Monero')

' renders the element
Monero('Monero', 'Monero', 'an optional tech label')
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

' loads the Item which embeds the element Monero
include('fontawesome-5/Brands/Monero')

' renders the element
Monero('Monero', 'Monero', 'an optional tech label')
@enduml
```

