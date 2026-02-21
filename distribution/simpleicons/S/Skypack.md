# Skypack


```text
simpleicons/S/Skypack
```

```text
include('simpleicons/S/Skypack')
```



| Illustration | Skypack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Skypack.png) | ![illustration for Skypack](../../simpleicons/S/Skypack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkypackXs>`
- `<$SkypackSm>`
- `<$SkypackMd>`
- `<$SkypackLg>`





## Skypack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Skypack
include('simpleicons/S/Skypack')

' renders the element
Skypack('Skypack', 'Skypack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skypack
include('simpleicons/S/Skypack')

' renders the element
Skypack('Skypack', 'Skypack', 'an optional tech label', 'an optional description')
@enduml
```

