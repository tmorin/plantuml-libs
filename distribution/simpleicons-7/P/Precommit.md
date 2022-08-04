# Precommit


```text
simpleicons-7/P/Precommit
```

```text
include('simpleicons-7/P/Precommit')
```



| Illustration | Precommit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Precommit.png) | ![illustration for Precommit](../../simpleicons-7/P/Precommit.Local.png) |




## Precommit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Precommit
include('simpleicons-7/P/Precommit')

' renders the element
Precommit('Precommit', 'Precommit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Precommit
include('simpleicons-7/P/Precommit')

' renders the element
Precommit('Precommit', 'Precommit', 'an optional tech label', 'an optional description')
@enduml
```

