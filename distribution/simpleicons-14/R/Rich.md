# Rich


```text
simpleicons-14/R/Rich
```

```text
include('simpleicons-14/R/Rich')
```



| Illustration | Rich |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rich.png) | ![illustration for Rich](../../simpleicons-14/R/Rich.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RichXs>`
- `<$RichSm>`
- `<$RichMd>`
- `<$RichLg>`





## Rich

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rich
include('simpleicons-14/R/Rich')

' renders the element
Rich('Rich', 'Rich', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rich
include('simpleicons-14/R/Rich')

' renders the element
Rich('Rich', 'Rich', 'an optional tech label', 'an optional description')
@enduml
```

