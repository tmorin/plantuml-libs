# Pegasusairlines


```text
simpleicons-7/P/Pegasusairlines
```

```text
include('simpleicons-7/P/Pegasusairlines')
```



| Illustration | Pegasusairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pegasusairlines.png) | ![illustration for Pegasusairlines](../../simpleicons-7/P/Pegasusairlines.Local.png) |




## Pegasusairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pegasusairlines
include('simpleicons-7/P/Pegasusairlines')

' renders the element
Pegasusairlines('Pegasusairlines', 'Pegasusairlines', 'an optional tech label')
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

' loads the Item which embeds the element Pegasusairlines
include('simpleicons-7/P/Pegasusairlines')

' renders the element
Pegasusairlines('Pegasusairlines', 'Pegasusairlines', 'an optional tech label')
@enduml
```
