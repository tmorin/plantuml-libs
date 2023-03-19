# ItchIo


```text
fontawesome-6/Brands/ItchIo
```

```text
include('fontawesome-6/Brands/ItchIo')
```



| Illustration | ItchIo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/ItchIo.png) | ![illustration for ItchIo](../../fontawesome-6/Brands/ItchIo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItchIoXs>`
- `<$ItchIoSm>`
- `<$ItchIoMd>`
- `<$ItchIoLg>`





## ItchIo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome-6/Brands/ItchIo')

' renders the element
ItchIo('ItchIo', 'Itch Io', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome-6/Brands/ItchIo')

' renders the element
ItchIo('ItchIo', 'Itch Io', 'an optional tech label', 'an optional description')
@enduml
```

