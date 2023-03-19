# Mediatemple


```text
simpleicons-8/M/Mediatemple
```

```text
include('simpleicons-8/M/Mediatemple')
```



| Illustration | Mediatemple |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mediatemple.png) | ![illustration for Mediatemple](../../simpleicons-8/M/Mediatemple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediatempleXs>`
- `<$MediatempleSm>`
- `<$MediatempleMd>`
- `<$MediatempleLg>`





## Mediatemple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mediatemple
include('simpleicons-8/M/Mediatemple')

' renders the element
Mediatemple('Mediatemple', 'Mediatemple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mediatemple
include('simpleicons-8/M/Mediatemple')

' renders the element
Mediatemple('Mediatemple', 'Mediatemple', 'an optional tech label', 'an optional description')
@enduml
```

