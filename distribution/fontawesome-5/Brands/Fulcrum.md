# Fulcrum


```text
fontawesome-5/Brands/Fulcrum
```

```text
include('fontawesome-5/Brands/Fulcrum')
```



| Illustration | Fulcrum |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Fulcrum.png) | ![illustration for Fulcrum](../../fontawesome-5/Brands/Fulcrum.Local.png) |




## Fulcrum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fulcrum
include('fontawesome-5/Brands/Fulcrum')

' renders the element
Fulcrum('Fulcrum', 'Fulcrum', 'an optional tech label')
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

' loads the Item which embeds the element Fulcrum
include('fontawesome-5/Brands/Fulcrum')

' renders the element
Fulcrum('Fulcrum', 'Fulcrum', 'an optional tech label')
@enduml
```

