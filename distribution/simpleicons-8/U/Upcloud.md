# Upcloud


```text
simpleicons-8/U/Upcloud
```

```text
include('simpleicons-8/U/Upcloud')
```



| Illustration | Upcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Upcloud.png) | ![illustration for Upcloud](../../simpleicons-8/U/Upcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpcloudXs>`
- `<$UpcloudSm>`
- `<$UpcloudMd>`
- `<$UpcloudLg>`





## Upcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Upcloud
include('simpleicons-8/U/Upcloud')

' renders the element
Upcloud('Upcloud', 'Upcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Upcloud
include('simpleicons-8/U/Upcloud')

' renders the element
Upcloud('Upcloud', 'Upcloud', 'an optional tech label', 'an optional description')
@enduml
```

