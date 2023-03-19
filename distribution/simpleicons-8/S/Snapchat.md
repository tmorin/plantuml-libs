# Snapchat


```text
simpleicons-8/S/Snapchat
```

```text
include('simpleicons-8/S/Snapchat')
```



| Illustration | Snapchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Snapchat.png) | ![illustration for Snapchat](../../simpleicons-8/S/Snapchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnapchatXs>`
- `<$SnapchatSm>`
- `<$SnapchatMd>`
- `<$SnapchatLg>`





## Snapchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snapchat
include('simpleicons-8/S/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snapchat
include('simpleicons-8/S/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label', 'an optional description')
@enduml
```

