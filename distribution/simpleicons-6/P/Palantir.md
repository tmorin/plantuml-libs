# Palantir


```text
simpleicons-6/P/Palantir
```

```text
include('simpleicons-6/P/Palantir')
```



| Illustration | Palantir |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Palantir.png) | ![illustration for Palantir](../../simpleicons-6/P/Palantir.Local.png) |




## Palantir

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Palantir
include('simpleicons-6/P/Palantir')

' renders the element
Palantir('Palantir', 'Palantir', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Palantir
include('simpleicons-6/P/Palantir')

' renders the element
Palantir('Palantir', 'Palantir', 'an optional tech label')
@enduml
```

