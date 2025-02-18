# Steem


```text
simpleicons-14/S/Steem
```

```text
include('simpleicons-14/S/Steem')
```



| Illustration | Steem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Steem.png) | ![illustration for Steem](../../simpleicons-14/S/Steem.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Steem
include('simpleicons-14/S/Steem')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Steem
include('simpleicons-14/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label', 'an optional description')
@enduml
```

