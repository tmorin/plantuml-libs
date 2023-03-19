# Alibabacloud


```text
simpleicons-8/A/Alibabacloud
```

```text
include('simpleicons-8/A/Alibabacloud')
```



| Illustration | Alibabacloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Alibabacloud.png) | ![illustration for Alibabacloud](../../simpleicons-8/A/Alibabacloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlibabacloudXs>`
- `<$AlibabacloudSm>`
- `<$AlibabacloudMd>`
- `<$AlibabacloudLg>`





## Alibabacloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alibabacloud
include('simpleicons-8/A/Alibabacloud')

' renders the element
Alibabacloud('Alibabacloud', 'Alibabacloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alibabacloud
include('simpleicons-8/A/Alibabacloud')

' renders the element
Alibabacloud('Alibabacloud', 'Alibabacloud', 'an optional tech label', 'an optional description')
@enduml
```

