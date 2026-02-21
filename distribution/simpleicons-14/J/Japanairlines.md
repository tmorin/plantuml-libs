# Japanairlines


```text
simpleicons-14/J/Japanairlines
```

```text
include('simpleicons-14/J/Japanairlines')
```



| Illustration | Japanairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Japanairlines.png) | ![illustration for Japanairlines](../../simpleicons-14/J/Japanairlines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JapanairlinesXs>`
- `<$JapanairlinesSm>`
- `<$JapanairlinesMd>`
- `<$JapanairlinesLg>`





## Japanairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Japanairlines
include('simpleicons-14/J/Japanairlines')

' renders the element
Japanairlines('Japanairlines', 'Japanairlines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Japanairlines
include('simpleicons-14/J/Japanairlines')

' renders the element
Japanairlines('Japanairlines', 'Japanairlines', 'an optional tech label', 'an optional description')
@enduml
```

