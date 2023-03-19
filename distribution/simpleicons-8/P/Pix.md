# Pix


```text
simpleicons-8/P/Pix
```

```text
include('simpleicons-8/P/Pix')
```



| Illustration | Pix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pix.png) | ![illustration for Pix](../../simpleicons-8/P/Pix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixXs>`
- `<$PixSm>`
- `<$PixMd>`
- `<$PixLg>`





## Pix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pix
include('simpleicons-8/P/Pix')

' renders the element
Pix('Pix', 'Pix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pix
include('simpleicons-8/P/Pix')

' renders the element
Pix('Pix', 'Pix', 'an optional tech label', 'an optional description')
@enduml
```

