# Pocketbase


```text
simpleicons-14/P/Pocketbase
```

```text
include('simpleicons-14/P/Pocketbase')
```



| Illustration | Pocketbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pocketbase.png) | ![illustration for Pocketbase](../../simpleicons-14/P/Pocketbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PocketbaseXs>`
- `<$PocketbaseSm>`
- `<$PocketbaseMd>`
- `<$PocketbaseLg>`





## Pocketbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pocketbase
include('simpleicons-14/P/Pocketbase')

' renders the element
Pocketbase('Pocketbase', 'Pocketbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pocketbase
include('simpleicons-14/P/Pocketbase')

' renders the element
Pocketbase('Pocketbase', 'Pocketbase', 'an optional tech label', 'an optional description')
@enduml
```

