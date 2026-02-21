# Man


```text
simpleicons/M/Man
```

```text
include('simpleicons/M/Man')
```



| Illustration | Man |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Man.png) | ![illustration for Man](../../simpleicons/M/Man.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ManXs>`
- `<$ManSm>`
- `<$ManMd>`
- `<$ManLg>`





## Man

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Man
include('simpleicons/M/Man')

' renders the element
Man('Man', 'Man', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Man
include('simpleicons/M/Man')

' renders the element
Man('Man', 'Man', 'an optional tech label', 'an optional description')
@enduml
```

