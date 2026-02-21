# _9Gag


```text
simpleicons-14/_/_9Gag
```

```text
include('simpleicons-14/_/_9Gag')
```



| Illustration | _9Gag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/_/_9Gag.png) | ![illustration for _9Gag](../../simpleicons-14/_/_9Gag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_9GagXs>`
- `<$_9GagSm>`
- `<$_9GagMd>`
- `<$_9GagLg>`





## _9Gag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _9Gag
include('simpleicons-14/_/_9Gag')

' renders the element
_9Gag('9gag', '9gag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _9Gag
include('simpleicons-14/_/_9Gag')

' renders the element
_9Gag('9gag', '9gag', 'an optional tech label', 'an optional description')
@enduml
```

