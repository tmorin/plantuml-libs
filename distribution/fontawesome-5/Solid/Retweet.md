# Retweet


```text
fontawesome-5/Solid/Retweet
```

```text
include('fontawesome-5/Solid/Retweet')
```



| Illustration | Retweet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Retweet.png) | ![illustration for Retweet](../../fontawesome-5/Solid/Retweet.Local.png) |




## Retweet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Retweet
include('fontawesome-5/Solid/Retweet')

' renders the element
Retweet('Retweet', 'Retweet', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Retweet
include('fontawesome-5/Solid/Retweet')

' renders the element
Retweet('Retweet', 'Retweet', 'an optional tech label')
@enduml
```

