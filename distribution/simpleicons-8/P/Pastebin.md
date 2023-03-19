# Pastebin


```text
simpleicons-8/P/Pastebin
```

```text
include('simpleicons-8/P/Pastebin')
```



| Illustration | Pastebin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pastebin.png) | ![illustration for Pastebin](../../simpleicons-8/P/Pastebin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PastebinXs>`
- `<$PastebinSm>`
- `<$PastebinMd>`
- `<$PastebinLg>`





## Pastebin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pastebin
include('simpleicons-8/P/Pastebin')

' renders the element
Pastebin('Pastebin', 'Pastebin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pastebin
include('simpleicons-8/P/Pastebin')

' renders the element
Pastebin('Pastebin', 'Pastebin', 'an optional tech label', 'an optional description')
@enduml
```

