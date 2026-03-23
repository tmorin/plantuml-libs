# Tint


```text
fontawesome/Solid/Tint
```

```text
include('fontawesome/Solid/Tint')
```



| Illustration | Tint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tint.png) | ![illustration for Tint](../../fontawesome/Solid/Tint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TintXs>`
- `<$TintSm>`
- `<$TintMd>`
- `<$TintLg>`





## Tint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tint
include('fontawesome/Solid/Tint')

' renders the element
Tint('Tint', 'Tint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tint
include('fontawesome/Solid/Tint')

' renders the element
Tint('Tint', 'Tint', 'an optional tech label', 'an optional description')
@enduml
```

