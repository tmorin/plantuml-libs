# Dlna


```text
simpleicons-5/D/Dlna
```

```text
include('simpleicons-5/D/Dlna')
```



| Illustration | Dlna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dlna.png) | ![illustration for Dlna](../../simpleicons-5/D/Dlna.Local.png) |




## Dlna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dlna
include('simpleicons-5/D/Dlna')

' renders the element
Dlna('Dlna', 'Dlna', 'an optional tech label')
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

' loads the Item which embeds the element Dlna
include('simpleicons-5/D/Dlna')

' renders the element
Dlna('Dlna', 'Dlna', 'an optional tech label')
@enduml
```

