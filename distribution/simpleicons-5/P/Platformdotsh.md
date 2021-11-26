# Platformdotsh


```text
simpleicons-5/P/Platformdotsh
```

```text
include('simpleicons-5/P/Platformdotsh')
```



| Illustration | Platformdotsh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Platformdotsh.png) | ![illustration for Platformdotsh](../../simpleicons-5/P/Platformdotsh.Local.png) |




## Platformdotsh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Platformdotsh
include('simpleicons-5/P/Platformdotsh')

' renders the element
Platformdotsh('Platformdotsh', 'Platformdotsh', 'an optional tech label')
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

' loads the Item which embeds the element Platformdotsh
include('simpleicons-5/P/Platformdotsh')

' renders the element
Platformdotsh('Platformdotsh', 'Platformdotsh', 'an optional tech label')
@enduml
```

