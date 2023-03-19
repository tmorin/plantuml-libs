# FrancSign


```text
fontawesome-6/Solid/FrancSign
```

```text
include('fontawesome-6/Solid/FrancSign')
```



| Illustration | FrancSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FrancSign.png) | ![illustration for FrancSign](../../fontawesome-6/Solid/FrancSign.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FrancSign
include('fontawesome-6/Solid/FrancSign')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FrancSign
include('fontawesome-6/Solid/FrancSign')

' renders the element
FrancSign('FrancSign', 'Franc Sign', 'an optional tech label', 'an optional description')
@enduml
```

