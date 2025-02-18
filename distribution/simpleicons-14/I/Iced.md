# Iced


```text
simpleicons-14/I/Iced
```

```text
include('simpleicons-14/I/Iced')
```



| Illustration | Iced |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iced.png) | ![illustration for Iced](../../simpleicons-14/I/Iced.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IcedXs>`
- `<$IcedSm>`
- `<$IcedMd>`
- `<$IcedLg>`





## Iced

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iced
include('simpleicons-14/I/Iced')

' renders the element
Iced('Iced', 'Iced', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iced
include('simpleicons-14/I/Iced')

' renders the element
Iced('Iced', 'Iced', 'an optional tech label', 'an optional description')
@enduml
```

