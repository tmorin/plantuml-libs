# ArrowsH


```text
fontawesome/Solid/ArrowsH
```

```text
include('fontawesome/Solid/ArrowsH')
```



| Illustration | ArrowsH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsH.png) | ![illustration for ArrowsH](../../fontawesome/Solid/ArrowsH.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsHXs>`
- `<$ArrowsHSm>`
- `<$ArrowsHMd>`
- `<$ArrowsHLg>`





## ArrowsH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsH
include('fontawesome/Solid/ArrowsH')

' renders the element
ArrowsH('ArrowsH', 'Arrows H', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsH
include('fontawesome/Solid/ArrowsH')

' renders the element
ArrowsH('ArrowsH', 'Arrows H', 'an optional tech label', 'an optional description')
@enduml
```

