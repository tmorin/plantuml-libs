# LongArrowUp


```text
fontawesome/Solid/LongArrowUp
```

```text
include('fontawesome/Solid/LongArrowUp')
```



| Illustration | LongArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LongArrowUp.png) | ![illustration for LongArrowUp](../../fontawesome/Solid/LongArrowUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LongArrowUpXs>`
- `<$LongArrowUpSm>`
- `<$LongArrowUpMd>`
- `<$LongArrowUpLg>`





## LongArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LongArrowUp
include('fontawesome/Solid/LongArrowUp')

' renders the element
LongArrowUp('LongArrowUp', 'Long Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LongArrowUp
include('fontawesome/Solid/LongArrowUp')

' renders the element
LongArrowUp('LongArrowUp', 'Long Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

