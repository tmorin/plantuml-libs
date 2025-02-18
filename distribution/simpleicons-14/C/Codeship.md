# Codeship


```text
simpleicons-14/C/Codeship
```

```text
include('simpleicons-14/C/Codeship')
```



| Illustration | Codeship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codeship.png) | ![illustration for Codeship](../../simpleicons-14/C/Codeship.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeshipXs>`
- `<$CodeshipSm>`
- `<$CodeshipMd>`
- `<$CodeshipLg>`





## Codeship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codeship
include('simpleicons-14/C/Codeship')

' renders the element
Codeship('Codeship', 'Codeship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeship
include('simpleicons-14/C/Codeship')

' renders the element
Codeship('Codeship', 'Codeship', 'an optional tech label', 'an optional description')
@enduml
```

