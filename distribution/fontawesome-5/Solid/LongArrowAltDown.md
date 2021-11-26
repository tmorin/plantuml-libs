# LongArrowAltDown


```text
fontawesome-5/Solid/LongArrowAltDown
```

```text
include('fontawesome-5/Solid/LongArrowAltDown')
```



| Illustration | LongArrowAltDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LongArrowAltDown.png) | ![illustration for LongArrowAltDown](../../fontawesome-5/Solid/LongArrowAltDown.Local.png) |




## LongArrowAltDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LongArrowAltDown
include('fontawesome-5/Solid/LongArrowAltDown')

' renders the element
LongArrowAltDown('LongArrowAltDown', 'Long Arrow Alt Down', 'an optional tech label')
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

' loads the Item which embeds the element LongArrowAltDown
include('fontawesome-5/Solid/LongArrowAltDown')

' renders the element
LongArrowAltDown('LongArrowAltDown', 'Long Arrow Alt Down', 'an optional tech label')
@enduml
```

