# Edotleclerc


```text
simpleicons-14/E/Edotleclerc
```

```text
include('simpleicons-14/E/Edotleclerc')
```



| Illustration | Edotleclerc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Edotleclerc.png) | ![illustration for Edotleclerc](../../simpleicons-14/E/Edotleclerc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EdotleclercXs>`
- `<$EdotleclercSm>`
- `<$EdotleclercMd>`
- `<$EdotleclercLg>`





## Edotleclerc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Edotleclerc
include('simpleicons-14/E/Edotleclerc')

' renders the element
Edotleclerc('Edotleclerc', 'Edotleclerc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Edotleclerc
include('simpleicons-14/E/Edotleclerc')

' renders the element
Edotleclerc('Edotleclerc', 'Edotleclerc', 'an optional tech label', 'an optional description')
@enduml
```

