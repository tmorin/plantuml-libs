# Pixiv


```text
simpleicons-5/P/Pixiv
```

```text
include('simpleicons-5/P/Pixiv')
```



| Illustration | Pixiv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pixiv.png) | ![illustration for Pixiv](../../simpleicons-5/P/Pixiv.Local.png) |




## Pixiv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pixiv
include('simpleicons-5/P/Pixiv')

' renders the element
Pixiv('Pixiv', 'Pixiv', 'an optional tech label')
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

' loads the Item which embeds the element Pixiv
include('simpleicons-5/P/Pixiv')

' renders the element
Pixiv('Pixiv', 'Pixiv', 'an optional tech label')
@enduml
```

