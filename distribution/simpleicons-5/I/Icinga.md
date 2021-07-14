# Icinga


```text
simpleicons-5/I/Icinga
```

```text
include('simpleicons-5/I/Icinga')
```



| Illustration | Icinga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Icinga.png) | ![illustration for Icinga](../../simpleicons-5/I/Icinga.Local.png) |




## Icinga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Icinga
include('simpleicons-5/I/Icinga')

' renders the element
Icinga('Icinga', 'Icinga', 'an optional tech label')
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

' loads the Item which embeds the element Icinga
include('simpleicons-5/I/Icinga')

' renders the element
Icinga('Icinga', 'Icinga', 'an optional tech label')
@enduml
```

