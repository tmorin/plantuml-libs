# MagnifyingGlassMinus


```text
fontawesome/Solid/MagnifyingGlassMinus
```

```text
include('fontawesome/Solid/MagnifyingGlassMinus')
```



| Illustration | MagnifyingGlassMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MagnifyingGlassMinus.png) | ![illustration for MagnifyingGlassMinus](../../fontawesome/Solid/MagnifyingGlassMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagnifyingGlassMinusXs>`
- `<$MagnifyingGlassMinusSm>`
- `<$MagnifyingGlassMinusMd>`
- `<$MagnifyingGlassMinusLg>`





## MagnifyingGlassMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MagnifyingGlassMinus
include('fontawesome/Solid/MagnifyingGlassMinus')

' renders the element
MagnifyingGlassMinus('MagnifyingGlassMinus', 'Magnifying Glass Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MagnifyingGlassMinus
include('fontawesome/Solid/MagnifyingGlassMinus')

' renders the element
MagnifyingGlassMinus('MagnifyingGlassMinus', 'Magnifying Glass Minus', 'an optional tech label', 'an optional description')
@enduml
```

