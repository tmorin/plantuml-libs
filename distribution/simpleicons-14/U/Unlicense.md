# Unlicense


```text
simpleicons-14/U/Unlicense
```

```text
include('simpleicons-14/U/Unlicense')
```



| Illustration | Unlicense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Unlicense.png) | ![illustration for Unlicense](../../simpleicons-14/U/Unlicense.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnlicenseXs>`
- `<$UnlicenseSm>`
- `<$UnlicenseMd>`
- `<$UnlicenseLg>`





## Unlicense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Unlicense
include('simpleicons-14/U/Unlicense')

' renders the element
Unlicense('Unlicense', 'Unlicense', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unlicense
include('simpleicons-14/U/Unlicense')

' renders the element
Unlicense('Unlicense', 'Unlicense', 'an optional tech label', 'an optional description')
@enduml
```

