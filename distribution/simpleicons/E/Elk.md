# Elk


```text
simpleicons/E/Elk
```

```text
include('simpleicons/E/Elk')
```



| Illustration | Elk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Elk.png) | ![illustration for Elk](../../simpleicons/E/Elk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElkXs>`
- `<$ElkSm>`
- `<$ElkMd>`
- `<$ElkLg>`





## Elk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Elk
include('simpleicons/E/Elk')

' renders the element
Elk('Elk', 'Elk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elk
include('simpleicons/E/Elk')

' renders the element
Elk('Elk', 'Elk', 'an optional tech label', 'an optional description')
@enduml
```

