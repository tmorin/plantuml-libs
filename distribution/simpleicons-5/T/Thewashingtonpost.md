# Thewashingtonpost


```text
simpleicons-5/T/Thewashingtonpost
```

```text
include('simpleicons-5/T/Thewashingtonpost')
```



| Illustration | Thewashingtonpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Thewashingtonpost.png) | ![illustration for Thewashingtonpost](../../simpleicons-5/T/Thewashingtonpost.Local.png) |




## Thewashingtonpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-5/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label')
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

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-5/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label')
@enduml
```

