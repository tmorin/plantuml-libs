# Discord


```text
simpleicons-5/D/Discord
```

```text
include('simpleicons-5/D/Discord')
```



| Illustration | Discord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Discord.png) | ![illustration for Discord](../../simpleicons-5/D/Discord.Local.png) |




## Discord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Discord
include('simpleicons-5/D/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label')
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

' loads the Item which embeds the element Discord
include('simpleicons-5/D/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label')
@enduml
```

