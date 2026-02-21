# Dreamstime


```text
simpleicons-14/D/Dreamstime
```

```text
include('simpleicons-14/D/Dreamstime')
```



| Illustration | Dreamstime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dreamstime.png) | ![illustration for Dreamstime](../../simpleicons-14/D/Dreamstime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DreamstimeXs>`
- `<$DreamstimeSm>`
- `<$DreamstimeMd>`
- `<$DreamstimeLg>`





## Dreamstime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dreamstime
include('simpleicons-14/D/Dreamstime')

' renders the element
Dreamstime('Dreamstime', 'Dreamstime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dreamstime
include('simpleicons-14/D/Dreamstime')

' renders the element
Dreamstime('Dreamstime', 'Dreamstime', 'an optional tech label', 'an optional description')
@enduml
```

