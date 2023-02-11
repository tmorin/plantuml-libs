# Discord


```text
simpleicons-8/D/Discord
```

```text
include('simpleicons-8/D/Discord')
```



| Illustration | Discord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Discord.png) | ![illustration for Discord](../../simpleicons-8/D/Discord.Local.png) |




## Discord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Discord
include('simpleicons-8/D/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Discord
include('simpleicons-8/D/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label', 'an optional description')
@enduml
```

