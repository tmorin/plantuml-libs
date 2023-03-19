# GreaterThanEqual


```text
fontawesome-6/Solid/GreaterThanEqual
```

```text
include('fontawesome-6/Solid/GreaterThanEqual')
```



| Illustration | GreaterThanEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GreaterThanEqual.png) | ![illustration for GreaterThanEqual](../../fontawesome-6/Solid/GreaterThanEqual.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreaterThanEqualXs>`
- `<$GreaterThanEqualSm>`
- `<$GreaterThanEqualMd>`
- `<$GreaterThanEqualLg>`





## GreaterThanEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GreaterThanEqual
include('fontawesome-6/Solid/GreaterThanEqual')

' renders the element
GreaterThanEqual('GreaterThanEqual', 'Greater Than Equal', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GreaterThanEqual
include('fontawesome-6/Solid/GreaterThanEqual')

' renders the element
GreaterThanEqual('GreaterThanEqual', 'Greater Than Equal', 'an optional tech label', 'an optional description')
@enduml
```

