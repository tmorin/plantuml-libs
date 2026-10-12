# Ty


```text
simpleicons/T/Ty
```

```text
include('simpleicons/T/Ty')
```



| Illustration | Ty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Ty.png) | ![illustration for Ty](../../simpleicons/T/Ty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TyXs>`
- `<$TySm>`
- `<$TyMd>`
- `<$TyLg>`





## Ty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ty
include('simpleicons/T/Ty')

' renders the element
Ty('Ty', 'Ty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ty
include('simpleicons/T/Ty')

' renders the element
Ty('Ty', 'Ty', 'an optional tech label', 'an optional description')
@enduml
```

