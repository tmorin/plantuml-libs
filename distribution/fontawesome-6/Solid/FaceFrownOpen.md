# FaceFrownOpen


```text
fontawesome-6/Solid/FaceFrownOpen
```

```text
include('fontawesome-6/Solid/FaceFrownOpen')
```



| Illustration | FaceFrownOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceFrownOpen.png) | ![illustration for FaceFrownOpen](../../fontawesome-6/Solid/FaceFrownOpen.Local.png) |




## FaceFrownOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFrownOpen
include('fontawesome-6/Solid/FaceFrownOpen')

' renders the element
FaceFrownOpen('FaceFrownOpen', 'Face Frown Open', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFrownOpen
include('fontawesome-6/Solid/FaceFrownOpen')

' renders the element
FaceFrownOpen('FaceFrownOpen', 'Face Frown Open', 'an optional tech label', 'an optional description')
@enduml
```

