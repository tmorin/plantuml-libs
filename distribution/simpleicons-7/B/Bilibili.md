# Bilibili


```text
simpleicons-7/B/Bilibili
```

```text
include('simpleicons-7/B/Bilibili')
```



| Illustration | Bilibili |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bilibili.png) | ![illustration for Bilibili](../../simpleicons-7/B/Bilibili.Local.png) |




## Bilibili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bilibili
include('simpleicons-7/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bilibili
include('simpleicons-7/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
@enduml
```

