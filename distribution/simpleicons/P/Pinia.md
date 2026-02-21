# Pinia


```text
simpleicons/P/Pinia
```

```text
include('simpleicons/P/Pinia')
```



| Illustration | Pinia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pinia.png) | ![illustration for Pinia](../../simpleicons/P/Pinia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiniaXs>`
- `<$PiniaSm>`
- `<$PiniaMd>`
- `<$PiniaLg>`





## Pinia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pinia
include('simpleicons/P/Pinia')

' renders the element
Pinia('Pinia', 'Pinia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinia
include('simpleicons/P/Pinia')

' renders the element
Pinia('Pinia', 'Pinia', 'an optional tech label', 'an optional description')
@enduml
```

