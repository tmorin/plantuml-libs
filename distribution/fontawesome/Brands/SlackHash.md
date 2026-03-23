# SlackHash


```text
fontawesome/Brands/SlackHash
```

```text
include('fontawesome/Brands/SlackHash')
```



| Illustration | SlackHash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SlackHash.png) | ![illustration for SlackHash](../../fontawesome/Brands/SlackHash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlackHashXs>`
- `<$SlackHashSm>`
- `<$SlackHashMd>`
- `<$SlackHashLg>`





## SlackHash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SlackHash
include('fontawesome/Brands/SlackHash')

' renders the element
SlackHash('SlackHash', 'Slack Hash', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SlackHash
include('fontawesome/Brands/SlackHash')

' renders the element
SlackHash('SlackHash', 'Slack Hash', 'an optional tech label', 'an optional description')
@enduml
```

