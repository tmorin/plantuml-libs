# X


```text
fontawesome/Solid/X
```

```text
include('fontawesome/Solid/X')
```



| Illustration | X |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/X.png) | ![illustration for X](../../fontawesome/Solid/X.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XXs>`
- `<$XSm>`
- `<$XMd>`
- `<$XLg>`





## X

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element X
include('fontawesome/Solid/X')

' renders the element
X('X', 'X', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element X
include('fontawesome/Solid/X')

' renders the element
X('X', 'X', 'an optional tech label', 'an optional description')
@enduml
```

