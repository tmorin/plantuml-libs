# Dm


```text
simpleicons-6/D/Dm
```

```text
include('simpleicons-6/D/Dm')
```



| Illustration | Dm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dm.png) | ![illustration for Dm](../../simpleicons-6/D/Dm.Local.png) |




## Dm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dm
include('simpleicons-6/D/Dm')

' renders the element
Dm('Dm', 'Dm', 'an optional tech label')
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

' loads the Item which embeds the element Dm
include('simpleicons-6/D/Dm')

' renders the element
Dm('Dm', 'Dm', 'an optional tech label')
@enduml
```

