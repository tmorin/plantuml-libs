# Honor


```text
simpleicons-14/H/Honor
```

```text
include('simpleicons-14/H/Honor')
```



| Illustration | Honor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Honor.png) | ![illustration for Honor](../../simpleicons-14/H/Honor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HonorXs>`
- `<$HonorSm>`
- `<$HonorMd>`
- `<$HonorLg>`





## Honor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Honor
include('simpleicons-14/H/Honor')

' renders the element
Honor('Honor', 'Honor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Honor
include('simpleicons-14/H/Honor')

' renders the element
Honor('Honor', 'Honor', 'an optional tech label', 'an optional description')
@enduml
```

