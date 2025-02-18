# Hibob


```text
simpleicons-14/H/Hibob
```

```text
include('simpleicons-14/H/Hibob')
```



| Illustration | Hibob |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hibob.png) | ![illustration for Hibob](../../simpleicons-14/H/Hibob.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HibobXs>`
- `<$HibobSm>`
- `<$HibobMd>`
- `<$HibobLg>`





## Hibob

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hibob
include('simpleicons-14/H/Hibob')

' renders the element
Hibob('Hibob', 'Hibob', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hibob
include('simpleicons-14/H/Hibob')

' renders the element
Hibob('Hibob', 'Hibob', 'an optional tech label', 'an optional description')
@enduml
```

