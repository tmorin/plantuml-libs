# Uniregistry


```text
fontawesome-5/Brands/Uniregistry
```

```text
include('fontawesome-5/Brands/Uniregistry')
```



| Illustration | Uniregistry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Uniregistry.png) | ![illustration for Uniregistry](../../fontawesome-5/Brands/Uniregistry.Local.png) |




## Uniregistry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Uniregistry
include('fontawesome-5/Brands/Uniregistry')

' renders the element
Uniregistry('Uniregistry', 'Uniregistry', 'an optional tech label')
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

' loads the Item which embeds the element Uniregistry
include('fontawesome-5/Brands/Uniregistry')

' renders the element
Uniregistry('Uniregistry', 'Uniregistry', 'an optional tech label')
@enduml
```

