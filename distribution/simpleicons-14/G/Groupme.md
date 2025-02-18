# Groupme


```text
simpleicons-14/G/Groupme
```

```text
include('simpleicons-14/G/Groupme')
```



| Illustration | Groupme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Groupme.png) | ![illustration for Groupme](../../simpleicons-14/G/Groupme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupmeXs>`
- `<$GroupmeSm>`
- `<$GroupmeMd>`
- `<$GroupmeLg>`





## Groupme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Groupme
include('simpleicons-14/G/Groupme')

' renders the element
Groupme('Groupme', 'Groupme', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Groupme
include('simpleicons-14/G/Groupme')

' renders the element
Groupme('Groupme', 'Groupme', 'an optional tech label', 'an optional description')
@enduml
```

