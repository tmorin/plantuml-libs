# Unlicense


```text
simpleicons/U/Unlicense
```

```text
include('simpleicons/U/Unlicense')
```



| Illustration | Unlicense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unlicense.png) | ![illustration for Unlicense](../../simpleicons/U/Unlicense.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unlicense
include('simpleicons/U/Unlicense')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unlicense
include('simpleicons/U/Unlicense')

' renders the element
Unlicense('Unlicense', 'Unlicense', 'an optional tech label', 'an optional description')
@enduml
```

