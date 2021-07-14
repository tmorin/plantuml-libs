# Pleroma


```text
simpleicons-5/P/Pleroma
```

```text
include('simpleicons-5/P/Pleroma')
```



| Illustration | Pleroma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pleroma.png) | ![illustration for Pleroma](../../simpleicons-5/P/Pleroma.Local.png) |




## Pleroma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pleroma
include('simpleicons-5/P/Pleroma')

' renders the element
Pleroma('Pleroma', 'Pleroma', 'an optional tech label')
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

' loads the Item which embeds the element Pleroma
include('simpleicons-5/P/Pleroma')

' renders the element
Pleroma('Pleroma', 'Pleroma', 'an optional tech label')
@enduml
```

