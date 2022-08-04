# Quickreply


```text
material-4/Action/Quickreply
```

```text
include('material-4/Action/Quickreply')
```



| Illustration | Quickreply |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Quickreply.png) | ![illustration for Quickreply](../../material-4/Action/Quickreply.Local.png) |




## Quickreply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Quickreply
include('material-4/Action/Quickreply')

' renders the element
Quickreply('Quickreply', 'Quickreply', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quickreply
include('material-4/Action/Quickreply')

' renders the element
Quickreply('Quickreply', 'Quickreply', 'an optional tech label', 'an optional description')
@enduml
```

