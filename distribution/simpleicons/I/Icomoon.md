# Icomoon


```text
simpleicons/I/Icomoon
```

```text
include('simpleicons/I/Icomoon')
```



| Illustration | Icomoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Icomoon.png) | ![illustration for Icomoon](../../simpleicons/I/Icomoon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IcomoonXs>`
- `<$IcomoonSm>`
- `<$IcomoonMd>`
- `<$IcomoonLg>`





## Icomoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Icomoon
include('simpleicons/I/Icomoon')

' renders the element
Icomoon('Icomoon', 'Icomoon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icomoon
include('simpleicons/I/Icomoon')

' renders the element
Icomoon('Icomoon', 'Icomoon', 'an optional tech label', 'an optional description')
@enduml
```

