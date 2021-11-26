# Bunq


```text
simpleicons-5/B/Bunq
```

```text
include('simpleicons-5/B/Bunq')
```



| Illustration | Bunq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bunq.png) | ![illustration for Bunq](../../simpleicons-5/B/Bunq.Local.png) |




## Bunq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bunq
include('simpleicons-5/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label')
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

' loads the Item which embeds the element Bunq
include('simpleicons-5/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label')
@enduml
```

