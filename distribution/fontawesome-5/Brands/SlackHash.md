# SlackHash


```text
fontawesome-5/Brands/SlackHash
```

```text
include('fontawesome-5/Brands/SlackHash')
```



| Illustration | SlackHash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/SlackHash.png) | ![illustration for SlackHash](../../fontawesome-5/Brands/SlackHash.Local.png) |




## SlackHash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SlackHash
include('fontawesome-5/Brands/SlackHash')

' renders the element
SlackHash('SlackHash', 'Slack Hash', 'an optional tech label')
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

' loads the Item which embeds the element SlackHash
include('fontawesome-5/Brands/SlackHash')

' renders the element
SlackHash('SlackHash', 'Slack Hash', 'an optional tech label')
@enduml
```

