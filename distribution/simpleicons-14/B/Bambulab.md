# Bambulab


```text
simpleicons-14/B/Bambulab
```

```text
include('simpleicons-14/B/Bambulab')
```



| Illustration | Bambulab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bambulab.png) | ![illustration for Bambulab](../../simpleicons-14/B/Bambulab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BambulabXs>`
- `<$BambulabSm>`
- `<$BambulabMd>`
- `<$BambulabLg>`





## Bambulab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bambulab
include('simpleicons-14/B/Bambulab')

' renders the element
Bambulab('Bambulab', 'Bambulab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bambulab
include('simpleicons-14/B/Bambulab')

' renders the element
Bambulab('Bambulab', 'Bambulab', 'an optional tech label', 'an optional description')
@enduml
```

