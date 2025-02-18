# Zhihu


```text
simpleicons-14/Z/Zhihu
```

```text
include('simpleicons-14/Z/Zhihu')
```



| Illustration | Zhihu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zhihu.png) | ![illustration for Zhihu](../../simpleicons-14/Z/Zhihu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZhihuXs>`
- `<$ZhihuSm>`
- `<$ZhihuMd>`
- `<$ZhihuLg>`





## Zhihu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zhihu
include('simpleicons-14/Z/Zhihu')

' renders the element
Zhihu('Zhihu', 'Zhihu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zhihu
include('simpleicons-14/Z/Zhihu')

' renders the element
Zhihu('Zhihu', 'Zhihu', 'an optional tech label', 'an optional description')
@enduml
```

