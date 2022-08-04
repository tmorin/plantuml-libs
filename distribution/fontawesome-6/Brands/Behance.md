# Behance


```text
fontawesome-6/Brands/Behance
```

```text
include('fontawesome-6/Brands/Behance')
```



| Illustration | Behance |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Behance.png) | ![illustration for Behance](../../fontawesome-6/Brands/Behance.Local.png) |




## Behance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Behance
include('fontawesome-6/Brands/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Behance
include('fontawesome-6/Brands/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
@enduml
```

