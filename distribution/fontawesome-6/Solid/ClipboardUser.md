# ClipboardUser


```text
fontawesome-6/Solid/ClipboardUser
```

```text
include('fontawesome-6/Solid/ClipboardUser')
```



| Illustration | ClipboardUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ClipboardUser.png) | ![illustration for ClipboardUser](../../fontawesome-6/Solid/ClipboardUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClipboardUserXs>`
- `<$ClipboardUserSm>`
- `<$ClipboardUserMd>`
- `<$ClipboardUserLg>`





## ClipboardUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClipboardUser
include('fontawesome-6/Solid/ClipboardUser')

' renders the element
ClipboardUser('ClipboardUser', 'Clipboard User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClipboardUser
include('fontawesome-6/Solid/ClipboardUser')

' renders the element
ClipboardUser('ClipboardUser', 'Clipboard User', 'an optional tech label', 'an optional description')
@enduml
```

