# MoveToInbox


```text
material/Content/MoveToInbox
```

```text
include('material/Content/MoveToInbox')
```



| Illustration | MoveToInbox |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/MoveToInbox.png) | ![illustration for MoveToInbox](../../material/Content/MoveToInbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoveToInboxXs>`
- `<$MoveToInboxSm>`
- `<$MoveToInboxMd>`
- `<$MoveToInboxLg>`





## MoveToInbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MoveToInbox
include('material/Content/MoveToInbox')

' renders the element
MoveToInbox('MoveToInbox', 'Move To Inbox', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element MoveToInbox
include('material/Content/MoveToInbox')

' renders the element
MoveToInbox('MoveToInbox', 'Move To Inbox', 'an optional tech label', 'an optional description')
@enduml
```

