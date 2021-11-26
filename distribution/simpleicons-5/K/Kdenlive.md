# Kdenlive


```text
simpleicons-5/K/Kdenlive
```

```text
include('simpleicons-5/K/Kdenlive')
```



| Illustration | Kdenlive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kdenlive.png) | ![illustration for Kdenlive](../../simpleicons-5/K/Kdenlive.Local.png) |




## Kdenlive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kdenlive
include('simpleicons-5/K/Kdenlive')

' renders the element
Kdenlive('Kdenlive', 'Kdenlive', 'an optional tech label')
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

' loads the Item which embeds the element Kdenlive
include('simpleicons-5/K/Kdenlive')

' renders the element
Kdenlive('Kdenlive', 'Kdenlive', 'an optional tech label')
@enduml
```

