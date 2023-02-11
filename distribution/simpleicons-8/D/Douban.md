# Douban


```text
simpleicons-8/D/Douban
```

```text
include('simpleicons-8/D/Douban')
```



| Illustration | Douban |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Douban.png) | ![illustration for Douban](../../simpleicons-8/D/Douban.Local.png) |




## Douban

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Douban
include('simpleicons-8/D/Douban')

' renders the element
Douban('Douban', 'Douban', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Douban
include('simpleicons-8/D/Douban')

' renders the element
Douban('Douban', 'Douban', 'an optional tech label', 'an optional description')
@enduml
```

