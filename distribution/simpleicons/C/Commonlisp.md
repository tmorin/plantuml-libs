# Commonlisp


```text
simpleicons/C/Commonlisp
```

```text
include('simpleicons/C/Commonlisp')
```



| Illustration | Commonlisp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Commonlisp.png) | ![illustration for Commonlisp](../../simpleicons/C/Commonlisp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommonlispXs>`
- `<$CommonlispSm>`
- `<$CommonlispMd>`
- `<$CommonlispLg>`





## Commonlisp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Commonlisp
include('simpleicons/C/Commonlisp')

' renders the element
Commonlisp('Commonlisp', 'Commonlisp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Commonlisp
include('simpleicons/C/Commonlisp')

' renders the element
Commonlisp('Commonlisp', 'Commonlisp', 'an optional tech label', 'an optional description')
@enduml
```

