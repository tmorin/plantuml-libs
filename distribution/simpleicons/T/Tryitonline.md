# Tryitonline


```text
simpleicons/T/Tryitonline
```

```text
include('simpleicons/T/Tryitonline')
```



| Illustration | Tryitonline |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tryitonline.png) | ![illustration for Tryitonline](../../simpleicons/T/Tryitonline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TryitonlineXs>`
- `<$TryitonlineSm>`
- `<$TryitonlineMd>`
- `<$TryitonlineLg>`





## Tryitonline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tryitonline
include('simpleicons/T/Tryitonline')

' renders the element
Tryitonline('Tryitonline', 'Tryitonline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tryitonline
include('simpleicons/T/Tryitonline')

' renders the element
Tryitonline('Tryitonline', 'Tryitonline', 'an optional tech label', 'an optional description')
@enduml
```

