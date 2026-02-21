# Kit


```text
simpleicons/K/Kit
```

```text
include('simpleicons/K/Kit')
```



| Illustration | Kit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kit.png) | ![illustration for Kit](../../simpleicons/K/Kit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KitXs>`
- `<$KitSm>`
- `<$KitMd>`
- `<$KitLg>`





## Kit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kit
include('simpleicons/K/Kit')

' renders the element
Kit('Kit', 'Kit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kit
include('simpleicons/K/Kit')

' renders the element
Kit('Kit', 'Kit', 'an optional tech label', 'an optional description')
@enduml
```

