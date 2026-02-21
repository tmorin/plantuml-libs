# Ada


```text
simpleicons/A/Ada
```

```text
include('simpleicons/A/Ada')
```



| Illustration | Ada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Ada.png) | ![illustration for Ada](../../simpleicons/A/Ada.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ada
include('simpleicons/A/Ada')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ada
include('simpleicons/A/Ada')

' renders the element
Ada('Ada', 'Ada', 'an optional tech label', 'an optional description')
@enduml
```

