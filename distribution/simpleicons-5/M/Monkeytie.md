# Monkeytie


```text
simpleicons-5/M/Monkeytie
```

```text
include('simpleicons-5/M/Monkeytie')
```



| Illustration | Monkeytie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Monkeytie.png) | ![illustration for Monkeytie](../../simpleicons-5/M/Monkeytie.Local.png) |




## Monkeytie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Monkeytie
include('simpleicons-5/M/Monkeytie')

' renders the element
Monkeytie('Monkeytie', 'Monkeytie', 'an optional tech label')
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

' loads the Item which embeds the element Monkeytie
include('simpleicons-5/M/Monkeytie')

' renders the element
Monkeytie('Monkeytie', 'Monkeytie', 'an optional tech label')
@enduml
```

