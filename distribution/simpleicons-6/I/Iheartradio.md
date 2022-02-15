# Iheartradio


```text
simpleicons-6/I/Iheartradio
```

```text
include('simpleicons-6/I/Iheartradio')
```



| Illustration | Iheartradio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Iheartradio.png) | ![illustration for Iheartradio](../../simpleicons-6/I/Iheartradio.Local.png) |




## Iheartradio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Iheartradio
include('simpleicons-6/I/Iheartradio')

' renders the element
Iheartradio('Iheartradio', 'Iheartradio', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Iheartradio
include('simpleicons-6/I/Iheartradio')

' renders the element
Iheartradio('Iheartradio', 'Iheartradio', 'an optional tech label')
@enduml
```

