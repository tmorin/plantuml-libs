# Umbrel


```text
simpleicons-14/U/Umbrel
```

```text
include('simpleicons-14/U/Umbrel')
```



| Illustration | Umbrel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Umbrel.png) | ![illustration for Umbrel](../../simpleicons-14/U/Umbrel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmbrelXs>`
- `<$UmbrelSm>`
- `<$UmbrelMd>`
- `<$UmbrelLg>`





## Umbrel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Umbrel
include('simpleicons-14/U/Umbrel')

' renders the element
Umbrel('Umbrel', 'Umbrel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Umbrel
include('simpleicons-14/U/Umbrel')

' renders the element
Umbrel('Umbrel', 'Umbrel', 'an optional tech label', 'an optional description')
@enduml
```

