# Konva


```text
simpleicons-7/K/Konva
```

```text
include('simpleicons-7/K/Konva')
```



| Illustration | Konva |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Konva.png) | ![illustration for Konva](../../simpleicons-7/K/Konva.Local.png) |




## Konva

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Konva
include('simpleicons-7/K/Konva')

' renders the element
Konva('Konva', 'Konva', 'an optional tech label')
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

' loads the Item which embeds the element Konva
include('simpleicons-7/K/Konva')

' renders the element
Konva('Konva', 'Konva', 'an optional tech label')
@enduml
```

