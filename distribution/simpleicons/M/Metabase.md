# Metabase


```text
simpleicons/M/Metabase
```

```text
include('simpleicons/M/Metabase')
```



| Illustration | Metabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Metabase.png) | ![illustration for Metabase](../../simpleicons/M/Metabase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetabaseXs>`
- `<$MetabaseSm>`
- `<$MetabaseMd>`
- `<$MetabaseLg>`





## Metabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Metabase
include('simpleicons/M/Metabase')

' renders the element
Metabase('Metabase', 'Metabase', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Metabase
include('simpleicons/M/Metabase')

' renders the element
Metabase('Metabase', 'Metabase', 'an optional tech label', 'an optional description')
@enduml
```

