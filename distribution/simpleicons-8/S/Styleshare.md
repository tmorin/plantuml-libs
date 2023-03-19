# Styleshare


```text
simpleicons-8/S/Styleshare
```

```text
include('simpleicons-8/S/Styleshare')
```



| Illustration | Styleshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Styleshare.png) | ![illustration for Styleshare](../../simpleicons-8/S/Styleshare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StyleshareXs>`
- `<$StyleshareSm>`
- `<$StyleshareMd>`
- `<$StyleshareLg>`





## Styleshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Styleshare
include('simpleicons-8/S/Styleshare')

' renders the element
Styleshare('Styleshare', 'Styleshare', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Styleshare
include('simpleicons-8/S/Styleshare')

' renders the element
Styleshare('Styleshare', 'Styleshare', 'an optional tech label', 'an optional description')
@enduml
```

