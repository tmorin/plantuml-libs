# Eight


```text
simpleicons/E/Eight
```

```text
include('simpleicons/E/Eight')
```



| Illustration | Eight |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Eight.png) | ![illustration for Eight](../../simpleicons/E/Eight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EightXs>`
- `<$EightSm>`
- `<$EightMd>`
- `<$EightLg>`





## Eight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Eight
include('simpleicons/E/Eight')

' renders the element
Eight('Eight', 'Eight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eight
include('simpleicons/E/Eight')

' renders the element
Eight('Eight', 'Eight', 'an optional tech label', 'an optional description')
@enduml
```

