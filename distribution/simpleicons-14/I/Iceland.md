# Iceland


```text
simpleicons-14/I/Iceland
```

```text
include('simpleicons-14/I/Iceland')
```



| Illustration | Iceland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iceland.png) | ![illustration for Iceland](../../simpleicons-14/I/Iceland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IcelandXs>`
- `<$IcelandSm>`
- `<$IcelandMd>`
- `<$IcelandLg>`





## Iceland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iceland
include('simpleicons-14/I/Iceland')

' renders the element
Iceland('Iceland', 'Iceland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iceland
include('simpleicons-14/I/Iceland')

' renders the element
Iceland('Iceland', 'Iceland', 'an optional tech label', 'an optional description')
@enduml
```

