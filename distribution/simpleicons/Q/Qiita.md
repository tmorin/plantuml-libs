# Qiita


```text
simpleicons/Q/Qiita
```

```text
include('simpleicons/Q/Qiita')
```



| Illustration | Qiita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qiita.png) | ![illustration for Qiita](../../simpleicons/Q/Qiita.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QiitaXs>`
- `<$QiitaSm>`
- `<$QiitaMd>`
- `<$QiitaLg>`





## Qiita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qiita
include('simpleicons/Q/Qiita')

' renders the element
Qiita('Qiita', 'Qiita', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qiita
include('simpleicons/Q/Qiita')

' renders the element
Qiita('Qiita', 'Qiita', 'an optional tech label', 'an optional description')
@enduml
```

