# Tomorrowland


```text
simpleicons-14/T/Tomorrowland
```

```text
include('simpleicons-14/T/Tomorrowland')
```



| Illustration | Tomorrowland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tomorrowland.png) | ![illustration for Tomorrowland](../../simpleicons-14/T/Tomorrowland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TomorrowlandXs>`
- `<$TomorrowlandSm>`
- `<$TomorrowlandMd>`
- `<$TomorrowlandLg>`





## Tomorrowland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tomorrowland
include('simpleicons-14/T/Tomorrowland')

' renders the element
Tomorrowland('Tomorrowland', 'Tomorrowland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tomorrowland
include('simpleicons-14/T/Tomorrowland')

' renders the element
Tomorrowland('Tomorrowland', 'Tomorrowland', 'an optional tech label', 'an optional description')
@enduml
```

