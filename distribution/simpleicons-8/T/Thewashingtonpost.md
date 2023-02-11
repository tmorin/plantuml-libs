# Thewashingtonpost


```text
simpleicons-8/T/Thewashingtonpost
```

```text
include('simpleicons-8/T/Thewashingtonpost')
```



| Illustration | Thewashingtonpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Thewashingtonpost.png) | ![illustration for Thewashingtonpost](../../simpleicons-8/T/Thewashingtonpost.Local.png) |




## Thewashingtonpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-8/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-8/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label', 'an optional description')
@enduml
```

