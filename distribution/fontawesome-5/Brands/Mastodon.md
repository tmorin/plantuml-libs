# Mastodon


```text
fontawesome-5/Brands/Mastodon
```

```text
include('fontawesome-5/Brands/Mastodon')
```



| Illustration | Mastodon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Mastodon.png) | ![illustration for Mastodon](../../fontawesome-5/Brands/Mastodon.Local.png) |




## Mastodon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mastodon
include('fontawesome-5/Brands/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label')
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

' loads the Item which embeds the element Mastodon
include('fontawesome-5/Brands/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label')
@enduml
```

