# PlusMinus


```text
fontawesome/Solid/PlusMinus
```

```text
include('fontawesome/Solid/PlusMinus')
```



| Illustration | PlusMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlusMinus.png) | ![illustration for PlusMinus](../../fontawesome/Solid/PlusMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlusMinusXs>`
- `<$PlusMinusSm>`
- `<$PlusMinusMd>`
- `<$PlusMinusLg>`





## PlusMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlusMinus
include('fontawesome/Solid/PlusMinus')

' renders the element
PlusMinus('PlusMinus', 'Plus Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlusMinus
include('fontawesome/Solid/PlusMinus')

' renders the element
PlusMinus('PlusMinus', 'Plus Minus', 'an optional tech label', 'an optional description')
@enduml
```

