# Vimeolivestream


```text
simpleicons/V/Vimeolivestream
```

```text
include('simpleicons/V/Vimeolivestream')
```



| Illustration | Vimeolivestream |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vimeolivestream.png) | ![illustration for Vimeolivestream](../../simpleicons/V/Vimeolivestream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VimeolivestreamXs>`
- `<$VimeolivestreamSm>`
- `<$VimeolivestreamMd>`
- `<$VimeolivestreamLg>`





## Vimeolivestream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vimeolivestream
include('simpleicons/V/Vimeolivestream')

' renders the element
Vimeolivestream('Vimeolivestream', 'Vimeolivestream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vimeolivestream
include('simpleicons/V/Vimeolivestream')

' renders the element
Vimeolivestream('Vimeolivestream', 'Vimeolivestream', 'an optional tech label', 'an optional description')
@enduml
```

