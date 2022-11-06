# Ducati


```text
simpleicons-7/D/Ducati
```

```text
include('simpleicons-7/D/Ducati')
```



| Illustration | Ducati |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Ducati.png) | ![illustration for Ducati](../../simpleicons-7/D/Ducati.Local.png) |




## Ducati

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ducati
include('simpleicons-7/D/Ducati')

' renders the element
Ducati('Ducati', 'Ducati', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ducati
include('simpleicons-7/D/Ducati')

' renders the element
Ducati('Ducati', 'Ducati', 'an optional tech label', 'an optional description')
@enduml
```

