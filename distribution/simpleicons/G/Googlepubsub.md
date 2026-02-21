# Googlepubsub


```text
simpleicons/G/Googlepubsub
```

```text
include('simpleicons/G/Googlepubsub')
```



| Illustration | Googlepubsub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlepubsub.png) | ![illustration for Googlepubsub](../../simpleicons/G/Googlepubsub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglepubsubXs>`
- `<$GooglepubsubSm>`
- `<$GooglepubsubMd>`
- `<$GooglepubsubLg>`





## Googlepubsub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlepubsub
include('simpleicons/G/Googlepubsub')

' renders the element
Googlepubsub('Googlepubsub', 'Googlepubsub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlepubsub
include('simpleicons/G/Googlepubsub')

' renders the element
Googlepubsub('Googlepubsub', 'Googlepubsub', 'an optional tech label', 'an optional description')
@enduml
```

