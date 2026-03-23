# FrownOpen


```text
fontawesome/Regular/FrownOpen
```

```text
include('fontawesome/Regular/FrownOpen')
```



| Illustration | FrownOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FrownOpen.png) | ![illustration for FrownOpen](../../fontawesome/Regular/FrownOpen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrownOpenXs>`
- `<$FrownOpenSm>`
- `<$FrownOpenMd>`
- `<$FrownOpenLg>`





## FrownOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FrownOpen
include('fontawesome/Regular/FrownOpen')

' renders the element
FrownOpen('FrownOpen', 'Frown Open', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FrownOpen
include('fontawesome/Regular/FrownOpen')

' renders the element
FrownOpen('FrownOpen', 'Frown Open', 'an optional tech label', 'an optional description')
@enduml
```

