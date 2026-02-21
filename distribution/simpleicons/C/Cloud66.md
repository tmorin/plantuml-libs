# Cloud66


```text
simpleicons/C/Cloud66
```

```text
include('simpleicons/C/Cloud66')
```



| Illustration | Cloud66 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cloud66.png) | ![illustration for Cloud66](../../simpleicons/C/Cloud66.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Cloud66Xs>`
- `<$Cloud66Sm>`
- `<$Cloud66Md>`
- `<$Cloud66Lg>`





## Cloud66

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloud66
include('simpleicons/C/Cloud66')

' renders the element
Cloud66('Cloud66', 'Cloud66', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloud66
include('simpleicons/C/Cloud66')

' renders the element
Cloud66('Cloud66', 'Cloud66', 'an optional tech label', 'an optional description')
@enduml
```

