# Researchgate


```text
fontawesome-6/Brands/Researchgate
```

```text
include('fontawesome-6/Brands/Researchgate')
```



| Illustration | Researchgate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Researchgate.png) | ![illustration for Researchgate](../../fontawesome-6/Brands/Researchgate.Local.png) |




## Researchgate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Researchgate
include('fontawesome-6/Brands/Researchgate')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Researchgate
include('fontawesome-6/Brands/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label')
@enduml
```

