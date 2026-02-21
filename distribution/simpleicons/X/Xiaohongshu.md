# Xiaohongshu


```text
simpleicons/X/Xiaohongshu
```

```text
include('simpleicons/X/Xiaohongshu')
```



| Illustration | Xiaohongshu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xiaohongshu.png) | ![illustration for Xiaohongshu](../../simpleicons/X/Xiaohongshu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XiaohongshuXs>`
- `<$XiaohongshuSm>`
- `<$XiaohongshuMd>`
- `<$XiaohongshuLg>`





## Xiaohongshu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xiaohongshu
include('simpleicons/X/Xiaohongshu')

' renders the element
Xiaohongshu('Xiaohongshu', 'Xiaohongshu', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xiaohongshu
include('simpleicons/X/Xiaohongshu')

' renders the element
Xiaohongshu('Xiaohongshu', 'Xiaohongshu', 'an optional tech label', 'an optional description')
@enduml
```

