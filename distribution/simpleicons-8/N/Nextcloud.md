# Nextcloud


```text
simpleicons-8/N/Nextcloud
```

```text
include('simpleicons-8/N/Nextcloud')
```



| Illustration | Nextcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nextcloud.png) | ![illustration for Nextcloud](../../simpleicons-8/N/Nextcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextcloudXs>`
- `<$NextcloudSm>`
- `<$NextcloudMd>`
- `<$NextcloudLg>`





## Nextcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-8/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nextcloud
include('simpleicons-8/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label', 'an optional description')
@enduml
```

