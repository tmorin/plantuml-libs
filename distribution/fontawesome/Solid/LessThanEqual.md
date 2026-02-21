# LessThanEqual


```text
fontawesome/Solid/LessThanEqual
```

```text
include('fontawesome/Solid/LessThanEqual')
```



| Illustration | LessThanEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LessThanEqual.png) | ![illustration for LessThanEqual](../../fontawesome/Solid/LessThanEqual.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LessThanEqualXs>`
- `<$LessThanEqualSm>`
- `<$LessThanEqualMd>`
- `<$LessThanEqualLg>`





## LessThanEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LessThanEqual
include('fontawesome/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LessThanEqual
include('fontawesome/Solid/LessThanEqual')

' renders the element
LessThanEqual('LessThanEqual', 'Less Than Equal', 'an optional tech label', 'an optional description')
@enduml
```

