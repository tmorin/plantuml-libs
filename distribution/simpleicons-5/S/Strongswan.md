# Strongswan


```text
simpleicons-5/S/Strongswan
```

```text
include('simpleicons-5/S/Strongswan')
```



| Illustration | Strongswan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Strongswan.png) | ![illustration for Strongswan](../../simpleicons-5/S/Strongswan.Local.png) |




## Strongswan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Strongswan
include('simpleicons-5/S/Strongswan')

' renders the element
Strongswan('Strongswan', 'Strongswan', 'an optional tech label')
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

' loads the Item which embeds the element Strongswan
include('simpleicons-5/S/Strongswan')

' renders the element
Strongswan('Strongswan', 'Strongswan', 'an optional tech label')
@enduml
```

