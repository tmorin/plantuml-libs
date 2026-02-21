# Kibana


```text
simpleicons/K/Kibana
```

```text
include('simpleicons/K/Kibana')
```



| Illustration | Kibana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kibana.png) | ![illustration for Kibana](../../simpleicons/K/Kibana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KibanaXs>`
- `<$KibanaSm>`
- `<$KibanaMd>`
- `<$KibanaLg>`





## Kibana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kibana
include('simpleicons/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label', 'an optional description')
@enduml
```

