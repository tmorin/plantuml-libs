# Theirishtimes


```text
simpleicons-7/T/Theirishtimes
```

```text
include('simpleicons-7/T/Theirishtimes')
```



| Illustration | Theirishtimes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Theirishtimes.png) | ![illustration for Theirishtimes](../../simpleicons-7/T/Theirishtimes.Local.png) |




## Theirishtimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Theirishtimes
include('simpleicons-7/T/Theirishtimes')

' renders the element
Theirishtimes('Theirishtimes', 'Theirishtimes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theirishtimes
include('simpleicons-7/T/Theirishtimes')

' renders the element
Theirishtimes('Theirishtimes', 'Theirishtimes', 'an optional tech label', 'an optional description')
@enduml
```

