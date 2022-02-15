# Discord


```text
fontawesome-6/Brands/Discord
```

```text
include('fontawesome-6/Brands/Discord')
```



| Illustration | Discord |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Discord.png) | ![illustration for Discord](../../fontawesome-6/Brands/Discord.Local.png) |




## Discord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Discord
include('fontawesome-6/Brands/Discord')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Discord
include('fontawesome-6/Brands/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label')
@enduml
```

