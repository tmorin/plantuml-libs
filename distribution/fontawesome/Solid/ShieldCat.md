# ShieldCat


```text
fontawesome/Solid/ShieldCat
```

```text
include('fontawesome/Solid/ShieldCat')
```



| Illustration | ShieldCat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShieldCat.png) | ![illustration for ShieldCat](../../fontawesome/Solid/ShieldCat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldCatXs>`
- `<$ShieldCatSm>`
- `<$ShieldCatMd>`
- `<$ShieldCatLg>`





## ShieldCat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShieldCat
include('fontawesome/Solid/ShieldCat')

' renders the element
ShieldCat('ShieldCat', 'Shield Cat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShieldCat
include('fontawesome/Solid/ShieldCat')

' renders the element
ShieldCat('ShieldCat', 'Shield Cat', 'an optional tech label', 'an optional description')
@enduml
```

