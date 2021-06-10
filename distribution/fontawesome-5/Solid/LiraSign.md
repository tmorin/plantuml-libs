# LiraSign


```text
fontawesome-5/Solid/LiraSign
```

```text
include('fontawesome-5/Solid/LiraSign')
```



| Illustration | LiraSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LiraSign.png) | ![illustration for LiraSign](../../fontawesome-5/Solid/LiraSign.Local.png) |




## LiraSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LiraSign
include('fontawesome-5/Solid/LiraSign')

' renders the element
LiraSign('LiraSign', 'Lira Sign', 'an optional tech label')
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

' loads the Item which embeds the element LiraSign
include('fontawesome-5/Solid/LiraSign')

' renders the element
LiraSign('LiraSign', 'Lira Sign', 'an optional tech label')
@enduml
```

