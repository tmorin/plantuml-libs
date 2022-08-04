# Wearos


```text
simpleicons-7/W/Wearos
```

```text
include('simpleicons-7/W/Wearos')
```



| Illustration | Wearos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wearos.png) | ![illustration for Wearos](../../simpleicons-7/W/Wearos.Local.png) |




## Wearos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wearos
include('simpleicons-7/W/Wearos')

' renders the element
Wearos('Wearos', 'Wearos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wearos
include('simpleicons-7/W/Wearos')

' renders the element
Wearos('Wearos', 'Wearos', 'an optional tech label', 'an optional description')
@enduml
```

