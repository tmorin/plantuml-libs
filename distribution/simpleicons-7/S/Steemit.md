# Steemit


```text
simpleicons-7/S/Steemit
```

```text
include('simpleicons-7/S/Steemit')
```



| Illustration | Steemit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Steemit.png) | ![illustration for Steemit](../../simpleicons-7/S/Steemit.Local.png) |




## Steemit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Steemit
include('simpleicons-7/S/Steemit')

' renders the element
Steemit('Steemit', 'Steemit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Steemit
include('simpleicons-7/S/Steemit')

' renders the element
Steemit('Steemit', 'Steemit', 'an optional tech label', 'an optional description')
@enduml
```
