# Interbase


```text
simpleicons-14/I/Interbase
```

```text
include('simpleicons-14/I/Interbase')
```



| Illustration | Interbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Interbase.png) | ![illustration for Interbase](../../simpleicons-14/I/Interbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InterbaseXs>`
- `<$InterbaseSm>`
- `<$InterbaseMd>`
- `<$InterbaseLg>`





## Interbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Interbase
include('simpleicons-14/I/Interbase')

' renders the element
Interbase('Interbase', 'Interbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Interbase
include('simpleicons-14/I/Interbase')

' renders the element
Interbase('Interbase', 'Interbase', 'an optional tech label', 'an optional description')
@enduml
```

