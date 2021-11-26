# Xdotorg


```text
simpleicons-5/X/Xdotorg
```

```text
include('simpleicons-5/X/Xdotorg')
```



| Illustration | Xdotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xdotorg.png) | ![illustration for Xdotorg](../../simpleicons-5/X/Xdotorg.Local.png) |




## Xdotorg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xdotorg
include('simpleicons-5/X/Xdotorg')

' renders the element
Xdotorg('Xdotorg', 'Xdotorg', 'an optional tech label')
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

' loads the Item which embeds the element Xdotorg
include('simpleicons-5/X/Xdotorg')

' renders the element
Xdotorg('Xdotorg', 'Xdotorg', 'an optional tech label')
@enduml
```

