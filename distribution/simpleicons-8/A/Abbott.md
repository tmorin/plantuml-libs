# Abbott


```text
simpleicons-8/A/Abbott
```

```text
include('simpleicons-8/A/Abbott')
```



| Illustration | Abbott |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Abbott.png) | ![illustration for Abbott](../../simpleicons-8/A/Abbott.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbbottXs>`
- `<$AbbottSm>`
- `<$AbbottMd>`
- `<$AbbottLg>`





## Abbott

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Abbott
include('simpleicons-8/A/Abbott')

' renders the element
Abbott('Abbott', 'Abbott', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abbott
include('simpleicons-8/A/Abbott')

' renders the element
Abbott('Abbott', 'Abbott', 'an optional tech label', 'an optional description')
@enduml
```

