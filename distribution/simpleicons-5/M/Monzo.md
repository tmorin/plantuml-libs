# Monzo


```text
simpleicons-5/M/Monzo
```

```text
include('simpleicons-5/M/Monzo')
```



| Illustration | Monzo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Monzo.png) | ![illustration for Monzo](../../simpleicons-5/M/Monzo.Local.png) |




## Monzo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Monzo
include('simpleicons-5/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label')
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

' loads the Item which embeds the element Monzo
include('simpleicons-5/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label')
@enduml
```

