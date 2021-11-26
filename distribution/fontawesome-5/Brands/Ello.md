# Ello


```text
fontawesome-5/Brands/Ello
```

```text
include('fontawesome-5/Brands/Ello')
```



| Illustration | Ello |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ello.png) | ![illustration for Ello](../../fontawesome-5/Brands/Ello.Local.png) |




## Ello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ello
include('fontawesome-5/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label')
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

' loads the Item which embeds the element Ello
include('fontawesome-5/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label')
@enduml
```

