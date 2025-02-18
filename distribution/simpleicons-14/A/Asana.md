# Asana


```text
simpleicons-14/A/Asana
```

```text
include('simpleicons-14/A/Asana')
```



| Illustration | Asana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Asana.png) | ![illustration for Asana](../../simpleicons-14/A/Asana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsanaXs>`
- `<$AsanaSm>`
- `<$AsanaMd>`
- `<$AsanaLg>`





## Asana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Asana
include('simpleicons-14/A/Asana')

' renders the element
Asana('Asana', 'Asana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asana
include('simpleicons-14/A/Asana')

' renders the element
Asana('Asana', 'Asana', 'an optional tech label', 'an optional description')
@enduml
```

