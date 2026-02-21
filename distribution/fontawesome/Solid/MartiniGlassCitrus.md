# MartiniGlassCitrus


```text
fontawesome/Solid/MartiniGlassCitrus
```

```text
include('fontawesome/Solid/MartiniGlassCitrus')
```



| Illustration | MartiniGlassCitrus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MartiniGlassCitrus.png) | ![illustration for MartiniGlassCitrus](../../fontawesome/Solid/MartiniGlassCitrus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MartiniGlassCitrusXs>`
- `<$MartiniGlassCitrusSm>`
- `<$MartiniGlassCitrusMd>`
- `<$MartiniGlassCitrusLg>`





## MartiniGlassCitrus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MartiniGlassCitrus
include('fontawesome/Solid/MartiniGlassCitrus')

' renders the element
MartiniGlassCitrus('MartiniGlassCitrus', 'Martini Glass Citrus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MartiniGlassCitrus
include('fontawesome/Solid/MartiniGlassCitrus')

' renders the element
MartiniGlassCitrus('MartiniGlassCitrus', 'Martini Glass Citrus', 'an optional tech label', 'an optional description')
@enduml
```

