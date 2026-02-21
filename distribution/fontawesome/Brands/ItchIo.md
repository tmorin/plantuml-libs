# ItchIo


```text
fontawesome/Brands/ItchIo
```

```text
include('fontawesome/Brands/ItchIo')
```



| Illustration | ItchIo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ItchIo.png) | ![illustration for ItchIo](../../fontawesome/Brands/ItchIo.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome/Brands/ItchIo')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome/Brands/ItchIo')

' renders the element
ItchIo('ItchIo', 'Itch Io', 'an optional tech label', 'an optional description')
@enduml
```

