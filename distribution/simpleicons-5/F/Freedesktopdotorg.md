# Freedesktopdotorg


```text
simpleicons-5/F/Freedesktopdotorg
```

```text
include('simpleicons-5/F/Freedesktopdotorg')
```



| Illustration | Freedesktopdotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Freedesktopdotorg.png) | ![illustration for Freedesktopdotorg](../../simpleicons-5/F/Freedesktopdotorg.Local.png) |




## Freedesktopdotorg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons-5/F/Freedesktopdotorg')

' renders the element
Freedesktopdotorg('Freedesktopdotorg', 'Freedesktopdotorg', 'an optional tech label')
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

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons-5/F/Freedesktopdotorg')

' renders the element
Freedesktopdotorg('Freedesktopdotorg', 'Freedesktopdotorg', 'an optional tech label')
@enduml
```

