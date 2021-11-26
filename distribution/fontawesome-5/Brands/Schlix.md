# Schlix


```text
fontawesome-5/Brands/Schlix
```

```text
include('fontawesome-5/Brands/Schlix')
```



| Illustration | Schlix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Schlix.png) | ![illustration for Schlix](../../fontawesome-5/Brands/Schlix.Local.png) |




## Schlix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Schlix
include('fontawesome-5/Brands/Schlix')

' renders the element
Schlix('Schlix', 'Schlix', 'an optional tech label')
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

' loads the Item which embeds the element Schlix
include('fontawesome-5/Brands/Schlix')

' renders the element
Schlix('Schlix', 'Schlix', 'an optional tech label')
@enduml
```

