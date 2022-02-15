# Nextcloud


```text
simpleicons-6/N/Nextcloud
```

```text
include('simpleicons-6/N/Nextcloud')
```



| Illustration | Nextcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nextcloud.png) | ![illustration for Nextcloud](../../simpleicons-6/N/Nextcloud.Local.png) |




## Nextcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-6/N/Nextcloud')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nextcloud
include('simpleicons-6/N/Nextcloud')

' renders the element
Nextcloud('Nextcloud', 'Nextcloud', 'an optional tech label')
@enduml
```

