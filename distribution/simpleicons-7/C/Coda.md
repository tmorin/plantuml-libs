# Coda


```text
simpleicons-7/C/Coda
```

```text
include('simpleicons-7/C/Coda')
```



| Illustration | Coda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Coda.png) | ![illustration for Coda](../../simpleicons-7/C/Coda.Local.png) |




## Coda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coda
include('simpleicons-7/C/Coda')

' renders the element
Coda('Coda', 'Coda', 'an optional tech label')
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

' loads the Item which embeds the element Coda
include('simpleicons-7/C/Coda')

' renders the element
Coda('Coda', 'Coda', 'an optional tech label')
@enduml
```

