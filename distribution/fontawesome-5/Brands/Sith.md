# Sith


```text
fontawesome-5/Brands/Sith
```

```text
include('fontawesome-5/Brands/Sith')
```



| Illustration | Sith |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sith.png) | ![illustration for Sith](../../fontawesome-5/Brands/Sith.Local.png) |




## Sith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sith
include('fontawesome-5/Brands/Sith')

' renders the element
Sith('Sith', 'Sith', 'an optional tech label')
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

' loads the Item which embeds the element Sith
include('fontawesome-5/Brands/Sith')

' renders the element
Sith('Sith', 'Sith', 'an optional tech label')
@enduml
```

