# Materialui


```text
simpleicons-5/M/Materialui
```

```text
include('simpleicons-5/M/Materialui')
```



| Illustration | Materialui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Materialui.png) | ![illustration for Materialui](../../simpleicons-5/M/Materialui.Local.png) |




## Materialui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Materialui
include('simpleicons-5/M/Materialui')

' renders the element
Materialui('Materialui', 'Materialui', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Materialui
include('simpleicons-5/M/Materialui')

' renders the element
Materialui('Materialui', 'Materialui', 'an optional tech label')
@enduml
```

