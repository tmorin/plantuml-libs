# MagnifyingGlassDollar


```text
fontawesome-6/Solid/MagnifyingGlassDollar
```

```text
include('fontawesome-6/Solid/MagnifyingGlassDollar')
```



| Illustration | MagnifyingGlassDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MagnifyingGlassDollar.png) | ![illustration for MagnifyingGlassDollar](../../fontawesome-6/Solid/MagnifyingGlassDollar.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlassDollar
include('fontawesome-6/Solid/MagnifyingGlassDollar')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlassDollar
include('fontawesome-6/Solid/MagnifyingGlassDollar')

' renders the element
MagnifyingGlassDollar('MagnifyingGlassDollar', 'Magnifying Glass Dollar', 'an optional tech label', 'an optional description')
@enduml
```

