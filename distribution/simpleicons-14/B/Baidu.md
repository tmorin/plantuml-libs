# Baidu


```text
simpleicons-14/B/Baidu
```

```text
include('simpleicons-14/B/Baidu')
```



| Illustration | Baidu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Baidu.png) | ![illustration for Baidu](../../simpleicons-14/B/Baidu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaiduXs>`
- `<$BaiduSm>`
- `<$BaiduMd>`
- `<$BaiduLg>`





## Baidu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Baidu
include('simpleicons-14/B/Baidu')

' renders the element
Baidu('Baidu', 'Baidu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baidu
include('simpleicons-14/B/Baidu')

' renders the element
Baidu('Baidu', 'Baidu', 'an optional tech label', 'an optional description')
@enduml
```

