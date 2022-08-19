# Monzo


```text
simpleicons-7/M/Monzo
```

```text
include('simpleicons-7/M/Monzo')
```



| Illustration | Monzo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Monzo.png) | ![illustration for Monzo](../../simpleicons-7/M/Monzo.Local.png) |




## Monzo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Monzo
include('simpleicons-7/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monzo
include('simpleicons-7/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label', 'an optional description')
@enduml
```
