# LongArrowDown


```text
fontawesome/Solid/LongArrowDown
```

```text
include('fontawesome/Solid/LongArrowDown')
```



| Illustration | LongArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LongArrowDown.png) | ![illustration for LongArrowDown](../../fontawesome/Solid/LongArrowDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LongArrowDownXs>`
- `<$LongArrowDownSm>`
- `<$LongArrowDownMd>`
- `<$LongArrowDownLg>`





## LongArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LongArrowDown
include('fontawesome/Solid/LongArrowDown')

' renders the element
LongArrowDown('LongArrowDown', 'Long Arrow Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LongArrowDown
include('fontawesome/Solid/LongArrowDown')

' renders the element
LongArrowDown('LongArrowDown', 'Long Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

