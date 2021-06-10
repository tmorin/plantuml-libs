# LongArrowAltUp


```text
fontawesome-5/Solid/LongArrowAltUp
```

```text
include('fontawesome-5/Solid/LongArrowAltUp')
```



| Illustration | LongArrowAltUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LongArrowAltUp.png) | ![illustration for LongArrowAltUp](../../fontawesome-5/Solid/LongArrowAltUp.Local.png) |




## LongArrowAltUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LongArrowAltUp
include('fontawesome-5/Solid/LongArrowAltUp')

' renders the element
LongArrowAltUp('LongArrowAltUp', 'Long Arrow Alt Up', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LongArrowAltUp
include('fontawesome-5/Solid/LongArrowAltUp')

' renders the element
LongArrowAltUp('LongArrowAltUp', 'Long Arrow Alt Up', 'an optional tech label')
@enduml
```

