# LongArrowRight


```text
fontawesome/Solid/LongArrowRight
```

```text
include('fontawesome/Solid/LongArrowRight')
```



| Illustration | LongArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LongArrowRight.png) | ![illustration for LongArrowRight](../../fontawesome/Solid/LongArrowRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LongArrowRightXs>`
- `<$LongArrowRightSm>`
- `<$LongArrowRightMd>`
- `<$LongArrowRightLg>`





## LongArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LongArrowRight
include('fontawesome/Solid/LongArrowRight')

' renders the element
LongArrowRight('LongArrowRight', 'Long Arrow Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LongArrowRight
include('fontawesome/Solid/LongArrowRight')

' renders the element
LongArrowRight('LongArrowRight', 'Long Arrow Right', 'an optional tech label', 'an optional description')
@enduml
```

