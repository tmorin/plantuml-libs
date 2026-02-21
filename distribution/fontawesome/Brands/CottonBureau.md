# CottonBureau


```text
fontawesome/Brands/CottonBureau
```

```text
include('fontawesome/Brands/CottonBureau')
```



| Illustration | CottonBureau |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CottonBureau.png) | ![illustration for CottonBureau](../../fontawesome/Brands/CottonBureau.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CottonBureauXs>`
- `<$CottonBureauSm>`
- `<$CottonBureauMd>`
- `<$CottonBureauLg>`





## CottonBureau

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CottonBureau
include('fontawesome/Brands/CottonBureau')

' renders the element
CottonBureau('CottonBureau', 'Cotton Bureau', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CottonBureau
include('fontawesome/Brands/CottonBureau')

' renders the element
CottonBureau('CottonBureau', 'Cotton Bureau', 'an optional tech label', 'an optional description')
@enduml
```

