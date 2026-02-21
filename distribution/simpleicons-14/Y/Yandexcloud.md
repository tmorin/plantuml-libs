# Yandexcloud


```text
simpleicons-14/Y/Yandexcloud
```

```text
include('simpleicons-14/Y/Yandexcloud')
```



| Illustration | Yandexcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yandexcloud.png) | ![illustration for Yandexcloud](../../simpleicons-14/Y/Yandexcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YandexcloudXs>`
- `<$YandexcloudSm>`
- `<$YandexcloudMd>`
- `<$YandexcloudLg>`





## Yandexcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yandexcloud
include('simpleicons-14/Y/Yandexcloud')

' renders the element
Yandexcloud('Yandexcloud', 'Yandexcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yandexcloud
include('simpleicons-14/Y/Yandexcloud')

' renders the element
Yandexcloud('Yandexcloud', 'Yandexcloud', 'an optional tech label', 'an optional description')
@enduml
```

