# Clubhouse


```text
simpleicons-5/C/Clubhouse
```

```text
include('simpleicons-5/C/Clubhouse')
```



| Illustration | Clubhouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Clubhouse.png) | ![illustration for Clubhouse](../../simpleicons-5/C/Clubhouse.Local.png) |




## Clubhouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Clubhouse
include('simpleicons-5/C/Clubhouse')

' renders the element
Clubhouse('Clubhouse', 'Clubhouse', 'an optional tech label')
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

' loads the Item which embeds the element Clubhouse
include('simpleicons-5/C/Clubhouse')

' renders the element
Clubhouse('Clubhouse', 'Clubhouse', 'an optional tech label')
@enduml
```

