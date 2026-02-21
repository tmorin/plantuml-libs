# LessThan


```text
fontawesome/Solid/LessThan
```

```text
include('fontawesome/Solid/LessThan')
```



| Illustration | LessThan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LessThan.png) | ![illustration for LessThan](../../fontawesome/Solid/LessThan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LessThanXs>`
- `<$LessThanSm>`
- `<$LessThanMd>`
- `<$LessThanLg>`





## LessThan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LessThan
include('fontawesome/Solid/LessThan')

' renders the element
LessThan('LessThan', 'Less Than', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LessThan
include('fontawesome/Solid/LessThan')

' renders the element
LessThan('LessThan', 'Less Than', 'an optional tech label', 'an optional description')
@enduml
```

