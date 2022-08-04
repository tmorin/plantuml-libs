# Nextcloud


```text
simpleicons-7/N/Nextcloud
```

```text
include('simpleicons-7/N/Nextcloud')
```



| Illustration | Nextcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nextcloud.png) | ![illustration for Nextcloud](../../simpleicons-7/N/Nextcloud.Local.png) |




## Nextcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-7/N/Nextcloud')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-7/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label', 'an optional description')
@enduml
```

