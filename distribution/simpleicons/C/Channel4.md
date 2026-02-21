# Channel4


```text
simpleicons/C/Channel4
```

```text
include('simpleicons/C/Channel4')
```



| Illustration | Channel4 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Channel4.png) | ![illustration for Channel4](../../simpleicons/C/Channel4.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Channel4Xs>`
- `<$Channel4Sm>`
- `<$Channel4Md>`
- `<$Channel4Lg>`





## Channel4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Channel4
include('simpleicons/C/Channel4')

' renders the element
Channel4('Channel4', 'Channel4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Channel4
include('simpleicons/C/Channel4')

' renders the element
Channel4('Channel4', 'Channel4', 'an optional tech label', 'an optional description')
@enduml
```

