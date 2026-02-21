# Iconfinder


```text
simpleicons/I/Iconfinder
```

```text
include('simpleicons/I/Iconfinder')
```



| Illustration | Iconfinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Iconfinder.png) | ![illustration for Iconfinder](../../simpleicons/I/Iconfinder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IconfinderXs>`
- `<$IconfinderSm>`
- `<$IconfinderMd>`
- `<$IconfinderLg>`





## Iconfinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Iconfinder
include('simpleicons/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iconfinder
include('simpleicons/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label', 'an optional description')
@enduml
```

