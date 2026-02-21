# Facebook


```text
simpleicons/F/Facebook
```

```text
include('simpleicons/F/Facebook')
```



| Illustration | Facebook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Facebook.png) | ![illustration for Facebook](../../simpleicons/F/Facebook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FacebookXs>`
- `<$FacebookSm>`
- `<$FacebookMd>`
- `<$FacebookLg>`





## Facebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Facebook
include('simpleicons/F/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Facebook
include('simpleicons/F/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label', 'an optional description')
@enduml
```

