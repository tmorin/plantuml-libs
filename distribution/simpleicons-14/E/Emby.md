# Emby


```text
simpleicons-14/E/Emby
```

```text
include('simpleicons-14/E/Emby')
```



| Illustration | Emby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Emby.png) | ![illustration for Emby](../../simpleicons-14/E/Emby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmbyXs>`
- `<$EmbySm>`
- `<$EmbyMd>`
- `<$EmbyLg>`





## Emby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Emby
include('simpleicons-14/E/Emby')

' renders the element
Emby('Emby', 'Emby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Emby
include('simpleicons-14/E/Emby')

' renders the element
Emby('Emby', 'Emby', 'an optional tech label', 'an optional description')
@enduml
```

