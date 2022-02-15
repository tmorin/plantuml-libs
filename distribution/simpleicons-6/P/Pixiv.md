# Pixiv


```text
simpleicons-6/P/Pixiv
```

```text
include('simpleicons-6/P/Pixiv')
```



| Illustration | Pixiv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pixiv.png) | ![illustration for Pixiv](../../simpleicons-6/P/Pixiv.Local.png) |




## Pixiv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pixiv
include('simpleicons-6/P/Pixiv')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pixiv
include('simpleicons-6/P/Pixiv')

' renders the element
Pixiv('Pixiv', 'Pixiv', 'an optional tech label')
@enduml
```

