# FaceFrownOpen


```text
fontawesome/Solid/FaceFrownOpen
```

```text
include('fontawesome/Solid/FaceFrownOpen')
```



| Illustration | FaceFrownOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceFrownOpen.png) | ![illustration for FaceFrownOpen](../../fontawesome/Solid/FaceFrownOpen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceFrownOpenXs>`
- `<$FaceFrownOpenSm>`
- `<$FaceFrownOpenMd>`
- `<$FaceFrownOpenLg>`





## FaceFrownOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceFrownOpen
include('fontawesome/Solid/FaceFrownOpen')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceFrownOpen
include('fontawesome/Solid/FaceFrownOpen')

' renders the element
FaceFrownOpen('FaceFrownOpen', 'Face Frown Open', 'an optional tech label', 'an optional description')
@enduml
```

