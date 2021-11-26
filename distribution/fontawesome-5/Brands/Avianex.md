# Avianex


```text
fontawesome-5/Brands/Avianex
```

```text
include('fontawesome-5/Brands/Avianex')
```



| Illustration | Avianex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Avianex.png) | ![illustration for Avianex](../../fontawesome-5/Brands/Avianex.Local.png) |




## Avianex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Avianex
include('fontawesome-5/Brands/Avianex')

' renders the element
Avianex('Avianex', 'Avianex', 'an optional tech label')
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

' loads the Item which embeds the element Avianex
include('fontawesome-5/Brands/Avianex')

' renders the element
Avianex('Avianex', 'Avianex', 'an optional tech label')
@enduml
```

