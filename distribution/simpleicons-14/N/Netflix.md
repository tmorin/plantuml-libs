# Netflix


```text
simpleicons-14/N/Netflix
```

```text
include('simpleicons-14/N/Netflix')
```



| Illustration | Netflix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Netflix.png) | ![illustration for Netflix](../../simpleicons-14/N/Netflix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetflixXs>`
- `<$NetflixSm>`
- `<$NetflixMd>`
- `<$NetflixLg>`





## Netflix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netflix
include('simpleicons-14/N/Netflix')

' renders the element
Netflix('Netflix', 'Netflix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Netflix
include('simpleicons-14/N/Netflix')

' renders the element
Netflix('Netflix', 'Netflix', 'an optional tech label', 'an optional description')
@enduml
```

