# Zulip


```text
simpleicons-7/Z/Zulip
```

```text
include('simpleicons-7/Z/Zulip')
```



| Illustration | Zulip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zulip.png) | ![illustration for Zulip](../../simpleicons-7/Z/Zulip.Local.png) |




## Zulip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zulip
include('simpleicons-7/Z/Zulip')

' renders the element
Zulip('Zulip', 'Zulip', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zulip
include('simpleicons-7/Z/Zulip')

' renders the element
Zulip('Zulip', 'Zulip', 'an optional tech label', 'an optional description')
@enduml
```

