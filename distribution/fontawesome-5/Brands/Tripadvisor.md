# Tripadvisor


```text
fontawesome-5/Brands/Tripadvisor
```

```text
include('fontawesome-5/Brands/Tripadvisor')
```



| Illustration | Tripadvisor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Tripadvisor.png) | ![illustration for Tripadvisor](../../fontawesome-5/Brands/Tripadvisor.Local.png) |




## Tripadvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tripadvisor
include('fontawesome-5/Brands/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label')
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

' loads the Item which embeds the element Tripadvisor
include('fontawesome-5/Brands/Tripadvisor')

' renders the element
Tripadvisor('Tripadvisor', 'Tripadvisor', 'an optional tech label')
@enduml
```

