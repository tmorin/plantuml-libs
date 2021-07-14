# Nextcloud


```text
simpleicons-5/N/Nextcloud
```

```text
include('simpleicons-5/N/Nextcloud')
```



| Illustration | Nextcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nextcloud.png) | ![illustration for Nextcloud](../../simpleicons-5/N/Nextcloud.Local.png) |




## Nextcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-5/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-5/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label')
@enduml
```

