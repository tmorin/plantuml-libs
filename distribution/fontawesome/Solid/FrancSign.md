# FrancSign


```text
fontawesome/Solid/FrancSign
```

```text
include('fontawesome/Solid/FrancSign')
```



| Illustration | FrancSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FrancSign.png) | ![illustration for FrancSign](../../fontawesome/Solid/FrancSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrancSignXs>`
- `<$FrancSignSm>`
- `<$FrancSignMd>`
- `<$FrancSignLg>`





## FrancSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FrancSign
include('fontawesome/Solid/FrancSign')

' renders the element
FrancSign('FrancSign', 'Franc Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FrancSign
include('fontawesome/Solid/FrancSign')

' renders the element
FrancSign('FrancSign', 'Franc Sign', 'an optional tech label', 'an optional description')
@enduml
```

