# Clevercloud


```text
simpleicons/C/Clevercloud
```

```text
include('simpleicons/C/Clevercloud')
```



| Illustration | Clevercloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Clevercloud.png) | ![illustration for Clevercloud](../../simpleicons/C/Clevercloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClevercloudXs>`
- `<$ClevercloudSm>`
- `<$ClevercloudMd>`
- `<$ClevercloudLg>`





## Clevercloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Clevercloud
include('simpleicons/C/Clevercloud')

' renders the element
Clevercloud('Clevercloud', 'Clevercloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clevercloud
include('simpleicons/C/Clevercloud')

' renders the element
Clevercloud('Clevercloud', 'Clevercloud', 'an optional tech label', 'an optional description')
@enduml
```

