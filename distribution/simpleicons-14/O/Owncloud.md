# Owncloud


```text
simpleicons-14/O/Owncloud
```

```text
include('simpleicons-14/O/Owncloud')
```



| Illustration | Owncloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Owncloud.png) | ![illustration for Owncloud](../../simpleicons-14/O/Owncloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OwncloudXs>`
- `<$OwncloudSm>`
- `<$OwncloudMd>`
- `<$OwncloudLg>`





## Owncloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Owncloud
include('simpleicons-14/O/Owncloud')

' renders the element
Owncloud('Owncloud', 'Owncloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Owncloud
include('simpleicons-14/O/Owncloud')

' renders the element
Owncloud('Owncloud', 'Owncloud', 'an optional tech label', 'an optional description')
@enduml
```

