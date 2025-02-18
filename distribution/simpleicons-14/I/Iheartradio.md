# Iheartradio


```text
simpleicons-14/I/Iheartradio
```

```text
include('simpleicons-14/I/Iheartradio')
```



| Illustration | Iheartradio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iheartradio.png) | ![illustration for Iheartradio](../../simpleicons-14/I/Iheartradio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IheartradioXs>`
- `<$IheartradioSm>`
- `<$IheartradioMd>`
- `<$IheartradioLg>`





## Iheartradio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iheartradio
include('simpleicons-14/I/Iheartradio')

' renders the element
Iheartradio('Iheartradio', 'Iheartradio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iheartradio
include('simpleicons-14/I/Iheartradio')

' renders the element
Iheartradio('Iheartradio', 'Iheartradio', 'an optional tech label', 'an optional description')
@enduml
```

