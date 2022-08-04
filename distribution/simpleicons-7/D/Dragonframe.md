# Dragonframe


```text
simpleicons-7/D/Dragonframe
```

```text
include('simpleicons-7/D/Dragonframe')
```



| Illustration | Dragonframe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dragonframe.png) | ![illustration for Dragonframe](../../simpleicons-7/D/Dragonframe.Local.png) |




## Dragonframe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dragonframe
include('simpleicons-7/D/Dragonframe')

' renders the element
Dragonframe('Dragonframe', 'Dragonframe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dragonframe
include('simpleicons-7/D/Dragonframe')

' renders the element
Dragonframe('Dragonframe', 'Dragonframe', 'an optional tech label', 'an optional description')
@enduml
```

