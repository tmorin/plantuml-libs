# Sensu


```text
simpleicons/S/Sensu
```

```text
include('simpleicons/S/Sensu')
```



| Illustration | Sensu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sensu.png) | ![illustration for Sensu](../../simpleicons/S/Sensu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SensuXs>`
- `<$SensuSm>`
- `<$SensuMd>`
- `<$SensuLg>`





## Sensu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sensu
include('simpleicons/S/Sensu')

' renders the element
Sensu('Sensu', 'Sensu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sensu
include('simpleicons/S/Sensu')

' renders the element
Sensu('Sensu', 'Sensu', 'an optional tech label', 'an optional description')
@enduml
```

