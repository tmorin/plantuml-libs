# MarkunreadMailbox


```text
material-4/Action/MarkunreadMailbox
```

```text
include('material-4/Action/MarkunreadMailbox')
```



| Illustration | MarkunreadMailbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/MarkunreadMailbox.png) | ![illustration for MarkunreadMailbox](../../material-4/Action/MarkunreadMailbox.Local.png) |




## MarkunreadMailbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MarkunreadMailbox
include('material-4/Action/MarkunreadMailbox')

' renders the element
MarkunreadMailbox('MarkunreadMailbox', 'Markunread Mailbox', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MarkunreadMailbox
include('material-4/Action/MarkunreadMailbox')

' renders the element
MarkunreadMailbox('MarkunreadMailbox', 'Markunread Mailbox', 'an optional tech label')
@enduml
```

