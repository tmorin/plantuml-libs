# ReplyAll


```text
fontawesome/Solid/ReplyAll
```

```text
include('fontawesome/Solid/ReplyAll')
```



| Illustration | ReplyAll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ReplyAll.png) | ![illustration for ReplyAll](../../fontawesome/Solid/ReplyAll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplyAllXs>`
- `<$ReplyAllSm>`
- `<$ReplyAllMd>`
- `<$ReplyAllLg>`





## ReplyAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ReplyAll
include('fontawesome/Solid/ReplyAll')

' renders the element
ReplyAll('ReplyAll', 'Reply All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ReplyAll
include('fontawesome/Solid/ReplyAll')

' renders the element
ReplyAll('ReplyAll', 'Reply All', 'an optional tech label', 'an optional description')
@enduml
```

