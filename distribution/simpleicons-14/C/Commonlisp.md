# Commonlisp


```text
simpleicons-14/C/Commonlisp
```

```text
include('simpleicons-14/C/Commonlisp')
```



| Illustration | Commonlisp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Commonlisp.png) | ![illustration for Commonlisp](../../simpleicons-14/C/Commonlisp.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Commonlisp
include('simpleicons-14/C/Commonlisp')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Commonlisp
include('simpleicons-14/C/Commonlisp')

' renders the element
Commonlisp('Commonlisp', 'Commonlisp', 'an optional tech label', 'an optional description')
@enduml
```

