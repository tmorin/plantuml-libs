# Nodemon


```text
simpleicons-8/N/Nodemon
```

```text
include('simpleicons-8/N/Nodemon')
```



| Illustration | Nodemon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nodemon.png) | ![illustration for Nodemon](../../simpleicons-8/N/Nodemon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NodemonXs>`
- `<$NodemonSm>`
- `<$NodemonMd>`
- `<$NodemonLg>`





## Nodemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nodemon
include('simpleicons-8/N/Nodemon')

' renders the element
Nodemon('Nodemon', 'Nodemon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nodemon
include('simpleicons-8/N/Nodemon')

' renders the element
Nodemon('Nodemon', 'Nodemon', 'an optional tech label', 'an optional description')
@enduml
```

