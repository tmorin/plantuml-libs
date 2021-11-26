# Behance


```text
fontawesome-5/Brands/Behance
```

```text
include('fontawesome-5/Brands/Behance')
```



| Illustration | Behance |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Behance.png) | ![illustration for Behance](../../fontawesome-5/Brands/Behance.Local.png) |




## Behance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Behance
include('fontawesome-5/Brands/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label')
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

' loads the Item which embeds the element Behance
include('fontawesome-5/Brands/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label')
@enduml
```

