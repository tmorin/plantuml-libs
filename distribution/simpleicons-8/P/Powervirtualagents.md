# Powervirtualagents


```text
simpleicons-8/P/Powervirtualagents
```

```text
include('simpleicons-8/P/Powervirtualagents')
```



| Illustration | Powervirtualagents |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Powervirtualagents.png) | ![illustration for Powervirtualagents](../../simpleicons-8/P/Powervirtualagents.Local.png) |




## Powervirtualagents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Powervirtualagents
include('simpleicons-8/P/Powervirtualagents')

' renders the element
Powervirtualagents('Powervirtualagents', 'Powervirtualagents', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Powervirtualagents
include('simpleicons-8/P/Powervirtualagents')

' renders the element
Powervirtualagents('Powervirtualagents', 'Powervirtualagents', 'an optional tech label', 'an optional description')
@enduml
```

