# Cuttlefish


```text
fontawesome-5/Brands/Cuttlefish
```

```text
include('fontawesome-5/Brands/Cuttlefish')
```



| Illustration | Cuttlefish |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Cuttlefish.png) | ![illustration for Cuttlefish](../../fontawesome-5/Brands/Cuttlefish.Local.png) |




## Cuttlefish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cuttlefish
include('fontawesome-5/Brands/Cuttlefish')

' renders the element
Cuttlefish('Cuttlefish', 'Cuttlefish', 'an optional tech label')
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

' loads the Item which embeds the element Cuttlefish
include('fontawesome-5/Brands/Cuttlefish')

' renders the element
Cuttlefish('Cuttlefish', 'Cuttlefish', 'an optional tech label')
@enduml
```

