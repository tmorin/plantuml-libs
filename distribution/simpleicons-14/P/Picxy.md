# Picxy


```text
simpleicons-14/P/Picxy
```

```text
include('simpleicons-14/P/Picxy')
```



| Illustration | Picxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Picxy.png) | ![illustration for Picxy](../../simpleicons-14/P/Picxy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicxyXs>`
- `<$PicxySm>`
- `<$PicxyMd>`
- `<$PicxyLg>`





## Picxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Picxy
include('simpleicons-14/P/Picxy')

' renders the element
Picxy('Picxy', 'Picxy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Picxy
include('simpleicons-14/P/Picxy')

' renders the element
Picxy('Picxy', 'Picxy', 'an optional tech label', 'an optional description')
@enduml
```

