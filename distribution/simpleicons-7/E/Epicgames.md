# Epicgames


```text
simpleicons-7/E/Epicgames
```

```text
include('simpleicons-7/E/Epicgames')
```



| Illustration | Epicgames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Epicgames.png) | ![illustration for Epicgames](../../simpleicons-7/E/Epicgames.Local.png) |




## Epicgames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Epicgames
include('simpleicons-7/E/Epicgames')

' renders the element
Epicgames('Epicgames', 'Epicgames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Epicgames
include('simpleicons-7/E/Epicgames')

' renders the element
Epicgames('Epicgames', 'Epicgames', 'an optional tech label', 'an optional description')
@enduml
```

