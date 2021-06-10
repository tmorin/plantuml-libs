# FrownOpen


```text
fontawesome-5/Solid/FrownOpen
```

```text
include('fontawesome-5/Solid/FrownOpen')
```



| Illustration | FrownOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FrownOpen.png) | ![illustration for FrownOpen](../../fontawesome-5/Solid/FrownOpen.Local.png) |




## FrownOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FrownOpen
include('fontawesome-5/Solid/FrownOpen')

' renders the element
FrownOpen('FrownOpen', 'Frown Open', 'an optional tech label')
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

' loads the Item which embeds the element FrownOpen
include('fontawesome-5/Solid/FrownOpen')

' renders the element
FrownOpen('FrownOpen', 'Frown Open', 'an optional tech label')
@enduml
```

