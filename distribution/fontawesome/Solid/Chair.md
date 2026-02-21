# Chair


```text
fontawesome/Solid/Chair
```

```text
include('fontawesome/Solid/Chair')
```



| Illustration | Chair |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Chair.png) | ![illustration for Chair](../../fontawesome/Solid/Chair.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChairXs>`
- `<$ChairSm>`
- `<$ChairMd>`
- `<$ChairLg>`





## Chair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Chair
include('fontawesome/Solid/Chair')

' renders the element
Chair('Chair', 'Chair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chair
include('fontawesome/Solid/Chair')

' renders the element
Chair('Chair', 'Chair', 'an optional tech label', 'an optional description')
@enduml
```

