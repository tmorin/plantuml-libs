# Misskey


```text
simpleicons-14/M/Misskey
```

```text
include('simpleicons-14/M/Misskey')
```



| Illustration | Misskey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Misskey.png) | ![illustration for Misskey](../../simpleicons-14/M/Misskey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MisskeyXs>`
- `<$MisskeySm>`
- `<$MisskeyMd>`
- `<$MisskeyLg>`





## Misskey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Misskey
include('simpleicons-14/M/Misskey')

' renders the element
Misskey('Misskey', 'Misskey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Misskey
include('simpleicons-14/M/Misskey')

' renders the element
Misskey('Misskey', 'Misskey', 'an optional tech label', 'an optional description')
@enduml
```

