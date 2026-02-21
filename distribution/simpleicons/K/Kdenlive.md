# Kdenlive


```text
simpleicons/K/Kdenlive
```

```text
include('simpleicons/K/Kdenlive')
```



| Illustration | Kdenlive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kdenlive.png) | ![illustration for Kdenlive](../../simpleicons/K/Kdenlive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KdenliveXs>`
- `<$KdenliveSm>`
- `<$KdenliveMd>`
- `<$KdenliveLg>`





## Kdenlive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kdenlive
include('simpleicons/K/Kdenlive')

' renders the element
Kdenlive('Kdenlive', 'Kdenlive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kdenlive
include('simpleicons/K/Kdenlive')

' renders the element
Kdenlive('Kdenlive', 'Kdenlive', 'an optional tech label', 'an optional description')
@enduml
```

