# Boat


```text
simpleicons-14/B/Boat
```

```text
include('simpleicons-14/B/Boat')
```



| Illustration | Boat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Boat.png) | ![illustration for Boat](../../simpleicons-14/B/Boat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoatXs>`
- `<$BoatSm>`
- `<$BoatMd>`
- `<$BoatLg>`





## Boat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Boat
include('simpleicons-14/B/Boat')

' renders the element
Boat('Boat', 'Boat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boat
include('simpleicons-14/B/Boat')

' renders the element
Boat('Boat', 'Boat', 'an optional tech label', 'an optional description')
@enduml
```

