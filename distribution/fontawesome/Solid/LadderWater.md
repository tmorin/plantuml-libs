# LadderWater


```text
fontawesome/Solid/LadderWater
```

```text
include('fontawesome/Solid/LadderWater')
```



| Illustration | LadderWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LadderWater.png) | ![illustration for LadderWater](../../fontawesome/Solid/LadderWater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LadderWaterXs>`
- `<$LadderWaterSm>`
- `<$LadderWaterMd>`
- `<$LadderWaterLg>`





## LadderWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LadderWater
include('fontawesome/Solid/LadderWater')

' renders the element
LadderWater('LadderWater', 'Ladder Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LadderWater
include('fontawesome/Solid/LadderWater')

' renders the element
LadderWater('LadderWater', 'Ladder Water', 'an optional tech label', 'an optional description')
@enduml
```

