# Uniregistry


```text
fontawesome/Brands/Uniregistry
```

```text
include('fontawesome/Brands/Uniregistry')
```



| Illustration | Uniregistry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Uniregistry.png) | ![illustration for Uniregistry](../../fontawesome/Brands/Uniregistry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UniregistryXs>`
- `<$UniregistrySm>`
- `<$UniregistryMd>`
- `<$UniregistryLg>`





## Uniregistry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Uniregistry
include('fontawesome/Brands/Uniregistry')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Uniregistry
include('fontawesome/Brands/Uniregistry')

' renders the element
Uniregistry('Uniregistry', 'Uniregistry', 'an optional tech label', 'an optional description')
@enduml
```

