# Metaai


```text
simpleicons/M/Metaai
```

```text
include('simpleicons/M/Metaai')
```



| Illustration | Metaai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Metaai.png) | ![illustration for Metaai](../../simpleicons/M/Metaai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetaaiXs>`
- `<$MetaaiSm>`
- `<$MetaaiMd>`
- `<$MetaaiLg>`





## Metaai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Metaai
include('simpleicons/M/Metaai')

' renders the element
Metaai('Metaai', 'Metaai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Metaai
include('simpleicons/M/Metaai')

' renders the element
Metaai('Metaai', 'Metaai', 'an optional tech label', 'an optional description')
@enduml
```

