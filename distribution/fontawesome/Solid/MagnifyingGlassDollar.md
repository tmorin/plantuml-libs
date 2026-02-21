# MagnifyingGlassDollar


```text
fontawesome/Solid/MagnifyingGlassDollar
```

```text
include('fontawesome/Solid/MagnifyingGlassDollar')
```



| Illustration | MagnifyingGlassDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MagnifyingGlassDollar.png) | ![illustration for MagnifyingGlassDollar](../../fontawesome/Solid/MagnifyingGlassDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagnifyingGlassDollarXs>`
- `<$MagnifyingGlassDollarSm>`
- `<$MagnifyingGlassDollarMd>`
- `<$MagnifyingGlassDollarLg>`





## MagnifyingGlassDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MagnifyingGlassDollar
include('fontawesome/Solid/MagnifyingGlassDollar')

' renders the element
MagnifyingGlassDollar('MagnifyingGlassDollar', 'Magnifying Glass Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MagnifyingGlassDollar
include('fontawesome/Solid/MagnifyingGlassDollar')

' renders the element
MagnifyingGlassDollar('MagnifyingGlassDollar', 'Magnifying Glass Dollar', 'an optional tech label', 'an optional description')
@enduml
```

