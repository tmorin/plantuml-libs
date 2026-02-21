# Activitypub


```text
simpleicons/A/Activitypub
```

```text
include('simpleicons/A/Activitypub')
```



| Illustration | Activitypub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Activitypub.png) | ![illustration for Activitypub](../../simpleicons/A/Activitypub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ActivitypubXs>`
- `<$ActivitypubSm>`
- `<$ActivitypubMd>`
- `<$ActivitypubLg>`





## Activitypub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Activitypub
include('simpleicons/A/Activitypub')

' renders the element
Activitypub('Activitypub', 'Activitypub', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Activitypub
include('simpleicons/A/Activitypub')

' renders the element
Activitypub('Activitypub', 'Activitypub', 'an optional tech label', 'an optional description')
@enduml
```

