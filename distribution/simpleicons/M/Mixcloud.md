# Mixcloud


```text
simpleicons/M/Mixcloud
```

```text
include('simpleicons/M/Mixcloud')
```



| Illustration | Mixcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mixcloud.png) | ![illustration for Mixcloud](../../simpleicons/M/Mixcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MixcloudXs>`
- `<$MixcloudSm>`
- `<$MixcloudMd>`
- `<$MixcloudLg>`





## Mixcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mixcloud
include('simpleicons/M/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mixcloud
include('simpleicons/M/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label', 'an optional description')
@enduml
```

