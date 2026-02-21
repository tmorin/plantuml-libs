# Coze


```text
simpleicons-14/C/Coze
```

```text
include('simpleicons-14/C/Coze')
```



| Illustration | Coze |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coze.png) | ![illustration for Coze](../../simpleicons-14/C/Coze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CozeXs>`
- `<$CozeSm>`
- `<$CozeMd>`
- `<$CozeLg>`





## Coze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coze
include('simpleicons-14/C/Coze')

' renders the element
Coze('Coze', 'Coze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coze
include('simpleicons-14/C/Coze')

' renders the element
Coze('Coze', 'Coze', 'an optional tech label', 'an optional description')
@enduml
```

