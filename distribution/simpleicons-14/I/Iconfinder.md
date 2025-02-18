# Iconfinder


```text
simpleicons-14/I/Iconfinder
```

```text
include('simpleicons-14/I/Iconfinder')
```



| Illustration | Iconfinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iconfinder.png) | ![illustration for Iconfinder](../../simpleicons-14/I/Iconfinder.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iconfinder
include('simpleicons-14/I/Iconfinder')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iconfinder
include('simpleicons-14/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label', 'an optional description')
@enduml
```

