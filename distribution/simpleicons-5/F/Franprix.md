# Franprix


```text
simpleicons-5/F/Franprix
```

```text
include('simpleicons-5/F/Franprix')
```



| Illustration | Franprix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Franprix.png) | ![illustration for Franprix](../../simpleicons-5/F/Franprix.Local.png) |




## Franprix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Franprix
include('simpleicons-5/F/Franprix')

' renders the element
Franprix('Franprix', 'Franprix', 'an optional tech label')
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

' loads the Item which embeds the element Franprix
include('simpleicons-5/F/Franprix')

' renders the element
Franprix('Franprix', 'Franprix', 'an optional tech label')
@enduml
```

