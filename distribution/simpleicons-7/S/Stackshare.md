# Stackshare


```text
simpleicons-7/S/Stackshare
```

```text
include('simpleicons-7/S/Stackshare')
```



| Illustration | Stackshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackshare.png) | ![illustration for Stackshare](../../simpleicons-7/S/Stackshare.Local.png) |




## Stackshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackshare
include('simpleicons-7/S/Stackshare')

' renders the element
Stackshare('Stackshare', 'Stackshare', 'an optional tech label')
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

' loads the Item which embeds the element Stackshare
include('simpleicons-7/S/Stackshare')

' renders the element
Stackshare('Stackshare', 'Stackshare', 'an optional tech label')
@enduml
```

