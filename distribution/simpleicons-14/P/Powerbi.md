# Powerbi


```text
simpleicons-14/P/Powerbi
```

```text
include('simpleicons-14/P/Powerbi')
```



| Illustration | Powerbi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Powerbi.png) | ![illustration for Powerbi](../../simpleicons-14/P/Powerbi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerbiXs>`
- `<$PowerbiSm>`
- `<$PowerbiMd>`
- `<$PowerbiLg>`





## Powerbi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Powerbi
include('simpleicons-14/P/Powerbi')

' renders the element
Powerbi('Powerbi', 'Powerbi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerbi
include('simpleicons-14/P/Powerbi')

' renders the element
Powerbi('Powerbi', 'Powerbi', 'an optional tech label', 'an optional description')
@enduml
```

