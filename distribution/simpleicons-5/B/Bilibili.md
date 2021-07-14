# Bilibili


```text
simpleicons-5/B/Bilibili
```

```text
include('simpleicons-5/B/Bilibili')
```



| Illustration | Bilibili |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bilibili.png) | ![illustration for Bilibili](../../simpleicons-5/B/Bilibili.Local.png) |




## Bilibili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bilibili
include('simpleicons-5/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label')
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

' loads the Item which embeds the element Bilibili
include('simpleicons-5/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label')
@enduml
```

