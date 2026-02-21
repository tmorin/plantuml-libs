# UmbrellaBeach


```text
fontawesome/Solid/UmbrellaBeach
```

```text
include('fontawesome/Solid/UmbrellaBeach')
```



| Illustration | UmbrellaBeach |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UmbrellaBeach.png) | ![illustration for UmbrellaBeach](../../fontawesome/Solid/UmbrellaBeach.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmbrellaBeachXs>`
- `<$UmbrellaBeachSm>`
- `<$UmbrellaBeachMd>`
- `<$UmbrellaBeachLg>`





## UmbrellaBeach

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UmbrellaBeach
include('fontawesome/Solid/UmbrellaBeach')

' renders the element
UmbrellaBeach('UmbrellaBeach', 'Umbrella Beach', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UmbrellaBeach
include('fontawesome/Solid/UmbrellaBeach')

' renders the element
UmbrellaBeach('UmbrellaBeach', 'Umbrella Beach', 'an optional tech label', 'an optional description')
@enduml
```

