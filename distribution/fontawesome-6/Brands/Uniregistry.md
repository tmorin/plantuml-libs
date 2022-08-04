# Uniregistry


```text
fontawesome-6/Brands/Uniregistry
```

```text
include('fontawesome-6/Brands/Uniregistry')
```



| Illustration | Uniregistry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Uniregistry.png) | ![illustration for Uniregistry](../../fontawesome-6/Brands/Uniregistry.Local.png) |




## Uniregistry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Uniregistry
include('fontawesome-6/Brands/Uniregistry')

' renders the element
Uniregistry('Uniregistry', 'Uniregistry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uniregistry
include('fontawesome-6/Brands/Uniregistry')

' renders the element
Uniregistry('Uniregistry', 'Uniregistry', 'an optional tech label', 'an optional description')
@enduml
```

