# Researchgate


```text
fontawesome-5/Brands/Researchgate
```

```text
include('fontawesome-5/Brands/Researchgate')
```



| Illustration | Researchgate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Researchgate.png) | ![illustration for Researchgate](../../fontawesome-5/Brands/Researchgate.Local.png) |




## Researchgate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Researchgate
include('fontawesome-5/Brands/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
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

' loads the Item which embeds the element Researchgate
include('fontawesome-5/Brands/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
@enduml
```

