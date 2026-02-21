# WandMagic


```text
fontawesome/Solid/WandMagic
```

```text
include('fontawesome/Solid/WandMagic')
```



| Illustration | WandMagic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WandMagic.png) | ![illustration for WandMagic](../../fontawesome/Solid/WandMagic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WandMagicXs>`
- `<$WandMagicSm>`
- `<$WandMagicMd>`
- `<$WandMagicLg>`





## WandMagic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WandMagic
include('fontawesome/Solid/WandMagic')

' renders the element
WandMagic('WandMagic', 'Wand Magic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WandMagic
include('fontawesome/Solid/WandMagic')

' renders the element
WandMagic('WandMagic', 'Wand Magic', 'an optional tech label', 'an optional description')
@enduml
```

