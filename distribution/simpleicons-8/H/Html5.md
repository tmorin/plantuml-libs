# Html5


```text
simpleicons-8/H/Html5
```

```text
include('simpleicons-8/H/Html5')
```



| Illustration | Html5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Html5.png) | ![illustration for Html5](../../simpleicons-8/H/Html5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Html5Xs>`
- `<$Html5Sm>`
- `<$Html5Md>`
- `<$Html5Lg>`





## Html5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Html5
include('simpleicons-8/H/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Html5
include('simpleicons-8/H/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label', 'an optional description')
@enduml
```

