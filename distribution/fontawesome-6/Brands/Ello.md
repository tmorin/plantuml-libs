# Ello


```text
fontawesome-6/Brands/Ello
```

```text
include('fontawesome-6/Brands/Ello')
```



| Illustration | Ello |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ello.png) | ![illustration for Ello](../../fontawesome-6/Brands/Ello.Local.png) |




## Ello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ello
include('fontawesome-6/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ello
include('fontawesome-6/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
@enduml
```

