# Sellsy


```text
fontawesome-5/Brands/Sellsy
```

```text
include('fontawesome-5/Brands/Sellsy')
```



| Illustration | Sellsy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sellsy.png) | ![illustration for Sellsy](../../fontawesome-5/Brands/Sellsy.Local.png) |




## Sellsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sellsy
include('fontawesome-5/Brands/Sellsy')

' renders the element
Sellsy('Sellsy', 'Sellsy', 'an optional tech label')
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

' loads the Item which embeds the element Sellsy
include('fontawesome-5/Brands/Sellsy')

' renders the element
Sellsy('Sellsy', 'Sellsy', 'an optional tech label')
@enduml
```

