# Sistrix


```text
fontawesome-5/Brands/Sistrix
```

```text
include('fontawesome-5/Brands/Sistrix')
```



| Illustration | Sistrix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sistrix.png) | ![illustration for Sistrix](../../fontawesome-5/Brands/Sistrix.Local.png) |




## Sistrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sistrix
include('fontawesome-5/Brands/Sistrix')

' renders the element
Sistrix('Sistrix', 'Sistrix', 'an optional tech label')
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

' loads the Item which embeds the element Sistrix
include('fontawesome-5/Brands/Sistrix')

' renders the element
Sistrix('Sistrix', 'Sistrix', 'an optional tech label')
@enduml
```

