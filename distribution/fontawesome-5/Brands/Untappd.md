# Untappd


```text
fontawesome-5/Brands/Untappd
```

```text
include('fontawesome-5/Brands/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Untappd.png) | ![illustration for Untappd](../../fontawesome-5/Brands/Untappd.Local.png) |




## Untappd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Untappd
include('fontawesome-5/Brands/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label')
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

' loads the Item which embeds the element Untappd
include('fontawesome-5/Brands/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label')
@enduml
```

