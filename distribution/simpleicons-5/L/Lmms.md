# Lmms


```text
simpleicons-5/L/Lmms
```

```text
include('simpleicons-5/L/Lmms')
```



| Illustration | Lmms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lmms.png) | ![illustration for Lmms](../../simpleicons-5/L/Lmms.Local.png) |




## Lmms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lmms
include('simpleicons-5/L/Lmms')

' renders the element
Lmms('Lmms', 'Lmms', 'an optional tech label')
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

' loads the Item which embeds the element Lmms
include('simpleicons-5/L/Lmms')

' renders the element
Lmms('Lmms', 'Lmms', 'an optional tech label')
@enduml
```

