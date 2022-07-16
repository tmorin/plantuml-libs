# Protools


```text
simpleicons-7/P/Protools
```

```text
include('simpleicons-7/P/Protools')
```



| Illustration | Protools |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Protools.png) | ![illustration for Protools](../../simpleicons-7/P/Protools.Local.png) |




## Protools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Protools
include('simpleicons-7/P/Protools')

' renders the element
Protools('Protools', 'Protools', 'an optional tech label')
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

' loads the Item which embeds the element Protools
include('simpleicons-7/P/Protools')

' renders the element
Protools('Protools', 'Protools', 'an optional tech label')
@enduml
```

