# Kibana


```text
simpleicons-8/K/Kibana
```

```text
include('simpleicons-8/K/Kibana')
```



| Illustration | Kibana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kibana.png) | ![illustration for Kibana](../../simpleicons-8/K/Kibana.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons-8/K/Kibana')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons-8/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label', 'an optional description')
@enduml
```

