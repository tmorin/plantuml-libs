# Clubhouse


```text
simpleicons-7/C/Clubhouse
```

```text
include('simpleicons-7/C/Clubhouse')
```



| Illustration | Clubhouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Clubhouse.png) | ![illustration for Clubhouse](../../simpleicons-7/C/Clubhouse.Local.png) |




## Clubhouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Clubhouse
include('simpleicons-7/C/Clubhouse')

' renders the element
Clubhouse('Clubhouse', 'Clubhouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clubhouse
include('simpleicons-7/C/Clubhouse')

' renders the element
Clubhouse('Clubhouse', 'Clubhouse', 'an optional tech label', 'an optional description')
@enduml
```

