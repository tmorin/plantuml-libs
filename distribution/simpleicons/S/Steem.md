# Steem


```text
simpleicons/S/Steem
```

```text
include('simpleicons/S/Steem')
```



| Illustration | Steem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Steem.png) | ![illustration for Steem](../../simpleicons/S/Steem.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteemXs>`
- `<$SteemSm>`
- `<$SteemMd>`
- `<$SteemLg>`





## Steem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Steem
include('simpleicons/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Steem
include('simpleicons/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label', 'an optional description')
@enduml
```

