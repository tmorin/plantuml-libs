# _1And1


```text
simpleicons-14/_/_1And1
```

```text
include('simpleicons-14/_/_1And1')
```



| Illustration | _1And1 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/_/_1And1.png) | ![illustration for _1And1](../../simpleicons-14/_/_1And1.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_1And1Xs>`
- `<$_1And1Sm>`
- `<$_1And1Md>`
- `<$_1And1Lg>`





## _1And1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _1And1
include('simpleicons-14/_/_1And1')

' renders the element
_1And1('1and1', '1and1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _1And1
include('simpleicons-14/_/_1And1')

' renders the element
_1And1('1and1', '1and1', 'an optional tech label', 'an optional description')
@enduml
```

