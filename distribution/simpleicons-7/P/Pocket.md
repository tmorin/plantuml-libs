# Pocket


```text
simpleicons-7/P/Pocket
```

```text
include('simpleicons-7/P/Pocket')
```



| Illustration | Pocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pocket.png) | ![illustration for Pocket](../../simpleicons-7/P/Pocket.Local.png) |




## Pocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pocket
include('simpleicons-7/P/Pocket')

' renders the element
Pocket('Pocket', 'Pocket', 'an optional tech label')
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

' loads the Item which embeds the element Pocket
include('simpleicons-7/P/Pocket')

' renders the element
Pocket('Pocket', 'Pocket', 'an optional tech label')
@enduml
```

