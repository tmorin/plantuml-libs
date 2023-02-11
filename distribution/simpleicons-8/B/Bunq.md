# Bunq


```text
simpleicons-8/B/Bunq
```

```text
include('simpleicons-8/B/Bunq')
```



| Illustration | Bunq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bunq.png) | ![illustration for Bunq](../../simpleicons-8/B/Bunq.Local.png) |




## Bunq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bunq
include('simpleicons-8/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bunq
include('simpleicons-8/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label', 'an optional description')
@enduml
```

