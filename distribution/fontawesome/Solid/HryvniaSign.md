# HryvniaSign


```text
fontawesome/Solid/HryvniaSign
```

```text
include('fontawesome/Solid/HryvniaSign')
```



| Illustration | HryvniaSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HryvniaSign.png) | ![illustration for HryvniaSign](../../fontawesome/Solid/HryvniaSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HryvniaSignXs>`
- `<$HryvniaSignSm>`
- `<$HryvniaSignMd>`
- `<$HryvniaSignLg>`





## HryvniaSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HryvniaSign
include('fontawesome/Solid/HryvniaSign')

' renders the element
HryvniaSign('HryvniaSign', 'Hryvnia Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HryvniaSign
include('fontawesome/Solid/HryvniaSign')

' renders the element
HryvniaSign('HryvniaSign', 'Hryvnia Sign', 'an optional tech label', 'an optional description')
@enduml
```

