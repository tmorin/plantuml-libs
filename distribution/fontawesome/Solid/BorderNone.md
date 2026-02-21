# BorderNone


```text
fontawesome/Solid/BorderNone
```

```text
include('fontawesome/Solid/BorderNone')
```



| Illustration | BorderNone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BorderNone.png) | ![illustration for BorderNone](../../fontawesome/Solid/BorderNone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderNoneXs>`
- `<$BorderNoneSm>`
- `<$BorderNoneMd>`
- `<$BorderNoneLg>`





## BorderNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderNone
include('fontawesome/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderNone
include('fontawesome/Solid/BorderNone')

' renders the element
BorderNone('BorderNone', 'Border None', 'an optional tech label', 'an optional description')
@enduml
```

