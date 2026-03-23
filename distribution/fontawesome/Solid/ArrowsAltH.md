# ArrowsAltH


```text
fontawesome/Solid/ArrowsAltH
```

```text
include('fontawesome/Solid/ArrowsAltH')
```



| Illustration | ArrowsAltH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsAltH.png) | ![illustration for ArrowsAltH](../../fontawesome/Solid/ArrowsAltH.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsAltHXs>`
- `<$ArrowsAltHSm>`
- `<$ArrowsAltHMd>`
- `<$ArrowsAltHLg>`





## ArrowsAltH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsAltH
include('fontawesome/Solid/ArrowsAltH')

' renders the element
ArrowsAltH('ArrowsAltH', 'Arrows Alt H', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsAltH
include('fontawesome/Solid/ArrowsAltH')

' renders the element
ArrowsAltH('ArrowsAltH', 'Arrows Alt H', 'an optional tech label', 'an optional description')
@enduml
```

