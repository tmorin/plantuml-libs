# Navigation


```text
material/Maps/Navigation
```

```text
include('material/Maps/Navigation')
```



| Illustration | Navigation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Navigation.png) | ![illustration for Navigation](../../material/Maps/Navigation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NavigationXs>`
- `<$NavigationSm>`
- `<$NavigationMd>`
- `<$NavigationLg>`





## Navigation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Navigation
include('material/Maps/Navigation')

' renders the element
Navigation('Navigation', 'Navigation', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Navigation
include('material/Maps/Navigation')

' renders the element
Navigation('Navigation', 'Navigation', 'an optional tech label', 'an optional description')
@enduml
```

