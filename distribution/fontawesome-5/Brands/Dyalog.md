# Dyalog


```text
fontawesome-5/Brands/Dyalog
```

```text
include('fontawesome-5/Brands/Dyalog')
```



| Illustration | Dyalog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dyalog.png) | ![illustration for Dyalog](../../fontawesome-5/Brands/Dyalog.Local.png) |




## Dyalog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dyalog
include('fontawesome-5/Brands/Dyalog')

' renders the element
Dyalog('Dyalog', 'Dyalog', 'an optional tech label')
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

' loads the Item which embeds the element Dyalog
include('fontawesome-5/Brands/Dyalog')

' renders the element
Dyalog('Dyalog', 'Dyalog', 'an optional tech label')
@enduml
```

