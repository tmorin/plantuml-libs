# Pastebin


```text
simpleicons-5/P/Pastebin
```

```text
include('simpleicons-5/P/Pastebin')
```



| Illustration | Pastebin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pastebin.png) | ![illustration for Pastebin](../../simpleicons-5/P/Pastebin.Local.png) |




## Pastebin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pastebin
include('simpleicons-5/P/Pastebin')

' renders the element
Pastebin('Pastebin', 'Pastebin', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pastebin
include('simpleicons-5/P/Pastebin')

' renders the element
Pastebin('Pastebin', 'Pastebin', 'an optional tech label')
@enduml
```

