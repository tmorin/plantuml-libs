# PendingActions


```text
material/Action/PendingActions
```

```text
include('material/Action/PendingActions')
```



| Illustration | PendingActions |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PendingActions.png) | ![illustration for PendingActions](../../material/Action/PendingActions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PendingActionsXs>`
- `<$PendingActionsSm>`
- `<$PendingActionsMd>`
- `<$PendingActionsLg>`





## PendingActions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PendingActions
include('material/Action/PendingActions')

' renders the element
PendingActions('PendingActions', 'Pending Actions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PendingActions
include('material/Action/PendingActions')

' renders the element
PendingActions('PendingActions', 'Pending Actions', 'an optional tech label', 'an optional description')
@enduml
```

