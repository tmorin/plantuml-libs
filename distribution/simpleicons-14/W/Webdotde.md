# Webdotde


```text
simpleicons-14/W/Webdotde
```

```text
include('simpleicons-14/W/Webdotde')
```



| Illustration | Webdotde |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Webdotde.png) | ![illustration for Webdotde](../../simpleicons-14/W/Webdotde.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebdotdeXs>`
- `<$WebdotdeSm>`
- `<$WebdotdeMd>`
- `<$WebdotdeLg>`





## Webdotde

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Webdotde
include('simpleicons-14/W/Webdotde')

' renders the element
Webdotde('Webdotde', 'Webdotde', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webdotde
include('simpleicons-14/W/Webdotde')

' renders the element
Webdotde('Webdotde', 'Webdotde', 'an optional tech label', 'an optional description')
@enduml
```

