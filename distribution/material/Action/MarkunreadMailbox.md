# MarkunreadMailbox


```text
material/Action/MarkunreadMailbox
```

```text
include('material/Action/MarkunreadMailbox')
```



| Illustration | MarkunreadMailbox |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/MarkunreadMailbox.png) | ![illustration for MarkunreadMailbox](../../material/Action/MarkunreadMailbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarkunreadMailboxXs>`
- `<$MarkunreadMailboxSm>`
- `<$MarkunreadMailboxMd>`
- `<$MarkunreadMailboxLg>`





## MarkunreadMailbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MarkunreadMailbox
include('material/Action/MarkunreadMailbox')

' renders the element
MarkunreadMailbox('MarkunreadMailbox', 'Markunread Mailbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarkunreadMailbox
include('material/Action/MarkunreadMailbox')

' renders the element
MarkunreadMailbox('MarkunreadMailbox', 'Markunread Mailbox', 'an optional tech label', 'an optional description')
@enduml
```

