# Wpexplorer


```text
simpleicons-14/W/Wpexplorer
```

```text
include('simpleicons-14/W/Wpexplorer')
```



| Illustration | Wpexplorer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wpexplorer.png) | ![illustration for Wpexplorer](../../simpleicons-14/W/Wpexplorer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WpexplorerXs>`
- `<$WpexplorerSm>`
- `<$WpexplorerMd>`
- `<$WpexplorerLg>`





## Wpexplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wpexplorer
include('simpleicons-14/W/Wpexplorer')

' renders the element
Wpexplorer('Wpexplorer', 'Wpexplorer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wpexplorer
include('simpleicons-14/W/Wpexplorer')

' renders the element
Wpexplorer('Wpexplorer', 'Wpexplorer', 'an optional tech label', 'an optional description')
@enduml
```

