# Piwigo


```text
simpleicons/P/Piwigo
```

```text
include('simpleicons/P/Piwigo')
```



| Illustration | Piwigo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Piwigo.png) | ![illustration for Piwigo](../../simpleicons/P/Piwigo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiwigoXs>`
- `<$PiwigoSm>`
- `<$PiwigoMd>`
- `<$PiwigoLg>`





## Piwigo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Piwigo
include('simpleicons/P/Piwigo')

' renders the element
Piwigo('Piwigo', 'Piwigo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Piwigo
include('simpleicons/P/Piwigo')

' renders the element
Piwigo('Piwigo', 'Piwigo', 'an optional tech label', 'an optional description')
@enduml
```

