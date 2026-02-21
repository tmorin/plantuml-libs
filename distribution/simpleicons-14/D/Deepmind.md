# Deepmind


```text
simpleicons-14/D/Deepmind
```

```text
include('simpleicons-14/D/Deepmind')
```



| Illustration | Deepmind |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deepmind.png) | ![illustration for Deepmind](../../simpleicons-14/D/Deepmind.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeepmindXs>`
- `<$DeepmindSm>`
- `<$DeepmindMd>`
- `<$DeepmindLg>`





## Deepmind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deepmind
include('simpleicons-14/D/Deepmind')

' renders the element
Deepmind('Deepmind', 'Deepmind', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deepmind
include('simpleicons-14/D/Deepmind')

' renders the element
Deepmind('Deepmind', 'Deepmind', 'an optional tech label', 'an optional description')
@enduml
```

