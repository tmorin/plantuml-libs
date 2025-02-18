# Tiktok


```text
simpleicons-14/T/Tiktok
```

```text
include('simpleicons-14/T/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tiktok.png) | ![illustration for Tiktok](../../simpleicons-14/T/Tiktok.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TiktokXs>`
- `<$TiktokSm>`
- `<$TiktokMd>`
- `<$TiktokLg>`





## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tiktok
include('simpleicons-14/T/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tiktok
include('simpleicons-14/T/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
@enduml
```

