# Webtoon


```text
simpleicons-7/W/Webtoon
```

```text
include('simpleicons-7/W/Webtoon')
```



| Illustration | Webtoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Webtoon.png) | ![illustration for Webtoon](../../simpleicons-7/W/Webtoon.Local.png) |




## Webtoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Webtoon
include('simpleicons-7/W/Webtoon')

' renders the element
Webtoon('Webtoon', 'Webtoon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webtoon
include('simpleicons-7/W/Webtoon')

' renders the element
Webtoon('Webtoon', 'Webtoon', 'an optional tech label', 'an optional description')
@enduml
```

