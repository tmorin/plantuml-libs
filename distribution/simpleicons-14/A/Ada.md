# Ada


```text
simpleicons-14/A/Ada
```

```text
include('simpleicons-14/A/Ada')
```



| Illustration | Ada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Ada.png) | ![illustration for Ada](../../simpleicons-14/A/Ada.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdaXs>`
- `<$AdaSm>`
- `<$AdaMd>`
- `<$AdaLg>`





## Ada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ada
include('simpleicons-14/A/Ada')

' renders the element
Ada('Ada', 'Ada', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ada
include('simpleicons-14/A/Ada')

' renders the element
Ada('Ada', 'Ada', 'an optional tech label', 'an optional description')
@enduml
```

