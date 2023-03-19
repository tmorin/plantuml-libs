# ForwardToInbox


```text
material-4/Communication/ForwardToInbox
```

```text
include('material-4/Communication/ForwardToInbox')
```



| Illustration | ForwardToInbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ForwardToInbox.png) | ![illustration for ForwardToInbox](../../material-4/Communication/ForwardToInbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForwardToInboxXs>`
- `<$ForwardToInboxSm>`
- `<$ForwardToInboxMd>`
- `<$ForwardToInboxLg>`





## ForwardToInbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ForwardToInbox
include('material-4/Communication/ForwardToInbox')

' renders the element
ForwardToInbox('ForwardToInbox', 'Forward To Inbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ForwardToInbox
include('material-4/Communication/ForwardToInbox')

' renders the element
ForwardToInbox('ForwardToInbox', 'Forward To Inbox', 'an optional tech label', 'an optional description')
@enduml
```

