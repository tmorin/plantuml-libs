# HorseHead


```text
fontawesome/Solid/HorseHead
```

```text
include('fontawesome/Solid/HorseHead')
```



| Illustration | HorseHead |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HorseHead.png) | ![illustration for HorseHead](../../fontawesome/Solid/HorseHead.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HorseHeadXs>`
- `<$HorseHeadSm>`
- `<$HorseHeadMd>`
- `<$HorseHeadLg>`





## HorseHead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HorseHead
include('fontawesome/Solid/HorseHead')

' renders the element
HorseHead('HorseHead', 'Horse Head', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HorseHead
include('fontawesome/Solid/HorseHead')

' renders the element
HorseHead('HorseHead', 'Horse Head', 'an optional tech label', 'an optional description')
@enduml
```

