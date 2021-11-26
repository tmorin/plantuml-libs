# AllInbox


```text
material-4/Action/AllInbox
```

```text
include('material-4/Action/AllInbox')
```



| Illustration | AllInbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AllInbox.png) | ![illustration for AllInbox](../../material-4/Action/AllInbox.Local.png) |




## AllInbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AllInbox
include('material-4/Action/AllInbox')

' renders the element
AllInbox('AllInbox', 'All Inbox', 'an optional tech label')
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

' loads the Item which embeds the element AllInbox
include('material-4/Action/AllInbox')

' renders the element
AllInbox('AllInbox', 'All Inbox', 'an optional tech label')
@enduml
```

