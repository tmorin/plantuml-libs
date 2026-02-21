# C


```text
simpleicons/C/C
```

```text
include('simpleicons/C/C')
```



| Illustration | C |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/C.png) | ![illustration for C](../../simpleicons/C/C.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CXs>`
- `<$CSm>`
- `<$CMd>`
- `<$CLg>`





## C

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element C
include('simpleicons/C/C')

' renders the element
C('C', 'C', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element C
include('simpleicons/C/C')

' renders the element
C('C', 'C', 'an optional tech label', 'an optional description')
@enduml
```

