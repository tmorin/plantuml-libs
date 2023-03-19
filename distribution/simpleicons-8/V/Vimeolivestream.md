# Vimeolivestream


```text
simpleicons-8/V/Vimeolivestream
```

```text
include('simpleicons-8/V/Vimeolivestream')
```



| Illustration | Vimeolivestream |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vimeolivestream.png) | ![illustration for Vimeolivestream](../../simpleicons-8/V/Vimeolivestream.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vimeolivestream
include('simpleicons-8/V/Vimeolivestream')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vimeolivestream
include('simpleicons-8/V/Vimeolivestream')

' renders the element
Vimeolivestream('Vimeolivestream', 'Vimeolivestream', 'an optional tech label', 'an optional description')
@enduml
```

