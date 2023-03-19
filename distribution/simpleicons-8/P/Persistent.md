# Persistent


```text
simpleicons-8/P/Persistent
```

```text
include('simpleicons-8/P/Persistent')
```



| Illustration | Persistent |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Persistent.png) | ![illustration for Persistent](../../simpleicons-8/P/Persistent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersistentXs>`
- `<$PersistentSm>`
- `<$PersistentMd>`
- `<$PersistentLg>`





## Persistent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Persistent
include('simpleicons-8/P/Persistent')

' renders the element
Persistent('Persistent', 'Persistent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Persistent
include('simpleicons-8/P/Persistent')

' renders the element
Persistent('Persistent', 'Persistent', 'an optional tech label', 'an optional description')
@enduml
```

