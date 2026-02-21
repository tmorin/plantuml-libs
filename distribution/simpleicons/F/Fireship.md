# Fireship


```text
simpleicons/F/Fireship
```

```text
include('simpleicons/F/Fireship')
```



| Illustration | Fireship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fireship.png) | ![illustration for Fireship](../../simpleicons/F/Fireship.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireshipXs>`
- `<$FireshipSm>`
- `<$FireshipMd>`
- `<$FireshipLg>`





## Fireship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fireship
include('simpleicons/F/Fireship')

' renders the element
Fireship('Fireship', 'Fireship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fireship
include('simpleicons/F/Fireship')

' renders the element
Fireship('Fireship', 'Fireship', 'an optional tech label', 'an optional description')
@enduml
```

