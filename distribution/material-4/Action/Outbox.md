# Outbox


```text
material-4/Action/Outbox
```

```text
include('material-4/Action/Outbox')
```



| Illustration | Outbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Outbox.png) | ![illustration for Outbox](../../material-4/Action/Outbox.Local.png) |




## Outbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Outbox
include('material-4/Action/Outbox')

' renders the element
Outbox('Outbox', 'Outbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Outbox
include('material-4/Action/Outbox')

' renders the element
Outbox('Outbox', 'Outbox', 'an optional tech label', 'an optional description')
@enduml
```

