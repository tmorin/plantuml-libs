# Apachesolr


```text
simpleicons-14/A/Apachesolr
```

```text
include('simpleicons-14/A/Apachesolr')
```



| Illustration | Apachesolr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachesolr.png) | ![illustration for Apachesolr](../../simpleicons-14/A/Apachesolr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachesolrXs>`
- `<$ApachesolrSm>`
- `<$ApachesolrMd>`
- `<$ApachesolrLg>`





## Apachesolr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachesolr
include('simpleicons-14/A/Apachesolr')

' renders the element
Apachesolr('Apachesolr', 'Apachesolr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachesolr
include('simpleicons-14/A/Apachesolr')

' renders the element
Apachesolr('Apachesolr', 'Apachesolr', 'an optional tech label', 'an optional description')
@enduml
```

