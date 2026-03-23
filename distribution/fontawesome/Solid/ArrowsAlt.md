# ArrowsAlt


```text
fontawesome/Solid/ArrowsAlt
```

```text
include('fontawesome/Solid/ArrowsAlt')
```



| Illustration | ArrowsAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsAlt.png) | ![illustration for ArrowsAlt](../../fontawesome/Solid/ArrowsAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsAltXs>`
- `<$ArrowsAltSm>`
- `<$ArrowsAltMd>`
- `<$ArrowsAltLg>`





## ArrowsAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsAlt
include('fontawesome/Solid/ArrowsAlt')

' renders the element
ArrowsAlt('ArrowsAlt', 'Arrows Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsAlt
include('fontawesome/Solid/ArrowsAlt')

' renders the element
ArrowsAlt('ArrowsAlt', 'Arrows Alt', 'an optional tech label', 'an optional description')
@enduml
```

