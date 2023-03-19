# Gitbook


```text
simpleicons-8/G/Gitbook
```

```text
include('simpleicons-8/G/Gitbook')
```



| Illustration | Gitbook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitbook.png) | ![illustration for Gitbook](../../simpleicons-8/G/Gitbook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitbookXs>`
- `<$GitbookSm>`
- `<$GitbookMd>`
- `<$GitbookLg>`





## Gitbook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitbook
include('simpleicons-8/G/Gitbook')

' renders the element
Gitbook('Gitbook', 'Gitbook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitbook
include('simpleicons-8/G/Gitbook')

' renders the element
Gitbook('Gitbook', 'Gitbook', 'an optional tech label', 'an optional description')
@enduml
```

